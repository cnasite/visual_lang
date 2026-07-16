# Roma — Asite Asset Library

The reusable parts of the **Roma** visual language. Teams building Roma UIs
work from this folder so components stay consistent across products.

## What's here

```
library/
  css/
    roma.css              Standalone stylesheet — tokens + fonts + every component recipe.
    Inter-400/500/600.woff2, JetBrainsMono-400/500.woff2   Bundled fonts (self-contained).
  icons/                  Line icons — 24px grid, 1.5px stroke, currentColor. Includes spark.svg.
  index.html              Live component gallery (open in a browser).
  ../tokens.css           Canonical CSS custom properties.
  ../tokens.json          Machine-readable token mirror (source of truth for agents).
  ../assets/logos/        The must-use Asite logo set (see below).
```

## Use it in one line

```html
<link rel="stylesheet" href="library/css/roma.css">
```

`roma.css` is self-contained: it declares the `:root` tokens, `@font-face`s the
bundled fonts (relative to the `css/` folder), a reset, and every component
class. Drop the file plus the five `.woff2` fonts and you have the whole system.

## The one rule that governs everything

**Achromatic shell. Asite Red (`--signal`, `#FA3C2D`) is the only chromatic
colour, and it is permitted _only_ inside a `.roma-product` frame** — the live
element, the primary product action, the streaming agent, key focus. It is the
same red as the brand cube. Anywhere else — nav, buttons, backgrounds, type — is
a bug.

## Logo set (must-use)

| File | Use |
|---|---|
| `asite-lockup-ink.svg` | Primary lockup for the light shell — nav, footer, docs. |
| `asite-lockup-white.svg` | On dark / photographic surfaces. |
| `asite-lockup-red-dark.svg` | Master brand: red cube + black wordmark. Brand moments, favicons, covers. |
| `asite-lockup-red-white.svg` | Red cube + white wordmark, for dark brand moments. |
| `asite-mark-ink/white/red.svg` | Cube glyph only (app rail, avatars, favicons). |

In the Roma shell, nav and footer use the **ink** lockup (Chronicle-style
editorial black). The red-cube lockup is the master brand asset; the cube's red
is the same `--signal` as the product accent, so logo and product share one
chromatic identity.

## Component classes (quick index)

`roma-nav` · `btn` / `btn-ghost` / `btn-outline` / `btn-muted` · `tabrow` / `tab`
· `card` · `frame` · `input` · `tag` / `chip` · `status` (+ `--ok/--warn/--stop/--info`)
· `logobar` · `testimonial` · `stat` · `roma-foot` · `roma-product` (+ `p-btn`,
`p-status`, `p-live`, `accent*`) · `spark` / `orb` / `runcard` / `cite` /
`skeleton` (Asite Intelligence).

See `index.html` for a rendered specimen of each.
