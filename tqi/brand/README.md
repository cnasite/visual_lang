# The Quiet Instrument — brand package

The lean, in-repo brand package for Asite's **Quiet Instrument** (Direction 02), including the **Asite Intelligence** layer. It points at the live build as the source of truth rather than duplicating it.

> Calm, precise, engineered. A narrow monochrome surface ramp, **one** rationed Survey-Orange accent, instrument-panel density. Depth from 1px borders and light — never from fills.

## The live build is the source of truth

Hosted at **https://cnasite.github.io/visual_lang/tqi/**. Every page ships in dark and light (`light/`):

| Page | What it is |
|---|---|
| `index.html` | **Language** — the full design-language guide (logo, colour, type, icons, illustration, motifs, surfaces, components…) |
| `screens.html` | **Product** — real product interfaces, incl. the appended Asite Intelligence blob |
| `web.html` | **Website** — marketing sections |
| `slides.html` | **Slides** — the deck system |
| `ai-hub.html` | **AI Hub** — the canonical reference for the Intelligence layer |
| `landing.html` | a landing page in the wild |

The CSS source of truth is `tqi/tokens.css` (dark) and `tqi/light/tokens.css` (light).

## What's in this package

```
tqi/brand/
├─ README.md            ← you are here
├─ tokens.json          ← machine-readable mirror of tokens.css (dark + light) + AI-layer semantics
├─ asite-tqi/           ← the installable skill (unpacked)
│  ├─ SKILL.md          ← rules, tokens, type, components, and the AI layer
│  ├─ tokens.json
│  └─ tokens.css
└─ asite-tqi.skill      ← install into Claude Code / agent tooling so output is on-brand by default
```

## Use it

- **Designers / engineers** — read `SKILL.md`, pull values from `tokens.json` (or link `tqi/tokens.css`), and use the live pages as the visual reference. Never hard-code a value when a token exists.
- **AI tooling** — install `asite-tqi.skill`; agents then generate on-brand output and self-check against the rules. The skill carries both themes and the full AI-layer guidance.

## The rules that define the brand

1. **Orange is the only accent** — the single brand hue, used with restraint to lead the eye; never wallpaper, never a lone dot. Status and banners are functional, not accents.
2. **Depth from borders + light**, never competing fills.
3. **Status is an 8px dot + text** — no filled pills.
4. **Cornerstone for hero/slide titles only**; Inter for everything; JetBrains Mono for figures.
5. **One mode per surface** (dark default; `light/` for light).
6. **No edge bars (compulsory)** — never a thick coloured bar/outline on the side of a component. Selection and active states are a soft intent wash; markers are dots or small diamonds, never a side rail.

## The Intelligence layer

Asite Intelligence reuses the system — no new colours, no robots, no "AI purple". Its mark is the **spark** (and the **orb** for entry points), which glows softly at idle. It shows up two ways:

- **Side chat (summoned)** — a floating orb + "Ask Asite Intelligence" pill that opens a docked, ACL-scoped, assistive conversation that cites its sources.
- **In-workflow Coworker (embedded)** — an agent inside a task (upload metadata QA, form drafting, drawing review, bid evaluation) that runs steps and returns a reviewable, field-level result; nothing is applied until the user says so.

Run states are dot-first (only the live element pulses in intent). Every AI claim about project data carries a citation. See `ai-hub.html` for the full, live reference.

— Asite Design · The Quiet Instrument · package v1.1
