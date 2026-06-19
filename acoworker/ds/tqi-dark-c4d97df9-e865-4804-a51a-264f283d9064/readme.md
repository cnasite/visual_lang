# Asite Design System — The Quiet Instrument

A dark, monochrome design system for **Asite**, a Common Data Environment (CDE) for construction. The product holds the documents, drawings, RFIs, models, and decisions of large building and infrastructure programmes — versioned, auditable, and held to tolerance from bid to handover.

The design language is **"The Quiet Instrument"**: software that earns trust by never raising its voice. A narrow near-black surface ramp, instrument-panel density, and **one rationed orange signal** — *Survey Orange* — that appears once per screen, marking the single decision that matters. Depth comes from 1px borders and soft light, never from heavy fills. It sits in the Linear school of software craft, but its vocabulary is lifted from the building site: setting-out marks, the surveyor's cap, the total-station beam, the ranging pole.

> **Audience & products.** Information managers, document controllers, and site teams at tier-1 contractors. Two surfaces ship in this system: the **product** (the CDE app) and the **marketing website**, plus a **slide** system for programme reviews.

## Sources

This system was reconstructed from an attached codebase (read-only, mounted as `tqi/`), an existing complete visual-language specification authored in HTML:

- `tqi/index.html` — the visual-language guide (logo, color, type, icons, illustration, motifs, surfaces, components, principles).
- `tqi/screens.html` — the product interface (onboarding, dashboards, register, files, document canvas, Convert, aMail, command palette, AI assistant).
- `tqi/web.html` — the website sections (heroes, proof, features, showcase, numbers, quote, CTA, footer).
- `tqi/slides.html` — the slide system (title, divider, report, demo, close, illustrated modes).
- `tqi/tokens.css` — the token source of truth.
- `tqi/assets/` — bundled fonts, client logos (color + mono), reference shots.

A light theme was referenced (`../tqi_light/`) but was **not present** in the mount — see Caveats.

---

## CONTENT FUNDAMENTALS

How Asite writes. The copy is the verbal half of "the quiet instrument" — calm, precise, load-bearing.

- **Voice — plainspoken and certain.** Short declaratives. The product states facts, it does not sell. *"The register held its tolerance." "Two decisions block the next pour." "Documents lost. Ever. — 0."* Confidence comes from precision, not adjectives.
- **Person.** Addresses the user directly as **you** ("what needs you", "your queue", "Bring the site with you"). The company speaks as **we** only on culture/careers surfaces ("Built by people who wear the orange"). Never "I".
- **The construction-site metaphor is the spine.** Decisions are *poured*, *held*, *set out*; work is *to tolerance*; future work is *dashed / not yet*. The metaphor is used precisely, never decoratively — a "hold point" is a real ISO concept, not a flourish.
- **Casing.** Sentence case for body, headings, and UI. **UPPERCASE** is reserved for mono micro-labels and metadata (`UPDATED 4 MINUTES AGO · 230 FILES`, `ISO 19650`, `WED 11 JUN · WK 24`). Cornerstone display titles render uppercase by design.
- **The orange period.** Display statements often close with a period that takes the accent — `Built to hold.` — the typographic echo of "one decision per screen."
- **Numbers are evidence.** Figures are specific and trusted: `98.4%`, `1.8d median`, `±0.5mm`, `84,000+ companies`, `since 2001`. Engineering references are exact and mono: `MCG-TWRC-STR-DWG-0412 · REV C03`.
- **Micro-labels do the wayfinding.** Tiny uppercase mono captions orient without chrome: `OPEN RISKS`, `DELIVERABLES / WEEK`, `CITES THE REGISTER`, `EACH STEP POURS A SLAB`.
- **No emoji. No exclamation. No hype.** No "🚀", no "Supercharge", no "delight". The closest the system comes to warmth is the careers line and the surveyor's cap. Tone is respectful of the reader's time and the stakes of the work.
- **Standards are stated, not boasted.** `ISO 19650`, `S1–S4 states`, `data residency` appear as plain facts that signal competence to a professional audience.

---

## VISUAL FOUNDATIONS

- **Color.** A four-step near-black surface ramp (`#08090A → #0F1011 → #141517 → #1A1B1E`) separated by single-digit value steps; three cool text grays (`#F7F8F8 / #8A8F98 / #62666D`); and **one** chromatic accent, **Survey Orange `#FF5C26`**, rationed to a single primary action or focus per screen. Status uses five desaturated hues but only ever as an 8px **dot + plain text** — never a filled pill or colored row. If a screen needs more color than that, the screen is wrong.
- **Type.** Three families. **Cornerstone** (blocky, load-bearing) for large titles *only* — heroes, slide titles, covers — rendered uppercase with +1.5% tracking. **Inter** carries everything else (h1–h3, body, micro) at medium weights (400/500/560/590) and tight tracking (−1.2% on headings). **JetBrains Mono** for engineering alphanumerics only — references, revisions, tolerances, metadata.
- **Backgrounds.** Almost always flat `--bg-0`. The **only** gradient is `--aurora` — three soft, top-weighted radial embers — used exclusively on hero fields and the product's front door (onboarding, dashboards welcome). No textures, no photography in chrome, no mesh gradients.
- **Depth.** From a 1px inset hairline (`--inset`) plus soft drop shadows (`--shadow-card`, `--shadow-pop`), never from contrast between fills. Cards are `--bg-2` with the inset; popovers add the pop shadow.
- **Borders.** Hairline `rgba(255,255,255,0.08)`; `--border-strong` at 0.14 for table heads and dashed dropzones. Dashed borders mean "not yet" (planned floors, empty states, future slabs).
- **Corner radii.** Soft, machined-plastic: 6 / 8 / 12 / 16px, plus a pill (999) for status chips, avatars, and toggles. Nothing sharp.
- **Motion.** Instant and weightless — 50–150ms, `cubic-bezier(0.25,0.1,0.25,1)`. The signature transition is a fade + 2px rise. No bounces, no long easings, no decorative loops on content. The one permitted ambient motion is the Asite Intelligence orb's slow 4.5s "breathe". Honours `prefers-reduced-motion`.
- **Hover.** Surfaces lighten one ramp step (`--bg-2` → `--bg-3`); text rises from gray to white; primary buttons go to `--intent-bright`. Interactive cards lift 2px with a drop shadow.
- **Press / active.** A 0.5px downward nudge on buttons; the active row/selection takes the **orange wash** (`--intent-wash`, 13%) — the only place a fill is tinted.
- **Focus.** A 3px `--intent-wash` ring plus an orange border — the form's single use of the accent (the "live point" / total-station beam).
- **Transparency & blur.** Reserved for floating chrome: sticky nav and popovers use `rgba(...,0.8)` + `backdrop-filter: blur(14–20px)`. Bodies are opaque.
- **Imagery is drawn, not photographed.** All illustration is built from the icon grammar — 1.5px strokes, four grays, one orange decision — across four modes on two axes: **Line / Filled** × **Elevation / Isometry**. Line modes explain (heroes, empty states, precision contexts); filled modes feel (covers, culture). One object owns the orange per scene; planned work is dashed; the beam connects the instrument to its point. Never mix modes in one composition.
- **Layout.** Instrument-panel density on a 4px spacing grid. Fixed chrome: a sticky top bar, a left workspace sidebar, a bottom-right AI orb, an optional floating page-nav. Content sits in a ≤1100px reading column on the website; the app frame fills the viewport.
- **Cards.** `--bg-2` fill, `--r-md`, inset hairline; `raised` adds a soft drop; `interactive` lifts on hover; `selected` takes the orange wash + a 1px orange ring. No left-border-accent cards, ever.

---

## ICONOGRAPHY

- **One bespoke set — "site tools, drawn calm."** Asite does **not** use a third-party icon library. Icons are hand-drawn on a **20px grid** with a **1.5px stroke**, rounded caps and joins — "one pen." They are shipped in two forms: as a React `Icon` component (`components/brand/Icon.jsx`, paths embedded) and as an SVG sprite (`assets/icons.svg`).
- **Color.** Icons inherit text color (`currentColor`) — gray at rest, white when active. **Icons never carry the accent**, with exactly one exception: the **hold-point diamond** (`hold`), which is a signal by definition and renders in `--intent`.
- **Available glyphs.** `today, rfis, files, docs, convert, models, field, search, filter, upload, comment, hold, plus, check, x, chevron-down, chevron-right, bell, user, clock, calendar, settings`. Extend by drawing on the same 20px / 1.5px grid — if it looks drawn by a different hand, it's off-brand.
- **No emoji.** A few Unicode glyphs appear as ornaments in the source chrome (`⌂ ◑ ▤ ≡ ⇄`, the `✦` orb spark) but the canonical product iconography is the drawn set. Keyboard hints use real glyphs (`⌘K`, `↵`, `⇧`) in the `Kbd` chip.
- **Logo.** The Asite mark — a monochrome body (behaves like type, uses `currentColor`) with the **arrow** as the only brand-level use of the accent. On a full-orange field, render the mark `mono` in white. The wordmark sets "Asite" in Inter 590, sentence case, −1% tracking. See `assets/asite-mark.svg` and `components/brand/AsiteMark.jsx`.
- **Client logos.** Tier-1 contractor lockups (`assets/logos/*`) ship in color and mono. On the dark canvas, use the **mono** (off-white) variants at ~70% opacity in proof strips.

---

## Index / manifest

**Root**
- `styles.css` — the entry point consumers link (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `geometry.css`, `motion.css`, `utilities.css`.
- `assets/` — `asite-mark.svg`, `icons.svg`, `fonts/` (Cornerstone, Inter ×3, JetBrains Mono ×2), `logos/` (6 clients × color + mono).
- `readme.md` (this file) · `SKILL.md` (portable skill manifest).

**Components** (`window.AsiteDesignSystem_c4d97d`) — each is `Name.jsx` + `Name.d.ts` + `Name.prompt.md`, with one `@dsCard` per directory:
- `components/brand/` — `AsiteMark`, `AsiteWordmark`, `Icon`.
- `components/forms/` — `Button`, `IconButton`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`.
- `components/data/` — `Card`, `StatusDot`, `Badge`, `Kbd`, `Avatar` (+`AvatarStack`), `Table`.
- `components/navigation/` — `Tabs`, `SegmentedControl`, `Menu` (+`MenuItem`/`MenuDivider`/`MenuLabel`).
- `components/feedback/` — `Dialog`, `Tooltip`, `Toast` (+`ToastViewport`).

**Foundation cards** (`guidelines/`) — Colors (surfaces, text, intent, status, aurora), Type (display, headings, body/mono), Spacing (scale, radii, shadows), Brand (client logos, metre band).

**UI kits**
- `ui_kits/product/` — the Asite CDE app: interactive sidebar, dashboard, register, files, Convert, command palette, AI orb.
- `ui_kits/website/` — the assembled Asite.com landing page.

**Slides** (`slides/`) — title, divider (hold point), report, product demo, illustrated (line isometry), close. 1280×720.

---

## Caveats

- **Fonts are the real bundled files** from the source repo (Cornerstone .ttf, Inter & JetBrains Mono .woff2) — no substitutions were needed.
- **No light theme.** The source linked a `tqi_light/` sibling that was not in the mount; this system ships the canonical **dark** theme only. If a light theme is wanted, a second token scope can be added.
- **Illustration is hand-built SVG**, ported faithfully from the source. New illustration should follow the four-mode grammar described above rather than being generated.
