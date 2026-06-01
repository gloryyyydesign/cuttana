/* ==========================================================================
   Cuttana — landing page behaviour
   Renders dynamic sections, wires the hero animation, nav, modal and links.
   ========================================================================== */
(function () {
  "use strict";

  const C = window.CUTTANA;
  const I = window.I18N;
  const icon = window.CuttanaIcon;
  const $ = (sel, root) => (root || document).querySelector(sel);

  /* ---- Static links ----------------------------------------------------- */
  function wireLinks() {
    const map = {
      booksyBtn: C.links.booksy,
      mapsBtn: C.links.maps,
      igBtn: C.links.instagram,
      footMaps: C.links.maps,
      footIg: C.links.instagram,
      footBooksy: C.links.booksy,
    };
    Object.entries(map).forEach(([id, href]) => {
      const el = document.getElementById(id);
      if (el) el.href = href;
    });
    const map2 = $("#locMap");
    if (map2) map2.src = C.links.mapsEmbed;
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---- Services --------------------------------------------------------- */
  function renderServices() {
    const grid = $("#servicesGrid");
    if (!grid) return;
    grid.innerHTML = C.services
      .map(
        (s, i) => `
      <article class="scard reveal" style="transition-delay:${i * 80}ms">
        <span class="scard__num">0${i + 1}</span>
        <div class="scard__icon">${icon(s.icon)}</div>
        <h3>${s.name}</h3>
        <p>${I.pick(s.desc)}</p>
      </article>`
      )
      .join("");
  }

  /* ---- Why us ----------------------------------------------------------- */
  function renderWhy() {
    const grid = $("#whyGrid");
    if (!grid) return;
    grid.innerHTML = C.why
      .map(
        (w, i) => `
      <article class="wcard reveal" style="transition-delay:${i * 80}ms">
        <div class="wcard__icon">${icon(w.icon)}</div>
        <h3>${I.pick(w.title)}</h3>
        <p>${I.pick(w.desc)}</p>
      </article>`
      )
      .join("");
  }

  /* ---- Cases (first two on landing) ------------------------------------- */
  function serviceLabel(key) {
    const s = C.services.find((x) => x.key === key);
    return s ? s.name : key;
  }
  function barberName(key) {
    const b = C.team.find((x) => x.key === key);
    return b ? I.pick(b.name) : key;
  }
  function mono(name) {
    return (name || "?").trim().charAt(0).toUpperCase();
  }

  function caseCard(c, i) {
    const name = I.pick(c.name);
    const tags = c.services
      .map((k) => `<span class="chip">${serviceLabel(k)}</span>`)
      .join("");
    return `
      <article class="ccard reveal" style="transition-delay:${(i || 0) * 90}ms">
        <div class="ccard__media" data-mono="${mono(name)}">
          <img src="${c.image}" alt="${name} — Cuttana" loading="lazy"
               style="object-position:${c.imgPos || "center"}"
               onerror="this.onerror=null;this.src='https://picsum.photos/seed/${c.id}/800/1000'" />
          <div class="ccard__tags">${tags}</div>
        </div>
        <div class="ccard__body">
          <div class="ccard__name">${name}</div>
          <p class="ccard__desc">${I.pick(c.desc)}</p>
          <div class="ccard__by">
            ${icon("scissors")}
            <span>${I.t("work.madeBy")} — <b>${barberName(c.barber)}</b></span>
          </div>
        </div>
      </article>`;
  }

  function renderCases() {
    const grid = $("#casesGrid");
    if (!grid) return;
    grid.innerHTML = C.clients.slice(0, 3).map(caseCard).join("");
  }

  /* ---- Team ------------------------------------------------------------- */
  function renderTeam() {
    const grid = $("#teamGrid");
    if (!grid) return;
    grid.innerHTML = C.team
      .map((b, idx) => {
        const pros = I.pick(b.pros)
          .map(
            (p) =>
              `<li class="tcard__li">${icon("check")}<span>${p}</span></li>`
          )
          .join("");
        const cons = I.pick(b.cons)
          .map(
            (p) =>
              `<li class="tcard__li con">${icon("arrowRight")}<span>${p}</span></li>`
          )
          .join("");
        return `
        <article class="tcard reveal" style="transition-delay:${(idx % 2) * 110}ms">
          <div class="tcard__photo" data-mono="${mono(I.pick(b.name))}">
            <img src="${b.image}" alt="${I.pick(b.name)} — Cuttana" loading="lazy"
                 style="object-position:${b.imgPos || "center"}"
                 onerror="this.onerror=null;this.src='https://picsum.photos/seed/${b.key}/800/800'" />
          </div>
          <div class="tcard__body">
            <span class="tcard__rank">${I.pick(b.rank)}</span>
            <h3 class="tcard__name">${I.pick(b.name)}</h3>
            <div class="tcard__list-title">${I.t("team.pros")}</div>
            <ul class="tcard__list">${pros}</ul>
            <div class="tcard__list-title cons">${I.t("team.cons")}</div>
            <ul class="tcard__list">${cons}</ul>
            <div class="tcard__actions">
              <button class="btn btn--ghost" data-price="${b.key}">${I.t("team.price")}</button>
              <a class="btn btn--dark" href="clients.html?barber=${b.key}">${I.t("team.works")}</a>
            </div>
          </div>
        </article>`;
      })
      .join("");
  }

  /* ---- Pricelist modal -------------------------------------------------- */
  const modal = $("#priceModal");
  const box = $("#priceBox");

  function priceRow(item) {
    return `
      <div class="price-row">
        <span class="price-row__name">${item.name}</span>
        <span class="price-row__dots"></span>
        <span class="price-row__price">${item.price} ${C.currency}</span>
      </div>`;
  }

  function openPrice(key) {
    const barber = C.team.find((b) => b.key === key);
    if (!barber || !box) return;
    const tier = C.priceTiers[barber.tier];
    box.innerHTML = `
      <button class="modal__close" data-close aria-label="${I.t("price.close")}">${icon("x")}</button>
      <span class="modal__eyebrow">${I.pick(barber.rank)}</span>
      <h3 class="modal__title">${I.pick(barber.name)} — ${I.t("price.heading")}</h3>
      ${tier.services.map(priceRow).join("")}
      <div class="price-group-title">${I.t("price.combos")}</div>
      ${tier.combos.map(priceRow).join("")}
      <a class="btn btn--primary btn--block" href="${C.links.booksy}" target="_blank" rel="noopener" style="margin-top:24px">
        ${I.t("book.cta")}
      </a>`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closePrice() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-price]");
    if (trigger) {
      openPrice(trigger.getAttribute("data-price"));
      return;
    }
    if (e.target.closest("[data-close]")) closePrice();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closePrice();
  });

  /* ---- Header scroll + mobile nav --------------------------------------- */
  function initNav() {
    const header = $("#header");
    const nav = $("#nav");
    const toggle = $("#navToggle");

    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle) {
      toggle.innerHTML = icon("menu");
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.innerHTML = icon(open ? "x" : "menu");
        toggle.setAttribute("aria-expanded", String(open));
      });
      nav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          nav.classList.remove("open");
          toggle.innerHTML = icon("menu");
          toggle.setAttribute("aria-expanded", "false");
        })
      );
    }
  }

  /* ---- Scroll reveal ---------------------------------------------------- */
  let revealObserver;
  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            revealObserver.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    refreshReveal();
  }
  function refreshReveal() {
    if (!revealObserver) return;
    document
      .querySelectorAll(".reveal:not(.in)")
      .forEach((el) => revealObserver.observe(el));
  }

  /* ---- Hero particle field ---------------------------------------------- */
  function initHeroCanvas() {
    const canvas = $("#heroCanvas");
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    let w, h, dots, raf;
    const COUNT = window.innerWidth < 700 ? 34 : 70;

    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }
    function seed() {
      dots = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.6 + 0.4) * devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        a: Math.random() * 0.5 + 0.15,
      }));
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(61,255,143," + d.a + ")";
        ctx.fill();
        // link nearby dots
        for (let j = i + 1; j < dots.length; j++) {
          const o = dots[j];
          const dx = d.x - o.x,
            dy = d.y - o.y;
          const dist = dx * dx + dy * dy;
          const max = 120 * devicePixelRatio * (120 * devicePixelRatio);
          if (dist < max) {
            ctx.strokeStyle =
              "rgba(61,255,143," + (1 - dist / max) * 0.12 + ")";
            ctx.lineWidth = devicePixelRatio * 0.6;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }
    resize();
    seed();
    frame();
    let t;
    window.addEventListener("resize", () => {
      clearTimeout(t);
      t = setTimeout(() => {
        cancelAnimationFrame(raf);
        resize();
        seed();
        frame();
      }, 200);
    });
    // pause when hero off-screen
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((e) => {
        if (e[0].isIntersecting) {
          if (!raf) frame();
        } else {
          cancelAnimationFrame(raf);
          raf = null;
        }
      }).observe(canvas);
    }
  }

  /* ---- Re-render on language change ------------------------------------- */
  function renderAll() {
    renderServices();
    renderWhy();
    renderCases();
    renderTeam();
    refreshReveal();
  }

  function init() {
    wireLinks();
    initNav();
    initHeroCanvas();
    renderAll();
    initReveal();
    I.onChange(() => {
      renderAll();
      I.apply(); // re-translate freshly injected static nodes if any
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
