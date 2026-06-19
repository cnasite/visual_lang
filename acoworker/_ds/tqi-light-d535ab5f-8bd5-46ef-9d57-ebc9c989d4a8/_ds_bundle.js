/* @ds-bundle: {"format":3,"namespace":"AsiteTheQuietInstrument_d535ab","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"Mark","sourcePath":"components/core/Mark.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"Choice","sourcePath":"components/forms/Choice.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"b8f101964762","components/core/Button.jsx":"b578e0138f6b","components/core/Card.jsx":"113fa678df97","components/core/Chip.jsx":"e05e9166ad7a","components/core/Kbd.jsx":"2e2139f4710c","components/core/Mark.jsx":"4c760034b239","components/core/StatusDot.jsx":"7cd72f9b7cc5","components/forms/Choice.jsx":"3154e14a8ab6","components/forms/Input.jsx":"61430677bbb7","components/forms/SegmentedControl.jsx":"a9933866103c","components/forms/Select.jsx":"26415d9067ee","components/forms/Toggle.jsx":"33ce4453f525","ui_kits/product/Dashboard.jsx":"2cab9c206754","ui_kits/product/Files.jsx":"dbb596ff8303","ui_kits/product/Mail.jsx":"d28ac1aa97e8","ui_kits/product/Onboarding.jsx":"8ad058e477d4","ui_kits/product/Overlays.jsx":"85b878f68deb","ui_kits/product/Sidebar.jsx":"71ea11ce094e","ui_kits/product/app.jsx":"1673fb50ff82"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AsiteTheQuietInstrument_d535ab = window.AsiteTheQuietInstrument_d535ab || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Asite — Avatar. A small monogram chip; raised gray with inset hairline. */
function Avatar({
  initials = '',
  size = 22,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: 'var(--bg-3)',
      boxShadow: 'var(--inset)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `560 ${Math.round(size * 0.4)}px/1 var(--font-ui)`,
      color: 'var(--text-2)',
      flex: 'none',
      ...style
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asite — Button. The single rationed primary action wears Survey Orange;
 * everything else stays monochrome (secondary = raised gray, ghost = text only).
 */

const STYLE_ID = 'aq-button-styles';
const CSS = `
.aq-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:var(--font-ui);font-weight:560;border:none;cursor:pointer;white-space:nowrap;
  border-radius:var(--r-md);transition:background var(--t-fast) var(--ease),color var(--t-fast) var(--ease),box-shadow var(--t-fast) var(--ease),opacity var(--t-fast) var(--ease);}
.aq-btn:focus-visible{outline:none;box-shadow:var(--intent-ring);}
.aq-btn--sm{font-size:12.5px;line-height:1;padding:7px 13px;}
.aq-btn--md{font-size:13.5px;line-height:1;padding:10px 18px;}
.aq-btn--full{width:100%;}
.aq-btn--primary{background:var(--intent);color:var(--text-on-intent);}
.aq-btn--primary:hover{background:var(--intent-bright);}
.aq-btn--primary:active{background:var(--intent-deep);}
.aq-btn--secondary{background:var(--bg-3);color:var(--text-1);box-shadow:var(--inset);}
.aq-btn--secondary:hover{background:var(--bg-2);}
.aq-btn--ghost{background:none;color:var(--text-2);}
.aq-btn--ghost:hover{color:var(--text-1);background:var(--bg-2);}
.aq-btn:disabled{opacity:0.45;cursor:not-allowed;}
.aq-btn:disabled:hover{background:var(--intent);}
.aq-btn--secondary:disabled:hover{background:var(--bg-3);}
.aq-btn--ghost:disabled:hover{background:none;color:var(--text-2);}
.aq-btn__icon{display:inline-flex;flex:none;}
`;
function useInjectedStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  disabled = false,
  type = 'button',
  onClick,
  ...rest
}) {
  useInjectedStyles();
  const cls = ['aq-btn', `aq-btn--${variant}`, `aq-btn--${size}`, fullWidth ? 'aq-btn--full' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled,
    onClick: onClick
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "aq-btn__icon"
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asite — Card. A surface with the inset hairline. Depth comes from the border
 * and light, not from fills. Variants raise, become interactive, or take the
 * intent wash when selected.
 */

const STYLE_ID = 'aq-card-styles';
const CSS = `
.aq-card{background:var(--bg-2);border-radius:var(--r-lg);box-shadow:var(--inset);
  padding:var(--space-6);transition:background var(--t-base) var(--ease),box-shadow var(--t-base) var(--ease),transform var(--t-base) var(--ease);}
.aq-card--raised{box-shadow:var(--inset),var(--shadow-card);}
.aq-card--interactive{cursor:pointer;}
.aq-card--interactive:hover{background:var(--bg-3);transform:translateY(-2px);box-shadow:var(--inset),var(--shadow-card);}
.aq-card--selected{background:var(--intent-wash);box-shadow:var(--inset),0 0 0 1px rgba(232,80,28,0.4);}
`;
function useInjectedStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Card({
  children,
  variant = 'default',
  as = 'div',
  style,
  ...rest
}) {
  useInjectedStyles();
  const Tag = as;
  const cls = ['aq-card', variant !== 'default' ? `aq-card--${variant}` : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Asite — Chip / property pill. A small metadata token: raised gray with inset hairline. */
function Chip({
  children,
  mono = false,
  dot = null,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      font: mono ? '500 10.5px/1 var(--font-mono)' : '500 11.5px/1 var(--font-ui)',
      letterSpacing: mono ? '0.05em' : 'normal',
      color: 'var(--text-2)',
      background: 'var(--bg-2)',
      boxShadow: 'var(--inset)',
      borderRadius: 'var(--r-sm)',
      padding: '5px 10px',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "u-dot",
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: dot,
      flex: 'none'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Asite — Kbd. A keyboard hint chip (⌘K, ↵). Raised gray, mono-adjacent. */
function Kbd({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("kbd", _extends({
    style: {
      font: '500 11px/1 var(--font-ui)',
      color: 'var(--text-2)',
      background: 'var(--bg-3)',
      borderRadius: '4px',
      boxShadow: 'var(--inset)',
      padding: '3px 6px',
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/core/Mark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asite — Mark. The brand logomark: monochrome body, Survey Orange arrow.
 * Inline SVG so it inherits crisply at any size. Use `mono` on orange fields
 * (renders the whole mark in a single ink color).
 */
function Mark({
  size = 24,
  mono = false,
  ink = '#16181C',
  style,
  ...rest
}) {
  const body = mono ? ink : '#16181C';
  const arrow = mono ? ink : '#E8501C';
  const w = size;
  const h = Math.round(size * (396 / 377));
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: w,
    height: h,
    viewBox: "0 0 377 396",
    style: style,
    "aria-label": "Asite",
    role: "img"
  }, rest), /*#__PURE__*/React.createElement("path", {
    fill: body,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M62.2865 5.49758C48.8039 8.10323 56.8012 26.2896 96.8901 24.907L230.691 23.7371C236.176 23.7371 246.532 24.588 249.3 27.4595L289.645 50.804C305.024 61.4393 295.182 59.8972 284.519 60.2162L126.367 65.5339C108.835 66.1188 106.169 68.2459 92.3788 58.3019C41.4218 21.4505 7.3821 5.49758 0 62.1838C0.615175 118.905 1.24744 175.769 1.89679 232.774C2.81955 245.377 24.4532 247.451 24.8121 231.498C24.8121 174.174 24.8121 126.74 24.8121 69.4158C24.8121 58.036 29.9385 56.6002 40.1915 65.3744L68.0794 92.4412C77.6146 100.949 77.9735 111.106 77.8709 125.411V295.895C77.2045 307.806 80.6905 323.653 66.4389 308.817L36.7055 276.273C19.0192 263.404 17.7888 283.132 21.3261 288.929C40.5132 319.361 61.7558 348.344 84.8942 375.66C102.734 396.452 99.2996 396.93 123.804 395.016L343.473 372.682C360.39 370.555 375.821 354.017 377 322.004V155.987C374.744 121.316 341.115 122.858 343.012 155.987L344.242 307.487C343.575 328.439 341.73 328.758 316.2 334.501C296.566 338.808 200.496 351.677 146.412 348.539C126.777 347.423 120.421 342.477 120.421 325.993V134.557C120.421 109.564 136.261 101.322 159.074 99.9923L352.444 91.6968C383.203 83.7735 358.186 49.1555 343.473 42.4021C327.683 35.436 273.189 9.96441 249.095 2.04111C244.671 0.289835 239.91 -0.348017 235.202 0.179926L62.2865 5.49758Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: arrow,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M152.769 227.51L152.41 197.784L251.607 191.722L205.212 150.776L247.864 149.234L300.975 199.432L236.689 267.924L202.854 264.627L249.351 217.991L152.769 227.51Z"
  }));
}
Object.assign(__ds_scope, { Mark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Mark.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asite — StatusDot. Status is always an 8px dot plus plain text,
 * never a filled pill or colored row. This IS the status system.
 */

const COLORS = {
  done: 'var(--st-done)',
  progress: 'var(--st-progress)',
  review: 'var(--st-review)',
  blocked: 'var(--st-blocked)',
  backlog: 'var(--st-backlog)',
  intent: 'var(--intent)'
};
function StatusDot({
  status = 'backlog',
  children,
  size = 8,
  glow = false,
  style,
  ...rest
}) {
  const color = COLORS[status] || COLORS.backlog;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      font: '400 13px/1.4 var(--font-ui)',
      color: 'var(--text-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: color,
      flex: 'none',
      boxShadow: glow ? `0 0 8px ${color}` : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/forms/Choice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asite — Choice. Checkbox (square) or radio (circle). Unchecked is a hairline
 * box on canvas; checked fills Survey Orange with a white glyph.
 */

const STYLE_ID = 'aq-choice-styles';
const CSS = `
.aq-pick{display:inline-flex;align-items:center;gap:10px;cursor:pointer;
  font:400 13px/1.4 var(--font-ui);color:var(--text-1);padding:3px 0;}
.aq-pick input{appearance:none;-webkit-appearance:none;width:15px;height:15px;margin:0;flex:none;
  background:var(--bg-0);border:1px solid var(--border-strong);cursor:pointer;position:relative;
  transition:background var(--t-base) var(--ease),border-color var(--t-base) var(--ease);}
.aq-pick input[type="checkbox"]{border-radius:4px;}
.aq-pick input[type="radio"]{border-radius:50%;}
.aq-pick input:checked{background:var(--intent);border-color:var(--intent);}
.aq-pick input[type="checkbox"]:checked::after{content:"";position:absolute;left:4.5px;top:1.5px;
  width:3.5px;height:7.5px;border:solid #fff;border-width:0 1.5px 1.5px 0;transform:rotate(45deg);}
.aq-pick input[type="radio"]:checked::after{content:"";position:absolute;inset:4px;border-radius:50%;background:#fff;}
.aq-pick input:focus-visible{outline:none;box-shadow:var(--intent-ring);}
.aq-pick--disabled{opacity:0.5;cursor:not-allowed;}
`;
function useInjectedStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Choice({
  type = 'checkbox',
  children,
  disabled = false,
  style,
  ...rest
}) {
  useInjectedStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: `aq-pick${disabled ? ' aq-pick--disabled' : ''}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    disabled: disabled
  }, rest)), children ? /*#__PURE__*/React.createElement("span", null, children) : null);
}
Object.assign(__ds_scope, { Choice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Choice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asite — Input. Calm field on the canvas surface; the orange appears only
 * as the focus ring (the live beam). Supports multiline, mono entry, and a
 * trailing unit affix for engineering values.
 */

const STYLE_ID = 'aq-input-styles';
const CSS = `
.aq-input{width:100%;background:var(--bg-0);border:1px solid var(--border);border-radius:var(--r-md);
  color:var(--text-1);font:400 13px/1.4 var(--font-ui);padding:9px 12px;outline:none;
  transition:border-color var(--t-base) var(--ease),box-shadow var(--t-base) var(--ease);}
.aq-input::placeholder{color:var(--text-3);}
.aq-input:focus{border-color:var(--intent);box-shadow:var(--intent-ring);}
.aq-input--mono{font:400 12.5px/1.4 var(--font-mono);}
.aq-input--textarea{min-height:88px;resize:vertical;line-height:1.55;}
.aq-input--affix{text-align:right;padding-right:44px;font-variant-numeric:tabular-nums;}
.aq-field{position:relative;}
.aq-field__unit{position:absolute;right:12px;top:50%;transform:translateY(-50%);
  font:400 11px/1 var(--font-mono);color:var(--text-3);pointer-events:none;}
`;
function useInjectedStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Input({
  multiline = false,
  mono = false,
  unit = null,
  style,
  ...rest
}) {
  useInjectedStyles();
  const cls = ['aq-input', mono ? 'aq-input--mono' : '', multiline ? 'aq-input--textarea' : '', unit ? 'aq-input--affix' : ''].filter(Boolean).join(' ');
  if (multiline) {
    return /*#__PURE__*/React.createElement("textarea", _extends({
      className: cls,
      style: style
    }, rest));
  }
  if (unit) {
    return /*#__PURE__*/React.createElement("span", {
      className: "aq-field"
    }, /*#__PURE__*/React.createElement("input", _extends({
      className: cls,
      style: style
    }, rest)), /*#__PURE__*/React.createElement("span", {
      className: "aq-field__unit"
    }, unit));
  }
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    style: style
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asite — SegmentedControl. An inset track of options; the active segment
 * raises onto a card surface. Monochrome — no orange.
 */

const STYLE_ID = 'aq-seg-styles';
const CSS = `
.aq-seg{display:inline-flex;background:var(--bg-0);border-radius:var(--r-md);box-shadow:var(--inset);padding:2px;}
.aq-seg__opt{padding:5px 11px;border-radius:6px;border:none;background:none;cursor:pointer;
  font:500 11.5px/1.4 var(--font-ui);color:var(--text-3);transition:color var(--t-fast) var(--ease),background var(--t-fast) var(--ease);}
.aq-seg__opt:hover{color:var(--text-1);}
.aq-seg__opt--on{background:var(--bg-3);color:var(--text-1);box-shadow:var(--inset);}
`;
function useInjectedStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function SegmentedControl({
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  useInjectedStyles();
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "aq-seg",
    role: "tablist",
    style: style
  }, rest), norm.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "tab",
    "aria-selected": o.value === value,
    className: `aq-seg__opt${o.value === value ? ' aq-seg__opt--on' : ''}`,
    onClick: () => onChange && onChange(o.value)
  }, o.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Asite — Select. A controlled dropdown: a calm trigger on the canvas surface
 * with a popover menu. The selected row takes the intent wash.
 */

const STYLE_ID = 'aq-select-styles';
const CSS = `
.aq-sel{position:relative;display:inline-block;min-width:200px;}
.aq-sel__btn{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;
  background:var(--bg-0);border:1px solid var(--border);border-radius:var(--r-md);color:var(--text-1);
  font:400 13px/1.4 var(--font-ui);padding:9px 12px;cursor:pointer;text-align:left;
  transition:border-color var(--t-base) var(--ease),box-shadow var(--t-base) var(--ease);}
.aq-sel__btn:focus-visible{outline:none;border-color:var(--intent);box-shadow:var(--intent-ring);}
.aq-sel__btn--open{border-color:var(--intent);box-shadow:var(--intent-ring);}
.aq-sel__car{font-size:9px;color:var(--text-3);}
.aq-sel__menu{position:absolute;left:0;right:0;margin-top:6px;z-index:30;background:var(--bg-2);
  border-radius:var(--r-md);box-shadow:var(--inset),var(--shadow-pop);padding:5px;}
.aq-sel__opt{display:block;width:100%;text-align:left;border:none;background:none;cursor:pointer;
  font:400 12.5px/1.4 var(--font-ui);color:var(--text-2);padding:8px 9px;border-radius:var(--r-sm);}
.aq-sel__opt:hover{background:var(--bg-3);color:var(--text-1);}
.aq-sel__opt--on{background:var(--intent-wash);color:var(--text-1);}
`;
function useInjectedStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  style,
  ...rest
}) {
  useInjectedStyles();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const current = norm.find(o => o.value === value);
  React.useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "aq-sel",
    ref: ref,
    style: style
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `aq-sel__btn${open ? ' aq-sel__btn--open' : ''}`,
    onClick: () => setOpen(v => !v),
    "aria-haspopup": "listbox",
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: current ? 'var(--text-1)' : 'var(--text-3)'
    }
  }, current ? current.label : placeholder), /*#__PURE__*/React.createElement("span", {
    className: "aq-sel__car"
  }, "\u25BE")), open ? /*#__PURE__*/React.createElement("div", {
    className: "aq-sel__menu",
    role: "listbox"
  }, norm.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "option",
    "aria-selected": o.value === value,
    className: `aq-sel__opt${o.value === value ? ' aq-sel__opt--on' : ''}`,
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    }
  }, o.label))) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Asite — Toggle (switch). Off is raised gray; on is Survey Orange. */

const STYLE_ID = 'aq-toggle-styles';
const CSS = `
.aq-tgl{display:inline-flex;align-items:center;gap:10px;cursor:pointer;
  font:400 13px/1.4 var(--font-ui);color:var(--text-1);}
.aq-tgl input{position:absolute;opacity:0;width:0;height:0;}
.aq-tgl__track{width:34px;height:20px;border-radius:999px;background:var(--bg-3);
  box-shadow:var(--inset);position:relative;flex:none;transition:background var(--t-base) var(--ease);}
.aq-tgl__track::after{content:"";position:absolute;top:3px;left:3px;width:14px;height:14px;border-radius:50%;
  background:var(--text-2);transition:transform var(--t-base) var(--ease),background var(--t-base) var(--ease);}
.aq-tgl input:checked + .aq-tgl__track{background:var(--intent);}
.aq-tgl input:checked + .aq-tgl__track::after{transform:translateX(14px);background:#fff;}
.aq-tgl input:focus-visible + .aq-tgl__track{box-shadow:var(--inset),var(--intent-ring);}
`;
function useInjectedStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Toggle({
  checked,
  defaultChecked,
  onChange,
  children,
  disabled = false,
  style,
  ...rest
}) {
  useInjectedStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: "aq-tgl",
    style: {
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "aq-tgl__track"
  }), children ? /*#__PURE__*/React.createElement("span", null, children) : null);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/Dashboard.jsx
try { (() => {
/* Asite product app — Dashboard (The Morning Briefing). A queue, not charts. */
const {
  Button,
  Kbd,
  StatusDot
} = window.AsiteTheQuietInstrument_d535ab;
const QUEUE = [{
  st: 'blocked',
  ref: 'RFI-0847',
  t: 'Respond — core wall cover clash L26',
  meta: 'holds P-1131',
  kbd: '↵'
}, {
  st: 'progress',
  ref: 'STR-CAL-0098',
  t: 'Review — transfer beam load calc B02',
  meta: 'due today'
}, {
  st: 'review',
  ref: 'MAT-019',
  t: 'Approve — Type 2 coupler submittal',
  meta: 'in review'
}, {
  st: 'progress',
  ref: 'CONV-018',
  t: 'Verify one field — subcontractor brief',
  meta: '97% conf.'
}, {
  st: 'backlog',
  ref: 'DWG-0412',
  t: 'Distribute — Rev C03 to site team',
  meta: '12 recipients'
}, {
  st: 'backlog',
  ref: 'P-1131',
  t: 'Release hold — once RFI-0847 closes',
  meta: 'blocked'
}];
const FEED = [{
  who: 'Anaya B.',
  what: 'converted a site scan into',
  ref: 'P-1119',
  tm: '09:12'
}, {
  who: 'Kofi D.',
  what: 'answered',
  ref: 'RFI-0841',
  tm: '08:47'
}, {
  who: 'aMail',
  what: 'filed 14 threads to the register',
  ref: '',
  tm: '08:30'
}, {
  who: 'Site',
  what: 'logged the morning pour —',
  ref: 'Slab 24',
  tm: '07:55'
}];
function Dashboard({
  onPalette
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mhead"
  }, /*#__PURE__*/React.createElement("h3", null, "Good morning, Charles"), /*#__PURE__*/React.createElement("span", {
    className: "cnt"
  }, "WED 11 JUN \xB7 WK 24"), /*#__PURE__*/React.createElement("div", {
    className: "sp"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onPalette
  }, "Customise"), /*#__PURE__*/React.createElement(Kbd, null, "\u2318K"))), /*#__PURE__*/React.createElement("div", {
    className: "statline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "6"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "need you")), /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "due today")), /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "blocked")), /*#__PURE__*/React.createElement("div", {
    className: "st",
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
    className: "dash-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qcol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ghead"
  }, "Your queue ", /*#__PURE__*/React.createElement("span", {
    className: "cnt"
  }, "6")), QUEUE.map((q, i) => /*#__PURE__*/React.createElement("div", {
    className: `rowi${i === 0 ? ' sel' : ''}`,
    key: q.ref
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: q.st,
    glow: q.st === 'blocked' && i === 0
  }), /*#__PURE__*/React.createElement("span", {
    className: "ref"
  }, q.ref), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, q.t), /*#__PURE__*/React.createElement("span", {
    className: "props"
  }, /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, q.meta), q.kbd ? /*#__PURE__*/React.createElement(Kbd, null, q.kbd) : null))), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("span", null, "ROUTED BY ROLE \xB7 ISO 19650 DUTIES"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "\u2318K REACHES EVERYTHING"))), /*#__PURE__*/React.createElement("div", {
    className: "pcol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pcard2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Since you left"), FEED.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "feed",
    key: i
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, f.who), " ", f.what, " ", f.ref ? /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px'
    }
  }, f.ref) : null), /*#__PURE__*/React.createElement("span", {
    className: "tm"
  }, f.tm)))), /*#__PURE__*/React.createElement("div", {
    className: "pcard2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Deliverables this week"), /*#__PURE__*/React.createElement("div", {
    className: "week"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '40%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '62%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '54%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '78%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hot",
    style: {
      height: '96%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '34%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "wlbl"
  }, /*#__PURE__*/React.createElement("span", null, "M"), /*#__PURE__*/React.createElement("span", null, "T"), /*#__PURE__*/React.createElement("span", null, "W"), /*#__PURE__*/React.createElement("span", null, "T"), /*#__PURE__*/React.createElement("span", null, "F"), /*#__PURE__*/React.createElement("span", null, "S"), /*#__PURE__*/React.createElement("span", null, "S"))), /*#__PURE__*/React.createElement("div", {
    className: "pcard2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "The one window"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 12.5px/1.6 var(--font-ui)',
      color: 'var(--text-2)'
    }
  }, "Dry until 14:00, then rain. The L27 pour has a four-hour window \u2014 the crane is booked, the gang is briefed."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      font: '500 10px/1.6 var(--font-mono)',
      color: 'var(--text-3)',
      letterSpacing: '0.05em'
    }
  }, "POUR WINDOW \xB7 10:00\u201314:00", /*#__PURE__*/React.createElement("br", null), "NEXT HOLD LIFTS ON RFI-0847")))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/Files.jsx
try { (() => {
/* Asite product app — Files workspace. Controlled documents; folders first, grid view. */
const {
  Button,
  Kbd,
  SegmentedControl
} = window.AsiteTheQuietInstrument_d535ab;
const FOLDERS = [{
  name: '00 — WIP',
  meta: '48 files'
}, {
  name: '01 — Shared',
  meta: '126 files'
}, {
  name: '02 — Published',
  meta: '54 files'
}, {
  name: '03 — Archive',
  meta: '212 files'
}];
const FILES = [{
  name: 'STR-DWG-0412',
  kind: 'PDF',
  rev: 'C03',
  sel: true
}, {
  name: 'MEP-DWG-0118',
  kind: 'PDF',
  rev: 'B11'
}, {
  name: 'Pour card P-1119',
  kind: 'DOC',
  rev: 'native'
}, {
  name: 'Coupler submittal',
  kind: 'PDF',
  rev: 'in review'
}, {
  name: 'Site diary WK24',
  kind: 'DOC',
  rev: 'native'
}, {
  name: 'Federated model',
  kind: 'IFC',
  rev: 'r.42'
}, {
  name: 'Method statement',
  kind: 'DOC',
  rev: 'v3'
}, {
  name: 'Crane oversail',
  kind: 'PDF',
  rev: 'queued'
}];
function Files() {
  const [view, setView] = React.useState('Grid');
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mhead"
  }, /*#__PURE__*/React.createElement("h3", null, "Files"), /*#__PURE__*/React.createElement("span", {
    className: "cnt"
  }, "city-hospital / drawings"), /*#__PURE__*/React.createElement("div", {
    className: "sp"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ['List', 'Grid'],
    value: view,
    onChange: setView
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("span", null, "\u2191")
  }, "Upload"))), /*#__PURE__*/React.createElement("div", {
    className: "fbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "prop"
  }, "\u25A4 All types"), /*#__PURE__*/React.createElement("span", {
    className: "prop"
  }, "\u25F7 Any date"), /*#__PURE__*/React.createElement("span", {
    className: "prop"
  }, "\u25CD Any author"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: '400 11px/1 var(--font-mono)',
      color: 'var(--text-3)'
    }
  }, "230 controlled files \xB7 Search ", /*#__PURE__*/React.createElement(Kbd, null, "\u2318K"))), /*#__PURE__*/React.createElement("div", {
    className: "fsec"
  }, "Folders"), /*#__PURE__*/React.createElement("div", {
    className: "fgrid"
  }, FOLDERS.map(f => /*#__PURE__*/React.createElement("div", {
    className: "fcard",
    key: f.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumb",
    style: {
      background: 'var(--bg-1)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "var(--text-3)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6 H8 L10 8 H17 V15.5 H3 Z"
  }))), /*#__PURE__*/React.createElement("b", null, f.name), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, f.meta)))), /*#__PURE__*/React.createElement("div", {
    className: "fsec"
  }, "Documents"), /*#__PURE__*/React.createElement("div", {
    className: "fgrid"
  }, FILES.map(f => /*#__PURE__*/React.createElement("div", {
    className: `fcard${f.sel ? ' sel' : ''}`,
    key: f.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumb"
  }, f.kind), /*#__PURE__*/React.createElement("b", null, f.name), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, f.kind, " \xB7 REV ", f.rev)))), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("span", null, "EVERY REVISION VERSIONED & AUDITED"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "DROP A PDF ON CONVERT \u2192 NATIVE DOC")));
}
Object.assign(window, {
  Files
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/Files.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/Mail.jsx
try { (() => {
/* Asite product app — aMail. The inbox that files itself into the register. */
const {
  Button,
  Kbd,
  StatusDot,
  Chip
} = window.AsiteTheQuietInstrument_d535ab;
const THREADS = [{
  st: 'blocked',
  from: 'Kofi Danso · Arup',
  subj: 'RE: Core wall cover — clash L26',
  ref: 'RFI-0847',
  filed: true,
  tm: '08:47',
  sel: true
}, {
  st: 'progress',
  from: 'Supplier · BarTec',
  subj: 'Type 2 coupler test certs attached',
  ref: 'MAT-019',
  filed: true,
  tm: '08:22'
}, {
  st: 'done',
  from: 'Anaya Bello',
  subj: 'Site diary WK24 — for your sign-off',
  ref: 'DIARY-24',
  filed: true,
  tm: '07:55'
}, {
  st: 'backlog',
  from: 'Crane Co.',
  subj: 'Oversail application — next steps',
  ref: '',
  filed: false,
  tm: 'Yest'
}, {
  st: 'review',
  from: 'BAA Projects',
  subj: 'T5 package tender — clarification',
  ref: 'TEN-02',
  filed: true,
  tm: 'Yest'
}];
function Mail() {
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mhead"
  }, /*#__PURE__*/React.createElement("h3", null, "aMail"), /*#__PURE__*/React.createElement("span", {
    className: "cnt"
  }, "mer-tower-c \xB7 summary"), /*#__PURE__*/React.createElement("div", {
    className: "sp"
  }, /*#__PURE__*/React.createElement("span", {
    className: "prop"
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: "done",
    size: 7
  }), "3 accounts synced"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Compose"), /*#__PURE__*/React.createElement(Kbd, null, "\u2318K"))), /*#__PURE__*/React.createElement("div", {
    className: "msplit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mlist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mband"
  }, "Today \xB7 2,847 filed this quarter"), THREADS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: `mrow${t.sel ? ' sel' : ''}`,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "l1"
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: t.st,
    size: 7
  }), t.from, /*#__PURE__*/React.createElement("span", {
    className: "tm"
  }, t.tm)), /*#__PURE__*/React.createElement("div", {
    className: "l2"
  }, t.subj), /*#__PURE__*/React.createElement("div", {
    className: "l3"
  }, t.ref ? /*#__PURE__*/React.createElement("span", {
    className: "rf2",
    style: {
      font: '400 11px/1 var(--font-mono)',
      color: 'var(--text-3)'
    }
  }, t.ref) : null, /*#__PURE__*/React.createElement("span", {
    className: `fchip${t.filed ? '' : ' unf'}`
  }, t.filed ? '✓ FILED' : 'UNFILED'))))), /*#__PURE__*/React.createElement("div", {
    className: "mread"
  }, /*#__PURE__*/React.createElement("h4", null, "RE: Core wall cover \u2014 clash L26"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    mono: true
  }, "RFI-0847"), /*#__PURE__*/React.createElement(Chip, {
    dot: "var(--st-blocked)"
  }, "holds P-1131"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fchip"
  }, "\u2713 FILED TO REGISTER"))), /*#__PURE__*/React.createElement("div", {
    className: "msg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mh"
  }, "Kofi Danso ", /*#__PURE__*/React.createElement("span", null, "kofi@arup.com"), /*#__PURE__*/React.createElement("span", {
    className: "tm"
  }, "08:47")), /*#__PURE__*/React.createElement("p", null, "Charles \u2014 reviewed the L26 detail. The duct run still clashes the transfer beam at gridline C/4. We can drop the duct 180mm without affecting the ceiling void, but that needs your sign-off before the gang pours Friday. Cert attached.")), /*#__PURE__*/React.createElement("div", {
    className: "att"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCE"), "Coupler-test-certs.pdf ", /*#__PURE__*/React.createElement("span", {
    className: "sz"
  }, "1.2 MB"), /*#__PURE__*/React.createElement("span", {
    className: "fchip"
  }, "SECURE LINK")), /*#__PURE__*/React.createElement("div", {
    className: "msg",
    style: {
      background: 'var(--bg-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mh"
  }, "You ", /*#__PURE__*/React.createElement("span", null, "charles@mcg.co"), /*#__PURE__*/React.createElement("span", {
    className: "tm"
  }, "draft")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-3)'
    }
  }, "Approving the 180mm drop. Raising the revised detail as Rev C04 and lifting the hold on P-1131\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Send & close RFI-0847"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Save draft")))));
}
Object.assign(window, {
  Mail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/Mail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/Onboarding.jsx
try { (() => {
/* Asite product app — Onboarding. The front door: one card, one question, three steps. */
const {
  Mark,
  Button,
  Input,
  Select,
  Avatar
} = window.AsiteTheQuietInstrument_d535ab;
const TEMPLATES = [{
  id: 'building',
  name: 'Building',
  desc: 'ISO 19650 full workflow · S1–S4 states',
  icon: 'M4 16.5 V7 L10 3.5 L16 7 V16.5 M7.5 16.5 V11 H12.5 V16.5'
}, {
  id: 'infra',
  name: 'Infrastructure',
  desc: 'Linear assets · chainage-based register',
  icon: 'M3 15 C7 9 13 9 17 15 M3 15 H17 M6.5 11.2 V15 M10 9.8 V15 M13.5 11.2 V15'
}, {
  id: 'fitout',
  name: 'Fit-out',
  desc: 'Fast approvals · light workflow',
  icon: 'M3.5 3.5 h13 v13 h-13 Z M3.5 8 H16.5 M8 8 V16.5'
}];
function Onboarding({
  onComplete
}) {
  const [step, setStep] = React.useState(1);
  const [tpl, setTpl] = React.useState('building');
  const [region, setRegion] = React.useState('United Kingdom · London');
  return /*#__PURE__*/React.createElement("div", {
    className: "ob"
  }, /*#__PURE__*/React.createElement("div", {
    className: "obcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "obtop"
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 30
  }), /*#__PURE__*/React.createElement("span", {
    className: "obstep"
  }, /*#__PURE__*/React.createElement("b", null, "0", step), " / 03")), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Create your workspace"), /*#__PURE__*/React.createElement("div", {
    className: "sub2"
  }, "This becomes the root of numbering and audit. You can refine everything later."), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Organisation"), /*#__PURE__*/React.createElement(Input, {
    defaultValue: "Meridian Construction Group"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Region \u2014 data residency"), /*#__PURE__*/React.createElement(Select, {
    options: ['United Kingdom · London', 'European Union · Frankfurt', 'United States · Virginia'],
    value: region,
    onChange: setRegion,
    style: {
      display: 'block',
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => setStep(2),
    style: {
      marginTop: '10px'
    }
  }, "Continue")), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Bring the site with you"), /*#__PURE__*/React.createElement("div", {
    className: "sub2"
  }, "Roles map to ISO 19650 duties. Everyone sees exactly what their role needs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '9px 0',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "KD"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '500 12.5px/1.4 var(--font-ui)',
      color: 'var(--text-1)'
    }
  }, "kofi@arup.com"), /*#__PURE__*/React.createElement("span", {
    className: "prop"
  }, "Lead reviewer \u25BE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '9px 0',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AB"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '500 12.5px/1.4 var(--font-ui)',
      color: 'var(--text-1)'
    }
  }, "anaya@mcg.co"), /*#__PURE__*/React.createElement("span", {
    className: "prop"
  }, "Doc controller \u25BE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginTop: '22px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(3)
  }, "Skip for now"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => setStep(3)
  }, "Send 2 invites"))), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Start your first project"), /*#__PURE__*/React.createElement("div", {
    className: "sub2"
  }, "Each template ships numbering, workflows, and hold-point rules pre-wired."), /*#__PURE__*/React.createElement("div", {
    className: "tmpl"
  }, TEMPLATES.map(t => /*#__PURE__*/React.createElement("div", {
    className: `tc${tpl === t.id ? ' on' : ''}`,
    key: t.id,
    onClick: () => setTpl(t.id)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: t.icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, t.name), /*#__PURE__*/React.createElement("span", null, t.desc))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onComplete,
    style: {
      marginTop: '20px'
    }
  }, "Create Meridian Tower C"))));
}
Object.assign(window, {
  Onboarding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/Onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/Overlays.jsx
try { (() => {
/* Asite product app — Command palette (⌘K) and Asite Intelligence panel (✦). */
const {
  Kbd
} = window.AsiteTheQuietInstrument_d535ab;
const CMDS = [{
  sec: 'Go to',
  items: [{
    icon: '⌂',
    label: 'Today',
    kbd: 'G T'
  }, {
    icon: '▤',
    label: 'Files',
    kbd: 'G F'
  }, {
    icon: '✉',
    label: 'aMail',
    kbd: 'G M'
  }]
}, {
  sec: 'Actions',
  items: [{
    icon: '↑',
    label: 'Upload files…',
    kbd: 'U'
  }, {
    icon: '⇄',
    label: 'Convert a document…'
  }, {
    icon: '◑',
    label: 'Raise an RFI…'
  }, {
    icon: '⚠',
    label: 'Place a hold point…'
  }]
}];
function CommandPalette({
  open,
  onClose,
  onNavigate
}) {
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "palette"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pin2"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-3)'
    }
  }, "\u2315"), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    placeholder: "Search files, RFIs, docs, or run a command\u2026"
  }), /*#__PURE__*/React.createElement(Kbd, null, "esc")), CMDS.map(g => /*#__PURE__*/React.createElement(React.Fragment, {
    key: g.sec
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec"
  }, g.sec), g.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: `it${g.sec === 'Go to' && i === 0 ? ' on' : ''}`,
    key: it.label,
    onClick: () => {
      if (it.label === 'Files') onNavigate('files');else if (it.label === 'aMail') onNavigate('mail');else onNavigate('today');
      onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '18px',
      textAlign: 'center',
      color: 'var(--text-3)'
    }
  }, it.icon), it.label, it.kbd ? /*#__PURE__*/React.createElement(Kbd, null, it.kbd) : null))))));
}
function AIPanel() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: `ai-blob${open ? ' open' : ''}`,
    onClick: () => setOpen(v => !v)
  }, open ? /*#__PURE__*/React.createElement("div", {
    className: "ai-panel",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-hd"
  }, /*#__PURE__*/React.createElement("i", null, "\u2726"), /*#__PURE__*/React.createElement("b", null, "Asite Intelligence"), /*#__PURE__*/React.createElement("span", null, "CITES THE REGISTER")), /*#__PURE__*/React.createElement("div", {
    className: "ai-bd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-q"
  }, "What's holding the next pour?"), /*#__PURE__*/React.createElement("div", {
    className: "ai-a"
  }, "One hold blocks Friday's L27 pour: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-1)'
    }
  }, "RFI-0847"), " (core wall cover clash, L26). It's 2 days over and gates P-1131."), /*#__PURE__*/React.createElement("div", {
    className: "ai-rd"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--intent-bright)'
    }
  }, "\u25D1"), "RFI-0847 \xB7 core wall cover", /*#__PURE__*/React.createElement("span", {
    className: "tm2"
  }, "2d over")), /*#__PURE__*/React.createElement("div", {
    className: "ai-sg"
  }, /*#__PURE__*/React.createElement("span", null, "What changed since yesterday?"), /*#__PURE__*/React.createElement("span", null, "Draft today's site diary"))), /*#__PURE__*/React.createElement("div", {
    className: "ai-in"
  }, "Ask about this project\u2026", /*#__PURE__*/React.createElement(Kbd, null, "\u2318I"))) : /*#__PURE__*/React.createElement("span", {
    className: "ai-tag"
  }, "Ask Asite Intelligence ", /*#__PURE__*/React.createElement(Kbd, null, "\u2318I")), /*#__PURE__*/React.createElement("span", {
    className: "ai-orb"
  }, /*#__PURE__*/React.createElement("i", null, "\u2726")));
}
Object.assign(window, {
  CommandPalette,
  AIPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/Overlays.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/Sidebar.jsx
try { (() => {
/* Asite product app — Sidebar. Workspace switcher + primary nav. */
const {
  Mark,
  Kbd
} = window.AsiteTheQuietInstrument_d535ab;
const NAV = [{
  id: 'today',
  icon: '⌂',
  label: 'Today'
}, {
  id: 'rfis',
  icon: '◑',
  label: 'RFIs',
  count: '6'
}, {
  id: 'files',
  icon: '▤',
  label: 'Files'
}, {
  id: 'docs',
  icon: '≡',
  label: 'Docs'
}, {
  id: 'convert',
  icon: '⇄',
  label: 'Convert'
}, {
  id: 'mail',
  icon: '✉',
  label: 'aMail',
  count: '3'
}];
function Sidebar({
  screen,
  onNavigate
}) {
  // map composer screens to the active nav id
  const active = screen === 'mail' ? 'mail' : screen === 'files' ? 'files' : 'today';
  return /*#__PURE__*/React.createElement("div", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ws"
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 18
  }), /*#__PURE__*/React.createElement("b", null, "Mer Tower C"), /*#__PURE__*/React.createElement(Kbd, null, "\u2318O")), NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    className: n.id === active || active === 'today' && n.id === 'today' ? 'on' : '',
    onClick: () => onNavigate(n.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, n.icon), n.label, n.count ? /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, n.count) : null)), /*#__PURE__*/React.createElement("div", {
    className: "grp"
  }, "Views"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate('today')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, "\u25CD"), "Awaiting me"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate('today')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, "\u26A0"), "Holding pours"), /*#__PURE__*/React.createElement("div", {
    className: "grp"
  }, "Team"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate('today')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, "\u25D4"), "Invites", /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, "2")));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/product/app.jsx
try { (() => {
/* Asite product app — App shell. Wires onboarding → app, nav, ⌘K palette, AI orb. */
const {
  Sidebar,
  Dashboard,
  Files,
  Mail,
  Onboarding,
  CommandPalette,
  AIPanel
} = window;
function App() {
  const [onboarded, setOnboarded] = React.useState(false);
  const [screen, setScreen] = React.useState('today');
  const [palette, setPalette] = React.useState(false);
  React.useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPalette(v => !v);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  if (!onboarded) {
    return /*#__PURE__*/React.createElement("div", {
      className: "app"
    }, /*#__PURE__*/React.createElement(Onboarding, {
      onComplete: () => setOnboarded(true)
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-body"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    screen: screen,
    onNavigate: id => setScreen(id === 'rfis' || id === 'docs' || id === 'convert' ? 'today' : id)
  }), screen === 'files' ? /*#__PURE__*/React.createElement(Files, null) : screen === 'mail' ? /*#__PURE__*/React.createElement(Mail, null) : /*#__PURE__*/React.createElement(Dashboard, {
    onPalette: () => setPalette(true)
  })), /*#__PURE__*/React.createElement(AIPanel, null), /*#__PURE__*/React.createElement(CommandPalette, {
    open: palette,
    onClose: () => setPalette(false),
    onNavigate: setScreen
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/product/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Mark = __ds_scope.Mark;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Choice = __ds_scope.Choice;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

})();
