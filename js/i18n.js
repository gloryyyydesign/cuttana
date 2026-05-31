/* ==========================================================================
   i18n engine — language detection, persistence, DOM application.
   Exposes window.I18N with: lang, t(key), set(lang), onChange(fn), apply().
   ========================================================================== */
(function () {
  "use strict";

  const C = window.CUTTANA;
  const STORE_KEY = "cuttana.lang";
  const subscribers = [];

  function detect() {
    const url = new URLSearchParams(location.search).get("lang");
    if (url && C.langs.includes(url)) return url;
    const saved = localStorage.getItem(STORE_KEY);
    if (saved && C.langs.includes(saved)) return saved;
    const nav = (navigator.language || "").slice(0, 2).toLowerCase();
    if (C.langs.includes(nav)) return nav;
    return C.defaultLang;
  }

  let current = detect();

  function t(key) {
    const dict = C.i18n[current] || C.i18n[C.defaultLang];
    return (dict && dict[key]) != null ? dict[key] : key;
  }

  /** Pick the localized value from a {ru,pl,en} object. */
  function pick(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[current] != null ? obj[current] : obj[C.defaultLang];
  }

  function apply(root) {
    const scope = root || document;

    // Text content
    scope.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    // Attribute translations: data-i18n-attr="placeholder:key;aria-label:key2"
    scope.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr")
        .split(";")
        .forEach((pair) => {
          const [attr, key] = pair.split(":");
          if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
        });
    });

    // <html lang> + document title + meta description
    document.documentElement.lang = current;
    const title = t("meta.title");
    if (title && title !== "meta.title") document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta.desc"));

    // Reflect active state on language switches
    scope.querySelectorAll("[data-lang]").forEach((el) => {
      el.classList.toggle("is-active", el.getAttribute("data-lang") === current);
      el.setAttribute("aria-pressed", String(el.getAttribute("data-lang") === current));
    });
  }

  function set(lang) {
    if (!C.langs.includes(lang) || lang === current) {
      if (lang === current) apply();
      return;
    }
    current = lang;
    try {
      localStorage.setItem(STORE_KEY, lang);
    } catch (e) {}
    apply();
    subscribers.forEach((fn) => fn(current));
  }

  function onChange(fn) {
    subscribers.push(fn);
  }

  window.I18N = {
    get lang() {
      return current;
    },
    t,
    pick,
    set,
    apply,
    onChange,
  };

  // Wire up any language switch buttons present in the DOM.
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-lang]");
    if (btn) {
      e.preventDefault();
      set(btn.getAttribute("data-lang"));
    }
  });

  document.addEventListener("DOMContentLoaded", () => apply());
})();
