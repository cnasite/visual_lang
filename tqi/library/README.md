# The Quiet Instrument — Asset Library

Every reusable asset The Quiet Instrument (incl. the Asite Intelligence layer) is built from, consolidated in one place. Open **`index.html`** to browse it. Each graphic ships as **SVG** with a 2× **PNG** beside it; components ship as **CSS**.

The live build remains the source of truth: https://cnasite.github.io/visual_lang/tqi/

```
tqi/library/
├─ index.html              ← browse everything (dark)
├─ css/
│  ├─ tokens.css           ← variables + fonts (dark + light)
│  ├─ components.css       ← buttons, inputs, cards, status, table, rail, modal, palette, toast…
│  └─ ai.css               ← run states, agent card, stream, tool call, reasoning, confidence, citations, timeline, entry, async
├─ logo/                   ← asite-mark.svg (currentColor) + asite-mark-intent.svg  (+ png/)
├─ icons/
│  ├─ icons.svg            ← sprite (24 icons: 12 product + 12 Intelligence)
│  ├─ <name>.svg           ← individual icons (currentColor, 1.5px stroke)
│  └─ png/                 ← 2× PNGs (rendered grey)
├─ illustrations/          ← 6 SVGs (4 modes + 2 Intelligence)  (+ png/)
├─ motifs/                 ← 9 SVGs (Beam, Setting-out Cross, Wash + Pulse, Constellation, Stream, Gauge, Annotated Source, Shimmer)  (+ png/)
└─ ai/                     ← spark.svg, spark-line.svg, orb.svg  (+ png/)
```

## Use it

- **Icons** — reference the sprite: `<svg class="ico"><use href="icons/icons.svg#ico-search"/></svg>` with `svg{ fill:none; stroke:currentColor; stroke-width:1.5; }`. Or drop an individual `icons/<name>.svg`. Product icons inherit text colour and never carry the accent; the Intelligence icons (spark, run, tool-call, reasoning, citation, confidence, stream, prompt, orchestrate, retry, guardrail, ask) read in accent.
- **Motifs & illustrations** — the SVGs carry the dark-theme palette (the colours that ship on the live dark pages). Place them on a dark surface; light-theme variants live in the `light/` pages. PNGs are in each `png/` folder.
- **Components** — load `css/tokens.css` then `css/components.css` (+ `css/ai.css` for agent surfaces). Token-driven and framework-agnostic; switch theme with `data-theme="light"`.

## Rules baked in

Orange is the only accent, used with restraint. Status is dot-first. Cornerstone for titles only. **No edge bars (compulsory)** — selection/active is a soft intent wash, never a coloured side rail. Full rules: `../brand/asite-tqi/SKILL.md`.

— Asite Design · The Quiet Instrument · library v1.0
