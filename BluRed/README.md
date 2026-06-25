# Asite — Marketing Brand v4.0

A full TQI-style site applying Marketing's **Brand Guidelines v4.0** (June 2026):
navy ground, one **Neo Red** signal, **Aqua** for intelligence, **Sofia Pro** type,
and a geometry drawn from the cube mark.

## Start here

Open **`index.html`** — the visual-language home and hub for everything below.

## Pages (mirrors the TQI structure)

| File | Nav tab | What it is |
|------|---------|-----------|
| `index.html` | **Language** | Visual-language home — palette, the signal, type, logo, geometry, components preview |
| `screens.html` | **Product** | Six assembled product interfaces (register, files, aMail, analytics, first-run, document canvas) |
| `web.html` | **Website** | Web-section toolkit — hero variants, proof, features, showcase, numbers, quote, CTA, footer |
| `landing.html` | *(behind Website)* | The live marketing landing, assembled from the sections |
| `slides.html` | **Slides** | Presentation templates — title, divider, report, product demo, quote, close |
| `ai-hub.html` | **AI Hub** | The Asite Intelligence layer — spark & orb, behaviour, states, conversation, voice |
| `library/index.html` | — | Product component library (buttons, forms, status, tables, AI surfaces) |
| `product/app.html` | — | Full-screen product interface |

Five-tab nav on every style-guide page, in TQI order:
**Language · Product · Website · Slides · AI Hub** (aqua spark on AI Hub).

## Foundations

- **`tokens.css`** — v4.0 palette, Sofia Pro `@font-face`, type scale, spacing, cube radii (for the navy marketing/style-guide pages).
- **`product/product.css`** — product component library (light workspace + navy rail).
- **`product/screens.css`** — self-contained, scoped (`.scr`) screen kit. Embeds cleanly into any page; powers the real interfaces shown in `landing.html`, `web.html`, `slides.html`.

## Brand rules baked in

- **Navy holds, red leads, aqua thinks.** One Neo Red `#ff3131` per view (primary action / live alert / the mark). Aqua `#33c7b7` only for Intelligence & verification.
- **Sofia Pro** everywhere; **JetBrains Mono** for data, references, and labels.
- **Geometry from the cube** — rounded square, forward arrow, 2×2 grid; corner radius 1:5.
- **Status = dot + text**, never a filled pill. Depth from borders & light, not competing fills.

## Assets

- `assets/asite-logo-white.png`, `assets/asite-logo-primary.png` — the real mark.
- `assets/fonts/` — Sofia Pro OTFs.
- `assets/logos/` — client logos. `assets/shots-light/` — original reference screenshots (now superseded by the live `.scr` interfaces).

## Notes

- Built and validated statically (palette fidelity, link integrity, contrast, token coverage); not screenshot-verified — open the pages to review rendering.
- Source for the brand: `~/Downloads/Asite_Brand_Guidelines.html` (Marketing v4.0).
