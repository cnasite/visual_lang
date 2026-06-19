/* @ds-bundle: {"format":3,"namespace":"AsiteDesignSystem_c4d97d","components":[{"name":"AsiteMark","sourcePath":"components/brand/AsiteMark.jsx"},{"name":"AsiteWordmark","sourcePath":"components/brand/AsiteMark.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/brand/Icon.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"AvatarStack","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Kbd","sourcePath":"components/data/Kbd.jsx"},{"name":"StatusDot","sourcePath":"components/data/StatusDot.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastViewport","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"MenuItem","sourcePath":"components/navigation/Menu.jsx"},{"name":"MenuDivider","sourcePath":"components/navigation/Menu.jsx"},{"name":"MenuLabel","sourcePath":"components/navigation/Menu.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/AsiteMark.jsx":"67667e94ec01","components/brand/Icon.jsx":"eb065c58e171","components/data/Avatar.jsx":"72f349aa85f1","components/data/Badge.jsx":"16c2ebf007c2","components/data/Card.jsx":"fa75cde4403e","components/data/Kbd.jsx":"54ed69cdd2cc","components/data/StatusDot.jsx":"173a75b0ea3b","components/data/Table.jsx":"b032ecdb2102","components/feedback/Dialog.jsx":"97bacc87ad89","components/feedback/Toast.jsx":"3a5b8b539d13","components/feedback/Tooltip.jsx":"15e9a5448358","components/forms/Button.jsx":"55b2bf1d53e5","components/forms/Checkbox.jsx":"52e39c38b9e7","components/forms/IconButton.jsx":"c264832d4a0b","components/forms/Input.jsx":"824ae6e87071","components/forms/Radio.jsx":"8aab7bafab9d","components/forms/Select.jsx":"f3a394efa8fb","components/forms/Switch.jsx":"4aece76ee2a3","components/forms/Textarea.jsx":"65d0dccb8db6","components/navigation/Menu.jsx":"6363801fb2f2","components/navigation/SegmentedControl.jsx":"a6491aa820ce","components/navigation/Tabs.jsx":"320b02978c4f","ui_kits/product/App.jsx":"8a2d6b377d4a","ui_kits/product/Convert.jsx":"74d8f3c284b9","ui_kits/product/Dashboard.jsx":"71683c21f1ae","ui_kits/product/Files.jsx":"37f5a963502e","ui_kits/product/Register.jsx":"14a39f18730f","ui_kits/website/Illustration.jsx":"b0358bcbee3d","ui_kits/website/Site.jsx":"83b1283daafe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AsiteDesignSystem_c4d97d = window.AsiteDesignSystem_c4d97d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/AsiteMark.jsx
try { (() => {
/**
 * AsiteMark — the brand mark. Monochrome body (behaves like type),
 * with the arrow as the only place the accent appears at brand level.
 * Body inherits currentColor; pass `mono` to render the arrow in the
 * body color too (e.g. when placed on a full-orange field, set
 * color:#fff and mono).
 */
function AsiteMark({
  size = 24,
  mono = false,
  color,
  style,
  title = 'Asite',
  ...rest
}) {
  const ratio = 396 / 377;
  return React.createElement('svg', {
    width: size,
    height: Math.round(size * ratio),
    viewBox: '0 0 377 396',
    role: 'img',
    'aria-label': title,
    style: {
      color: color || 'var(--text-1)',
      display: 'block',
      ...style
    },
    ...rest
  }, React.createElement('path', {
    fill: 'currentColor',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M62.2865 5.49758C48.8039 8.10323 56.8012 26.2896 96.8901 24.907L230.691 23.7371C236.176 23.7371 246.532 24.588 249.3 27.4595L289.645 50.804C305.024 61.4393 295.182 59.8972 284.519 60.2162L126.367 65.5339C108.835 66.1188 106.169 68.2459 92.3788 58.3019C41.4218 21.4505 7.3821 5.49758 0 62.1838C0.615175 118.905 1.24744 175.769 1.89679 232.774C2.81955 245.377 24.4532 247.451 24.8121 231.498C24.8121 174.174 24.8121 126.74 24.8121 69.4158C24.8121 58.036 29.9385 56.6002 40.1915 65.3744L68.0794 92.4412C77.6146 100.949 77.9735 111.106 77.8709 125.411V295.895C77.2045 307.806 80.6905 323.653 66.4389 308.817L36.7055 276.273C19.0192 263.404 17.7888 283.132 21.3261 288.929C40.5132 319.361 61.7558 348.344 84.8942 375.66C102.734 396.452 99.2996 396.93 123.804 395.016L343.473 372.682C360.39 370.555 375.821 354.017 377 322.004V155.987C374.744 121.316 341.115 122.858 343.012 155.987L344.242 307.487C343.575 328.439 341.73 328.758 316.2 334.501C296.566 338.808 200.496 351.677 146.412 348.539C126.777 347.423 120.421 342.477 120.421 325.993V134.557C120.421 109.564 136.261 101.322 159.074 99.9923L352.444 91.6968C383.203 83.7735 358.186 49.1555 343.473 42.4021C327.683 35.436 273.189 9.96441 249.095 2.04111C244.671 0.289835 239.91 -0.348017 235.202 0.179926L62.2865 5.49758Z'
  }), React.createElement('path', {
    fill: mono ? 'currentColor' : 'var(--intent)',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M152.769 227.51L152.41 197.784L251.607 191.722L205.212 150.776L247.864 149.234L300.975 199.432L236.689 267.924L202.854 264.627L249.351 217.991L152.769 227.51Z'
  }));
}

/**
 * AsiteWordmark — the mark + "Asite" set in Inter 590, sentence case,
 * -1% tracking. Reads as a product name, not a monument.
 */
function AsiteWordmark({
  size = 22,
  gap = 10,
  color = 'var(--text-1)',
  style,
  ...rest
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap,
      ...style
    },
    ...rest
  }, React.createElement(AsiteMark, {
    size,
    color
  }), React.createElement('span', {
    style: {
      font: '590 14px/1 var(--font-ui)',
      letterSpacing: '-0.01em',
      color
    }
  }, 'Asite'));
}
Object.assign(__ds_scope, { AsiteMark, AsiteWordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AsiteMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
/**
 * Icon — the Asite "site tools, drawn calm" set.
 * 20px grid, 1.5px stroke, rounded joins. Icons inherit text color
 * (currentColor) — gray at rest, white when active. The accent is
 * never used on an icon, with one exception: the `hold` diamond,
 * which is a signal by definition.
 */

const PATHS = {
  today: '<path d="M3.5 9.5 L10 3.5 L16.5 9.5 V16 H12 V12 H8 V16 H3.5 Z"/>',
  rfis: '<circle cx="10" cy="10" r="6.5"/><circle cx="10" cy="10" r="1.4" fill="currentColor" stroke="none"/><path d="M10 1.5 V3.5 M10 16.5 V18.5 M1.5 10 H3.5 M16.5 10 H18.5"/>',
  files: '<path d="M4 3.5 H11 L16 8.5 V16.5 H4 Z"/><path d="M11 3.5 V8.5 H16"/>',
  docs: '<rect x="4" y="3" width="12" height="14" rx="1.5"/><path d="M7 7.5 H13 M7 10.5 H13 M7 13.5 H10.5"/>',
  convert: '<path d="M4 7 H14 L11.5 4.5 M16 13 H6 L8.5 15.5"/>',
  models: '<path d="M10 2.5 L16.5 6 V14 L10 17.5 L3.5 14 V6 Z M3.5 6 L10 9.5 L16.5 6 M10 9.5 V17.5"/>',
  field: '<path d="M4.5 12 Q4.5 6 10 6 Q15.5 6 15.5 12 Z"/><path d="M3 12 H17 M8.5 6 Q8.5 3.5 10 3.5 Q11.5 3.5 11.5 6"/>',
  search: '<circle cx="9" cy="9" r="5.5"/><path d="M13.2 13.2 L17 17"/>',
  filter: '<path d="M3.5 5 H16.5 L11.5 10.5 V15.5 L8.5 17 V10.5 Z"/>',
  upload: '<path d="M10 13 V3.5 M6.5 7 L10 3.5 L13.5 7"/><path d="M4 13.5 V16.5 H16 V13.5"/>',
  comment: '<path d="M4 4.5 H16 V13 H9.5 L6 16 V13 H4 Z"/>',
  hold: '<rect x="5.5" y="5.5" width="9" height="9" transform="rotate(45 10 10)"/>',
  plus: '<path d="M10 4 V16 M4 10 H16"/>',
  check: '<path d="M4 10.5 L8.5 15 L16 6"/>',
  x: '<path d="M5 5 L15 15 M15 5 L5 15"/>',
  'chevron-down': '<path d="M5 8 L10 13 L15 8"/>',
  'chevron-right': '<path d="M8 5 L13 10 L8 15"/>',
  bell: '<path d="M6 9 Q6 5 10 5 Q14 5 14 9 V13 L16 15 H4 L6 13 Z"/><path d="M8.5 15 Q8.5 17 10 17 Q11.5 17 11.5 15"/>',
  user: '<circle cx="10" cy="7" r="3"/><path d="M4.5 16 Q4.5 11 10 11 Q15.5 11 15.5 16"/>',
  clock: '<circle cx="10" cy="10" r="6.5"/><path d="M10 6 V10 L13 12"/>',
  calendar: '<rect x="4" y="5" width="12" height="11" rx="1.5"/><path d="M4 8.5 H16 M7.5 3.5 V6 M12.5 3.5 V6"/>',
  settings: '<path d="M3.5 7 H16.5 M3.5 13 H16.5"/><circle cx="8" cy="7" r="2.1" fill="var(--bg-0)"/><circle cx="13" cy="13" r="2.1" fill="var(--bg-0)"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  hold = false,
  color,
  style,
  ...rest
}) {
  const isHold = hold || name === 'hold';
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 20 20',
    fill: 'none',
    stroke: color || (isHold ? 'var(--intent)' : 'currentColor'),
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    style: {
      flex: 'none',
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: PATHS[name] || ''
    },
    ...rest
  });
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const CSS = `
.asite-avatar { display:inline-flex; align-items:center; justify-content:center; border-radius:50%;
  background:var(--bg-3); box-shadow:var(--inset); color:var(--text-2); font-family:var(--font-ui);
  font-weight:560; flex:none; overflow:hidden; }
.asite-avatar img { width:100%; height:100%; object-fit:cover; }
.asite-avatar-stack { display:inline-flex; }
.asite-avatar-stack .asite-avatar { border:2px solid var(--bg-0); }
.asite-avatar-stack .asite-avatar + .asite-avatar { margin-left:-6px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-avatar-css')) {
  const s = document.createElement('style');
  s.id = 'asite-avatar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Avatar — a circular initials (or image) token. Quiet gray surface,
 * inset hairline. Initials derive from `name` unless given explicitly.
 */
function Avatar({
  name = '',
  initials,
  src,
  size = 24,
  className = '',
  style,
  ...rest
}) {
  const text = initials || name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return React.createElement('span', {
    className: ['asite-avatar', className].filter(Boolean).join(' '),
    title: name || undefined,
    style: {
      width: size,
      height: size,
      fontSize: Math.max(8, Math.round(size * 0.4)),
      ...style
    },
    ...rest
  }, src ? React.createElement('img', {
    src,
    alt: name
  }) : text);
}

/** AvatarStack — overlapping row of avatars (e.g. presence on a doc). */
function AvatarStack({
  children,
  className = '',
  style,
  ...rest
}) {
  return React.createElement('span', {
    className: ['asite-avatar-stack', className].filter(Boolean).join(' '),
    style,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Avatar, AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
const CSS = `
.asite-badge { display:inline-flex; align-items:center; gap:7px; font:500 12px/1 var(--font-ui); color:var(--text-2);
  background:var(--bg-2); box-shadow:var(--inset); border-radius:var(--r-sm); padding:5px 10px; white-space:nowrap; }
.asite-badge-sm { font-size:11.5px; padding:4px 9px; gap:6px; }
.asite-badge-mono { font:500 9.5px/1 var(--font-mono); letter-spacing:0.05em; color:var(--text-2);
  background:var(--bg-3); box-shadow:var(--inset); border-radius:4px; padding:3px 6px; }
.asite-badge-accent { color:var(--intent-bright); background:var(--intent-wash); box-shadow:none; }
.asite-badge-done { color:var(--st-done); background:rgba(76,183,130,0.12); box-shadow:none; }
.asite-badge-progress { color:var(--st-progress); background:rgba(212,164,68,0.12); box-shadow:none; }
.asite-badge-blocked { color:var(--st-blocked); background:rgba(235,110,110,0.12); box-shadow:none; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-badge-css')) {
  const s = document.createElement('style');
  s.id = 'asite-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Badge — a small inset chip for properties, metadata, and tags
 * (the "prop" pattern). `mono` for codes/file types; `tone` tints it
 * for confidence/semantic signals. Quiet by default.
 */
function Badge({
  tone = 'default',
  mono = false,
  size = 'md',
  className = '',
  children,
  style,
  ...rest
}) {
  const cls = [mono ? 'asite-badge-mono' : 'asite-badge', !mono && size === 'sm' ? 'asite-badge-sm' : '', tone !== 'default' ? `asite-badge-${tone}` : '', className].filter(Boolean).join(' ');
  return React.createElement('span', {
    className: cls,
    style,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
const CSS = `
.asite-card { background:var(--bg-2); border-radius:var(--r-md); box-shadow:var(--inset); padding:var(--space-4);
  transition:background var(--t-base) var(--ease), box-shadow var(--t-base) var(--ease), transform var(--t-base) var(--ease); }
.asite-card-raised { box-shadow:var(--inset), var(--shadow-card); }
.asite-card-interactive { cursor:pointer; }
.asite-card-interactive:hover { background:var(--bg-3); transform:translateY(-2px); box-shadow:var(--inset), var(--shadow-card); }
.asite-card-selected { background:var(--intent-wash); box-shadow:var(--inset), 0 0 0 1px rgba(255,92,38,0.4); }
.asite-card-flush { padding:0; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-card-css')) {
  const s = document.createElement('style');
  s.id = 'asite-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Card — the base surface. Depth comes from the inset hairline and a soft
 * drop, never from contrast. `raised` adds the drop shadow; `interactive`
 * lifts on hover; `selected` takes the orange wash + ring.
 */
function Card({
  variant = 'default',
  flush = false,
  className = '',
  children,
  style,
  ...rest
}) {
  const cls = ['asite-card', variant === 'raised' ? 'asite-card-raised' : '', variant === 'interactive' ? 'asite-card-interactive' : '', variant === 'selected' ? 'asite-card-selected' : '', flush ? 'asite-card-flush' : '', className].filter(Boolean).join(' ');
  return React.createElement('div', {
    className: cls,
    style,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Kbd.jsx
try { (() => {
const CSS = `
.asite-kbd { display:inline-flex; align-items:center; justify-content:center; font:500 11px/1 var(--font-ui);
  color:var(--text-2); background:var(--bg-3); border-radius:4px; box-shadow:var(--inset); padding:3px 6px; min-width:18px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-kbd-css')) {
  const s = document.createElement('style');
  s.id = 'asite-kbd-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Kbd — a keyboard hint chip (⌘K, ↵, U). Quiet, inset, monospace-adjacent. */
function Kbd({
  className = '',
  children,
  style,
  ...rest
}) {
  return React.createElement('kbd', {
    className: ['asite-kbd', className].filter(Boolean).join(' '),
    style,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusDot.jsx
try { (() => {
const CSS = `
.asite-dot { width:8px; height:8px; border-radius:50%; display:inline-block; flex:none; }
.asite-status { display:inline-flex; align-items:center; gap:8px; font:var(--text-small); color:var(--text-2); white-space:nowrap; }
.asite-status-micro { font:var(--text-micro); letter-spacing:var(--track-micro); text-transform:uppercase; color:var(--text-3); }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-status-css')) {
  const s = document.createElement('style');
  s.id = 'asite-status-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const COLORS = {
  done: 'var(--st-done)',
  progress: 'var(--st-progress)',
  blocked: 'var(--st-blocked)',
  review: 'var(--st-review)',
  backlog: 'var(--st-backlog)'
};
const LABELS = {
  done: 'Done',
  progress: 'In progress',
  blocked: 'Blocked',
  review: 'In review',
  backlog: 'Backlog'
};

/**
 * StatusDot — the only way status is shown: an 8px dot plus plain text.
 * Never a filled pill, never a colored row. Pass `status` for a preset
 * color/label, or `color` + children for a custom signal.
 */
function StatusDot({
  status,
  label,
  color,
  size = 8,
  micro = false,
  dotOnly = false,
  className = '',
  children,
  style,
  ...rest
}) {
  const c = color || COLORS[status] || 'var(--st-backlog)';
  const text = label != null ? label : children != null ? children : LABELS[status];
  const dot = React.createElement('span', {
    className: 'asite-dot',
    style: {
      width: size,
      height: size,
      background: c
    }
  });
  if (dotOnly) return dot;
  return React.createElement('span', {
    className: ['asite-status', micro ? 'asite-status-micro' : '', className].filter(Boolean).join(' '),
    style,
    ...rest
  }, dot, text != null ? React.createElement('span', null, text) : null);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
const CSS = `
.asite-tbl { width:100%; border-collapse:collapse; background:var(--bg-1); border-radius:var(--r-lg);
  overflow:hidden; box-shadow:var(--inset); }
.asite-tbl thead th { font:var(--text-micro); letter-spacing:var(--track-micro); text-transform:uppercase;
  color:var(--text-3); text-align:left; padding:11px 16px; border-bottom:1px solid var(--border-strong); background:var(--bg-1); }
.asite-tbl td { padding:11px 16px; border-bottom:1px solid var(--border); font:400 13px/1.5 var(--font-ui); color:var(--text-2); }
.asite-tbl td.asite-tbl-mono { font:400 11.5px/1.5 var(--font-mono); color:var(--text-3); }
.asite-tbl td.asite-tbl-title { font:500 13px/1.5 var(--font-ui); color:var(--text-1); }
.asite-tbl td.asite-tbl-num { font:400 11.5px/1.5 var(--font-mono); color:var(--text-2); text-align:right;
  font-variant-numeric:tabular-nums; white-space:nowrap; }
.asite-tbl th.asite-tbl-num { text-align:right; }
.asite-tbl tbody tr { transition:background var(--t-fast) var(--ease); }
.asite-tbl tbody tr.asite-tbl-clickable { cursor:pointer; }
.asite-tbl tbody tr:hover td { background:var(--bg-2); }
.asite-tbl tbody tr.asite-tbl-sel td { background:var(--intent-wash); }
.asite-tbl tbody tr:last-child td { border-bottom:none; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-tbl-css')) {
  const s = document.createElement('style');
  s.id = 'asite-tbl-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Table — the register. Quiet hairline rows, uppercase micro headers,
 * mono reference + numeric cells. Columns declare a `kind`
 * (`mono` | `title` | `num` | default). Rows are objects keyed by column
 * `key`; set `_selected` on a row for the wash, pass `onRowClick` for
 * interactive registers. Cell values may be React nodes (e.g. <StatusDot/>).
 */
function Table({
  columns = [],
  rows = [],
  onRowClick,
  className = '',
  style,
  ...rest
}) {
  const cellCls = kind => kind === 'mono' ? 'asite-tbl-mono' : kind === 'title' ? 'asite-tbl-title' : kind === 'num' ? 'asite-tbl-num' : '';
  return React.createElement('table', {
    className: ['asite-tbl', className].filter(Boolean).join(' '),
    style,
    ...rest
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map(c => React.createElement('th', {
    key: c.key,
    className: c.kind === 'num' ? 'asite-tbl-num' : '',
    style: c.width ? {
      width: c.width
    } : undefined
  }, c.label)))), React.createElement('tbody', null, rows.map((row, i) => React.createElement('tr', {
    key: row.id != null ? row.id : i,
    className: [row._selected ? 'asite-tbl-sel' : '', onRowClick ? 'asite-tbl-clickable' : ''].filter(Boolean).join(' '),
    onClick: onRowClick ? () => onRowClick(row, i) : undefined
  }, columns.map(c => React.createElement('td', {
    key: c.key,
    className: cellCls(c.kind)
  }, row[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const CSS = `
.asite-dlg-overlay { position:fixed; inset:0; z-index:1000; background:var(--bg-overlay);
  backdrop-filter:blur(2px); -webkit-backdrop-filter:blur(2px); display:flex; align-items:center; justify-content:center; padding:24px; }
.asite-dlg { position:relative; width:380px; max-width:100%; background:var(--bg-2); border-radius:var(--r-lg);
  box-shadow:var(--inset), var(--shadow-pop); padding:24px; }
.asite-dlg-title { font:560 15px/1.4 var(--font-ui); color:var(--text-1); display:flex; align-items:center; gap:10px; }
.asite-dlg-body { font:400 13px/1.6 var(--font-ui); color:var(--text-2); margin:10px 0 20px; }
.asite-dlg-actions { display:flex; gap:10px; justify-content:flex-end; align-items:center; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-dlg-css')) {
  const s = document.createElement('style');
  s.id = 'asite-dlg-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Dialog — a centered modal over a dimmed, slightly-blurred canvas.
 * Controlled via `open`; `onClose` fires on overlay click or Esc.
 * Compose the body freely; pass `title` and `actions` for the standard shape.
 */
function Dialog({
  open,
  onClose,
  title,
  icon,
  actions,
  width = 380,
  className = '',
  children,
  style
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return React.createElement('div', {
    className: 'asite-dlg-overlay',
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, React.createElement('div', {
    className: ['asite-dlg', className].filter(Boolean).join(' '),
    role: 'dialog',
    'aria-modal': true,
    style: {
      width,
      ...style
    }
  }, title != null ? React.createElement('div', {
    className: 'asite-dlg-title'
  }, icon != null ? icon : null, title) : null, children != null ? React.createElement('div', {
    className: 'asite-dlg-body'
  }, children) : null, actions != null ? React.createElement('div', {
    className: 'asite-dlg-actions'
  }, actions) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const CSS = `
.asite-toast { display:flex; align-items:center; gap:12px; background:var(--bg-2); border-radius:var(--r-md);
  box-shadow:var(--inset), var(--shadow-pop); padding:12px 14px; min-width:300px; max-width:420px; }
.asite-toast-body { font:400 12.5px/1.5 var(--font-ui); color:var(--text-2); flex:1; min-width:0; }
.asite-toast-body b { color:var(--text-1); font-weight:560; }
.asite-toast-action { font:500 12px/1 var(--font-ui); color:var(--intent-bright); background:none; border:none;
  cursor:pointer; white-space:nowrap; padding:4px 6px; border-radius:var(--r-sm); }
.asite-toast-action:hover { background:var(--bg-3); }
.asite-toast-close { background:none; border:none; cursor:pointer; color:var(--text-3); display:flex; padding:2px;
  border-radius:4px; }
.asite-toast-close:hover { color:var(--text-1); }
.asite-toast-viewport { position:fixed; right:18px; bottom:18px; z-index:1100; display:flex; flex-direction:column;
  gap:10px; align-items:flex-end; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-toast-css')) {
  const s = document.createElement('style');
  s.id = 'asite-toast-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function closeIcon() {
  return React.createElement('svg', {
    width: 13,
    height: 13,
    viewBox: '0 0 20 20',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round'
  }, React.createElement('path', {
    d: 'M5 5 L15 15 M15 5 L5 15'
  }));
}

/**
 * Toast — a transient confirmation on a popover surface, led by a status
 * dot. Pass `leading` (e.g. a <StatusDot dotOnly/>), the message as
 * children, an optional `action`, and `onClose`.
 */
function Toast({
  leading,
  action,
  onAction,
  onClose,
  className = '',
  children,
  style,
  ...rest
}) {
  return React.createElement('div', {
    className: ['asite-toast', className].filter(Boolean).join(' '),
    role: 'status',
    style,
    ...rest
  }, leading != null ? leading : null, React.createElement('div', {
    className: 'asite-toast-body'
  }, children), action != null ? React.createElement('button', {
    className: 'asite-toast-action',
    onClick: onAction
  }, action) : null, onClose ? React.createElement('button', {
    className: 'asite-toast-close',
    'aria-label': 'Dismiss',
    onClick: onClose
  }, closeIcon()) : null);
}

/** ToastViewport — fixed bottom-right stack for live toasts. */
function ToastViewport({
  children,
  className = '',
  style,
  ...rest
}) {
  return React.createElement('div', {
    className: ['asite-toast-viewport', className].filter(Boolean).join(' '),
    style,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastViewport });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const CSS = `
.asite-tip { position:relative; display:inline-flex; }
.asite-tip-bubble { position:absolute; z-index:200; left:50%; transform:translateX(-50%) translateY(4px);
  bottom:calc(100% + 7px); background:var(--bg-2); color:var(--text-1); box-shadow:var(--inset), var(--shadow-card);
  border-radius:var(--r-sm); padding:6px 9px; font:500 11.5px/1.3 var(--font-ui); white-space:nowrap;
  opacity:0; visibility:hidden; pointer-events:none; transition:opacity var(--t-base) var(--ease), transform var(--t-base) var(--ease); }
.asite-tip:hover .asite-tip-bubble, .asite-tip:focus-within .asite-tip-bubble {
  opacity:1; visibility:visible; transform:translateX(-50%) translateY(0); }
.asite-tip-bubble[data-side="bottom"] { bottom:auto; top:calc(100% + 7px); }
.asite-tip-kbd { margin-left:7px; color:var(--text-3); font-family:var(--font-mono); font-size:10px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-tip-css')) {
  const s = document.createElement('style');
  s.id = 'asite-tip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Tooltip — a quiet hover/focus label on a popover surface. Wraps its
 * trigger child. Optional `kbd` hint shown in mono after the label.
 */
function Tooltip({
  label,
  kbd,
  side = 'top',
  className = '',
  children,
  style,
  ...rest
}) {
  return React.createElement('span', {
    className: ['asite-tip', className].filter(Boolean).join(' '),
    style,
    ...rest
  }, children, React.createElement('span', {
    className: 'asite-tip-bubble',
    role: 'tooltip',
    'data-side': side
  }, label, kbd != null ? React.createElement('span', {
    className: 'asite-tip-kbd'
  }, kbd) : null));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const CSS = `
.asite-btn { font:560 13px/1 var(--font-ui); display:inline-flex; align-items:center; justify-content:center;
  gap:8px; border:none; cursor:pointer; white-space:nowrap; border-radius:var(--r-md);
  transition:background var(--t-fast) var(--ease), color var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), transform var(--t-fast) var(--ease);
  -webkit-font-smoothing:antialiased; }
.asite-btn:focus-visible { outline:none; box-shadow:var(--focus-ring); }
.asite-btn:active { transform:translateY(0.5px); }
.asite-btn[disabled] { opacity:0.45; cursor:not-allowed; pointer-events:none; }
.asite-btn-sm { padding:7px 13px; font-size:12.5px; }
.asite-btn-md { padding:9px 16px; }
.asite-btn-lg { padding:11px 22px; font-size:14px; }
.asite-btn-block { width:100%; }
.asite-btn-primary { background:var(--intent); color:#fff; }
.asite-btn-primary:hover { background:var(--intent-bright); }
.asite-btn-secondary { background:var(--bg-3); color:var(--text-1); box-shadow:var(--inset); }
.asite-btn-secondary:hover { background:#202125; }
.asite-btn-ghost { background:none; color:var(--text-2); }
.asite-btn-ghost:hover { color:var(--text-1); background:var(--bg-2); }
.asite-btn-danger { background:none; color:var(--st-blocked); box-shadow:var(--inset); }
.asite-btn-danger:hover { background:rgba(235,110,110,0.10); }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-btn-css')) {
  const s = document.createElement('style');
  s.id = 'asite-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Button — the primary control. One primary (orange) action per view;
 * everything else is secondary or ghost.
 */
function Button({
  variant = 'secondary',
  size = 'md',
  block = false,
  leadingIcon,
  trailingIcon,
  className = '',
  children,
  ...rest
}) {
  const cls = ['asite-btn', `asite-btn-${variant}`, `asite-btn-${size}`, block ? 'asite-btn-block' : '', className].filter(Boolean).join(' ');
  return React.createElement('button', {
    className: cls,
    ...rest
  }, leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const CSS = `
.asite-pick { display:inline-flex; align-items:center; gap:10px; cursor:pointer; font:400 13px/1.4 var(--font-ui);
  color:var(--text-1); padding:3px 0; }
.asite-pick input { appearance:none; -webkit-appearance:none; width:15px; height:15px; margin:0; flex:none;
  background:var(--bg-0); border:1px solid var(--border-strong); cursor:pointer; position:relative;
  transition:background var(--t-base) var(--ease), border-color var(--t-base) var(--ease); }
.asite-pick input[type="checkbox"] { border-radius:4px; }
.asite-pick input[type="radio"] { border-radius:50%; }
.asite-pick input:checked { background:var(--intent); border-color:var(--intent); }
.asite-pick input[type="checkbox"]:checked::after { content:""; position:absolute; left:4.5px; top:1.5px;
  width:3.5px; height:7.5px; border:solid #fff; border-width:0 1.5px 1.5px 0; transform:rotate(45deg); }
.asite-pick input[type="radio"]:checked::after { content:""; position:absolute; inset:4px; border-radius:50%; background:#fff; }
.asite-pick input:focus-visible { outline:none; box-shadow:var(--focus-ring); }
.asite-pick input:disabled { opacity:0.4; cursor:not-allowed; }
.asite-pick-disabled { color:var(--text-3); cursor:not-allowed; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-pick-css')) {
  const s = document.createElement('style');
  s.id = 'asite-pick-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Checkbox — square ticked control. Checked fills with the accent. */
function Checkbox({
  label,
  disabled = false,
  className = '',
  children,
  style,
  ...rest
}) {
  return React.createElement('label', {
    className: ['asite-pick', disabled ? 'asite-pick-disabled' : '', className].filter(Boolean).join(' '),
    style
  }, React.createElement('input', {
    type: 'checkbox',
    disabled,
    ...rest
  }), label != null ? React.createElement('span', null, label) : children);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
const CSS = `
.asite-iconbtn { display:inline-flex; align-items:center; justify-content:center; border:none; cursor:pointer;
  background:none; color:var(--text-2); border-radius:var(--r-sm); flex:none;
  transition:background var(--t-fast) var(--ease), color var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease); }
.asite-iconbtn:hover { color:var(--text-1); background:var(--bg-2); }
.asite-iconbtn:focus-visible { outline:none; box-shadow:var(--focus-ring); }
.asite-iconbtn[disabled] { opacity:0.4; cursor:not-allowed; pointer-events:none; }
.asite-iconbtn-on { color:var(--text-1); background:var(--intent-wash); }
.asite-iconbtn-solid { background:var(--bg-3); box-shadow:var(--inset); color:var(--text-1); }
.asite-iconbtn-solid:hover { background:#202125; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-iconbtn-css')) {
  const s = document.createElement('style');
  s.id = 'asite-iconbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * IconButton — a square, icon-only control for toolbars and headers.
 * Quiet by default; `solid` gives it a surface; `active` takes the wash.
 */
function IconButton({
  size = 30,
  variant = 'ghost',
  active = false,
  className = '',
  children,
  'aria-label': ariaLabel,
  ...rest
}) {
  const cls = ['asite-iconbtn', variant === 'solid' ? 'asite-iconbtn-solid' : '', active ? 'asite-iconbtn-on' : '', className].filter(Boolean).join(' ');
  return React.createElement('button', {
    className: cls,
    style: {
      width: size,
      height: size
    },
    'aria-label': ariaLabel,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const CSS = `
.asite-field-label { display:block; font:var(--text-micro); letter-spacing:var(--track-micro);
  text-transform:uppercase; color:var(--text-3); margin-bottom:7px; }
.asite-input-wrap { position:relative; display:flex; align-items:center; }
.asite-input { width:100%; background:var(--bg-0); border:1px solid var(--border); border-radius:var(--r-md);
  color:var(--text-1); font:400 13px/1.4 var(--font-ui); padding:9px 12px; outline:none;
  transition:border-color var(--t-base) var(--ease), box-shadow var(--t-base) var(--ease); }
.asite-input::placeholder { color:var(--text-3); }
.asite-input:focus { border-color:var(--intent); box-shadow:var(--focus-ring); }
.asite-input:disabled { opacity:0.5; cursor:not-allowed; }
.asite-input-mono { font:400 12.5px/1.4 var(--font-mono); text-transform:uppercase; }
.asite-input-num { font:400 12.5px/1.4 var(--font-mono); text-align:right; padding-right:44px; font-variant-numeric:tabular-nums; }
.asite-input-invalid { border-color:var(--st-blocked); }
.asite-input-invalid:focus { border-color:var(--st-blocked); box-shadow:0 0 0 3px rgba(235,110,110,0.13); }
.asite-input-unit { position:absolute; right:12px; font:400 11px/1 var(--font-mono); color:var(--text-3); pointer-events:none; }
.asite-input-lead { position:absolute; left:11px; display:flex; color:var(--text-3); pointer-events:none; }
.asite-input-haslead { padding-left:34px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-input-css')) {
  const s = document.createElement('style');
  s.id = 'asite-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Input — a single-line text field. Focus draws the orange ring (the one
 * place the accent appears in a form). `mono` for references/codes; `unit`
 * for a right-aligned numeric value with a fixed suffix.
 */
function Input({
  label,
  mono = false,
  numeric = false,
  unit,
  leadingIcon,
  invalid = false,
  className = '',
  id,
  style,
  ...rest
}) {
  const input = React.createElement('input', {
    id,
    className: ['asite-input', mono ? 'asite-input-mono' : '', numeric || unit ? 'asite-input-num' : '', leadingIcon ? 'asite-input-haslead' : '', invalid ? 'asite-input-invalid' : '', className].filter(Boolean).join(' '),
    'aria-invalid': invalid || undefined,
    ...rest
  });
  const field = React.createElement('div', {
    className: 'asite-input-wrap'
  }, leadingIcon ? React.createElement('span', {
    className: 'asite-input-lead'
  }, leadingIcon) : null, input, unit ? React.createElement('span', {
    className: 'asite-input-unit'
  }, unit) : null);
  if (!label) return React.cloneElement(field, {
    style
  });
  return React.createElement('div', {
    style
  }, React.createElement('label', {
    className: 'asite-field-label',
    htmlFor: id
  }, label), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
const CSS = `
.asite-pick { display:inline-flex; align-items:center; gap:10px; cursor:pointer; font:400 13px/1.4 var(--font-ui);
  color:var(--text-1); padding:3px 0; }
.asite-pick input { appearance:none; -webkit-appearance:none; width:15px; height:15px; margin:0; flex:none;
  background:var(--bg-0); border:1px solid var(--border-strong); cursor:pointer; position:relative;
  transition:background var(--t-base) var(--ease), border-color var(--t-base) var(--ease); }
.asite-pick input[type="checkbox"] { border-radius:4px; }
.asite-pick input[type="radio"] { border-radius:50%; }
.asite-pick input:checked { background:var(--intent); border-color:var(--intent); }
.asite-pick input[type="checkbox"]:checked::after { content:""; position:absolute; left:4.5px; top:1.5px;
  width:3.5px; height:7.5px; border:solid #fff; border-width:0 1.5px 1.5px 0; transform:rotate(45deg); }
.asite-pick input[type="radio"]:checked::after { content:""; position:absolute; inset:4px; border-radius:50%; background:#fff; }
.asite-pick input:focus-visible { outline:none; box-shadow:var(--focus-ring); }
.asite-pick input:disabled { opacity:0.4; cursor:not-allowed; }
.asite-pick-disabled { color:var(--text-3); cursor:not-allowed; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-pick-css')) {
  const s = document.createElement('style');
  s.id = 'asite-pick-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Radio — round single-choice control. Checked fills with the accent.
 * Set a shared `name` across a group. Shares styling with Checkbox.
 */
function Radio({
  label,
  disabled = false,
  className = '',
  children,
  style,
  ...rest
}) {
  return React.createElement('label', {
    className: ['asite-pick', disabled ? 'asite-pick-disabled' : '', className].filter(Boolean).join(' '),
    style
  }, React.createElement('input', {
    type: 'radio',
    disabled,
    ...rest
  }), label != null ? React.createElement('span', null, label) : children);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const CSS = `
.asite-select { position:relative; }
.asite-select-trigger { display:flex; align-items:center; justify-content:space-between; gap:10px; width:100%;
  background:var(--bg-0); border:1px solid var(--border); border-radius:var(--r-md); color:var(--text-1);
  font:400 13px/1.4 var(--font-ui); padding:9px 12px; cursor:pointer; text-align:left;
  transition:border-color var(--t-base) var(--ease), box-shadow var(--t-base) var(--ease); }
.asite-select-trigger:focus-visible { outline:none; border-color:var(--intent); box-shadow:var(--focus-ring); }
.asite-select-open .asite-select-trigger { border-color:var(--intent); box-shadow:var(--focus-ring); }
.asite-select-ph { color:var(--text-3); }
.asite-select-car { color:var(--text-3); transition:transform var(--t-base) var(--ease); flex:none; }
.asite-select-open .asite-select-car { transform:rotate(180deg); }
.asite-select-menu { position:absolute; z-index:40; left:0; right:0; margin-top:6px; background:var(--bg-2);
  border-radius:var(--r-md); box-shadow:var(--inset), var(--shadow-card); padding:5px; max-height:280px; overflow:auto; }
.asite-select-opt { display:flex; align-items:center; gap:8px; font:400 12.5px/1.4 var(--font-ui); color:var(--text-2);
  padding:7px 9px; border-radius:var(--r-sm); cursor:pointer; }
.asite-select-opt:hover { background:var(--bg-3); color:var(--text-1); }
.asite-select-opt-on { background:var(--intent-wash); color:var(--text-1); }
.asite-select-opt-on::after { content:""; margin-left:auto; width:5px; height:9px; border:solid var(--intent-bright);
  border-width:0 1.5px 1.5px 0; transform:rotate(45deg); }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-select-css')) {
  const s = document.createElement('style');
  s.id = 'asite-select-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function caret() {
  return React.createElement('svg', {
    className: 'asite-select-car',
    width: 12,
    height: 12,
    viewBox: '0 0 20 20',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('path', {
    d: 'M5 8 L10 13 L15 8'
  }));
}

/**
 * Select — a custom dropdown matching the form ring. Controlled (`value`
 * + `onChange`) or uncontrolled (`defaultValue`). `options` is an array
 * of { value, label } or plain strings.
 */
function Select({
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  style,
  className = ''
}) {
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const selected = norm.find(o => o.value === current);
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
    setOpen(false);
  };
  return React.createElement('div', {
    ref,
    className: ['asite-select', open ? 'asite-select-open' : '', className].filter(Boolean).join(' '),
    style
  }, React.createElement('button', {
    type: 'button',
    className: 'asite-select-trigger',
    disabled,
    'aria-haspopup': 'listbox',
    'aria-expanded': open,
    onClick: () => !disabled && setOpen(o => !o)
  }, React.createElement('span', {
    className: selected ? '' : 'asite-select-ph'
  }, selected ? selected.label : placeholder), caret()), open ? React.createElement('div', {
    className: 'asite-select-menu',
    role: 'listbox'
  }, norm.map(o => React.createElement('div', {
    key: o.value,
    role: 'option',
    'aria-selected': o.value === current,
    className: ['asite-select-opt', o.value === current ? 'asite-select-opt-on' : ''].filter(Boolean).join(' '),
    onClick: () => pick(o.value)
  }, o.label))) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const CSS = `
.asite-switch { display:inline-flex; align-items:center; gap:10px; cursor:pointer; font:400 13px/1.4 var(--font-ui); color:var(--text-1); }
.asite-switch input { position:absolute; opacity:0; width:0; height:0; }
.asite-switch .tk { width:34px; height:20px; border-radius:var(--r-pill); background:var(--bg-3); box-shadow:var(--inset);
  position:relative; flex:none; transition:background var(--t-base) var(--ease); }
.asite-switch .tk::after { content:""; position:absolute; top:3px; left:3px; width:14px; height:14px; border-radius:50%;
  background:var(--text-2); transition:transform var(--t-base) var(--ease), background var(--t-base) var(--ease); }
.asite-switch input:checked + .tk { background:var(--intent); }
.asite-switch input:checked + .tk::after { transform:translateX(14px); background:#fff; }
.asite-switch input:focus-visible + .tk { box-shadow:var(--inset), var(--focus-ring); }
.asite-switch input:disabled + .tk { opacity:0.4; }
.asite-switch-disabled { color:var(--text-3); cursor:not-allowed; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-switch-css')) {
  const s = document.createElement('style');
  s.id = 'asite-switch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Switch — binary on/off toggle. On takes the accent track. */
function Switch({
  label,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  return React.createElement('label', {
    className: ['asite-switch', disabled ? 'asite-switch-disabled' : '', className].filter(Boolean).join(' '),
    style
  }, React.createElement('input', {
    type: 'checkbox',
    role: 'switch',
    disabled,
    ...rest
  }), React.createElement('span', {
    className: 'tk'
  }), label != null ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
const CSS = `
.asite-textarea { width:100%; background:var(--bg-0); border:1px solid var(--border); border-radius:var(--r-md);
  color:var(--text-1); font:400 13px/1.55 var(--font-ui); padding:9px 12px; outline:none; min-height:88px;
  resize:vertical; transition:border-color var(--t-base) var(--ease), box-shadow var(--t-base) var(--ease); }
.asite-textarea::placeholder { color:var(--text-3); }
.asite-textarea:focus { border-color:var(--intent); box-shadow:var(--focus-ring); }
.asite-textarea:disabled { opacity:0.5; cursor:not-allowed; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-textarea-css')) {
  const s = document.createElement('style');
  s.id = 'asite-textarea-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Textarea — multi-line text field, vertical resize, matching the input ring. */
function Textarea({
  label,
  className = '',
  id,
  style,
  ...rest
}) {
  const ta = React.createElement('textarea', {
    id,
    className: ['asite-textarea', className].filter(Boolean).join(' '),
    ...rest
  });
  if (!label) return React.cloneElement(ta, {
    style
  });
  return React.createElement('div', {
    style
  }, React.createElement('label', {
    className: 'asite-field-label',
    htmlFor: id,
    style: {
      display: 'block',
      font: 'var(--text-micro)',
      letterSpacing: 'var(--track-micro)',
      textTransform: 'uppercase',
      color: 'var(--text-3)',
      marginBottom: '7px'
    }
  }, label), ta);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
const CSS = `
.asite-menu { background:var(--bg-2); border-radius:var(--r-lg); box-shadow:var(--inset), var(--shadow-pop);
  padding:6px; min-width:200px; }
.asite-menu-item { display:flex; align-items:center; gap:10px; width:100%; text-align:left; border:none; cursor:pointer;
  padding:8px 10px; border-radius:var(--r-sm); font:500 12.5px/1.4 var(--font-ui); color:var(--text-2);
  background:none; transition:background var(--t-fast) var(--ease), color var(--t-fast) var(--ease); }
.asite-menu-item:hover, .asite-menu-item.on { background:var(--bg-3); color:var(--text-1); }
.asite-menu-item:focus-visible { outline:none; background:var(--bg-3); color:var(--text-1); }
.asite-menu-item .asite-menu-tail { margin-left:auto; color:var(--text-3); }
.asite-menu-item.danger { color:var(--st-blocked); }
.asite-menu-item.danger:hover { background:rgba(235,110,110,0.10); }
.asite-menu-item[disabled] { opacity:0.4; cursor:not-allowed; pointer-events:none; }
.asite-menu-divider { height:1px; background:var(--border); margin:5px 6px; }
.asite-menu-label { font:var(--text-micro); letter-spacing:var(--track-micro); text-transform:uppercase;
  color:var(--text-3); padding:8px 10px 4px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-menu-css')) {
  const s = document.createElement('style');
  s.id = 'asite-menu-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Menu — a popover surface holding MenuItem / MenuDivider / MenuLabel. */
function Menu({
  className = '',
  children,
  style,
  ...rest
}) {
  return React.createElement('div', {
    className: ['asite-menu', className].filter(Boolean).join(' '),
    role: 'menu',
    style,
    ...rest
  }, children);
}

/** MenuItem — a row with optional leading icon, trailing hint, danger + active states. */
function MenuItem({
  icon,
  tail,
  danger = false,
  active = false,
  className = '',
  children,
  ...rest
}) {
  return React.createElement('button', {
    type: 'button',
    role: 'menuitem',
    className: ['asite-menu-item', danger ? 'danger' : '', active ? 'on' : '', className].filter(Boolean).join(' '),
    ...rest
  }, icon != null ? icon : null, React.createElement('span', null, children), tail != null ? React.createElement('span', {
    className: 'asite-menu-tail'
  }, tail) : null);
}

/** MenuDivider — a hairline rule between groups. */
function MenuDivider() {
  return React.createElement('div', {
    className: 'asite-menu-divider'
  });
}

/** MenuLabel — an uppercase section caption. */
function MenuLabel({
  children
}) {
  return React.createElement('div', {
    className: 'asite-menu-label'
  }, children);
}
Object.assign(__ds_scope, { Menu, MenuItem, MenuDivider, MenuLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
const CSS = `
.asite-seg { display:inline-flex; background:var(--bg-0); border-radius:var(--r-md); box-shadow:var(--inset); padding:2px; }
.asite-seg button { padding:5px 11px; border-radius:6px; border:none; background:none; cursor:pointer;
  font:500 11.5px/1.4 var(--font-ui); color:var(--text-3); transition:color var(--t-fast) var(--ease), background var(--t-fast) var(--ease); }
.asite-seg button:hover { color:var(--text-2); }
.asite-seg button.on { background:var(--bg-3); color:var(--text-1); box-shadow:var(--inset); }
.asite-seg button:focus-visible { outline:none; box-shadow:var(--focus-ring); }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-seg-css')) {
  const s = document.createElement('style');
  s.id = 'asite-seg-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * SegmentedControl — a small inset switch for 2–4 short options (time
 * ranges, view modes). The active segment lifts to a raised surface.
 * Controlled (`value`) or uncontrolled (`defaultValue`).
 */
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  className = '',
  style,
  ...rest
}) {
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue != null ? defaultValue : norm[0] && norm[0].value);
  const current = isControlled ? value : internal;
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return React.createElement('div', {
    className: ['asite-seg', className].filter(Boolean).join(' '),
    role: 'tablist',
    style,
    ...rest
  }, norm.map(o => React.createElement('button', {
    key: o.value,
    type: 'button',
    role: 'tab',
    'aria-selected': o.value === current,
    className: o.value === current ? 'on' : '',
    onClick: () => pick(o.value)
  }, o.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const CSS = `
.asite-tabs { display:inline-flex; align-items:center; gap:2px; }
.asite-tabs button { font:500 12.5px/1 var(--font-ui); color:var(--text-2); background:none; border:none; cursor:pointer;
  padding:7px 12px; border-radius:var(--r-sm); transition:background var(--t-fast) var(--ease), color var(--t-fast) var(--ease); }
.asite-tabs button:hover { color:var(--text-1); background:var(--bg-2); }
.asite-tabs button.on { background:var(--intent-wash); color:var(--text-1); }
.asite-tabs button:focus-visible { outline:none; box-shadow:var(--focus-ring); }
`;
if (typeof document !== 'undefined' && !document.getElementById('asite-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'asite-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Tabs — top-level navigation tabs. The active tab takes the orange wash.
 * Controlled (`value`) or uncontrolled (`defaultValue`).
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = '',
  style,
  ...rest
}) {
  const norm = tabs.map(t => typeof t === 'string' ? {
    value: t,
    label: t
  } : t);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue != null ? defaultValue : norm[0] && norm[0].value);
  const current = isControlled ? value : internal;
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return React.createElement('nav', {
    className: ['asite-tabs', className].filter(Boolean).join(' '),
    style,
    ...rest
  }, norm.map(t => React.createElement('button', {
    key: t.value,
    type: 'button',
    className: t.value === current ? 'on' : '',
    onClick: () => pick(t.value)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/App.jsx
try { (() => {
// App — the Asite CDE shell: workspace sidebar, top bar, view routing,
// the ⌘K command palette, and the Asite Intelligence orb.
const A = window.AsiteDesignSystem_c4d97d;
const S = window.AsiteScreens;
const NAV = [{
  id: 'today',
  label: 'Today',
  icon: 'today',
  screen: 'Dashboard'
}, {
  id: 'rfis',
  label: 'RFIs',
  icon: 'rfis',
  screen: 'Register',
  cnt: '6'
}, {
  id: 'files',
  label: 'Files',
  icon: 'files',
  screen: 'Files'
}, {
  id: 'docs',
  label: 'Docs',
  icon: 'docs',
  screen: 'Files'
}, {
  id: 'convert',
  label: 'Convert',
  icon: 'convert',
  screen: 'Convert'
}];
const TITLES = {
  today: 'Today',
  rfis: 'RFIs',
  files: 'Files',
  docs: 'Docs',
  convert: 'Convert'
};
function CommandPalette({
  open,
  onClose,
  onNav
}) {
  const cmds = [{
    sec: 'Go to',
    items: [['Today', 'G T', 'today'], ['RFIs', 'G R', 'rfis'], ['Files', 'G F', 'files'], ['Convert', 'G C', 'convert']]
  }, {
    sec: 'Actions',
    items: [['Upload files', 'U', 'files'], ['Raise an RFI', 'N', 'rfis'], ['Convert site paper', null, 'convert']]
  }];
  return /*#__PURE__*/React.createElement(A.Dialog, {
    open: open,
    onClose: onClose,
    width: 560
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      margin: '-4px 0 12px'
    }
  }, /*#__PURE__*/React.createElement(A.Icon, {
    name: "search",
    size: 17,
    color: "var(--text-3)"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    placeholder: "Search files, RFIs, people, actions\u2026",
    style: {
      background: 'none',
      border: 'none',
      outline: 'none',
      color: 'var(--text-1)',
      font: '400 14px/1 var(--font-ui)',
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(A.Kbd, null, "esc")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 -24px -24px',
      borderTop: '1px solid var(--border)'
    }
  }, cmds.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.sec
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-micro)',
      letterSpacing: 'var(--track-micro)',
      textTransform: 'uppercase',
      color: 'var(--text-3)',
      padding: '12px 24px 4px'
    }
  }, g.sec), g.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it[0],
    onClick: () => {
      onNav(it[2]);
      onClose();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 24px',
      font: '500 13px/1.4 var(--font-ui)',
      color: 'var(--text-2)',
      cursor: 'pointer'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--intent-wash)';
      e.currentTarget.style.color = 'var(--text-1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'none';
      e.currentTarget.style.color = 'var(--text-2)';
    }
  }, /*#__PURE__*/React.createElement("span", null, it[0]), it[1] ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(A.Kbd, null, it[1])) : null))))));
}
function AIPanel({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 20,
      bottom: 74,
      width: 360,
      zIndex: 31,
      background: 'var(--bg-2)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--inset), var(--shadow-pop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '12px 14px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--intent-bright)',
      fontSize: 13
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("b", {
    style: {
      font: '560 12.5px/1 var(--font-ui)',
      color: 'var(--text-1)'
    }
  }, "Asite Intelligence"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: '500 9.5px/1 var(--font-mono)',
      letterSpacing: '0.1em',
      color: 'var(--text-3)'
    }
  }, "CITES THE REGISTER"), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      marginLeft: 8,
      cursor: 'pointer',
      color: 'var(--text-3)'
    }
  }, /*#__PURE__*/React.createElement(A.Icon, {
    name: "x",
    size: 13
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, ["What's holding the next pour?", 'What changed since yesterday?', "Draft today's site diary"].map(q => /*#__PURE__*/React.createElement("span", {
    key: q,
    style: {
      font: '400 12px/1.4 var(--font-ui)',
      color: 'var(--text-2)',
      background: 'var(--bg-1)',
      boxShadow: 'var(--inset)',
      borderRadius: 'var(--r-pill)',
      padding: '7px 12px',
      cursor: 'pointer'
    }
  }, q))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '11px 14px',
      borderTop: '1px solid var(--border)',
      font: '400 12.5px/1 var(--font-ui)',
      color: 'var(--text-3)'
    }
  }, "Ask about this project\u2026", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(A.Kbd, null, "\u2318I"))));
}
function App() {
  const [active, setActive] = React.useState('today');
  const [pal, setPal] = React.useState(false);
  const [ai, setAi] = React.useState(false);
  React.useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPal(p => !p);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'i') {
        e.preventDefault();
        setAi(p => !p);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  const Screen = S[NAV.find(n => n.id === active).screen];
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ws"
  }, /*#__PURE__*/React.createElement(A.AsiteMark, {
    size: 18
  }), /*#__PURE__*/React.createElement("b", null, "Mer Tower C"), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, /*#__PURE__*/React.createElement(A.Kbd, null, "\u2318O"))), NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    className: 'nav-item' + (n.id === active ? ' on' : ''),
    onClick: () => setActive(n.id)
  }, /*#__PURE__*/React.createElement(A.Icon, {
    name: n.icon,
    size: 17
  }), n.label, n.cnt ? /*#__PURE__*/React.createElement("span", {
    className: "cnt"
  }, n.cnt) : null)), /*#__PURE__*/React.createElement("div", {
    className: "nav-grp"
  }, "Views"), /*#__PURE__*/React.createElement("button", {
    className: "nav-item",
    onClick: () => setActive('rfis')
  }, /*#__PURE__*/React.createElement(A.Icon, {
    name: "user",
    size: 17
  }), "Awaiting me"), /*#__PURE__*/React.createElement("button", {
    className: "nav-item",
    onClick: () => setActive('rfis')
  }, /*#__PURE__*/React.createElement(A.Icon, {
    name: "hold",
    size: 17,
    hold: true
  }), "Holding pours"), /*#__PURE__*/React.createElement("div", {
    className: "side-foot"
  }, /*#__PURE__*/React.createElement(A.Avatar, {
    name: "Charles Njoku",
    size: 28
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, "Charles Njoku"), /*#__PURE__*/React.createElement("div", {
    className: "rl"
  }, "INFORMATION MANAGER")))), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("h1", null, TITLES[active]), /*#__PURE__*/React.createElement("span", {
    className: "date"
  }, "WED 11 JUN \xB7 WK 24"), /*#__PURE__*/React.createElement("div", {
    className: "sp"
  }, /*#__PURE__*/React.createElement(A.Tooltip, {
    label: "Search everything",
    kbd: "\u2318K"
  }, /*#__PURE__*/React.createElement(A.IconButton, {
    "aria-label": "Command palette",
    onClick: () => setPal(true)
  }, /*#__PURE__*/React.createElement(A.Icon, {
    name: "search",
    size: 17
  }))), /*#__PURE__*/React.createElement(A.IconButton, {
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(A.Icon, {
    name: "bell",
    size: 17
  })), /*#__PURE__*/React.createElement(A.IconButton, {
    "aria-label": "Settings"
  }, /*#__PURE__*/React.createElement(A.Icon, {
    name: "settings",
    size: 17
  })))), /*#__PURE__*/React.createElement(Screen, null)), /*#__PURE__*/React.createElement("div", {
    className: "ai-blob"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-orb",
    role: "button",
    "aria-label": "Asite Intelligence",
    onClick: () => setAi(p => !p)
  }, /*#__PURE__*/React.createElement("i", null, "\u2726"))), /*#__PURE__*/React.createElement(AIPanel, {
    open: ai,
    onClose: () => setAi(false)
  }), /*#__PURE__*/React.createElement(CommandPalette, {
    open: pal,
    onClose: () => setPal(false),
    onNav: setActive
  }));
}
window.AsiteKit = window.AsiteKit || {};
window.AsiteKit.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/Convert.jsx
try { (() => {
// Convert — site paper becomes native, editable documents with per-field
// confidence and a single orange ask when a human eye is needed.
const C = window.AsiteDesignSystem_c4d97d;
const QUEUE = [{
  ref: 'P-1119',
  name: 'Pour card (site scan, handwriting)',
  pct: 100,
  status: 'done'
}, {
  ref: 'BRIEF-PKG2',
  name: 'Subcontractor brief — groundworks',
  pct: 64,
  status: 'progress'
}, {
  ref: 'PERMIT-CR',
  name: 'Crane oversail application',
  pct: 0,
  status: 'backlog'
}];
const FIELDS = [{
  label: 'Pour reference',
  value: 'P-1119',
  conf: 'hi'
}, {
  label: 'Element',
  value: 'Core wall — L26',
  conf: 'hi'
}, {
  label: 'Volume',
  value: '412 m³',
  conf: 'hi'
}, {
  label: 'Concrete grade',
  value: 'C40/50',
  conf: 'md'
}, {
  label: 'Inspector signature',
  value: 'C. Njoku (?)',
  conf: 'lo'
}];
const CONF_TONE = {
  hi: 'done',
  md: 'progress',
  lo: 'accent'
};
const CONF_LABEL = {
  hi: 'high',
  md: 'medium',
  lo: 'verify'
};
function Convert() {
  const [sel, setSel] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px',
      border: '1.5px dashed var(--border-strong)',
      borderRadius: 'var(--r-lg)',
      padding: '40px',
      textAlign: 'center',
      background: 'var(--aurora), transparent'
    }
  }, /*#__PURE__*/React.createElement(C.Icon, {
    name: "convert",
    size: 28,
    style: {
      margin: '0 auto',
      color: 'var(--text-2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '560 16px/1.4 var(--font-ui)',
      color: 'var(--text-1)',
      margin: '14px 0 4px'
    }
  }, "Drop site paper to make it native"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-3)'
    }
  }, "PDF, DOCX, photos and scans \u2014 handwriting included"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(C.Badge, {
    mono: true
  }, "PDF"), /*#__PURE__*/React.createElement(C.Badge, {
    mono: true
  }, "DOCX"), /*#__PURE__*/React.createElement(C.Badge, {
    mono: true
  }, "SCAN"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 0,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ghead"
  }, "Conversion queue ", /*#__PURE__*/React.createElement("span", {
    className: "cnt"
  }, "3 items")), QUEUE.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: q.ref,
    className: 'rowi' + (i === sel ? ' sel' : ''),
    style: {
      gridTemplateColumns: '18px 1fr 120px'
    },
    onClick: () => setSel(i)
  }, /*#__PURE__*/React.createElement(C.StatusDot, {
    status: q.status,
    dotOnly: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t",
    style: {
      marginBottom: 6
    }
  }, q.name), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 2,
      background: 'var(--bg-3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: q.pct + '%',
      borderRadius: 2,
      background: q.pct === 100 ? 'var(--st-done)' : 'var(--intent)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      textAlign: 'right'
    }
  }, q.pct === 100 ? 'done ✓' : q.pct ? q.pct + '%' : 'queued')))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: 'var(--bg-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono)',
      fontSize: 11.5,
      color: 'var(--text-3)'
    }
  }, QUEUE[sel].ref), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '560 14px/1.4 var(--font-ui)',
      color: 'var(--text-1)'
    }
  }, "Extracted fields")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-3)',
      marginBottom: 8
    }
  }, "One field needs a human eye \u2014 the rest are committed."), FIELDS.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.label,
    style: {
      padding: '11px 0',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      letterSpacing: 'var(--track-micro)',
      textTransform: 'uppercase',
      color: 'var(--text-3)'
    }
  }, f.label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(C.Badge, {
    tone: CONF_TONE[f.conf],
    size: "sm"
  }, CONF_LABEL[f.conf]))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13.5px/1.5 var(--font-ui)',
      color: 'var(--text-1)',
      background: f.conf === 'lo' ? 'var(--intent-wash)' : 'transparent',
      borderRadius: 4,
      padding: f.conf === 'lo' ? '3px 7px' : 0,
      display: 'inline-block'
    }
  }, f.value))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(C.Button, {
    variant: "primary"
  }, "Confirm & file as native doc"), /*#__PURE__*/React.createElement(C.Button, {
    variant: "ghost"
  }, "View source")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }));
}
window.AsiteScreens = window.AsiteScreens || {};
window.AsiteScreens.Convert = Convert;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/Convert.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/Dashboard.jsx
try { (() => {
// Dashboard — "The Morning Briefing". Not charts, a queue: what needs you,
// what the site is doing. Composes StatusDot, Badge, Kbd, Avatar, Card.
const {
  StatusDot,
  Badge,
  Kbd,
  Avatar,
  AvatarStack,
  Card,
  Button,
  Icon
} = window.AsiteDesignSystem_c4d97d;
function QueueRow({
  row,
  selected,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'rowi' + (selected ? ' sel' : ''),
    onClick: onClick
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: row.status,
    dotOnly: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "ref"
  }, row.ref), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, row.title), /*#__PURE__*/React.createElement("span", {
    className: "props"
  }, row.meta ? /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, row.meta) : null, row.kbd ? /*#__PURE__*/React.createElement(Kbd, null, row.kbd) : null));
}
const QUEUE = [{
  ref: 'RFI-0847',
  title: 'Respond — core wall cover clash L26',
  status: 'blocked',
  meta: 'holds P-1131',
  kbd: '↵'
}, {
  ref: 'STR-CAL-0098',
  title: 'Review — transfer beam load calc B02',
  status: 'progress',
  meta: 'due today'
}, {
  ref: 'TX-0204',
  title: 'Approve — transmittal to Arup',
  status: 'review',
  meta: 'today'
}, {
  ref: 'CONV-018',
  title: 'Verify one field — subcontractor brief',
  status: 'progress',
  meta: '1 field'
}, {
  ref: 'DWG-0412',
  title: 'Countersign — facade setting-out',
  status: 'review',
  meta: 'Rev C03'
}, {
  ref: 'MAT-019',
  title: 'Approve — Type 2 coupler submittal',
  status: 'backlog',
  meta: 'no SLA'
}];
const FEED = [['Kofi Danso', 'closed RFI-0846 — slab edge detail', '11m'], ['Anaya Bello', 'published DWG-0411 at Rev C02', '40m'], ['Convert', 'turned 3 pour cards into native docs', '1h'], ['Skanska', 'transmittal TX-0203 acknowledged', '2h']];
function Dashboard() {
  const [sel, setSel] = React.useState(0);
  const week = [40, 55, 48, 72, 64, 88, 50];
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "heroband"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      color: 'var(--intent-bright)',
      letterSpacing: '0.06em'
    }
  }, "WED 11 JUN \xB7 WK 24"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "Good morning, Charles", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--intent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 15,
      color: "#fff"
    })
  }, "Upload files"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Customise briefing"), /*#__PURE__*/React.createElement(Kbd, null, "\u2318K"))), /*#__PURE__*/React.createElement("div", {
    className: "statline"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "6"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "need you")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "due today")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "blocked")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "n",
    style: {
      color: 'var(--st-done)'
    }
  }, "98.4%"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "register health"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ghead"
  }, "Your queue ", /*#__PURE__*/React.createElement("span", {
    className: "cnt"
  }, "6"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--text-micro)',
      letterSpacing: 'var(--track-micro)',
      textTransform: 'uppercase',
      color: 'var(--text-3)'
    }
  }, "sorted by impact")), QUEUE.map((r, i) => /*#__PURE__*/React.createElement(QueueRow, {
    key: r.ref,
    row: r,
    selected: i === sel,
    onClick: () => setSel(i)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-micro)',
      letterSpacing: 'var(--track-micro)',
      textTransform: 'uppercase',
      color: 'var(--text-3)',
      marginBottom: 10
    }
  }, "Activity"), FEED.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      padding: '7px 0',
      font: '400 12.5px/1.5 var(--font-ui)',
      color: 'var(--text-2)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: f[0],
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-1)',
      fontWeight: 560
    }
  }, f[0]), " ", f[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--text-mono)',
      fontSize: 10,
      color: 'var(--text-3)',
      whiteSpace: 'nowrap'
    }
  }, f[2])))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-micro)',
      letterSpacing: 'var(--track-micro)',
      textTransform: 'uppercase',
      color: 'var(--text-3)'
    }
  }, "Deliverables / week"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--text-mono)',
      fontSize: 11,
      color: 'var(--text-1)'
    }
  }, "peak Sat")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 6,
      alignItems: 'end',
      height: 64,
      marginTop: 12
    }
  }, week.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: h + '%',
      borderRadius: '3px 3px 0 0',
      background: i === 5 ? 'var(--intent)' : 'var(--bg-3)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 6,
      font: 'var(--text-mono)',
      fontSize: 9,
      color: 'var(--text-3)',
      textAlign: 'center',
      marginTop: 6
    }
  }, ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, d)))))));
}
window.AsiteScreens = window.AsiteScreens || {};
window.AsiteScreens.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/Files.jsx
try { (() => {
// Files — the document workspace. Section headers + a grid of file cards,
// each a small surface with a thumb, name, and mono meta. Composes Card,
// StatusDot, Badge, SegmentedControl, Icon.
const F = window.AsiteDesignSystem_c4d97d;
const SECTIONS = [{
  name: 'Structural · L24–L26',
  files: [{
    ref: 'STR-DWG-0412',
    name: 'Facade setting-out',
    kind: 'DWG',
    rev: 'C03',
    status: 'review'
  }, {
    ref: 'STR-CAL-0098',
    name: 'Transfer beam calc',
    kind: 'PDF',
    rev: 'P02',
    status: 'progress'
  }, {
    ref: 'STR-DWG-0408',
    name: 'Core wall reinforcement',
    kind: 'DWG',
    rev: 'C02',
    status: 'done'
  }, {
    ref: 'STR-MOD-0021',
    name: 'Frame model — L26',
    kind: 'IFC',
    rev: 'C01',
    status: 'done'
  }]
}, {
  name: 'Field & capture',
  files: [{
    ref: 'P-1119',
    name: 'Pour card (site scan)',
    kind: 'SCAN',
    rev: 'A1',
    status: 'done'
  }, {
    ref: 'INS-0204',
    name: 'Rebar inspection',
    kind: 'PDF',
    rev: 'A1',
    status: 'done'
  }, {
    ref: 'BRIEF-PKG2',
    name: 'Groundworks brief',
    kind: 'DOCX',
    rev: '—',
    status: 'progress'
  }]
}];
function Thumb({
  kind
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 78,
      borderRadius: 6,
      background: 'var(--bg-1)',
      boxShadow: 'var(--inset)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      color: 'var(--text-3)',
      letterSpacing: '0.08em'
    }
  }, kind));
}
function Files() {
  const [sel, setSel] = React.useState('P-1119');
  const [view, setView] = React.useState('grid');
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 24px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1.4 var(--font-ui)',
      color: 'var(--text-3)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-1)',
      fontWeight: 560
    }
  }, "Mer Tower C"), " / Files"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(F.Input, {
    leadingIcon: /*#__PURE__*/React.createElement(F.Icon, {
      name: "search",
      size: 15
    }),
    placeholder: "Search files\u2026"
  })), /*#__PURE__*/React.createElement(F.SegmentedControl, {
    options: [{
      value: 'grid',
      label: 'Grid'
    }, {
      value: 'list',
      label: 'List'
    }],
    value: view,
    onChange: setView
  }), /*#__PURE__*/React.createElement(F.Button, {
    variant: "primary",
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement(F.Icon, {
      name: "upload",
      size: 14,
      color: "#fff"
    })
  }, "Upload"))), SECTIONS.map(sec => /*#__PURE__*/React.createElement("div", {
    key: sec.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-micro)',
      letterSpacing: 'var(--track-micro)',
      textTransform: 'uppercase',
      color: 'var(--text-3)',
      padding: '18px 24px 10px'
    }
  }, sec.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12,
      padding: '0 24px 8px'
    }
  }, sec.files.map(f => /*#__PURE__*/React.createElement(F.Card, {
    key: f.ref,
    variant: f.ref === sel ? 'selected' : 'interactive',
    onClick: () => setSel(f.ref)
  }, /*#__PURE__*/React.createElement(Thumb, {
    kind: f.kind
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '560 12.5px/1.4 var(--font-ui)',
      color: 'var(--text-1)',
      marginTop: 10,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement(F.StatusDot, {
    status: f.status,
    dotOnly: true,
    size: 7
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono)',
      fontSize: 10,
      color: 'var(--text-3)'
    }
  }, f.ref, " \xB7 ", f.rev))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }));
}
window.AsiteScreens = window.AsiteScreens || {};
window.AsiteScreens.Files = Files;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/Files.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/Register.jsx
try { (() => {
// Register — the RFI / work view. A filterable list on the left, a live
// detail pane on the right. Composes SegmentedControl, Input, Badge,
// StatusDot, Avatar, Button, Textarea, Kbd, Icon.
const R = window.AsiteDesignSystem_c4d97d;
const RFIS = [{
  ref: 'RFI-0847',
  title: 'Core wall cover clash — L26',
  status: 'blocked',
  who: 'Kofi Danso',
  disc: 'STR',
  age: '2d over',
  body: 'Rebar cover to the core wall at L26 conflicts with the cast-in MEP sleeves shown on M-0412 Rev C02. Confirm which governs before the next pour.',
  holds: 'P-1131'
}, {
  ref: 'STR-CAL-0098',
  title: 'Transfer beam load calc — B02',
  status: 'progress',
  who: 'Anaya Bello',
  disc: 'STR',
  age: 'due today',
  body: 'Verify the transfer beam load take-down against the revised column grid. Calc package attached for countersignature.',
  holds: null
}, {
  ref: 'TX-0204',
  title: 'Transmittal to Arup',
  status: 'review',
  who: 'You',
  disc: 'DOC',
  age: 'today',
  body: 'Issue the L24–L26 structural package to Arup for the S4 stage review. 12 documents, all at published revision.',
  holds: null
}, {
  ref: 'MAT-019',
  title: 'Type 2 coupler submittal',
  status: 'backlog',
  who: 'Skanska',
  disc: 'STR',
  age: 'no SLA',
  body: 'Material submittal for Type 2 mechanical couplers. Awaiting approval before procurement can release.',
  holds: null
}, {
  ref: 'DWG-0412',
  title: 'Facade setting-out — L26',
  status: 'review',
  who: 'Kofi Danso',
  disc: 'ARC',
  age: 'Rev C03',
  body: 'Setting-out drawing for the L26 facade brackets. Countersign to release to the cladding subcontractor.',
  holds: null
}];
function Register() {
  const [sel, setSel] = React.useState(0);
  const [range, setRange] = React.useState('mine');
  const rfi = RFIS[sel];
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 24px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(R.SegmentedControl, {
    options: [{
      value: 'mine',
      label: 'Awaiting me'
    }, {
      value: 'open',
      label: 'All open'
    }, {
      value: 'held',
      label: 'Holding pours'
    }],
    value: range,
    onChange: setRange
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(R.Input, {
    leadingIcon: /*#__PURE__*/React.createElement(R.Icon, {
      name: "search",
      size: 15
    }),
    placeholder: "Search RFIs\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(R.Badge, {
    mono: true
  }, "STR"), /*#__PURE__*/React.createElement(R.Badge, {
    mono: true
  }, "L26"), /*#__PURE__*/React.createElement(R.Button, {
    variant: "primary",
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement(R.Icon, {
      name: "plus",
      size: 14,
      color: "#fff"
    })
  }, "Raise RFI"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 388px',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--border)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ghead"
  }, "Register ", /*#__PURE__*/React.createElement("span", {
    className: "cnt"
  }, RFIS.length)), RFIS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.ref,
    className: 'rowi' + (i === sel ? ' sel' : ''),
    onClick: () => setSel(i)
  }, /*#__PURE__*/React.createElement(R.StatusDot, {
    status: r.status,
    dotOnly: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "ref"
  }, r.ref), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, r.title), /*#__PURE__*/React.createElement("span", {
    className: "props"
  }, /*#__PURE__*/React.createElement(R.Badge, {
    mono: true
  }, r.disc), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, r.age))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      background: 'var(--bg-1)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono)',
      fontSize: 11.5,
      color: 'var(--text-3)'
    }
  }, rfi.ref), /*#__PURE__*/React.createElement(R.StatusDot, {
    status: rfi.status
  }), rfi.holds ? /*#__PURE__*/React.createElement(R.Badge, {
    tone: "accent"
  }, "holds ", rfi.holds) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '560 17px/1.35 var(--font-ui)',
      letterSpacing: '-0.01em',
      color: 'var(--text-1)'
    }
  }, rfi.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--text-small)',
      color: 'var(--text-3)'
    }
  }, /*#__PURE__*/React.createElement(R.Avatar, {
    name: rfi.who,
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Raised by ", rfi.who)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px/1.65 var(--font-ui)',
      color: 'var(--text-2)',
      margin: 0
    }
  }, rfi.body), /*#__PURE__*/React.createElement(R.Textarea, {
    label: "Your response",
    placeholder: "Type a response, or @mention to route\u2026",
    rows: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(R.Button, {
    variant: "primary"
  }, "Respond & close"), /*#__PURE__*/React.createElement(R.Button, {
    variant: "ghost"
  }, "Reassign"), /*#__PURE__*/React.createElement(R.Kbd, null, "\u2318\u21B5")))));
}
window.AsiteScreens = window.AsiteScreens || {};
window.AsiteScreens.Register = Register;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/Register.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Illustration.jsx
try { (() => {
// Illustration — the brand's signature line-isometry: the register as a 3D
// object. Poured slabs solid, the held level in orange, the data plane
// floating above with the beam taking its measure. One pen, dashed = not yet.
function RegisterIso({
  width = '100%'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    viewBox: "0 0 560 460",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M100 340 L280 250 L460 340 L280 430 Z",
    stroke: "#26282C",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#FF5C26",
    strokeWidth: "4"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "160",
    y1: "356",
    x2: "184",
    y2: "368"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "184",
    y1: "356",
    x2: "160",
    y2: "368"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M180 310 L280 260 L380 310 L280 360 Z",
    fill: "#1A1B1E",
    stroke: "#33363B",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M180 310 L280 360 L280 378 L180 328 Z",
    fill: "#101214",
    stroke: "#33363B",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M380 310 L280 360 L280 378 L380 328 Z",
    fill: "#141517",
    stroke: "#33363B",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M195 252 L280 210 L365 252 L280 294 Z",
    fill: "rgba(255,92,38,0.13)",
    stroke: "#FF5C26",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M195 252 L280 294 L280 310 L195 268 Z",
    fill: "#141517",
    stroke: "#FF5C26",
    strokeWidth: "1.2",
    strokeOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M365 252 L280 294 L280 310 L365 268 Z",
    fill: "#141517",
    stroke: "#FF5C26",
    strokeWidth: "1.2",
    strokeOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M210 196 L280 161 L350 196 L280 231 Z",
    fill: "#1A1B1E",
    stroke: "#33363B",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M210 196 L280 231 L280 246 L210 211 Z",
    fill: "#101214",
    stroke: "#33363B",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M350 196 L280 231 L280 246 L350 211 Z",
    fill: "#141517",
    stroke: "#33363B",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M210 86 L280 51 L350 86 L280 121 Z",
    stroke: "#62666D",
    strokeWidth: "1.3",
    strokeDasharray: "4 5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "245",
    y1: "68.5",
    x2: "315",
    y2: "103.5",
    stroke: "#33363B",
    strokeWidth: "1",
    strokeDasharray: "3 5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "315",
    y1: "68.5",
    x2: "245",
    y2: "103.5",
    stroke: "#33363B",
    strokeWidth: "1",
    strokeDasharray: "3 5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "280",
    cy: "86",
    r: "4",
    fill: "#FF5C26"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "280",
    y1: "92",
    x2: "280",
    y2: "155",
    stroke: "#FF5C26",
    strokeWidth: "1.2",
    strokeDasharray: "2 6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "368",
    y1: "252",
    x2: "452",
    y2: "222",
    stroke: "#62666D",
    strokeWidth: "1.3",
    strokeDasharray: "2 6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "456",
    cy: "220",
    r: "3",
    fill: "#FF5C26"
  }), /*#__PURE__*/React.createElement("text", {
    x: "466",
    y: "224",
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "10",
    fill: "#8A8F98"
  }, "HOLD \xB7 L24"), /*#__PURE__*/React.createElement("path", {
    d: "M120 388 L150 373 L180 388 L150 403 Z",
    fill: "#141517",
    stroke: "#33363B",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 388 L150 403 L150 420 L120 405 Z",
    fill: "#101214",
    stroke: "#33363B",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M180 388 L150 403 L150 420 L180 405 Z",
    fill: "#141517",
    stroke: "#33363B",
    strokeWidth: "1.2"
  }));
}
window.AsiteIllustration = {
  RegisterIso
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Illustration.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
// Site — Asite.com assembled from the brand's web sections, with real content.
// Hero · proof strip · features · showcase · numbers · quote · CTA · footer.
const W = window.AsiteDesignSystem_c4d97d;
const {
  RegisterIso
} = window.AsiteIllustration;
const LOGOS = ['Berkeley', 'Kier', 'Laing', 'McLaren', 'Royal', 'TFL'];
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(8,9,10,0.8)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 60
    }
  }, /*#__PURE__*/React.createElement(W.AsiteWordmark, {
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 26,
      alignItems: 'center',
      font: '500 12.5px/1 var(--font-ui)',
      color: 'var(--text-2)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Platform"), /*#__PURE__*/React.createElement("span", null, "Industries"), /*#__PURE__*/React.createElement("span", null, "Pricing"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-1)'
    }
  }, "Log in"), /*#__PURE__*/React.createElement(W.Button, {
    variant: "primary",
    size: "sm"
  }, "Book a demo"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--aurora), var(--bg-0)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      alignItems: 'center',
      padding: '72px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      color: 'var(--intent-bright)',
      letterSpacing: '0.06em'
    }
  }, "THE COMMON DATA ENVIRONMENT"), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 'clamp(34px,4vw,52px)',
      lineHeight: 1.08,
      margin: '16px 0 0'
    }
  }, "Two million documents.", /*#__PURE__*/React.createElement("br", null), "One source of truth", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--intent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      maxWidth: 440,
      fontSize: 16,
      lineHeight: 1.65
    }
  }, "The common data environment for teams who build heavy things. Versioned, auditable, and fast enough for site time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(W.Button, {
    variant: "primary",
    size: "lg"
  }, "Book a demo"), /*#__PURE__*/React.createElement(W.Button, {
    variant: "secondary",
    size: "lg"
  }, "See the platform")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      marginTop: 44,
      font: '500 10.5px/1.5 var(--font-mono)',
      color: 'var(--text-3)',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "84,000+ COMPANIES"), /*#__PURE__*/React.createElement("span", null, "ISO 19650"), /*#__PURE__*/React.createElement("span", null, "SINCE 2001"))), /*#__PURE__*/React.createElement(RegisterIso, null)));
}
function ProofStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      padding: '26px 40px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      color: 'var(--text-3)',
      letterSpacing: '0.05em'
    }
  }, "TRUSTED BY 84,000+ COMPANIES"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 34,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, LOGOS.map(l => /*#__PURE__*/React.createElement("img", {
    key: l,
    src: '../../assets/logos/' + l + '-mono.png',
    alt: l,
    style: {
      height: 26,
      opacity: 0.7
    }
  })))));
}
function FeatureCard({
  icon,
  title,
  body,
  flagship
}) {
  return /*#__PURE__*/React.createElement(W.Card, {
    style: {
      padding: 26,
      position: 'relative'
    }
  }, flagship ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 22,
      right: 22
    }
  }, /*#__PURE__*/React.createElement(W.Icon, {
    name: "hold",
    size: 20,
    hold: true
  })) : null, /*#__PURE__*/React.createElement(W.Icon, {
    name: icon,
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '560 15px/1.4 var(--font-ui)',
      color: 'var(--text-1)',
      margin: '14px 0 6px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px/1.6 var(--font-ui)',
      color: 'var(--text-3)',
      margin: 0
    }
  }, body));
}
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-wrap",
    style: {
      padding: '64px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 28,
      marginBottom: 36
    }
  }, "Built for the way sites work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "files",
    title: "Common Data Environment",
    body: "Every drawing at revision, every action audited. The register that holds two million documents to tolerance.",
    flagship: true
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "convert",
    title: "Convert",
    body: "Site paper becomes native, editable documents \u2014 with per-field confidence and full audit."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "hold",
    title: "Hold points",
    body: "Decisions block exactly what they should \u2014 pours wait for answers, automatically."
  }))));
}
function Showcase() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--aurora), var(--bg-1)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-wrap",
    style: {
      padding: '64px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'baseline',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 26
    }
  }, "The queue knows the site"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.5 var(--font-ui)',
      color: 'var(--text-3)'
    }
  }, "\u2014 sorted by impact, not by date.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mh"
  }, /*#__PURE__*/React.createElement(W.AsiteMark, {
    size: 14
  }), "Your queue", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: '400 9px/1 var(--font-mono)',
      color: 'var(--text-3)'
    }
  }, "6 ITEMS")), /*#__PURE__*/React.createElement("div", {
    className: "row sel"
  }, /*#__PURE__*/React.createElement(W.StatusDot, {
    status: "blocked",
    dotOnly: true,
    size: 7
  }), /*#__PURE__*/React.createElement("span", {
    className: "rf"
  }, "RFI-0847"), /*#__PURE__*/React.createElement("span", {
    className: "tt"
  }, "Respond \u2014 core wall cover clash L26"), /*#__PURE__*/React.createElement("span", {
    className: "mm"
  }, "holds P-1131")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(W.StatusDot, {
    status: "progress",
    dotOnly: true,
    size: 7
  }), /*#__PURE__*/React.createElement("span", {
    className: "rf"
  }, "STR-CAL-0098"), /*#__PURE__*/React.createElement("span", {
    className: "tt"
  }, "Review \u2014 transfer beam load calc"), /*#__PURE__*/React.createElement("span", {
    className: "mm"
  }, "due today")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(W.StatusDot, {
    status: "review",
    dotOnly: true,
    size: 7
  }), /*#__PURE__*/React.createElement("span", {
    className: "rf"
  }, "TX-0204"), /*#__PURE__*/React.createElement("span", {
    className: "tt"
  }, "Approve \u2014 transmittal to Arup"), /*#__PURE__*/React.createElement("span", {
    className: "mm"
  }, "today"))))));
}
function Numbers() {
  const items = [['2001', 'defining the CDE since'], ['84k+', 'companies on Asite'], ['£2bn+', 'programmes carried']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32,
      padding: '48px 40px'
    }
  }, items.map(n => /*#__PURE__*/React.createElement("div", {
    key: n[0]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '590 40px/1 var(--font-ui)',
      letterSpacing: 'var(--track-tight)',
      color: 'var(--text-1)'
    }
  }, n[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-ui)',
      color: 'var(--text-3)',
      marginTop: 8
    }
  }, n[1]))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--intent-wash)',
      borderRadius: 'var(--r-md)',
      padding: 16,
      margin: '-16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '590 40px/1 var(--font-ui)',
      letterSpacing: 'var(--track-tight)',
      color: 'var(--intent-bright)'
    }
  }, "0"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-ui)',
      color: 'var(--text-2)',
      marginTop: 8
    }
  }, "documents lost. Ever."))));
}
function Quote() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-1)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-wrap",
    style: {
      padding: '72px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 'clamp(22px,2.6vw,32px)',
      maxWidth: 780,
      margin: '0 auto',
      lineHeight: 1.3
    }
  }, "\"The first platform that treats site time as sacred", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--intent)'
    }
  }, "."), "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      font: '500 11px/1.7 var(--font-mono)',
      color: 'var(--text-3)',
      letterSpacing: '0.05em'
    }
  }, "HEAD OF INFORMATION MANAGEMENT", /*#__PURE__*/React.createElement("br", null), "TIER-1 CONTRACTOR \xB7 \xA32BN PROGRAMME")));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--intent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      padding: '64px 40px'
    }
  }, /*#__PURE__*/React.createElement(W.AsiteMark, {
    size: 60,
    color: "#fff",
    mono: true,
    style: {
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 'clamp(28px,3.4vw,42px)',
      color: 'var(--intent-ink)'
    }
  }, "Stop losing decisions", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F7F8F8'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: '400 15px/1.6 var(--font-ui)',
      color: 'rgba(26,14,8,0.75)',
      maxWidth: 440
    }
  }, "A 30-minute walkthrough with your own project structure. No slideware.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--intent-ink)',
      color: '#F7F8F8',
      padding: '14px 26px',
      border: 'none',
      borderRadius: 'var(--r-md)',
      font: '560 14px/1 var(--font-ui)',
      cursor: 'pointer'
    }
  }, "Book a demo"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 10px/1 var(--font-mono)',
      color: 'rgba(26,14,8,0.6)',
      letterSpacing: '0.06em'
    }
  }, "NO CREDIT CARD \xB7 ISO 19650 READY"))));
}
function Footer() {
  const cols = [['PLATFORM', ['CDE', 'Convert', 'Field', '3D Repo']], ['COMPANY', ['About', 'Careers', 'Awards', 'Contact']], ['RESOURCES', ['Case studies', 'Blog', 'API guide', 'Support']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-stripe-h",
    style: {
      height: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "site-wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32,
      padding: '52px 40px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(W.AsiteWordmark, {
    size: 24
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      font: '400 12.5px/1.65 var(--font-ui)',
      color: 'var(--text-3)',
      maxWidth: 240
    }
  }, "The common data environment for teams who build heavy things.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c[0]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      color: 'var(--text-3)',
      letterSpacing: '0.08em',
      marginBottom: 14
    }
  }, c[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      font: '500 13px/1.4 var(--font-ui)',
      color: 'var(--text-2)'
    }
  }, c[1].map(x => /*#__PURE__*/React.createElement("span", {
    key: x
  }, x)))))), /*#__PURE__*/React.createElement("div", {
    className: "site-wrap",
    style: {
      display: 'flex',
      gap: 24,
      padding: '18px 40px',
      borderTop: '1px solid var(--border)',
      font: '500 10px/1.4 var(--font-mono)',
      color: 'var(--text-3)',
      letterSpacing: '0.05em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ASITE"), /*#__PURE__*/React.createElement("span", null, "PRIVACY"), /*#__PURE__*/React.createElement("span", null, "TERMS"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "BUILT ON ONE SOURCE OF TRUTH")));
}
function Site() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ProofStrip, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Showcase, null), /*#__PURE__*/React.createElement(Numbers, null), /*#__PURE__*/React.createElement(Quote, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.AsiteSite = {
  Site
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AsiteMark = __ds_scope.AsiteMark;

__ds_ns.AsiteWordmark = __ds_scope.AsiteWordmark;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastViewport = __ds_scope.ToastViewport;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.MenuDivider = __ds_scope.MenuDivider;

__ds_ns.MenuLabel = __ds_scope.MenuLabel;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
