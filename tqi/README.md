# Asite — The Quiet Instrument

Asite's Direction 02 visual language (codename **The Quiet Instrument**), including the **Asite Intelligence** (AI) layer. Everything is plain HTML/CSS/SVG — no build step, no dependencies. Unzip and **double-click `index.html`** (it renders offline; fonts are bundled).

> Calm, precise, engineered. A narrow monochrome surface ramp, one rationed Survey-Orange accent, instrument-panel density. Depth from 1px borders and light — never from fills.

---

## Start here

| Goal | Open |
|---|---|
| Learn the design language | **`index.html`** (the guide) |
| See the AI / Intelligence layer | **`ai-hub.html`** |
| See it as a product | `screens.html` |
| See it as a website / deck | `web.html` · `slides.html` |
| Grab assets (icons, logo, motifs…) | **`library/index.html`** |
| Install the rules into AI tooling | `brand/asite-tqi.skill` |
| Read the rules / tokens | `brand/README.md` · `brand/tokens.json` |

Every page has a **Dark / Light** toggle (bottom-left). Light versions live in `light/`.

---

## What's in here

```
asite-tqi/
├─ README.md            ← this file
├─ index.html           ← THE LANGUAGE GUIDE (logo, colour, type, icons, illustration, motifs, components…)
├─ screens.html         ← Product — real product interfaces (incl. the Asite Intelligence blob)
├─ web.html             ← Website — marketing sections
├─ slides.html          ← Slides — the deck system
├─ ai-hub.html          ← AI HUB — the Intelligence layer (mark, run states, side-chat + Coworker, voice, do/don't)
├─ landing.html         ← a landing page "in the wild"
├─ tokens.css           ← the CSS source of truth (variables + bundled @font-face)
│
├─ light/               ← the light-theme twin of every page above (+ its own tokens.css)
│
├─ assets/
│  ├─ fonts/            ← bundled fonts: Cornerstone (display), Inter (UI), JetBrains Mono (mono)
│  ├─ logos/            ← logo source files used by the pages
│  └─ shots/            ← imagery / screenshots referenced by the pages
│
├─ brand/              ← THE HAND-OFF PACKAGE (give this to engineers / AI tooling)
│  ├─ README.md         ← how to use the system; the locked rules
│  ├─ tokens.json       ← machine-readable tokens (dark + light) + AI-layer semantics
│  ├─ asite-tqi.skill   ← installable skill for Claude Code / AI agents (on-brand by default)
│  └─ asite-tqi/        ← the unpacked skill (SKILL.md + tokens.css + tokens.json)
│
└─ library/            ← THE ASSET LIBRARY (every reusable graphic, SVG + PNG, + CSS)
   ├─ index.html        ← browse everything
   ├─ README.md         ← how to use the assets
   ├─ css/              ← tokens.css · components.css · ai.css  (drop-in component styles)
   ├─ logo/             ← the mark (SVG, currentColor + two-tone) + png/
   ├─ icons/            ← icons.svg (sprite) + 24 individual SVGs + png/
   ├─ motifs/           ← 9 motif SVGs (Beam, Setting-out Cross, Pulse, Constellation…) + png/
   ├─ illustrations/    ← 6 illustration SVGs (the 4 modes + 2 Intelligence) + png/
   └─ ai/               ← spark, spark-line, orb (SVG) + png/
```

---

## The five rules (full detail in `brand/`)

1. **Orange is the only accent** — used with restraint; never wallpaper. Status + banners are functional colours, not accents. **Primary action is theme-specific:** filled orange in dark, **ink** in light (orange becomes the accent only).
2. **Depth from borders + light**, never competing fills.
3. **Status is an 8px dot + text** — no filled pills.
4. **Cornerstone for hero/slide titles only**; Inter for everything; JetBrains Mono for figures.
5. **No edge bars (compulsory)** — never a thick coloured bar/outline on the side of a component; selection/active is a soft intent wash.

---

## Notes

- **Offline:** everything works on `file://`. The only network reference is a Google Fonts link that falls back to the bundled fonts if offline.
- **Source of truth:** `tokens.css` (CSS) and `brand/tokens.json` (JSON) hold the real values — never hard-code a value when a token exists.
- **Light vs dark:** one theme per surface. The `light/` folder mirrors the dark pages; toggles cross-link between them.

— Asite Design · The Quiet Instrument
