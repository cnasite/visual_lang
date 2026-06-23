---
name: asite-tqi
description: >
  Apply Asite's "The Quiet Instrument" visual language — including the Asite Intelligence
  (AI) layer — when building or reviewing any Asite UI, website, component, agent surface,
  or mockup in this direction. Trigger on: build The Quiet Instrument UI; Asite TQI screen;
  Asite Intelligence / Coworker UI; apply TQI tokens; design an Asite AI surface.
  Carries the full token set, rules, component recipes and AI-layer patterns so agents
  produce on-brand output without re-briefing.
---

# Asite — The Quiet Instrument

> A narrow monochrome surface ramp, one rationed Survey-Orange signal, instrument-panel density. Depth comes from 1px borders and light — never from fills.

**Idiom:** Linear · **Voice:** calm, precise, engineered, confident · **Accent:** Survey Orange `#FF5C26`

**Live source of truth:** https://cnasite.github.io/visual_lang/tqi/ — `index.html` (Language), `screens.html` (Product), `web.html` (Website), `slides.html` (Slides), **`ai-hub.html` (AI Hub)**, plus `light/` for every page. The CSS source is `tqi/tokens.css` (+ `tqi/light/tokens.css`); the machine-readable mirror is `tokens.json` beside this file.

## Non-negotiable rules

- **Orange is the only accent.** Survey Orange is the sole brand accent hue — no other decorative colours. Use it with restraint; never wallpaper, never a lone dot. Status and banners are *functional* colours, not accents.
- **Primary action colour is theme-specific.** In **dark**, the primary action is filled Survey Orange. In **light**, the primary action is **ink** (`text-1`, `#16181C`) and orange is the accent only — focus, links, selection washes, status, and the live AI signal (orb, spark, run pulse, caret). No large orange fills in light (the marketing CTA band is an ink field with the button as the orange accent).
- **Depth from borders + light, never competing fills.** Surfaces sit close in value; separation is a 1px inset hairline + soft shadow.
- **Hierarchy by value, not weight alone.** Use the three text steps.
- **Status is an 8px dot + plain text, never a filled pill.**
- **Cornerstone is for hero/slide titles only;** Inter carries everything else; JetBrains Mono for figures, references, telemetry.
- **Radii are soft (6–16px). Nothing sharp.**
- **No edge bars (COMPULSORY).** Never put a thick coloured bar or outline on the *side* of a component. Selection and active states are a soft intent wash (`background:var(--intent-wash)`); nav active is a tinted chip; a marker, when needed, is a dot or small diamond — never a left/side rail (`box-shadow:inset 2px 0 0`, `border-left:2px solid …`). 1px neutral structural dividers are fine.
- **One mode per surface.** Default dark (`:root`); `data-theme`/`light/` for light. Don't mix.

## How to apply

1. Start from the tokens (`tokens.json` / `tokens.css`). Never hard-code a raw value when a token exists.
2. Use the type scale verbatim; don't invent sizes.
3. Compose with the recipes below and the live pages as reference.
4. For anything AI, follow **The Intelligence layer** section.
5. Self-check against Do / Don't before finishing.

## Colour — dark

| Group | Token | Value |
|---|---|---|
| surface | bg-0 / bg-1 / bg-2 / bg-3 | `#08090A` / `#0F1011` / `#141517` / `#1A1B1E` |
| border | border / border-strong | `rgba(255,255,255,.08)` / `rgba(255,255,255,.14)` |
| text | text-1 / text-2 / text-3 | `#F7F8F8` / `#8A8F98` / `#62666D` |
| intent | intent / intent-bright / intent-wash | `#FF5C26` / `#FF7A4D` / `rgba(255,92,38,.13)` |
| status | done / progress / blocked / review / backlog | `#4CB782` / `#D4A444` / `#EB6E6E` / `#7FA3BC` / `#62666D` |
| effect | inset | `inset 0 0 0 1px rgba(255,255,255,.06)` |

## Colour — light

| Group | Token | Value |
|---|---|---|
| surface | bg-0 / bg-1 / bg-2 / bg-3 | `#F6F6F4` / `#FFFFFF` / `#FBFBFA` / `#EEEEEB` |
| border | border / border-strong | `rgba(22,24,28,.10)` / `rgba(22,24,28,.18)` |
| text | text-1 / text-2 / text-3 | `#16181C` / `#5A5F66` / `#90949B` |
| intent | intent / intent-bright / intent-wash | `#E8501C` / `#FF5C26` / `rgba(232,80,28,.10)` |
| status | done / progress / blocked / review / backlog | `#2E9E68` / `#B98A1D` / `#D8504F` / `#5C84A0` / `#90949B` |

## Type scale

| Style | Font | Weight | Size / LH |
|---|---|---|---|
| display | Cornerstone | 400 | clamp(38,4.6vw,58) / 1.1 — titles only |
| h1 | Inter | 590 | 34 / 1.15 |
| h2 | Inter | 560 | 22 / 1.25 |
| h3 | Inter | 560 | 16 / 1.35 |
| body | Inter | 400 | 15 / 1.6 |
| small | Inter | 400 | 13 / 1.55 |
| micro | Inter | 500 | 11 / 1.4 |
| mono | JetBrains Mono | 400 | 12.5 / 1.5 |

Radius `6 / 8 / 12 / 16`. Space `4 8 12 16 24 32 48 64 96`. Motion: ease `cubic-bezier(.25,.1,.25,1)`, 80–140ms, fade + 2px rise; honour `prefers-reduced-motion`.

## Component recipes

```css
.btn-primary{ background:var(--intent); color:#fff; font:560 13px/1 var(--font-ui); padding:9px 16px; border-radius:var(--r-md); border:0; }
.btn-primary:hover{ background:var(--intent-bright); }
.btn-secondary{ background:var(--bg-3); color:var(--text-1); box-shadow:var(--inset); border-radius:var(--r-md); padding:9px 16px; }
.card{ background:var(--bg-2); border-radius:var(--r-md); box-shadow:var(--inset), var(--shadow-card); padding:var(--space-6); }
.status{ display:inline-flex; align-items:center; gap:8px; color:var(--text-1); }   /* + 8px dot, never a filled pill */
.input:focus{ border-color:var(--intent); box-shadow:0 0 0 3px var(--intent-wash); } /* focus ring = the one accent */
.callout{ background:var(--bg-2); box-shadow:var(--inset); border-radius:var(--r-md); padding:14px 16px; } /* plain card; intent only on a small diamond */
```
Icons: 20px grid, 1.5px stroke, rounded joins; inherit text colour; never carry the accent (one exception: the hold-point diamond).

## The Intelligence layer (Asite Intelligence)

No new colours, no robots, no "AI purple", no gradients beyond the one hero aurora. Intelligence is expressed through the existing system. See `ai-hub.html` for live patterns.

**The mark.** A four-point **spark** (the setting-out cross sharpened to a star): filled orange when it represents the live agent; a 1.4px gray line when it's a quiet label. The **orb** is the spark at the datum of concentric survey rings — used for entry points, avatars, and hero moments.

**The soft idle glow.** The entry orb breathes a low, soft halo at idle: `box-shadow:0 0 22px 3px rgba(255,92,38,0.16)`, opacity `0.4→1` over `4.5s`, static under reduced-motion. Never harsh.

**Run states.** Dot-first, mapped to status hues: `queued`(backlog) · `running`/`streaming`(intent, **pulse**) · `waiting`(progress) · `blocked`(blocked) · `done`(done) · `error`(blocked). Only the live (running/streaming) element animates in intent.

**Two ways Intelligence shows up:**
1. **Side chat (summoned).** A floating orb + "Ask Asite Intelligence ⌘I" pill at the bottom-right of a surface; opens a docked conversation panel. Context-aware, **ACL-scoped**, assistive, cites its sources. Read-only by default — it proposes, the user acts.
2. **In-workflow Coworker (embedded).** An agent inside a task — upload metadata QA, form drafting, drawing review, bid evaluation. It runs steps (reads → extracts → compares) and returns a **reviewable, field-level** result (Matched / Mismatched / Missing, "Use document value", "Apply all", "Re-run"). **Nothing is applied until the user says so.**

**Agent surfaces.** Run card = identity + telemetry (model, tokens, latency, run-state), then the streaming answer, a collapsed tool call (mono readout, not raw JSON), quiet reasoning (collapsed, dimmed, secondary), confidence (only when real; low confidence offers a way to verify), and citations (required for any claim about project data). Async: skeleton shimmer (shaped like the answer), forward-looking empty states, error as a 1px blocked-hue outline with a retry — never a filled red banner.

**Voice.** A competent colleague, not a chatbot. Leads with the answer; shows working only on request; cites sources; admits uncertainty plainly. Never role-plays enthusiasm, no emoji, no marketing superlatives.

## Do / Don't

- ✅ Orange is the only accent, used with restraint — never wallpaper, never a lone dot.
- ✅ Depth from borders + light. Status = dot + text. Cornerstone = titles only.
- ✅ Only the live agent/element animates in intent; the orb glows softly at idle.
- ✅ Every AI claim about project data carries a citation; AI is assistive and ACL-scoped.
- ❌ No second accent hue, no AI purple, no robots/eyes/speech-bubbles, no filled status pills.
- ❌ No thick coloured edge bar on the side of any component (rows, cards, nav, panels) — selection/active is a wash, not a rail. **Compulsory.**
- ❌ Don't make reasoning or telemetry louder than the answer; don't apply Coworker changes silently.

## Resources

- `tokens.json` / `tokens.css` — tokens (source of truth), bundled beside this file.
- Live build: https://cnasite.github.io/visual_lang/tqi/ — Language · Product · Website · Slides · **AI Hub** (+ `light/`).
- The **AI Hub** page is the canonical reference for the Intelligence layer.
