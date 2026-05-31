/* ==========================================================================
   Icons — single consistent line pack (Lucide, ISC license), 24×24, stroke.
   The few clipper/razor glyphs Lucide lacks are drawn in the same 2px-round
   style so the whole set stays visually uniform.
   Usage: icon("scissors") -> "<svg ...>...</svg>"
   ========================================================================== */
(function () {
  "use strict";

  const P = {
    scissors:
      '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
    // clipper (hair machine) — custom, matches stroke style
    clipper:
      '<path d="M4 3v4"/><path d="M8 3v4"/><path d="M12 3v4"/><path d="M16 3v4"/><rect x="3" y="7" width="14" height="5" rx="1.5"/><path d="M9 12v2a2 2 0 0 0 2 2h6a4 4 0 0 1 4 4v1"/>',
    // razor / straight razor — custom
    razor:
      '<path d="M3 21 14 10"/><path d="M14 10c3-3 5-4 7-4 0 2-1 4-4 7l-3-3Z"/><path d="m4 20 1 1"/>',
    target:
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    layers:
      '<path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 12 10 5 10-5"/><path d="m2 17 10 5 10-5"/>',
    coffee:
      '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Z"/><path d="M17 9h1a3 3 0 0 1 0 6h-1"/>',
    sparkles:
      '<path d="M12 3 13.9 8.1 19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"/><path d="M19 15l.7 1.8L21.5 17.5 19.7 18.2 19 20l-.7-1.8L16.5 17.5 18.3 16.8 19 15Z"/>',
    pin:
      '<path d="M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    instagram:
      '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowLeft: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    globe:
      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    calendar:
      '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    play: '<path d="m6 4 14 8-14 8V4Z"/>',
    filter: '<path d="M3 4h18l-7 8v6l-4 2v-8L3 4Z"/>',
    map:
      '<path d="m9 4 6 2 6-2v14l-6 2-6-2-6 2V6l6-2Z"/><path d="M9 4v14"/><path d="M15 6v14"/>',
  };

  function icon(name, cls) {
    const body = P[name] || "";
    return (
      '<svg class="ico' +
      (cls ? " " + cls : "") +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      body +
      "</svg>"
    );
  }

  window.CuttanaIcon = icon;
})();
