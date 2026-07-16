# Roma — Asite Asset Library

The reusable parts of the **Roma** visual language. Teams building Roma UIs work
from this folder so components stay consistent.

## What's here

```
library/
  css/
    roma.css              Standalone stylesheet — tokens + fonts + every component recipe.
    Inter / JetBrainsMono .woff2   Bundled fonts (self-contained).
  icons/                  90+ line icons — 24px grid, 1.5px stroke, currentColor.
  index.html              Live component gallery (open in a browser).
  ../tokens.css           Canonical CSS custom properties.
  ../tokens.json          Machine-readable token mirror.
  ../assets/logos/        The verbatim Asite logo set (see below).
```

## Use it in one line

```html
<link rel="stylesheet" href="library/css/roma.css">
```

`roma.css` is self-contained: `:root` tokens, `@font-face`s, a reset, and every
component class.

## The rule that governs everything

**Fully achromatic.** There is no accent colour. Red survives in exactly two
places: the **Asite logo** (Neo Red `#FF3131`, carried by the artwork) and
**errors** (`--error` `#E5241B`). Anywhere else, red is a bug. The primary action
is filled ink; secondary CTAs carry a **full border** (never a bottom stroke).

## Logo set (verbatim — never modify)

| File | Use |
|---|---|
| `asite-logo-primary.png` | Light surfaces — Neo Red cube + black wordmark. |
| `asite-logo-white.png` | Dark / photographic surfaces. |
| `asite-logo-red-white.png` | Dark brand — Neo Red cube + white wordmark. |
| `asite-cube-*.png` | Cube-only crops — app rail, avatars, favicons. |

## Component classes (index)

Buttons (`btn` / `btn-ghost` full-border / `btn-outline` / `btn-link`) ·
`segment` · `tab`/`tabrow` · `crumbs` · `pager` · `badge` (+ `--error`) ·
`avatar` / `avatar-stack` · `tip` (tooltip) · `toast` (+ `--error`) · `banner`
(+ `--error`) · `progress` / `steps` · `acc` (accordion) · `empty` · `kv` ·
`menu` (+ `mi--danger`) · `status` (+ `--ok/--warn/--info/--stop`) · `tag`/`chip`
· `input` / `toggle` / `check` / `radio` · `reg` & `dtbl` tables (checkbox-select,
progress cell, avatar cell, expandable row) · `roma-product` frame ·
`spark`/`orb`/`runcard`/`cite`/`skeleton` (Asite Intelligence).

See `index.html` for a rendered specimen of each.
