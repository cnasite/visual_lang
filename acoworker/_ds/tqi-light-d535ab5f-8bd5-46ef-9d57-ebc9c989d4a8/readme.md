# Asite — The Quiet Instrument · Design System

A complete, compiler-readable design system for **Asite**, recreated in the *Quiet Instrument* light idiom: a paper-light monochrome surface, instrument-panel density, and one rationed orange signal. Use it to generate well-branded Asite interfaces, marketing pages, decks, and assets — for production or for throwaway prototypes.

> **Namespace:** components are exposed at `window.AsiteTheQuietInstrument_d535ab` in `@dsCard` HTML.

---

## 1 · What Asite is

**Asite** is a cloud **Common Data Environment (CDE)** for the construction and built-asset industry — the platform of record for everything a project produces. It connects the design, build, and operational phases of an asset so that every drawing revision, RFI, submittal, and field observation lives in **one versioned, auditable register**, from bid to handover and beyond.

- **Category:** Defining the CDE category since **2001**; trusted by **84,000+ companies**; aligned to **ISO 19650**, ISO 27001, SOC 2.
- **Core idea — "the register":** a single source of truth. The product's whole personality is *information held to tolerance* — software that earns trust by never raising its voice.
- **Audience:** Information Managers, document controllers, design coordinators, project directors, and site teams on major building & infrastructure programmes (the demo brand throughout is *Meridian Construction Group · Meridian Tower C*).

### Products represented (the surfaces)
| Surface | What it is |
|---|---|
| **CDE app** | The product: onboarding, the "morning briefing" dashboard, Files, aMail, Convert, 3D Repo, Playbook, Asite Intelligence (✦). Recreated in `ui_kits/product/`. |
| **Marketing website** | "Build without limits" landing page. Recreated in `ui_kits/website/`. |
| **Slides** | A 9-type presentation system (QPR / board decks). Sampled in `slides/`. |

### Sources
This system was rebuilt from an attached reference codebase — a hand-built brand/style-guide repo named **`tqi_light/`** ("The Quiet Instrument", light mode):
- `tqi_light/index.html` — the visual-language guide (logo, color, type, icons, illustration, components).
- `tqi_light/landing.html` — the marketing landing page (basis for `ui_kits/website/`).
- `tqi_light/screens.html` — product interface screens (basis for `ui_kits/product/`).
- `tqi_light/slides.html` — the slide system (basis for `slides/`).
- `tqi_light/tokens.css` — the original token sheet (re-expressed under `tokens/`).
- `tqi_light/assets/` — fonts, customer logos, product screenshots (copied into `assets/`).

No public Figma or live URL was provided; the reference repo is the single source of truth.

---

## 2 · Content fundamentals — how Asite writes

The voice is **calm, precise, and load-bearing** — a quiet instrument, never a salesperson. It borrows the vocabulary of the construction site and treats it literally.

- **Tone:** understated and confident. Short declaratives. The product "holds the line"; it does not "supercharge", "revolutionise", or "unlock". *"No shouting. Just readings."*
- **Person:** addresses the user as **you** ("what needs you", "bring the site with you"); the company is **we** sparingly ("we treat it that way"). Never "I".
- **Casing:** **sentence case** everywhere in UI and prose. Cornerstone display titles are **UPPERCASE** (a typographic choice, not a copy one). Mono labels and eyebrows are **UPPERCASE** with wide tracking (`DEFINING THE CDE CATEGORY SINCE 2001`).
- **Punctuation as signature:** a single **orange full stop** terminates hero statements — *"Built to hold."*, *"Built to hold<span style="color">.</span>"*. One per statement.
- **The site metaphor, used precisely:** *register, hold point, setting-out mark, pour, slab, tolerance, the beam, ranging pole, federated model, chainage.* These are the nouns. A blocked decision is a **hold point**; a finished thing is **poured/solid**; a planned thing is **dashed/formwork up**.
- **Numbers are the argument:** specific, sourced figures over adjectives — *"70% saved on T5 tendering packages"*, *"2,847 filed this quarter"*, *"±0.5mm"*, *"REV C03"*. Engineering precision is the proof.
- **Microcopy:** mono-set metadata pairs facts with a separator dot — `WED 11 JUN · WK 24`, `OCR · 97% CONFIDENCE`, `MCG-TWRC-STR-DWG-0412`.
- **Emoji:** **never.** Not in product, marketing, or decks. The one symbolic glyph is **✦** for Asite Intelligence; status uses colored dots, not emoji.
- **Vibe:** the morning briefing, not the dashboard. A surveyor's confidence. "Readings, not reports."

**Examples to imitate:** "One platform for everything you build." · "The register held its tolerance." · "Paper, made native." · "Ownership is worn, not assigned." · "Two decisions block the next pour. Nothing moves until they're made."

---

## 3 · Visual foundations

The idiom is **Linear-school software craft**: depth from borders and light, never from heavy fills or drop-shadow theatrics. Everything is monochrome until a single decision earns the orange.

### Color
- **Surfaces** — a four-step, paper-light, cool ramp separated by single-digit value steps: `--bg-0` canvas `#F6F6F4`, `--bg-1` chrome `#FFFFFF`, `--bg-2` card `#FBFBFA`, `--bg-3` raised/hover `#EEEEEB`.
- **Text** — three cool grays, hierarchy by **value not weight**: `--text-1 #16181C`, `--text-2 #5A5F66`, `--text-3 #90949B`.
- **The intent — Survey Orange `#E8501C`.** The *one* chromatic accent, **rationed to a single primary action or focus per screen**. It is the color of decisions on site (the surveyor's cap, the setting-out cross, the live beam). `--intent-bright #FF5C26` for hover/on-dark, `--intent-deep #C8431A` for pressed/iso-shaded faces, `--intent-wash` (10%) for selection.
- **Status** — desaturated and **dot-first**: an 8px dot + plain text, *never* a filled pill or tinted row. done/progress/review/blocked/backlog.

### Backgrounds & imagery
- Default background is the flat `--bg-0` canvas. **No gradients** anywhere except one: **`--aurora`**, a faint radial "ember" wash (≤7% opacity), permitted only on **hero fields, onboarding, and title/close slides**.
- **Photography** is warm and editorial — cranes, sites, project teams — used in case studies and the product-tour reel, always under a protection gradient fading to the canvas (`linear-gradient(transparent, var(--bg-1))`). Slight `contrast(1.02)` / brightness lift on hover.
- **Illustration** is the icon grammar at scale: four grays + one orange, on two axes (Line/Filled × Elevation/Isometry). Poured work is **solid**, planned work is **dashed**, the orange is the **one live point** per scene. Never mix modes in one composition.

### Type
- **Cornerstone** (blocky, load-bearing display) — **large titles only**: heroes, slide titles, covers. Set UPPERCASE, +1.5% tracking.
- **Inter Variable** — the workhorse for h1→body at medium weights (400/500/560/590), tight negative tracking (−1.2% on headings). Instrument-panel density.
- **JetBrains Mono** — engineering alphanumerics only: references, revisions, tolerances, coordinates, eyebrows. Wide tracking, tabular figures.
- Substitutes: none required — all three fonts are bundled (`tokens/fonts.css`). Cornerstone falls back to Inter; JetBrains Mono to SF Mono.

### Geometry, spacing, depth
- **Radii** — soft machined-plastic, nothing sharp: 6 / 8 / 12 / 16px (+ 999 pill).
- **Spacing** — an 8px base scale (4, 8, 12, 16, 24, 32, 48, 64, 96).
- **Borders & shadows** — the system's depth language is the **`--inset` 1px hairline** (`inset 0 0 0 1px rgba(22,24,28,.07)`) plus two soft shadows: `--shadow-card` for cards, `--shadow-pop` for popovers/dialogs. Cards = card surface (`--bg-2`) + inset, optionally + shadow when raised. No colored left-border accents, no chunky outlines.
- **Cards** look like: rounded (lg), `--bg-2` fill, inset hairline, optional soft shadow; the **selected** state takes the intent wash + a 1px orange ring. Glass/blur is used only on sticky nav and floating docks (`backdrop-filter: blur(14–20px)` over translucent white).

### Motion & states
- **Motion is instant and weightless** — 50–150ms, `cubic-bezier(0.25,0.1,0.25,1)`, fade + a 2px rise. No bounces, no long eases, no infinite decorative loops (the one breathing animation is the AI orb's glow).
- **Hover:** surfaces lighten toward `--bg-3` (or `--bg-2`); ghost text darkens text-1; interactive cards rise 2px and gain a soft shadow. Primary button → `--intent-bright`.
- **Press:** primary button → `--intent-deep` (darker, not shrink).
- **Focus:** the **orange focus ring** `--intent-ring` (3px 10% wash) + orange border — "the live beam landing". This is one of the few sanctioned uses of the accent.
- **Transparency/blur:** reserved for chrome that floats over content (nav, command-palette dim, docks). Body content stays opaque.

### Layout rules
- Fixed elements: sticky translucent nav; a floating AI orb bottom-right; command palette centered over a dimmed canvas. App shell is a fixed 220px sidebar + fluid main.
- Content max-width ~1100–1240px, generous `--space-24` section rhythm on marketing pages; dense instrument-panel padding in product.

---

## 4 · Iconography

- **System:** a **bespoke 20px-grid line set** drawn with a **1.5px stroke, rounded caps & joins** — the same pen as the illustrations. Icons live as inline SVG (see `guidelines/brand-icons.html` and the kits). They **inherit text color** — gray at rest, text-1 when active — and **never carry the accent**, with one deliberate exception: the **hold-point diamond**, which is a signal by definition and so is drawn in orange.
- **No icon font, no sprite** in the source — icons are hand-placed inline `<path>`s on a 20×20 viewBox. When you need an icon not in the set, draw it to match (1.5px stroke, rounded, 20px grid) or substitute the closest **Lucide** glyph (same weight/style) and flag it.
- **Unicode as glyphs:** the product sidebar uses a few monospace unicode marks for nav (⌂ ◑ ▤ ≡ ⇄ ✦ ◍ ⚠) at instrument scale — acceptable in dense chrome.
- **Emoji:** never (see Content fundamentals).
- **Brand mark:** the Asite "a"-arrow — monochrome body, the one orange arrow. Available as `assets/asite-mark.svg` and as the `<Mark>` component. Customer logos (`assets/logos/*-mono.png`) appear at ~24px, ~55% opacity, in proof strips.

---

## 5 · Index / manifest

### Root
- **`styles.css`** — the entry point consumers link. `@import`s only.
- **`tokens/`** — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css`.
- **`assets/`** — `asite-mark.svg`, `fonts/` (Cornerstone, Inter ×3, JetBrains Mono ×2), `logos/` (12 customer logos, color + mono), `shots/` (4 product screenshots).
- **`SKILL.md`** — Agent-Skill manifest for downloadable use.

### Components — `window.AsiteTheQuietInstrument_d535ab`
| Group | Components |
|---|---|
| `components/core/` | **Button**, **Card**, **StatusDot**, **Chip**, **Kbd**, **Avatar**, **Mark** |
| `components/forms/` | **Input**, **Select**, **Toggle**, **Choice** (checkbox/radio), **SegmentedControl** |

Each has a `.jsx` (impl), `.d.ts` (props contract), `.prompt.md` (what/when + example). Card HTML demos live in each directory.

### Foundation cards — Design System tab
`guidelines/` holds specimen cards grouped **Colors** (surfaces, text, intent, status, aurora), **Type** (display, headings, body, mono), **Spacing** (radii, scale, depth), **Brand** (mark, icons, customer logos).

### UI kits & slides
- **`ui_kits/product/`** — interactive CDE app (onboarding → briefing → files → aMail, ⌘K palette, AI orb). *Starting point.*
- **`ui_kits/website/`** — marketing landing recreation. *Starting point.*
- **`slides/`** — six slide types (title, divider/hold-point, report, demo, illustrated, close) + `slides.css`.

---

## 6 · Working with this system
- **Ration the orange.** One primary action or focus per screen. If a layout needs more color, the layout is wrong.
- **Depth = borders + light.** Reach for `--inset` and the shadow tokens, not fills.
- **Status is a dot + text.** Never a filled pill.
- **Cornerstone is for big titles only.** Inter does everything else.
- **Pull real assets** (mark, logos, shots) from `assets/` — never redraw them.
