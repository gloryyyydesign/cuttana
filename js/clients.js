/* ==========================================================================
   Cuttana — clients / cases gallery page
   Two filters (barber, service) with deep-linking via ?barber= & ?service=.
   ========================================================================== */
(function () {
  "use strict";

  const C = window.CUTTANA;
  const I = window.I18N;
  const icon = window.CuttanaIcon;
  const $ = (s, r) => (r || document).querySelector(s);

  // Active filter state — "all" means no constraint.
  const params = new URLSearchParams(location.search);
  const state = {
    barber: validBarber(params.get("barber")) || "all",
    service: validService(params.get("service")) || "all",
  };

  function validBarber(k) {
    return C.team.some((b) => b.key === k) ? k : null;
  }
  function validService(k) {
    return C.services.some((s) => s.key === k) ? k : null;
  }
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

  /* ---- Filter chips ----------------------------------------------------- */
  function renderFilters() {
    const bWrap = $("#filterBarber");
    const sWrap = $("#filterService");

    const allLabel = I.t("clients.all");
    bWrap.innerHTML =
      chip("all", allLabel, state.barber === "all", "barber") +
      C.team
        .map((b) =>
          chip(b.key, I.pick(b.name), state.barber === b.key, "barber")
        )
        .join("");

    sWrap.innerHTML =
      chip("all", allLabel, state.service === "all", "service") +
      C.services
        .map((s) => chip(s.key, s.name, state.service === s.key, "service"))
        .join("");
  }

  function chip(value, label, active, group) {
    return `<button class="filter__btn${active ? " is-active" : ""}"
      data-group="${group}" data-value="${value}">${label}</button>`;
  }

  /* ---- Cards ------------------------------------------------------------ */
  function caseCard(c, i) {
    const name = I.pick(c.name);
    const tags = c.services
      .map((k) => `<span class="chip">${serviceLabel(k)}</span>`)
      .join("");
    return `
      <article class="ccard card-pop" style="animation-delay:${(i || 0) * 55}ms">
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

  function filtered() {
    return C.clients.filter(
      (c) =>
        (state.barber === "all" || c.barber === state.barber) &&
        (state.service === "all" || c.services.includes(state.service))
    );
  }

  function renderResults() {
    const grid = $("#casesGrid");
    const empty = $("#emptyState");
    const list = filtered();
    grid.innerHTML = list.map((c, i) => caseCard(c, i)).join("");
    empty.style.display = list.length ? "none" : "block";
    $("#resultCount").textContent = list.length;
  }

  /* ---- URL sync --------------------------------------------------------- */
  function syncUrl() {
    const p = new URLSearchParams();
    if (state.barber !== "all") p.set("barber", state.barber);
    if (state.service !== "all") p.set("service", state.service);
    const qs = p.toString();
    history.replaceState(null, "", location.pathname + (qs ? "?" + qs : ""));
  }

  function renderAll() {
    renderFilters();
    renderResults();
  }

  function init() {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();

    renderAll();

    // Filter clicks
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter__btn");
      if (!btn) return;
      state[btn.getAttribute("data-group")] = btn.getAttribute("data-value");
      syncUrl();
      renderAll();
    });

    // Mobile nav toggle
    const nav = $("#nav");
    const toggle = $("#navToggle");
    if (toggle) {
      toggle.innerHTML = icon("menu");
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.innerHTML = icon(open ? "x" : "menu");
        toggle.setAttribute("aria-expanded", String(open));
      });
    }

    I.onChange(() => {
      renderAll();
      I.apply();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
