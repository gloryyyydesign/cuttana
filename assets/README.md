# Assets

Drop the real media files here using the exact names below. The site references
these paths directly, and every one has a graceful CSS/SVG fallback so the
layout never breaks if a file is missing.

## Brand
- `logo.png` — the neon scissors logo (image 3). Transparent PNG preferred.
- `logo.svg` — optional vector version (used if present, falls back to png).
- `og-image.jpg` — 1200×630 social share preview.
- `favicon.png` — 512×512 square icon.

## Hero (`assets/hero/`)
- `hero.mp4` — optional looping background video (muted, ~10s, 1080p).
- `hero-poster.jpg` — poster frame / fallback still for the video.

## Team (`assets/team/`)
Square portraits, ~800×800, `.jpg`:
- `nazar.jpg`
- `polina.jpg`
- `sergey.jpg`
- `tatiana.jpg`

## Clients / cases (`assets/clients/`)
Haircut result photos, portrait 4:5 works best, `.jpg`.
Names must match the `image` field in `js/data.js`. Defaults expected:
- `case-01.jpg` … `case-08.jpg`

## Location (`assets/location/`)
- `location.mp4` — short walking/orientation clip showing how to find the door.
- `location-poster.jpg` — poster frame for the video.

---
After adding files, nothing else is needed — just refresh the page.
If you add more client cases, append entries to the `clients` array in
`js/data.js` (set `barber`, `services`, `name`, `desc`, and `image`).
