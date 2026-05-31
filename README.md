# Cuttana Barbershop — landing site

Elegant white / black / green landing page for **Cuttana**, a men's barbershop
in Warsaw. Static site (no build step), trilingual (RU / PL / EN), works on any
static host.

## Pages
- `index.html` — landing: hero (animated logo + particle field), services, why us,
  work preview, team (with price-list overlay per barber), booking, location,
  Instagram, footer.
- `clients.html` — full gallery of work with **Barber** and **Service** filters.
  Deep-linkable: `clients.html?barber=sergey` or `?service=fade`. The team
  cards' "My work" button links here with the barber pre-selected.

## Structure
```
index.html / clients.html   markup
css/style.css               design system & styles
js/data.js                  ALL content + RU/PL/EN translations (edit here)
js/i18n.js                  language detection, persistence, DOM translation
js/icons.js                 single consistent SVG icon pack (Lucide, ISC)
js/main.js                  landing rendering + hero animation + modal
js/clients.js               gallery filtering
assets/                     media (see assets/README.md for required files)
```

## Languages
Default is Russian. The switcher (RU/PL/EN, top-right) persists the choice in
`localStorage` and also respects a `?lang=pl` URL parameter and the browser
language. All copy lives in `js/data.js`.

## Editing content
- **Text / translations:** `js/data.js` → `i18n` (UI strings) and the
  `services`, `why`, `team`, `clients` arrays (each text field is
  `{ ru, pl, en }`).
- **Prices:** `js/data.js` → `priceTiers` (`basic` = Nazar/Tatiana,
  `premium` = Sergey/Polina). Each barber points to a tier via its `tier` field.
- **New client cases:** append to the `clients` array (`barber`, `services`,
  `name`, `desc`, `image`) — they appear in the gallery and feed the filters.
- **Media:** drop files into `assets/` using the names in `assets/README.md`.
  Every image/video has a graceful fallback, so missing files never break layout.

## Links
- Booking: Booksy — https://booksy.com/pl-pl/dl/show-business/137479
- Instagram: https://www.instagram.com/cuttana_barbershop
- Address: Zwycięców 13, Warszawa, Polska

## Running locally
It's plain static files. Open `index.html`, or serve the folder:
```
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy
Upload the repository root to any static host (GitHub Pages, Netlify, Vercel,
Cloudflare Pages, S3, nginx). No build, no dependencies.
