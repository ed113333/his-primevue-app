import { ref as $, readonly as Ip, getCurrentInstance as Zr, onMounted as vt, nextTick as sa, watch as aa, useId as Rp, mergeProps as $e, createElementBlock as M, openBlock as w, createElementVNode as b, shallowRef as Or, defineComponent as xe, unref as Ae, shallowReactive as Lp, reactive as Vp, inject as Fn, computed as ot, h as Gn, provide as Fo, watchEffect as Tc, renderSlot as Lt, resolveDirective as Oc, withDirectives as no, createCommentVNode as Hn, createBlock as oe, resolveDynamicComponent as pr, withCtx as D, normalizeClass as en, Fragment as he, vShow as Bp, resolveComponent as R, createVNode as T, renderList as Ee, toDisplayString as De, onBeforeUnmount as ko, markRaw as zp, customRef as jp, createTextVNode as J, createStaticVNode as Fp } from "vue";
import "@primeuix/themes";
function la(...n) {
  if (n) {
    let e = [];
    for (let t = 0; t < n.length; t++) {
      let r = n[t];
      if (!r) continue;
      let i = typeof r;
      if (i === "string" || i === "number") e.push(r);
      else if (i === "object") {
        let o = Array.isArray(r) ? [la(...r)] : Object.entries(r).map(([s, a]) => a ? s : void 0);
        e = o.length ? e.concat(o.filter((s) => !!s)) : e;
      }
    }
    return e.join(" ").trim();
  }
}
function Hp(n, e) {
  return n ? n.classList ? n.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(n.className) : !1;
}
function Up(n, e) {
  if (n && e) {
    let t = (r) => {
      Hp(n, r) || (n.classList ? n.classList.add(r) : n.className += " " + r);
    };
    [e].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(t));
  }
}
function Ho(n, e) {
  if (n && e) {
    let t = (r) => {
      n.classList ? n.classList.remove(r) : n.className = n.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(t));
  }
}
function tl(n) {
  return n ? Math.abs(n.scrollLeft) : 0;
}
function nl(n) {
  return n ? getComputedStyle(n).direction === "rtl" : !1;
}
function Ec(n, e) {
  return n instanceof HTMLElement ? n.offsetWidth : 0;
}
function Wp(n) {
  if (n) {
    let e = n.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function qp(n) {
  return !!(n !== null && typeof n < "u" && n.nodeName && Wp(n));
}
function wi(n) {
  return typeof Element < "u" ? n instanceof Element : n !== null && typeof n == "object" && n.nodeType === 1 && typeof n.nodeName == "string";
}
function ro(n, e = {}) {
  if (wi(n)) {
    let t = (r, i) => {
      var o, s;
      let a = (o = n == null ? void 0 : n.$attrs) != null && o[r] ? [(s = n == null ? void 0 : n.$attrs) == null ? void 0 : s[r]] : [];
      return [i].flat().reduce((l, u) => {
        if (u != null) {
          let c = typeof u;
          if (c === "string" || c === "number") l.push(u);
          else if (c === "object") {
            let d = Array.isArray(u) ? t(r, u) : Object.entries(u).map(([p, f]) => r === "style" && (f || f === 0) ? `${p.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${f}` : f ? p : void 0);
            l = d.length ? l.concat(d.filter((p) => !!p)) : l;
          }
        }
        return l;
      }, a);
    };
    Object.entries(e).forEach(([r, i]) => {
      if (i != null) {
        let o = r.match(/^on(.+)/);
        o ? n.addEventListener(o[1].toLowerCase(), i) : r === "p-bind" || r === "pBind" ? ro(n, i) : (i = r === "class" ? [...new Set(t("class", i))].join(" ").trim() : r === "style" ? t("style", i).join(";").trim() : i, (n.$attrs = n.$attrs || {}) && (n.$attrs[r] = i), n.setAttribute(r, i));
      }
    });
  }
}
function Kp(n, e = {}, ...t) {
  {
    let r = document.createElement(n);
    return ro(r, e), r.append(...t), r;
  }
}
function io(n, e) {
  return wi(n) ? n.matches(e) ? n : n.querySelector(e) : null;
}
function Jp(n, e) {
  n && document.activeElement !== n && n.focus(e);
}
function Ir(n, e) {
  if (wi(n)) {
    let t = n.getAttribute(e);
    return isNaN(t) ? t === "true" || t === "false" ? t === "true" : t : +t;
  }
}
function Ss(n) {
  if (n) {
    let e = n.offsetHeight, t = getComputedStyle(n);
    return e -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom) + parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), e;
  }
  return 0;
}
function Rr(n) {
  if (n) {
    let e = n.getBoundingClientRect();
    return { top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: e.left + (window.pageXOffset || tl(document.documentElement) || tl(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function _c(n, e) {
  return n ? n.offsetHeight : 0;
}
function jr(n) {
  if (n) {
    let e = n.offsetWidth, t = getComputedStyle(n);
    return e -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight) + parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth), e;
  }
  return 0;
}
function Gp() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Yp(n, e = "", t) {
  wi(n) && t !== null && t !== void 0 && n.setAttribute(e, t);
}
function Mc() {
  let n = /* @__PURE__ */ new Map();
  return { on(e, t) {
    let r = n.get(e);
    return r ? r.push(t) : r = [t], n.set(e, r), this;
  }, off(e, t) {
    let r = n.get(e);
    return r && r.splice(r.indexOf(t) >>> 0, 1), this;
  }, emit(e, t) {
    let r = n.get(e);
    r && r.forEach((i) => {
      i(t);
    });
  }, clear() {
    n.clear();
  } };
}
function ki(n) {
  return n == null || n === "" || Array.isArray(n) && n.length === 0 || !(n instanceof Date) && typeof n == "object" && Object.keys(n).length === 0;
}
function xs(n, e, t = /* @__PURE__ */ new WeakSet()) {
  if (n === e) return !0;
  if (!n || !e || typeof n != "object" || typeof e != "object" || t.has(n) || t.has(e)) return !1;
  t.add(n).add(e);
  let r = Array.isArray(n), i = Array.isArray(e), o, s, a;
  if (r && i) {
    if (s = n.length, s != e.length) return !1;
    for (o = s; o-- !== 0; ) if (!xs(n[o], e[o], t)) return !1;
    return !0;
  }
  if (r != i) return !1;
  let l = n instanceof Date, u = e instanceof Date;
  if (l != u) return !1;
  if (l && u) return n.getTime() == e.getTime();
  let c = n instanceof RegExp, d = e instanceof RegExp;
  if (c != d) return !1;
  if (c && d) return n.toString() == e.toString();
  let p = Object.keys(n);
  if (s = p.length, s !== Object.keys(e).length) return !1;
  for (o = s; o-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(e, p[o])) return !1;
  for (o = s; o-- !== 0; ) if (a = p[o], !xs(n[a], e[a], t)) return !1;
  return !0;
}
function Qp(n, e) {
  return xs(n, e);
}
function ua(n) {
  return typeof n == "function" && "call" in n && "apply" in n;
}
function Ce(n) {
  return !ki(n);
}
function rl(n, e) {
  return null;
}
function Nc(n, e, t) {
  return t ? rl() === rl() : Qp(n, e);
}
function hn(n, e = !0) {
  return n instanceof Object && n.constructor === Object && (e || Object.keys(n).length !== 0);
}
function pt(n, ...e) {
  return ua(n) ? n(...e) : n;
}
function st(n, e = !0) {
  return typeof n == "string" && (e || n !== "");
}
function It(n) {
  return st(n) ? n.replace(/(-|_)/g, "").toLowerCase() : n;
}
function ca(n, e = "", t = {}) {
  let r = It(e).split("."), i = r.shift();
  if (i) {
    if (hn(n)) {
      let o = Object.keys(n).find((s) => It(s) === i) || "";
      return ca(pt(n[o], t), r.join("."), t);
    }
    return;
  }
  return pt(n, t);
}
function Ac(n, e = !0) {
  return Array.isArray(n) && (e || n.length !== 0);
}
function Xp(n) {
  return Ce(n) && !isNaN(n);
}
function Pn(n, e) {
  if (e) {
    let t = e.test(n);
    return e.lastIndex = 0, t;
  }
  return !1;
}
function Fr(n) {
  return n && n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function Zp(n) {
  return st(n, !1) ? n[0].toUpperCase() + n.slice(1) : n;
}
function $c(n) {
  return st(n) ? n.replace(/(_)/g, "-").replace(/[A-Z]/g, (e, t) => t === 0 ? e : "-" + e.toLowerCase()).toLowerCase() : n;
}
var Ii = {};
function eh(n = "pui_id_") {
  return Object.hasOwn(Ii, n) || (Ii[n] = 0), Ii[n]++, `${n}${Ii[n]}`;
}
var th = Object.defineProperty, nh = Object.defineProperties, rh = Object.getOwnPropertyDescriptors, oo = Object.getOwnPropertySymbols, Dc = Object.prototype.hasOwnProperty, Pc = Object.prototype.propertyIsEnumerable, il = (n, e, t) => e in n ? th(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, Nt = (n, e) => {
  for (var t in e || (e = {})) Dc.call(e, t) && il(n, t, e[t]);
  if (oo) for (var t of oo(e)) Pc.call(e, t) && il(n, t, e[t]);
  return n;
}, Uo = (n, e) => nh(n, rh(e)), Ut = (n, e) => {
  var t = {};
  for (var r in n) Dc.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && oo) for (var r of oo(n)) e.indexOf(r) < 0 && Pc.call(n, r) && (t[r] = n[r]);
  return t;
}, ih = Mc(), tt = ih, ei = /{([^}]*)}/g, Ic = /(\d+\s+[\+\-\*\/]\s+\d+)/g, Rc = /var\([^)]+\)/g;
function ol(n) {
  return st(n) ? n.replace(/[A-Z]/g, (e, t) => t === 0 ? e : "." + e.toLowerCase()).toLowerCase() : n;
}
function oh(n) {
  return hn(n) && n.hasOwnProperty("$value") && n.hasOwnProperty("$type") ? n.$value : n;
}
function sh(n) {
  return n.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function ws(n = "", e = "") {
  return sh(`${st(n, !1) && st(e, !1) ? `${n}-` : n}${e}`);
}
function Lc(n = "", e = "") {
  return `--${ws(n, e)}`;
}
function ah(n = "") {
  let e = (n.match(/{/g) || []).length, t = (n.match(/}/g) || []).length;
  return (e + t) % 2 !== 0;
}
function Vc(n, e = "", t = "", r = [], i) {
  if (st(n)) {
    let o = n.trim();
    if (ah(o)) return;
    if (Pn(o, ei)) {
      let s = o.replaceAll(ei, (a) => {
        let l = a.replace(/{|}/g, "").split(".").filter((u) => !r.some((c) => Pn(u, c)));
        return `var(${Lc(t, $c(l.join("-")))}${Ce(i) ? `, ${i}` : ""})`;
      });
      return Pn(s.replace(Rc, "0"), Ic) ? `calc(${s})` : s;
    }
    return o;
  } else if (Xp(n)) return n;
}
function lh(n, e, t) {
  st(e, !1) && n.push(`${e}:${t};`);
}
function or(n, e) {
  return n ? `${n}{${e}}` : "";
}
function Bc(n, e) {
  if (n.indexOf("dt(") === -1) return n;
  function t(s, a) {
    let l = [], u = 0, c = "", d = null, p = 0;
    for (; u <= s.length; ) {
      let f = s[u];
      if ((f === '"' || f === "'" || f === "`") && s[u - 1] !== "\\" && (d = d === f ? null : f), !d && (f === "(" && p++, f === ")" && p--, (f === "," || u === s.length) && p === 0)) {
        let h = c.trim();
        h.startsWith("dt(") ? l.push(Bc(h, a)) : l.push(r(h)), c = "", u++;
        continue;
      }
      f !== void 0 && (c += f), u++;
    }
    return l;
  }
  function r(s) {
    let a = s[0];
    if ((a === '"' || a === "'" || a === "`") && s[s.length - 1] === a) return s.slice(1, -1);
    let l = Number(s);
    return isNaN(l) ? s : l;
  }
  let i = [], o = [];
  for (let s = 0; s < n.length; s++) if (n[s] === "d" && n.slice(s, s + 3) === "dt(") o.push(s), s += 2;
  else if (n[s] === ")" && o.length > 0) {
    let a = o.pop();
    o.length === 0 && i.push([a, s]);
  }
  if (!i.length) return n;
  for (let s = i.length - 1; s >= 0; s--) {
    let [a, l] = i[s], u = n.slice(a + 3, l), c = t(u, e), d = e(...c);
    n = n.slice(0, a) + d + n.slice(l + 1);
  }
  return n;
}
var In = (...n) => uh(Se.getTheme(), ...n), uh = (n = {}, e, t, r) => {
  if (e) {
    let { variable: i, options: o } = Se.defaults || {}, { prefix: s, transform: a } = (n == null ? void 0 : n.options) || o || {}, l = Pn(e, ei) ? e : `{${e}}`;
    return r === "value" || ki(r) && a === "strict" ? Se.getTokenValue(e) : Vc(l, void 0, s, [i.excludedKeyRegex], t);
  }
  return "";
};
function Ri(n, ...e) {
  if (n instanceof Array) {
    let t = n.reduce((r, i, o) => {
      var s;
      return r + i + ((s = pt(e[o], { dt: In })) != null ? s : "");
    }, "");
    return Bc(t, In);
  }
  return pt(n, { dt: In });
}
function ch(n, e = {}) {
  let t = Se.defaults.variable, { prefix: r = t.prefix, selector: i = t.selector, excludedKeyRegex: o = t.excludedKeyRegex } = e, s = [], a = [], l = [{ node: n, path: r }];
  for (; l.length; ) {
    let { node: c, path: d } = l.pop();
    for (let p in c) {
      let f = c[p], h = oh(f), m = Pn(p, o) ? ws(d) : ws(d, $c(p));
      if (hn(h)) l.push({ node: h, path: m });
      else {
        let g = Lc(m), y = Vc(h, m, r, [o]);
        lh(a, g, y);
        let S = m;
        r && S.startsWith(r + "-") && (S = S.slice(r.length + 1)), s.push(S.replace(/-/g, "."));
      }
    }
  }
  let u = a.join("");
  return { value: a, tokens: s, declarations: u, css: or(i, u) };
}
var Mt = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(n) {
  return { type: "class", selector: n, matched: this.pattern.test(n.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(n) {
  return { type: "attr", selector: `:root${n}`, matched: this.pattern.test(n.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(n) {
  return { type: "media", selector: n, matched: this.pattern.test(n.trim()) };
} }, system: { pattern: /^system$/, resolve(n) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(n.trim()) };
} }, custom: { resolve(n) {
  return { type: "custom", selector: n, matched: !0 };
} } }, resolve(n) {
  let e = Object.keys(this.rules).filter((t) => t !== "custom").map((t) => this.rules[t]);
  return [n].flat().map((t) => {
    var r;
    return (r = e.map((i) => i.resolve(t)).find((i) => i.matched)) != null ? r : this.rules.custom.resolve(t);
  });
} }, _toVariables(n, e) {
  return ch(n, { prefix: e == null ? void 0 : e.prefix });
}, getCommon({ name: n = "", theme: e = {}, params: t, set: r, defaults: i }) {
  var o, s, a, l, u, c, d;
  let { preset: p, options: f } = e, h, m, g, y, S, C, v;
  if (Ce(p) && f.transform !== "strict") {
    let { primitive: k, semantic: x, extend: O } = p, N = x || {}, { colorScheme: U } = N, j = Ut(N, ["colorScheme"]), F = O || {}, { colorScheme: L } = F, H = Ut(F, ["colorScheme"]), ue = U || {}, { dark: be } = ue, ye = Ut(ue, ["dark"]), de = L || {}, { dark: me } = de, Ie = Ut(de, ["dark"]), we = Ce(k) ? this._toVariables({ primitive: k }, f) : {}, _e = Ce(j) ? this._toVariables({ semantic: j }, f) : {}, Te = Ce(ye) ? this._toVariables({ light: ye }, f) : {}, Je = Ce(be) ? this._toVariables({ dark: be }, f) : {}, Me = Ce(H) ? this._toVariables({ semantic: H }, f) : {}, Ge = Ce(Ie) ? this._toVariables({ light: Ie }, f) : {}, Re = Ce(me) ? this._toVariables({ dark: me }, f) : {}, [E, P] = [(o = we.declarations) != null ? o : "", we.tokens], [I, z] = [(s = _e.declarations) != null ? s : "", _e.tokens || []], [te, ge] = [(a = Te.declarations) != null ? a : "", Te.tokens || []], [Z, Y] = [(l = Je.declarations) != null ? l : "", Je.tokens || []], [fe, Ze] = [(u = Me.declarations) != null ? u : "", Me.tokens || []], [ke, Qn] = [(c = Ge.declarations) != null ? c : "", Ge.tokens || []], [Xn, _t] = [(d = Re.declarations) != null ? d : "", Re.tokens || []];
    h = this.transformCSS(n, E, "light", "variable", f, r, i), m = P;
    let $t = this.transformCSS(n, `${I}${te}`, "light", "variable", f, r, i), On = this.transformCSS(n, `${Z}`, "dark", "variable", f, r, i);
    g = `${$t}${On}`, y = [.../* @__PURE__ */ new Set([...z, ...ge, ...Y])];
    let Ht = this.transformCSS(n, `${fe}${ke}color-scheme:light`, "light", "variable", f, r, i), En = this.transformCSS(n, `${Xn}color-scheme:dark`, "dark", "variable", f, r, i);
    S = `${Ht}${En}`, C = [.../* @__PURE__ */ new Set([...Ze, ...Qn, ..._t])], v = pt(p.css, { dt: In });
  }
  return { primitive: { css: h, tokens: m }, semantic: { css: g, tokens: y }, global: { css: S, tokens: C }, style: v };
}, getPreset({ name: n = "", preset: e = {}, options: t, params: r, set: i, defaults: o, selector: s }) {
  var a, l, u;
  let c, d, p;
  if (Ce(e) && t.transform !== "strict") {
    let f = n.replace("-directive", ""), h = e, { colorScheme: m, extend: g, css: y } = h, S = Ut(h, ["colorScheme", "extend", "css"]), C = g || {}, { colorScheme: v } = C, k = Ut(C, ["colorScheme"]), x = m || {}, { dark: O } = x, N = Ut(x, ["dark"]), U = v || {}, { dark: j } = U, F = Ut(U, ["dark"]), L = Ce(S) ? this._toVariables({ [f]: Nt(Nt({}, S), k) }, t) : {}, H = Ce(N) ? this._toVariables({ [f]: Nt(Nt({}, N), F) }, t) : {}, ue = Ce(O) ? this._toVariables({ [f]: Nt(Nt({}, O), j) }, t) : {}, [be, ye] = [(a = L.declarations) != null ? a : "", L.tokens || []], [de, me] = [(l = H.declarations) != null ? l : "", H.tokens || []], [Ie, we] = [(u = ue.declarations) != null ? u : "", ue.tokens || []], _e = this.transformCSS(f, `${be}${de}`, "light", "variable", t, i, o, s), Te = this.transformCSS(f, Ie, "dark", "variable", t, i, o, s);
    c = `${_e}${Te}`, d = [.../* @__PURE__ */ new Set([...ye, ...me, ...we])], p = pt(y, { dt: In });
  }
  return { css: c, tokens: d, style: p };
}, getPresetC({ name: n = "", theme: e = {}, params: t, set: r, defaults: i }) {
  var o;
  let { preset: s, options: a } = e, l = (o = s == null ? void 0 : s.components) == null ? void 0 : o[n];
  return this.getPreset({ name: n, preset: l, options: a, params: t, set: r, defaults: i });
}, getPresetD({ name: n = "", theme: e = {}, params: t, set: r, defaults: i }) {
  var o, s;
  let a = n.replace("-directive", ""), { preset: l, options: u } = e, c = ((o = l == null ? void 0 : l.components) == null ? void 0 : o[a]) || ((s = l == null ? void 0 : l.directives) == null ? void 0 : s[a]);
  return this.getPreset({ name: a, preset: c, options: u, params: t, set: r, defaults: i });
}, applyDarkColorScheme(n) {
  return !(n.darkModeSelector === "none" || n.darkModeSelector === !1);
}, getColorSchemeOption(n, e) {
  var t;
  return this.applyDarkColorScheme(n) ? this.regex.resolve(n.darkModeSelector === !0 ? e.options.darkModeSelector : (t = n.darkModeSelector) != null ? t : e.options.darkModeSelector) : [];
}, getLayerOrder(n, e = {}, t, r) {
  let { cssLayer: i } = e;
  return i ? `@layer ${pt(i.order || i.name || "primeui", t)}` : "";
}, getCommonStyleSheet({ name: n = "", theme: e = {}, params: t, props: r = {}, set: i, defaults: o }) {
  let s = this.getCommon({ name: n, theme: e, params: t, set: i, defaults: o }), a = Object.entries(r).reduce((l, [u, c]) => l.push(`${u}="${c}"`) && l, []).join(" ");
  return Object.entries(s || {}).reduce((l, [u, c]) => {
    if (hn(c) && Object.hasOwn(c, "css")) {
      let d = Fr(c.css), p = `${u}-variables`;
      l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`);
    }
    return l;
  }, []).join("");
}, getStyleSheet({ name: n = "", theme: e = {}, params: t, props: r = {}, set: i, defaults: o }) {
  var s;
  let a = { name: n, theme: e, params: t, set: i, defaults: o }, l = (s = n.includes("-directive") ? this.getPresetD(a) : this.getPresetC(a)) == null ? void 0 : s.css, u = Object.entries(r).reduce((c, [d, p]) => c.push(`${d}="${p}"`) && c, []).join(" ");
  return l ? `<style type="text/css" data-primevue-style-id="${n}-variables" ${u}>${Fr(l)}</style>` : "";
}, createTokens(n = {}, e, t = "", r = "", i = {}) {
  let o = function(a, l = {}, u = []) {
    if (u.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: a, path: this.path, paths: l, value: void 0 };
    u.push(this.path), l.name = this.path, l.binding || (l.binding = {});
    let c = this.value;
    if (typeof this.value == "string" && ei.test(this.value)) {
      let d = this.value.trim().replace(ei, (p) => {
        var f;
        let h = p.slice(1, -1), m = this.tokens[h];
        if (!m) return console.warn(`Token not found for path: ${h}`), "__UNRESOLVED__";
        let g = m.computed(a, l, u);
        return Array.isArray(g) && g.length === 2 ? `light-dark(${g[0].value},${g[1].value})` : (f = g == null ? void 0 : g.value) != null ? f : "__UNRESOLVED__";
      });
      c = Ic.test(d.replace(Rc, "0")) ? `calc(${d})` : d;
    }
    return ki(l.binding) && delete l.binding, u.pop(), { colorScheme: a, path: this.path, paths: l, value: c.includes("__UNRESOLVED__") ? void 0 : c };
  }, s = (a, l, u) => {
    Object.entries(a).forEach(([c, d]) => {
      let p = Pn(c, e.variable.excludedKeyRegex) ? l : l ? `${l}.${ol(c)}` : ol(c), f = u ? `${u}.${c}` : c;
      hn(d) ? s(d, p, f) : (i[p] || (i[p] = { paths: [], computed: (h, m = {}, g = []) => {
        if (i[p].paths.length === 1) return i[p].paths[0].computed(i[p].paths[0].scheme, m.binding, g);
        if (h && h !== "none") for (let y = 0; y < i[p].paths.length; y++) {
          let S = i[p].paths[y];
          if (S.scheme === h) return S.computed(h, m.binding, g);
        }
        return i[p].paths.map((y) => y.computed(y.scheme, m[y.scheme], g));
      } }), i[p].paths.push({ path: f, value: d, scheme: f.includes("colorScheme.light") ? "light" : f.includes("colorScheme.dark") ? "dark" : "none", computed: o, tokens: i }));
    });
  };
  return s(n, t, r), i;
}, getTokenValue(n, e, t) {
  var r;
  let i = ((a) => a.split(".").filter((l) => !Pn(l.toLowerCase(), t.variable.excludedKeyRegex)).join("."))(e), o = e.includes("colorScheme.light") ? "light" : e.includes("colorScheme.dark") ? "dark" : void 0, s = [(r = n[i]) == null ? void 0 : r.computed(o)].flat().filter((a) => a);
  return s.length === 1 ? s[0].value : s.reduce((a = {}, l) => {
    let u = l, { colorScheme: c } = u, d = Ut(u, ["colorScheme"]);
    return a[c] = d, a;
  }, void 0);
}, getSelectorRule(n, e, t, r) {
  return t === "class" || t === "attr" ? or(Ce(e) ? `${n}${e},${n} ${e}` : n, r) : or(n, or(e ?? ":root", r));
}, transformCSS(n, e, t, r, i = {}, o, s, a) {
  if (Ce(e)) {
    let { cssLayer: l } = i;
    if (r !== "style") {
      let u = this.getColorSchemeOption(i, s);
      e = t === "dark" ? u.reduce((c, { type: d, selector: p }) => (Ce(p) && (c += p.includes("[CSS]") ? p.replace("[CSS]", e) : this.getSelectorRule(p, a, d, e)), c), "") : or(a ?? ":root", e);
    }
    if (l) {
      let u = { name: "primeui" };
      hn(l) && (u.name = pt(l.name, { name: n, type: r })), Ce(u.name) && (e = or(`@layer ${u.name}`, e), o == null || o.layerNames(u.name));
    }
    return e;
  }
  return "";
} }, Se = { defaults: { variable: { prefix: "p", selector: ":root", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(n = {}) {
  let { theme: e } = n;
  e && (this._theme = Uo(Nt({}, e), { options: Nt(Nt({}, this.defaults.options), e.options) }), this._tokens = Mt.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var n;
  return ((n = this.theme) == null ? void 0 : n.preset) || {};
}, get options() {
  var n;
  return ((n = this.theme) == null ? void 0 : n.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(n) {
  this.update({ theme: n }), tt.emit("theme:change", n);
}, getPreset() {
  return this.preset;
}, setPreset(n) {
  this._theme = Uo(Nt({}, this.theme), { preset: n }), this._tokens = Mt.createTokens(n, this.defaults), this.clearLoadedStyleNames(), tt.emit("preset:change", n), tt.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(n) {
  this._theme = Uo(Nt({}, this.theme), { options: n }), this.clearLoadedStyleNames(), tt.emit("options:change", n), tt.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(n) {
  this._layerNames.add(n);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(n) {
  return this._loadedStyleNames.has(n);
}, setLoadedStyleName(n) {
  this._loadedStyleNames.add(n);
}, deleteLoadedStyleName(n) {
  this._loadedStyleNames.delete(n);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(n) {
  return Mt.getTokenValue(this.tokens, n, this.defaults);
}, getCommon(n = "", e) {
  return Mt.getCommon({ name: n, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(n = "", e) {
  let t = { name: n, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return Mt.getPresetC(t);
}, getDirective(n = "", e) {
  let t = { name: n, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return Mt.getPresetD(t);
}, getCustomPreset(n = "", e, t, r) {
  let i = { name: n, preset: e, options: this.options, selector: t, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return Mt.getPreset(i);
}, getLayerOrderCSS(n = "") {
  return Mt.getLayerOrder(n, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(n = "", e, t = "style", r) {
  return Mt.transformCSS(n, e, r, t, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(n = "", e, t = {}) {
  return Mt.getCommonStyleSheet({ name: n, theme: this.theme, params: e, props: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(n, e, t = {}) {
  return Mt.getStyleSheet({ name: n, theme: this.theme, params: e, props: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(n) {
  this._loadingStyles.add(n);
}, onStyleUpdated(n) {
  this._loadingStyles.add(n);
}, onStyleLoaded(n, { name: e }) {
  this._loadingStyles.size && (this._loadingStyles.delete(e), tt.emit(`theme:${e}:load`, n), !this._loadingStyles.size && tt.emit("theme:load"));
} }, un = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName: function(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName: function(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
}, dh = `
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;
function ti(n) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ti(n);
}
function sl(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function al(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? sl(Object(t), !0).forEach(function(r) {
      fh(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : sl(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function fh(n, e, t) {
  return (e = ph(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function ph(n) {
  var e = hh(n, "string");
  return ti(e) == "symbol" ? e : e + "";
}
function hh(n, e) {
  if (ti(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (ti(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function mh(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Zr() && Zr().components ? vt(n) : e ? n() : sa(n);
}
var gh = 0;
function vh(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = $(!1), r = $(n), i = $(null), o = Gp() ? window.document : void 0, s = e.document, a = s === void 0 ? o : s, l = e.immediate, u = l === void 0 ? !0 : l, c = e.manual, d = c === void 0 ? !1 : c, p = e.name, f = p === void 0 ? "style_".concat(++gh) : p, h = e.id, m = h === void 0 ? void 0 : h, g = e.media, y = g === void 0 ? void 0 : g, S = e.nonce, C = S === void 0 ? void 0 : S, v = e.first, k = v === void 0 ? !1 : v, x = e.onMounted, O = x === void 0 ? void 0 : x, N = e.onUpdated, U = N === void 0 ? void 0 : N, j = e.onLoad, F = j === void 0 ? void 0 : j, L = e.props, H = L === void 0 ? {} : L, ue = function() {
  }, be = function(me) {
    var Ie = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (a) {
      var we = al(al({}, H), Ie), _e = we.name || f, Te = we.id || m, Je = we.nonce || C;
      i.value = a.querySelector('style[data-primevue-style-id="'.concat(_e, '"]')) || a.getElementById(Te) || a.createElement("style"), i.value.isConnected || (r.value = me || n, ro(i.value, {
        type: "text/css",
        id: Te,
        media: y,
        nonce: Je
      }), k ? a.head.prepend(i.value) : a.head.appendChild(i.value), Yp(i.value, "data-primevue-style-id", _e), ro(i.value, we), i.value.onload = function(Me) {
        return F == null ? void 0 : F(Me, {
          name: _e
        });
      }, O == null || O(_e)), !t.value && (ue = aa(r, function(Me) {
        i.value.textContent = Me, U == null || U(_e);
      }, {
        immediate: !0
      }), t.value = !0);
    }
  }, ye = function() {
    !a || !t.value || (ue(), qp(i.value) && a.head.removeChild(i.value), t.value = !1, i.value = null);
  };
  return u && !d && mh(be), {
    id: m,
    name: f,
    el: i,
    css: r,
    unload: ye,
    load: be,
    isLoaded: Ip(t)
  };
}
function ni(n) {
  "@babel/helpers - typeof";
  return ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ni(n);
}
var ll, ul, cl, dl;
function fl(n, e) {
  return xh(n) || Sh(n, e) || bh(n, e) || yh();
}
function yh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bh(n, e) {
  if (n) {
    if (typeof n == "string") return pl(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? pl(n, e) : void 0;
  }
}
function pl(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function Sh(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r, i, o, s, a = [], l = !0, u = !1;
    try {
      if (o = (t = t.call(n)).next, e !== 0) for (; !(l = (r = o.call(t)).done) && (a.push(r.value), a.length !== e); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw i;
      }
    }
    return a;
  }
}
function xh(n) {
  if (Array.isArray(n)) return n;
}
function hl(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Wo(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hl(Object(t), !0).forEach(function(r) {
      wh(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : hl(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function wh(n, e, t) {
  return (e = kh(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function kh(n) {
  var e = Ch(n, "string");
  return ni(e) == "symbol" ? e : e + "";
}
function Ch(n, e) {
  if (ni(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (ni(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Li(n, e) {
  return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }));
}
var Th = function(e) {
  var t = e.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(t("scrollbar.width"), `;
}
`);
}, Oh = {}, Eh = {}, Ne = {
  name: "base",
  css: Th,
  style: dh,
  classes: Oh,
  inlineStyles: Eh,
  load: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(o) {
      return o;
    }, i = r(Ri(ll || (ll = Li(["", ""])), e));
    return Ce(i) ? vh(Fr(i), Wo({
      name: this.name
    }, t)) : {};
  },
  loadCSS: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, e);
  },
  loadStyle: function() {
    var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, t, function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return Se.transformCSS(t.name || e.name, "".concat(i).concat(Ri(ul || (ul = Li(["", ""])), r)));
    });
  },
  getCommonTheme: function(e) {
    return Se.getCommon(this.name, e);
  },
  getComponentTheme: function(e) {
    return Se.getComponent(this.name, e);
  },
  getDirectiveTheme: function(e) {
    return Se.getDirective(this.name, e);
  },
  getPresetTheme: function(e, t, r) {
    return Se.getCustomPreset(this.name, e, t, r);
  },
  getLayerOrderThemeCSS: function() {
    return Se.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var r = pt(this.css, {
        dt: In
      }) || "", i = Fr(Ri(cl || (cl = Li(["", "", ""])), r, e)), o = Object.entries(t).reduce(function(s, a) {
        var l = fl(a, 2), u = l[0], c = l[1];
        return s.push("".concat(u, '="').concat(c, '"')) && s;
      }, []).join(" ");
      return Ce(i) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(o, ">").concat(i, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Se.getCommonStyleSheet(this.name, e, t);
  },
  getThemeStyleSheet: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [Se.getStyleSheet(this.name, e, t)];
    if (this.style) {
      var i = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), o = Ri(dl || (dl = Li(["", ""])), pt(this.style, {
        dt: In
      })), s = Fr(Se.transformCSS(i, o)), a = Object.entries(t).reduce(function(l, u) {
        var c = fl(u, 2), d = c[0], p = c[1];
        return l.push("".concat(d, '="').concat(p, '"')) && l;
      }, []).join(" ");
      Ce(s) && r.push('<style type="text/css" data-primevue-style-id="'.concat(i, '" ').concat(a, ">").concat(s, "</style>"));
    }
    return r.join("");
  },
  extend: function(e) {
    return Wo(Wo({}, this), {}, {
      css: void 0,
      style: void 0
    }, e);
  }
};
function _h() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", e = Rp();
  return "".concat(n).concat(e.replace("v-", "").replaceAll("-", "_"));
}
var ml = Ne.extend({
  name: "common"
});
function ri(n) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ri(n);
}
function Mh(n) {
  return Fc(n) || Nh(n) || jc(n) || zc();
}
function Nh(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Nr(n, e) {
  return Fc(n) || Ah(n, e) || jc(n, e) || zc();
}
function zc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jc(n, e) {
  if (n) {
    if (typeof n == "string") return gl(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? gl(n, e) : void 0;
  }
}
function gl(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function Ah(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r, i, o, s, a = [], l = !0, u = !1;
    try {
      if (o = (t = t.call(n)).next, e === 0) {
        if (Object(t) !== t) return;
        l = !1;
      } else for (; !(l = (r = o.call(t)).done) && (a.push(r.value), a.length !== e); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw i;
      }
    }
    return a;
  }
}
function Fc(n) {
  if (Array.isArray(n)) return n;
}
function vl(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function se(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? vl(Object(t), !0).forEach(function(r) {
      Lr(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : vl(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Lr(n, e, t) {
  return (e = $h(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function $h(n) {
  var e = Dh(n, "string");
  return ri(e) == "symbol" ? e : e + "";
}
function Dh(n, e) {
  if (ri(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (ri(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var Er = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(e) {
        tt.off("theme:change", this._loadCoreStyles), e || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(e, t) {
        var r = this;
        tt.off("theme:change", this._themeScopedListener), e ? (this._loadScopedThemeStyles(e), this._themeScopedListener = function() {
          return r._loadScopedThemeStyles(e);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var e, t, r, i, o, s, a, l, u, c, d, p = (e = this.pt) === null || e === void 0 ? void 0 : e._usept, f = p ? (t = this.pt) === null || t === void 0 || (t = t.originalValue) === null || t === void 0 ? void 0 : t[this.$.type.name] : void 0, h = p ? (r = this.pt) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r[this.$.type.name] : this.pt;
    (i = h || f) === null || i === void 0 || (i = i.hooks) === null || i === void 0 || (o = i.onBeforeCreate) === null || o === void 0 || o.call(i);
    var m = (s = this.$primevueConfig) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s._usept, g = m ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.originalValue : void 0, y = m ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.value : (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 ? void 0 : u.pt;
    (c = y || g) === null || c === void 0 || (c = c[this.$.type.name]) === null || c === void 0 || (c = c.hooks) === null || c === void 0 || (d = c.onBeforeCreate) === null || d === void 0 || d.call(c), this.$attrSelector = _h(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var e;
    this.rootEl = io(wi(this.$el) ? this.$el : (e = this.$el) === null || e === void 0 ? void 0 : e.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = se({
      name: this.$.type.name,
      attrSelector: this.$attrSelector
    }, this.$params)), this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._removeThemeListeners(), this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(e) {
      if (!this.$options.hostName) {
        var t = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(e)), r = this._useDefaultPT(this._getOptionValue, "hooks.".concat(e));
        t == null || t(), r == null || r();
      }
    },
    _mergeProps: function(e) {
      for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
        r[i - 1] = arguments[i];
      return ua(e) ? e.apply(void 0, r) : $e.apply(void 0, r);
    },
    _load: function() {
      un.isStyleNameLoaded("base") || (Ne.loadCSS(this.$styleOptions), this._loadGlobalStyles(), un.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var e, t;
      !un.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (t = this.$style) !== null && t !== void 0 && t.name && (ml.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), un.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var e = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      Ce(e) && Ne.load(e, se({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var e, t;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!Se.isStyleNameLoaded("common")) {
          var r, i, o = ((r = this.$style) === null || r === void 0 || (i = r.getCommonTheme) === null || i === void 0 ? void 0 : i.call(r)) || {}, s = o.primitive, a = o.semantic, l = o.global, u = o.style;
          Ne.load(s == null ? void 0 : s.css, se({
            name: "primitive-variables"
          }, this.$styleOptions)), Ne.load(a == null ? void 0 : a.css, se({
            name: "semantic-variables"
          }, this.$styleOptions)), Ne.load(l == null ? void 0 : l.css, se({
            name: "global-variables"
          }, this.$styleOptions)), Ne.loadStyle(se({
            name: "global-style"
          }, this.$styleOptions), u), Se.setLoadedStyleName("common");
        }
        if (!Se.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (t = this.$style) !== null && t !== void 0 && t.name) {
          var c, d, p, f, h = ((c = this.$style) === null || c === void 0 || (d = c.getComponentTheme) === null || d === void 0 ? void 0 : d.call(c)) || {}, m = h.css, g = h.style;
          (p = this.$style) === null || p === void 0 || p.load(m, se({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (f = this.$style) === null || f === void 0 || f.loadStyle(se({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), g), Se.setLoadedStyleName(this.$style.name);
        }
        if (!Se.isStyleNameLoaded("layer-order")) {
          var y, S, C = (y = this.$style) === null || y === void 0 || (S = y.getLayerOrderThemeCSS) === null || S === void 0 ? void 0 : S.call(y);
          Ne.load(C, se({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), Se.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(e) {
      var t, r, i, o = ((t = this.$style) === null || t === void 0 || (r = t.getPresetTheme) === null || r === void 0 ? void 0 : r.call(t, e, "[".concat(this.$attrSelector, "]"))) || {}, s = o.css, a = (i = this.$style) === null || i === void 0 ? void 0 : i.load(s, se({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = a.el;
    },
    _unloadScopedThemeStyles: function() {
      var e;
      (e = this.scopedStyleEl) === null || e === void 0 || (e = e.value) === null || e === void 0 || e.remove();
    },
    _themeChangeListener: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      un.clearLoadedStyleNames(), tt.on("theme:change", e);
    },
    _removeThemeListeners: function() {
      tt.off("theme:change", this._loadCoreStyles), tt.off("theme:change", this._load), tt.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(e) {
      return e ? this.$options.hostName ? e.$.type.name === this.$options.hostName ? e : this._getHostInstance(e.$parentInstance) : e.$parentInstance : void 0;
    },
    _getPropValue: function(e) {
      var t;
      return this[e] || ((t = this._getHostInstance(this)) === null || t === void 0 ? void 0 : t[e]);
    },
    _getOptionValue: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return ca(e, t, r);
    },
    _getPTValue: function() {
      var e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, s = /./g.test(r) && !!i[r.split(".")[0]], a = this._getPropValue("ptOptions") || ((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, l = a.mergeSections, u = l === void 0 ? !0 : l, c = a.mergeProps, d = c === void 0 ? !1 : c, p = o ? s ? this._useGlobalPT(this._getPTClassValue, r, i) : this._useDefaultPT(this._getPTClassValue, r, i) : void 0, f = s ? void 0 : this._getPTSelf(t, this._getPTClassValue, r, se(se({}, i), {}, {
        global: p || {}
      })), h = this._getPTDatasets(r);
      return u || !u && f ? d ? this._mergeProps(d, p, f, h) : se(se(se({}, p), f), h) : se(se({}, f), h);
    },
    _getPTSelf: function() {
      for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
        r[i - 1] = arguments[i];
      return $e(
        this._usePT.apply(this, [this._getPT(e, this.$name)].concat(r)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(r))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var e, t, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", i = "data-pc-", o = r === "root" && Ce((e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"]);
      return r !== "transition" && se(se({}, r === "root" && se(se(Lr({}, "".concat(i, "name"), It(o ? (t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"] : this.$.type.name)), o && Lr({}, "".concat(i, "extend"), It(this.$.type.name))), {}, Lr({}, "".concat(this.$attrSelector), ""))), {}, Lr({}, "".concat(i, "section"), It(r)));
    },
    _getPTClassValue: function() {
      var e = this._getOptionValue.apply(this, arguments);
      return st(e) || Ac(e) ? {
        class: e
      } : e;
    },
    _getPT: function(e) {
      var t = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i = arguments.length > 2 ? arguments[2] : void 0, o = function(a) {
        var l, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = i ? i(a) : a, d = It(r), p = It(t.$name);
        return (l = u ? d !== p ? c == null ? void 0 : c[d] : void 0 : c == null ? void 0 : c[d]) !== null && l !== void 0 ? l : c;
      };
      return e != null && e.hasOwnProperty("_usept") ? {
        _usept: e._usept,
        originalValue: o(e.originalValue),
        value: o(e.value)
      } : o(e, !0);
    },
    _usePT: function(e, t, r, i) {
      var o = function(m) {
        return t(m, r, i);
      };
      if (e != null && e.hasOwnProperty("_usept")) {
        var s, a = e._usept || ((s = this.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, l = a.mergeSections, u = l === void 0 ? !0 : l, c = a.mergeProps, d = c === void 0 ? !1 : c, p = o(e.originalValue), f = o(e.value);
        return p === void 0 && f === void 0 ? void 0 : st(f) ? f : st(p) ? p : u || !u && f ? d ? this._mergeProps(d, p, f) : se(se({}, p), f) : f;
      }
      return o(e);
    },
    _useGlobalPT: function(e, t, r) {
      return this._usePT(this.globalPT, e, t, r);
    },
    _useDefaultPT: function(e, t, r) {
      return this._usePT(this.defaultPT, e, t, r);
    },
    ptm: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, e, se(se({}, this.$params), t));
    },
    ptmi: function() {
      var e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = $e(this.$_attrsWithoutPT, this.ptm(t, r));
      return i != null && i.hasOwnProperty("id") && ((e = i.id) !== null && e !== void 0 || (i.id = this.$id)), i;
    },
    ptmo: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(e, t, se({
        instance: this
      }, r), !1);
    },
    cx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, e, se(se({}, this.$params), t));
    },
    sx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (t) {
        var i = this._getOptionValue(this.$style.inlineStyles, e, se(se({}, this.$params), r)), o = this._getOptionValue(ml.inlineStyles, e, se(se({}, this.$params), r));
        return [o, i];
      }
    }
  },
  computed: {
    globalPT: function() {
      var e, t = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(r) {
        return pt(r, {
          instance: t
        });
      });
    },
    defaultPT: function() {
      var e, t = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(r) {
        return t._getOptionValue(r, t.$name, se({}, t.$params)) || pt(r, se({}, t.$params));
      });
    },
    isUnstyled: function() {
      var e;
      return this.unstyled !== void 0 ? this.unstyled : (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var e, t = Object.keys(((e = this.$.vnode) === null || e === void 0 ? void 0 : e.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(r) {
        var i = Nr(r, 1), o = i[0];
        return t == null ? void 0 : t.includes(o);
      }));
    },
    $theme: function() {
      var e;
      return (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.theme;
    },
    $style: function() {
      return se(se({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadStyle: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var e;
      return {
        nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
      };
    },
    $primevueConfig: function() {
      var e;
      return (e = this.$primevue) === null || e === void 0 ? void 0 : e.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var e = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: e,
          props: e == null ? void 0 : e.$props,
          state: e == null ? void 0 : e.$data,
          attrs: e == null ? void 0 : e.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var t = Nr(e, 1), r = t[0];
        return r == null ? void 0 : r.startsWith("pt:");
      }).reduce(function(e, t) {
        var r = Nr(t, 2), i = r[0], o = r[1], s = i.split(":"), a = Mh(s), l = a.slice(1);
        return l == null || l.reduce(function(u, c, d, p) {
          return !u[c] && (u[c] = d === p.length - 1 ? o : {}), u[c];
        }, e), e;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var t = Nr(e, 1), r = t[0];
        return !(r != null && r.startsWith("pt:"));
      }).reduce(function(e, t) {
        var r = Nr(t, 2), i = r[0], o = r[1];
        return e[i] = o, e;
      }, {});
    }
  }
}, Ph = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, Ih = Ne.extend({
  name: "baseicon",
  css: Ph
});
function ii(n) {
  "@babel/helpers - typeof";
  return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ii(n);
}
function yl(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function bl(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yl(Object(t), !0).forEach(function(r) {
      Rh(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : yl(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Rh(n, e, t) {
  return (e = Lh(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Lh(n) {
  var e = Vh(n, "string");
  return ii(e) == "symbol" ? e : e + "";
}
function Vh(n, e) {
  if (ii(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (ii(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var Hc = {
  name: "BaseIcon",
  extends: Er,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: Ih,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var e = ki(this.label);
      return bl(bl({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: e ? void 0 : "img",
        "aria-label": e ? void 0 : this.label,
        "aria-hidden": e
      });
    }
  }
}, Uc = {
  name: "ChevronRightIcon",
  extends: Hc
};
function Bh(n) {
  return Hh(n) || Fh(n) || jh(n) || zh();
}
function zh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jh(n, e) {
  if (n) {
    if (typeof n == "string") return ks(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ks(n, e) : void 0;
  }
}
function Fh(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Hh(n) {
  if (Array.isArray(n)) return ks(n);
}
function ks(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function Uh(n, e, t, r, i, o) {
  return w(), M("svg", $e({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, n.pti()), Bh(e[0] || (e[0] = [b("path", {
    d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Uc.render = Uh;
var Vi = Mc();
function oi(n) {
  "@babel/helpers - typeof";
  return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, oi(n);
}
function Sl(n, e) {
  return Jh(n) || Kh(n, e) || qh(n, e) || Wh();
}
function Wh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qh(n, e) {
  if (n) {
    if (typeof n == "string") return xl(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? xl(n, e) : void 0;
  }
}
function xl(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function Kh(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r, i, o, s, a = [], l = !0, u = !1;
    try {
      if (o = (t = t.call(n)).next, e !== 0) for (; !(l = (r = o.call(t)).done) && (a.push(r.value), a.length !== e); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw i;
      }
    }
    return a;
  }
}
function Jh(n) {
  if (Array.isArray(n)) return n;
}
function wl(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function le(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wl(Object(t), !0).forEach(function(r) {
      Cs(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : wl(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Cs(n, e, t) {
  return (e = Gh(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Gh(n) {
  var e = Yh(n, "string");
  return oi(e) == "symbol" ? e : e + "";
}
function Yh(n, e) {
  if (oi(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (oi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var ne = {
  _getMeta: function() {
    return [hn(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], pt(hn(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(e, t) {
    var r, i, o;
    return (r = (e == null || (i = e.instance) === null || i === void 0 ? void 0 : i.$primevue) || (t == null || (o = t.ctx) === null || o === void 0 || (o = o.appContext) === null || o === void 0 || (o = o.config) === null || o === void 0 || (o = o.globalProperties) === null || o === void 0 ? void 0 : o.$primevue)) === null || r === void 0 ? void 0 : r.config;
  },
  _getOptionValue: ca,
  _getPTValue: function() {
    var e, t, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = function() {
      var S = ne._getOptionValue.apply(ne, arguments);
      return st(S) || Ac(S) ? {
        class: S
      } : S;
    }, u = ((e = r.binding) === null || e === void 0 || (e = e.value) === null || e === void 0 ? void 0 : e.ptOptions) || ((t = r.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, c = u.mergeSections, d = c === void 0 ? !0 : c, p = u.mergeProps, f = p === void 0 ? !1 : p, h = a ? ne._useDefaultPT(r, r.defaultPT(), l, o, s) : void 0, m = ne._usePT(r, ne._getPT(i, r.$name), l, o, le(le({}, s), {}, {
      global: h || {}
    })), g = ne._getPTDatasets(r, o);
    return d || !d && m ? f ? ne._mergeProps(r, f, h, m, g) : le(le(le({}, h), m), g) : le(le({}, m), g);
  },
  _getPTDatasets: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = "data-pc-";
    return le(le({}, t === "root" && Cs({}, "".concat(r, "name"), It(e.$name))), {}, Cs({}, "".concat(r, "section"), It(t)));
  },
  _getPT: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, i = function(s) {
      var a, l = r ? r(s) : s, u = It(t);
      return (a = l == null ? void 0 : l[u]) !== null && a !== void 0 ? a : l;
    };
    return e && Object.hasOwn(e, "_usept") ? {
      _usept: e._usept,
      originalValue: i(e.originalValue),
      value: i(e.value)
    } : i(e);
  },
  _usePT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = arguments.length > 4 ? arguments[4] : void 0, s = function(g) {
      return r(g, i, o);
    };
    if (t && Object.hasOwn(t, "_usept")) {
      var a, l = t._usept || ((a = e.$primevueConfig) === null || a === void 0 ? void 0 : a.ptOptions) || {}, u = l.mergeSections, c = u === void 0 ? !0 : u, d = l.mergeProps, p = d === void 0 ? !1 : d, f = s(t.originalValue), h = s(t.value);
      return f === void 0 && h === void 0 ? void 0 : st(h) ? h : st(f) ? f : c || !c && h ? p ? ne._mergeProps(e, p, f, h) : le(le({}, f), h) : h;
    }
    return s(t);
  },
  _useDefaultPT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = arguments.length > 4 ? arguments[4] : void 0;
    return ne._usePT(e, t, r, i, o);
  },
  _loadStyles: function() {
    var e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 ? arguments[2] : void 0, o = ne._getConfig(r, i), s = {
      nonce: o == null || (e = o.csp) === null || e === void 0 ? void 0 : e.nonce
    };
    ne._loadCoreStyles(t, s), ne._loadThemeStyles(t, s), ne._loadScopedThemeStyles(t, s), ne._removeThemeListeners(t), t.$loadStyles = function() {
      return ne._loadThemeStyles(t, s);
    }, ne._themeChangeListener(t.$loadStyles);
  },
  _loadCoreStyles: function() {
    var e, t, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!un.isStyleNameLoaded((e = r.$style) === null || e === void 0 ? void 0 : e.name) && (t = r.$style) !== null && t !== void 0 && t.name) {
      var o;
      Ne.loadCSS(i), (o = r.$style) === null || o === void 0 || o.loadCSS(i), un.setLoadedStyleName(r.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var e, t, r, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (!(i != null && i.isUnstyled() || (i == null || (e = i.theme) === null || e === void 0 ? void 0 : e.call(i)) === "none")) {
      if (!Se.isStyleNameLoaded("common")) {
        var s, a, l = ((s = i.$style) === null || s === void 0 || (a = s.getCommonTheme) === null || a === void 0 ? void 0 : a.call(s)) || {}, u = l.primitive, c = l.semantic, d = l.global, p = l.style;
        Ne.load(u == null ? void 0 : u.css, le({
          name: "primitive-variables"
        }, o)), Ne.load(c == null ? void 0 : c.css, le({
          name: "semantic-variables"
        }, o)), Ne.load(d == null ? void 0 : d.css, le({
          name: "global-variables"
        }, o)), Ne.loadStyle(le({
          name: "global-style"
        }, o), p), Se.setLoadedStyleName("common");
      }
      if (!Se.isStyleNameLoaded((t = i.$style) === null || t === void 0 ? void 0 : t.name) && (r = i.$style) !== null && r !== void 0 && r.name) {
        var f, h, m, g, y = ((f = i.$style) === null || f === void 0 || (h = f.getDirectiveTheme) === null || h === void 0 ? void 0 : h.call(f)) || {}, S = y.css, C = y.style;
        (m = i.$style) === null || m === void 0 || m.load(S, le({
          name: "".concat(i.$style.name, "-variables")
        }, o)), (g = i.$style) === null || g === void 0 || g.loadStyle(le({
          name: "".concat(i.$style.name, "-style")
        }, o), C), Se.setLoadedStyleName(i.$style.name);
      }
      if (!Se.isStyleNameLoaded("layer-order")) {
        var v, k, x = (v = i.$style) === null || v === void 0 || (k = v.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(v);
        Ne.load(x, le({
          name: "layer-order",
          first: !0
        }, o)), Se.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = e.preset();
    if (r && e.$attrSelector) {
      var i, o, s, a = ((i = e.$style) === null || i === void 0 || (o = i.getPresetTheme) === null || o === void 0 ? void 0 : o.call(i, r, "[".concat(e.$attrSelector, "]"))) || {}, l = a.css, u = (s = e.$style) === null || s === void 0 ? void 0 : s.load(l, le({
        name: "".concat(e.$attrSelector, "-").concat(e.$style.name)
      }, t));
      e.scopedStyleEl = u.el;
    }
  },
  _themeChangeListener: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    un.clearLoadedStyleNames(), tt.on("theme:change", e);
  },
  _removeThemeListeners: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    tt.off("theme:change", e.$loadStyles), e.$loadStyles = void 0;
  },
  _hook: function(e, t, r, i, o, s) {
    var a, l, u = "on".concat(Zp(t)), c = ne._getConfig(i, o), d = r == null ? void 0 : r.$instance, p = ne._usePT(d, ne._getPT(i == null || (a = i.value) === null || a === void 0 ? void 0 : a.pt, e), ne._getOptionValue, "hooks.".concat(u)), f = ne._useDefaultPT(d, c == null || (l = c.pt) === null || l === void 0 || (l = l.directives) === null || l === void 0 ? void 0 : l[e], ne._getOptionValue, "hooks.".concat(u)), h = {
      el: r,
      binding: i,
      vnode: o,
      prevVnode: s
    };
    p == null || p(d, h), f == null || f(d, h);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var e = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++)
      r[i - 2] = arguments[i];
    return ua(e) ? e.apply(void 0, r) : $e.apply(void 0, r);
  },
  _extend: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = function(a, l, u, c, d) {
      var p, f, h, m;
      l._$instances = l._$instances || {};
      var g = ne._getConfig(u, c), y = l._$instances[e] || {}, S = ki(y) ? le(le({}, t), t == null ? void 0 : t.methods) : {};
      l._$instances[e] = le(le({}, y), {}, {
        /* new instance variables to pass in directive methods */
        $name: e,
        $host: l,
        $binding: u,
        $modifiers: u == null ? void 0 : u.modifiers,
        $value: u == null ? void 0 : u.value,
        $el: y.$el || l || void 0,
        $style: le({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, t == null ? void 0 : t.style),
        $primevueConfig: g,
        $attrSelector: (p = l.$pd) === null || p === void 0 || (p = p[e]) === null || p === void 0 ? void 0 : p.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return ne._getPT(g == null ? void 0 : g.pt, void 0, function(v) {
            var k;
            return v == null || (k = v.directives) === null || k === void 0 ? void 0 : k[e];
          });
        },
        isUnstyled: function() {
          var v, k;
          return ((v = l._$instances[e]) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.unstyled) !== void 0 ? (k = l._$instances[e]) === null || k === void 0 || (k = k.$binding) === null || k === void 0 || (k = k.value) === null || k === void 0 ? void 0 : k.unstyled : g == null ? void 0 : g.unstyled;
        },
        theme: function() {
          var v;
          return (v = l._$instances[e]) === null || v === void 0 || (v = v.$primevueConfig) === null || v === void 0 ? void 0 : v.theme;
        },
        preset: function() {
          var v;
          return (v = l._$instances[e]) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.dt;
        },
        /* instance's methods */
        ptm: function() {
          var v, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return ne._getPTValue(l._$instances[e], (v = l._$instances[e]) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.pt, k, le({}, x));
        },
        ptmo: function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return ne._getPTValue(l._$instances[e], v, k, x, !1);
        },
        cx: function() {
          var v, k, x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (v = l._$instances[e]) !== null && v !== void 0 && v.isUnstyled() ? void 0 : ne._getOptionValue((k = l._$instances[e]) === null || k === void 0 || (k = k.$style) === null || k === void 0 ? void 0 : k.classes, x, le({}, O));
        },
        sx: function() {
          var v, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return x ? ne._getOptionValue((v = l._$instances[e]) === null || v === void 0 || (v = v.$style) === null || v === void 0 ? void 0 : v.inlineStyles, k, le({}, O)) : void 0;
        }
      }, S), l.$instance = l._$instances[e], (f = (h = l.$instance)[a]) === null || f === void 0 || f.call(h, l, u, c, d), l["$".concat(e)] = l.$instance, ne._hook(e, a, l, u, c, d), l.$pd || (l.$pd = {}), l.$pd[e] = le(le({}, (m = l.$pd) === null || m === void 0 ? void 0 : m[e]), {}, {
        name: e,
        instance: l._$instances[e]
      });
    }, i = function(a) {
      var l, u, c, d = a._$instances[e], p = d == null ? void 0 : d.watch, f = function(g) {
        var y, S = g.newValue, C = g.oldValue;
        return p == null || (y = p.config) === null || y === void 0 ? void 0 : y.call(d, S, C);
      }, h = function(g) {
        var y, S = g.newValue, C = g.oldValue;
        return p == null || (y = p["config.ripple"]) === null || y === void 0 ? void 0 : y.call(d, S, C);
      };
      d.$watchersCallback = {
        config: f,
        "config.ripple": h
      }, p == null || (l = p.config) === null || l === void 0 || l.call(d, d == null ? void 0 : d.$primevueConfig), Vi.on("config:change", f), p == null || (u = p["config.ripple"]) === null || u === void 0 || u.call(d, d == null || (c = d.$primevueConfig) === null || c === void 0 ? void 0 : c.ripple), Vi.on("config:ripple:change", h);
    }, o = function(a) {
      var l = a._$instances[e].$watchersCallback;
      l && (Vi.off("config:change", l.config), Vi.off("config:ripple:change", l["config.ripple"]), a._$instances[e].$watchersCallback = void 0);
    };
    return {
      created: function(a, l, u, c) {
        a.$pd || (a.$pd = {}), a.$pd[e] = {
          name: e,
          attrSelector: eh("pd")
        }, r("created", a, l, u, c);
      },
      beforeMount: function(a, l, u, c) {
        var d;
        ne._loadStyles((d = a.$pd[e]) === null || d === void 0 ? void 0 : d.instance, l, u), r("beforeMount", a, l, u, c), i(a);
      },
      mounted: function(a, l, u, c) {
        var d;
        ne._loadStyles((d = a.$pd[e]) === null || d === void 0 ? void 0 : d.instance, l, u), r("mounted", a, l, u, c);
      },
      beforeUpdate: function(a, l, u, c) {
        r("beforeUpdate", a, l, u, c);
      },
      updated: function(a, l, u, c) {
        var d;
        ne._loadStyles((d = a.$pd[e]) === null || d === void 0 ? void 0 : d.instance, l, u), r("updated", a, l, u, c);
      },
      beforeUnmount: function(a, l, u, c) {
        var d;
        o(a), ne._removeThemeListeners((d = a.$pd[e]) === null || d === void 0 ? void 0 : d.instance), r("beforeUnmount", a, l, u, c);
      },
      unmounted: function(a, l, u, c) {
        var d;
        (d = a.$pd[e]) === null || d === void 0 || (d = d.instance) === null || d === void 0 || (d = d.scopedStyleEl) === null || d === void 0 || (d = d.value) === null || d === void 0 || d.remove(), r("unmounted", a, l, u, c);
      }
    };
  },
  extend: function() {
    var e = ne._getMeta.apply(ne, arguments), t = Sl(e, 2), r = t[0], i = t[1];
    return le({
      extend: function() {
        var s = ne._getMeta.apply(ne, arguments), a = Sl(s, 2), l = a[0], u = a[1];
        return ne.extend(l, le(le(le({}, i), i == null ? void 0 : i.methods), u));
      }
    }, ne._extend(r, i));
  }
}, Qh = `
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`, Xh = {
  root: "p-ink"
}, Zh = Ne.extend({
  name: "ripple-directive",
  style: Qh,
  classes: Xh
}), em = ne.extend({
  style: Zh
});
function si(n) {
  "@babel/helpers - typeof";
  return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, si(n);
}
function tm(n) {
  return om(n) || im(n) || rm(n) || nm();
}
function nm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rm(n, e) {
  if (n) {
    if (typeof n == "string") return Ts(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ts(n, e) : void 0;
  }
}
function im(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function om(n) {
  if (Array.isArray(n)) return Ts(n);
}
function Ts(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function kl(n, e, t) {
  return (e = sm(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function sm(n) {
  var e = am(n, "string");
  return si(e) == "symbol" ? e : e + "";
}
function am(n, e) {
  if (si(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (si(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var Wc = em.extend("ripple", {
  watch: {
    "config.ripple": function(e) {
      e ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(e) {
    this.remove(e);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(e) {
      e.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(e) {
      e.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(e) {
      var t = this.getInk(e);
      t || (t = Kp("span", kl(kl({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), e.appendChild(t), this.$el = t);
    },
    remove: function(e) {
      var t = this.getInk(e);
      t && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(e), t.removeEventListener("animationend", this.onAnimationEnd), t.remove());
    },
    onMouseDown: function(e) {
      var t = this, r = e.currentTarget, i = this.getInk(r);
      if (!(!i || getComputedStyle(i, null).display === "none")) {
        if (!this.isUnstyled() && Ho(i, "p-ink-active"), i.setAttribute("data-p-ink-active", "false"), !Ss(i) && !jr(i)) {
          var o = Math.max(Ec(r), _c(r));
          i.style.height = o + "px", i.style.width = o + "px";
        }
        var s = Rr(r), a = e.pageX - s.left + document.body.scrollTop - jr(i) / 2, l = e.pageY - s.top + document.body.scrollLeft - Ss(i) / 2;
        i.style.top = l + "px", i.style.left = a + "px", !this.isUnstyled() && Up(i, "p-ink-active"), i.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          i && (!t.isUnstyled() && Ho(i, "p-ink-active"), i.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(e) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Ho(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(e) {
      return e && e.children ? tm(e.children).find(function(t) {
        return Ir(t, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
});
function lm() {
  return qc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function qc() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const um = typeof Proxy == "function", cm = "devtools-plugin:setup", dm = "plugin:settings:set";
let tr, Os;
function fm() {
  var n;
  return tr !== void 0 || (typeof window < "u" && window.performance ? (tr = !0, Os = window.performance) : typeof globalThis < "u" && (!((n = globalThis.perf_hooks) === null || n === void 0) && n.performance) ? (tr = !0, Os = globalThis.perf_hooks.performance) : tr = !1), tr;
}
function pm() {
  return fm() ? Os.now() : Date.now();
}
class hm {
  constructor(e, t) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = t;
    const r = {};
    if (e.settings)
      for (const s in e.settings) {
        const a = e.settings[s];
        r[s] = a.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${e.id}`;
    let o = Object.assign({}, r);
    try {
      const s = localStorage.getItem(i), a = JSON.parse(s);
      Object.assign(o, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(s) {
        try {
          localStorage.setItem(i, JSON.stringify(s));
        } catch {
        }
        o = s;
      },
      now() {
        return pm();
      }
    }, t && t.on(dm, (s, a) => {
      s === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, a) => this.target ? this.target.on[a] : (...l) => {
        this.onQueue.push({
          method: a,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
        method: a,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[a](...l)) : (...l) => new Promise((u) => {
        this.targetQueue.push({
          method: a,
          args: l,
          resolve: u
        });
      })
    });
  }
  async setRealTarget(e) {
    this.target = e;
    for (const t of this.onQueue)
      this.target.on[t.method](...t.args);
    for (const t of this.targetQueue)
      t.resolve(await this.target[t.method](...t.args));
  }
}
function mm(n, e) {
  const t = n, r = qc(), i = lm(), o = um && t.enableEarlyProxy;
  if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    i.emit(cm, n, e);
  else {
    const s = o ? new hm(t, i) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: t,
      setupFn: e,
      proxy: s
    }), s && e(s.proxiedTarget);
  }
}
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const Gt = typeof document < "u";
function Kc(n) {
  return typeof n == "object" || "displayName" in n || "props" in n || "__vccOpts" in n;
}
function gm(n) {
  return n.__esModule || n[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  n.default && Kc(n.default);
}
const ce = Object.assign;
function qo(n, e) {
  const t = {};
  for (const r in e) {
    const i = e[r];
    t[r] = mt(i) ? i.map(n) : n(i);
  }
  return t;
}
const Hr = () => {
}, mt = Array.isArray;
function ie(n) {
  const e = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + n].concat(e));
}
const Jc = /#/g, vm = /&/g, ym = /\//g, bm = /=/g, Sm = /\?/g, Gc = /\+/g, xm = /%5B/g, wm = /%5D/g, Yc = /%5E/g, km = /%60/g, Qc = /%7B/g, Cm = /%7C/g, Xc = /%7D/g, Tm = /%20/g;
function da(n) {
  return encodeURI("" + n).replace(Cm, "|").replace(xm, "[").replace(wm, "]");
}
function Om(n) {
  return da(n).replace(Qc, "{").replace(Xc, "}").replace(Yc, "^");
}
function Es(n) {
  return da(n).replace(Gc, "%2B").replace(Tm, "+").replace(Jc, "%23").replace(vm, "%26").replace(km, "`").replace(Qc, "{").replace(Xc, "}").replace(Yc, "^");
}
function Em(n) {
  return Es(n).replace(bm, "%3D");
}
function _m(n) {
  return da(n).replace(Jc, "%23").replace(Sm, "%3F");
}
function Mm(n) {
  return n == null ? "" : _m(n).replace(ym, "%2F");
}
function hr(n) {
  try {
    return decodeURIComponent("" + n);
  } catch {
    process.env.NODE_ENV !== "production" && ie(`Error decoding "${n}". Using original value`);
  }
  return "" + n;
}
const Nm = /\/$/, Am = (n) => n.replace(Nm, "");
function Ko(n, e, t = "/") {
  let r, i = {}, o = "", s = "";
  const a = e.indexOf("#");
  let l = e.indexOf("?");
  return a < l && a >= 0 && (l = -1), l > -1 && (r = e.slice(0, l), o = e.slice(l + 1, a > -1 ? a : e.length), i = n(o)), a > -1 && (r = r || e.slice(0, a), s = e.slice(a, e.length)), r = Pm(r ?? e, t), {
    fullPath: r + (o && "?") + o + s,
    path: r,
    query: i,
    hash: hr(s)
  };
}
function $m(n, e) {
  const t = e.query ? n(e.query) : "";
  return e.path + (t && "?") + t + (e.hash || "");
}
function Cl(n, e) {
  return !e || !n.toLowerCase().startsWith(e.toLowerCase()) ? n : n.slice(e.length) || "/";
}
function Tl(n, e, t) {
  const r = e.matched.length - 1, i = t.matched.length - 1;
  return r > -1 && r === i && bn(e.matched[r], t.matched[i]) && Zc(e.params, t.params) && n(e.query) === n(t.query) && e.hash === t.hash;
}
function bn(n, e) {
  return (n.aliasOf || n) === (e.aliasOf || e);
}
function Zc(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (const t in n)
    if (!Dm(n[t], e[t]))
      return !1;
  return !0;
}
function Dm(n, e) {
  return mt(n) ? Ol(n, e) : mt(e) ? Ol(e, n) : n === e;
}
function Ol(n, e) {
  return mt(e) ? n.length === e.length && n.every((t, r) => t === e[r]) : n.length === 1 && n[0] === e;
}
function Pm(n, e) {
  if (n.startsWith("/"))
    return n;
  if (process.env.NODE_ENV !== "production" && !e.startsWith("/"))
    return ie(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${e}". It should look like "/${e}".`), n;
  if (!n)
    return e;
  const t = e.split("/"), r = n.split("/"), i = r[r.length - 1];
  (i === ".." || i === ".") && r.push("");
  let o = t.length - 1, s, a;
  for (s = 0; s < r.length; s++)
    if (a = r[s], a !== ".")
      if (a === "..")
        o > 1 && o--;
      else
        break;
  return t.slice(0, o).join("/") + "/" + r.slice(s).join("/");
}
const rn = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var ai;
(function(n) {
  n.pop = "pop", n.push = "push";
})(ai || (ai = {}));
var Ur;
(function(n) {
  n.back = "back", n.forward = "forward", n.unknown = "";
})(Ur || (Ur = {}));
function Im(n) {
  if (!n)
    if (Gt) {
      const e = document.querySelector("base");
      n = e && e.getAttribute("href") || "/", n = n.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      n = "/";
  return n[0] !== "/" && n[0] !== "#" && (n = "/" + n), Am(n);
}
const Rm = /^[^#]+#/;
function Lm(n, e) {
  return n.replace(Rm, "#") + e;
}
function Vm(n, e) {
  const t = document.documentElement.getBoundingClientRect(), r = n.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - t.left - (e.left || 0),
    top: r.top - t.top - (e.top || 0)
  };
}
const Co = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Bm(n) {
  let e;
  if ("el" in n) {
    const t = n.el, r = typeof t == "string" && t.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof n.el == "string" && (!r || !document.getElementById(n.el.slice(1))))
      try {
        const o = document.querySelector(n.el);
        if (r && o) {
          ie(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        ie(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const i = typeof t == "string" ? r ? document.getElementById(t.slice(1)) : document.querySelector(t) : t;
    if (!i) {
      process.env.NODE_ENV !== "production" && ie(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);
      return;
    }
    e = Vm(i, n);
  } else
    e = n;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY);
}
function El(n, e) {
  return (history.state ? history.state.position - e : -1) + n;
}
const _s = /* @__PURE__ */ new Map();
function zm(n, e) {
  _s.set(n, e);
}
function jm(n) {
  const e = _s.get(n);
  return _s.delete(n), e;
}
let Fm = () => location.protocol + "//" + location.host;
function ed(n, e) {
  const { pathname: t, search: r, hash: i } = e, o = n.indexOf("#");
  if (o > -1) {
    let a = i.includes(n.slice(o)) ? n.slice(o).length : 1, l = i.slice(a);
    return l[0] !== "/" && (l = "/" + l), Cl(l, "");
  }
  return Cl(t, n) + r + i;
}
function Hm(n, e, t, r) {
  let i = [], o = [], s = null;
  const a = ({ state: p }) => {
    const f = ed(n, location), h = t.value, m = e.value;
    let g = 0;
    if (p) {
      if (t.value = f, e.value = p, s && s === h) {
        s = null;
        return;
      }
      g = m ? p.position - m.position : 0;
    } else
      r(f);
    i.forEach((y) => {
      y(t.value, h, {
        delta: g,
        type: ai.pop,
        direction: g ? g > 0 ? Ur.forward : Ur.back : Ur.unknown
      });
    });
  };
  function l() {
    s = t.value;
  }
  function u(p) {
    i.push(p);
    const f = () => {
      const h = i.indexOf(p);
      h > -1 && i.splice(h, 1);
    };
    return o.push(f), f;
  }
  function c() {
    const { history: p } = window;
    p.state && p.replaceState(ce({}, p.state, { scroll: Co() }), "");
  }
  function d() {
    for (const p of o)
      p();
    o = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", c, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: u,
    destroy: d
  };
}
function _l(n, e, t, r = !1, i = !1) {
  return {
    back: n,
    current: e,
    forward: t,
    replaced: r,
    position: window.history.length,
    scroll: i ? Co() : null
  };
}
function Um(n) {
  const { history: e, location: t } = window, r = {
    value: ed(n, t)
  }, i = { value: e.state };
  i.value || o(r.value, {
    back: null,
    current: r.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: e.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function o(l, u, c) {
    const d = n.indexOf("#"), p = d > -1 ? (t.host && document.querySelector("base") ? n : n.slice(d)) + l : Fm() + n + l;
    try {
      e[c ? "replaceState" : "pushState"](u, "", p), i.value = u;
    } catch (f) {
      process.env.NODE_ENV !== "production" ? ie("Error with push/replace State", f) : console.error(f), t[c ? "replace" : "assign"](p);
    }
  }
  function s(l, u) {
    const c = ce({}, e.state, _l(
      i.value.back,
      // keep back and forward entries but override current position
      l,
      i.value.forward,
      !0
    ), u, { position: i.value.position });
    o(l, c, !0), r.value = l;
  }
  function a(l, u) {
    const c = ce(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      i.value,
      e.state,
      {
        forward: l,
        scroll: Co()
      }
    );
    process.env.NODE_ENV !== "production" && !e.state && ie(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), o(c.current, c, !0);
    const d = ce({}, _l(r.value, l, null), { position: c.position + 1 }, u);
    o(l, d, !1), r.value = l;
  }
  return {
    location: r,
    state: i,
    push: a,
    replace: s
  };
}
function Wm(n) {
  n = Im(n);
  const e = Um(n), t = Hm(n, e.state, e.location, e.replace);
  function r(o, s = !0) {
    s || t.pauseListeners(), history.go(o);
  }
  const i = ce({
    // it's overridden right after
    location: "",
    base: n,
    go: r,
    createHref: Lm.bind(null, n)
  }, e, t);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => e.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => e.state.value
  }), i;
}
function so(n) {
  return typeof n == "string" || n && typeof n == "object";
}
function td(n) {
  return typeof n == "string" || typeof n == "symbol";
}
const Ms = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Ml;
(function(n) {
  n[n.aborted = 4] = "aborted", n[n.cancelled = 8] = "cancelled", n[n.duplicated = 16] = "duplicated";
})(Ml || (Ml = {}));
const qm = {
  1({ location: n, currentLocation: e }) {
    return `No match for
 ${JSON.stringify(n)}${e ? `
while being at
` + JSON.stringify(e) : ""}`;
  },
  2({ from: n, to: e }) {
    return `Redirected from "${n.fullPath}" to "${Jm(e)}" via a navigation guard.`;
  },
  4({ from: n, to: e }) {
    return `Navigation aborted from "${n.fullPath}" to "${e.fullPath}" via a navigation guard.`;
  },
  8({ from: n, to: e }) {
    return `Navigation cancelled from "${n.fullPath}" to "${e.fullPath}" with a new navigation.`;
  },
  16({ from: n, to: e }) {
    return `Avoided redundant navigation to current location: "${n.fullPath}".`;
  }
};
function mr(n, e) {
  return process.env.NODE_ENV !== "production" ? ce(new Error(qm[n](e)), {
    type: n,
    [Ms]: !0
  }, e) : ce(new Error(), {
    type: n,
    [Ms]: !0
  }, e);
}
function Wt(n, e) {
  return n instanceof Error && Ms in n && (e == null || !!(n.type & e));
}
const Km = ["params", "query", "hash"];
function Jm(n) {
  if (typeof n == "string")
    return n;
  if (n.path != null)
    return n.path;
  const e = {};
  for (const t of Km)
    t in n && (e[t] = n[t]);
  return JSON.stringify(e, null, 2);
}
const Nl = "[^/]+?", Gm = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Ym = /[.+*?^${}()[\]/\\]/g;
function Qm(n, e) {
  const t = ce({}, Gm, e), r = [];
  let i = t.start ? "^" : "";
  const o = [];
  for (const u of n) {
    const c = u.length ? [] : [
      90
      /* PathScore.Root */
    ];
    t.strict && !u.length && (i += "/");
    for (let d = 0; d < u.length; d++) {
      const p = u[d];
      let f = 40 + (t.sensitive ? 0.25 : 0);
      if (p.type === 0)
        d || (i += "/"), i += p.value.replace(Ym, "\\$&"), f += 40;
      else if (p.type === 1) {
        const { value: h, repeatable: m, optional: g, regexp: y } = p;
        o.push({
          name: h,
          repeatable: m,
          optional: g
        });
        const S = y || Nl;
        if (S !== Nl) {
          f += 10;
          try {
            new RegExp(`(${S})`);
          } catch (v) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${S}): ` + v.message);
          }
        }
        let C = m ? `((?:${S})(?:/(?:${S}))*)` : `(${S})`;
        d || (C = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        g && u.length < 2 ? `(?:/${C})` : "/" + C), g && (C += "?"), i += C, f += 20, g && (f += -8), m && (f += -20), S === ".*" && (f += -50);
      }
      c.push(f);
    }
    r.push(c);
  }
  if (t.strict && t.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  t.strict || (i += "/?"), t.end ? i += "$" : t.strict && !i.endsWith("/") && (i += "(?:/|$)");
  const s = new RegExp(i, t.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(s), d = {};
    if (!c)
      return null;
    for (let p = 1; p < c.length; p++) {
      const f = c[p] || "", h = o[p - 1];
      d[h.name] = f && h.repeatable ? f.split("/") : f;
    }
    return d;
  }
  function l(u) {
    let c = "", d = !1;
    for (const p of n) {
      (!d || !c.endsWith("/")) && (c += "/"), d = !1;
      for (const f of p)
        if (f.type === 0)
          c += f.value;
        else if (f.type === 1) {
          const { value: h, repeatable: m, optional: g } = f, y = h in u ? u[h] : "";
          if (mt(y) && !m)
            throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const S = mt(y) ? y.join("/") : y;
          if (!S)
            if (g)
              p.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${h}"`);
          c += S;
        }
    }
    return c || "/";
  }
  return {
    re: s,
    score: r,
    keys: o,
    parse: a,
    stringify: l
  };
}
function Xm(n, e) {
  let t = 0;
  for (; t < n.length && t < e.length; ) {
    const r = e[t] - n[t];
    if (r)
      return r;
    t++;
  }
  return n.length < e.length ? n.length === 1 && n[0] === 80 ? -1 : 1 : n.length > e.length ? e.length === 1 && e[0] === 80 ? 1 : -1 : 0;
}
function nd(n, e) {
  let t = 0;
  const r = n.score, i = e.score;
  for (; t < r.length && t < i.length; ) {
    const o = Xm(r[t], i[t]);
    if (o)
      return o;
    t++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Al(r))
      return 1;
    if (Al(i))
      return -1;
  }
  return i.length - r.length;
}
function Al(n) {
  const e = n[n.length - 1];
  return n.length > 0 && e[e.length - 1] < 0;
}
const Zm = {
  type: 0,
  value: ""
}, eg = /[a-zA-Z0-9_]/;
function tg(n) {
  if (!n)
    return [[]];
  if (n === "/")
    return [[Zm]];
  if (!n.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${n}" should be "/${n}".` : `Invalid path "${n}"`);
  function e(f) {
    throw new Error(`ERR (${t})/"${u}": ${f}`);
  }
  let t = 0, r = t;
  const i = [];
  let o;
  function s() {
    o && i.push(o), o = [];
  }
  let a = 0, l, u = "", c = "";
  function d() {
    u && (t === 0 ? o.push({
      type: 0,
      value: u
    }) : t === 1 || t === 2 || t === 3 ? (o.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), o.push({
      type: 1,
      value: u,
      regexp: c,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : e("Invalid state to consume buffer"), u = "");
  }
  function p() {
    u += l;
  }
  for (; a < n.length; ) {
    if (l = n[a++], l === "\\" && t !== 2) {
      r = t, t = 4;
      continue;
    }
    switch (t) {
      case 0:
        l === "/" ? (u && d(), s()) : l === ":" ? (d(), t = 1) : p();
        break;
      case 4:
        p(), t = r;
        break;
      case 1:
        l === "(" ? t = 2 : eg.test(l) ? p() : (d(), t = 0, l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : t = 3 : c += l;
        break;
      case 3:
        d(), t = 0, l !== "*" && l !== "?" && l !== "+" && a--, c = "";
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return t === 2 && e(`Unfinished custom RegExp for param "${u}"`), d(), s(), i;
}
function ng(n, e, t) {
  const r = Qm(tg(n.path), t);
  if (process.env.NODE_ENV !== "production") {
    const o = /* @__PURE__ */ new Set();
    for (const s of r.keys)
      o.has(s.name) && ie(`Found duplicated params with name "${s.name}" for path "${n.path}". Only the last one will be available on "$route.params".`), o.add(s.name);
  }
  const i = ce(r, {
    record: n,
    parent: e,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i;
}
function rg(n, e) {
  const t = [], r = /* @__PURE__ */ new Map();
  e = Il({ strict: !1, end: !0, sensitive: !1 }, e);
  function i(d) {
    return r.get(d);
  }
  function o(d, p, f) {
    const h = !f, m = Dl(d);
    process.env.NODE_ENV !== "production" && ag(m, p), m.aliasOf = f && f.record;
    const g = Il(e, d), y = [m];
    if ("alias" in d) {
      const v = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const k of v)
        y.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Dl(ce({}, m, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: f ? f.record.components : m.components,
            path: k,
            // we might be the child of an alias
            aliasOf: f ? f.record : m
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let S, C;
    for (const v of y) {
      const { path: k } = v;
      if (p && k[0] !== "/") {
        const x = p.record.path, O = x[x.length - 1] === "/" ? "" : "/";
        v.path = p.record.path + (k && O + k);
      }
      if (process.env.NODE_ENV !== "production" && v.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (S = ng(v, p, g), process.env.NODE_ENV !== "production" && p && k[0] === "/" && ug(S, p), f ? (f.alias.push(S), process.env.NODE_ENV !== "production" && sg(f, S)) : (C = C || S, C !== S && C.alias.push(S), h && d.name && !Pl(S) && (process.env.NODE_ENV !== "production" && lg(d, p), s(d.name))), rd(S) && l(S), m.children) {
        const x = m.children;
        for (let O = 0; O < x.length; O++)
          o(x[O], S, f && f.children[O]);
      }
      f = f || S;
    }
    return C ? () => {
      s(C);
    } : Hr;
  }
  function s(d) {
    if (td(d)) {
      const p = r.get(d);
      p && (r.delete(d), t.splice(t.indexOf(p), 1), p.children.forEach(s), p.alias.forEach(s));
    } else {
      const p = t.indexOf(d);
      p > -1 && (t.splice(p, 1), d.record.name && r.delete(d.record.name), d.children.forEach(s), d.alias.forEach(s));
    }
  }
  function a() {
    return t;
  }
  function l(d) {
    const p = cg(d, t);
    t.splice(p, 0, d), d.record.name && !Pl(d) && r.set(d.record.name, d);
  }
  function u(d, p) {
    let f, h = {}, m, g;
    if ("name" in d && d.name) {
      if (f = r.get(d.name), !f)
        throw mr(1, {
          location: d
        });
      if (process.env.NODE_ENV !== "production") {
        const C = Object.keys(d.params || {}).filter((v) => !f.keys.find((k) => k.name === v));
        C.length && ie(`Discarded invalid param(s) "${C.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      g = f.record.name, h = ce(
        // paramsFromLocation is a new object
        $l(
          p.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          f.keys.filter((C) => !C.optional).concat(f.parent ? f.parent.keys.filter((C) => C.optional) : []).map((C) => C.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        d.params && $l(d.params, f.keys.map((C) => C.name))
      ), m = f.stringify(h);
    } else if (d.path != null)
      m = d.path, process.env.NODE_ENV !== "production" && !m.startsWith("/") && ie(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), f = t.find((C) => C.re.test(m)), f && (h = f.parse(m), g = f.record.name);
    else {
      if (f = p.name ? r.get(p.name) : t.find((C) => C.re.test(p.path)), !f)
        throw mr(1, {
          location: d,
          currentLocation: p
        });
      g = f.record.name, h = ce({}, p.params, d.params), m = f.stringify(h);
    }
    const y = [];
    let S = f;
    for (; S; )
      y.unshift(S.record), S = S.parent;
    return {
      name: g,
      path: m,
      params: h,
      matched: y,
      meta: og(y)
    };
  }
  n.forEach((d) => o(d));
  function c() {
    t.length = 0, r.clear();
  }
  return {
    addRoute: o,
    resolve: u,
    removeRoute: s,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: i
  };
}
function $l(n, e) {
  const t = {};
  for (const r of e)
    r in n && (t[r] = n[r]);
  return t;
}
function Dl(n) {
  const e = {
    path: n.path,
    redirect: n.redirect,
    name: n.name,
    meta: n.meta || {},
    aliasOf: n.aliasOf,
    beforeEnter: n.beforeEnter,
    props: ig(n),
    children: n.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in n ? n.components || null : n.component && { default: n.component }
  };
  return Object.defineProperty(e, "mods", {
    value: {}
  }), e;
}
function ig(n) {
  const e = {}, t = n.props || !1;
  if ("component" in n)
    e.default = t;
  else
    for (const r in n.components)
      e[r] = typeof t == "object" ? t[r] : t;
  return e;
}
function Pl(n) {
  for (; n; ) {
    if (n.record.aliasOf)
      return !0;
    n = n.parent;
  }
  return !1;
}
function og(n) {
  return n.reduce((e, t) => ce(e, t.meta), {});
}
function Il(n, e) {
  const t = {};
  for (const r in n)
    t[r] = r in e ? e[r] : n[r];
  return t;
}
function Ns(n, e) {
  return n.name === e.name && n.optional === e.optional && n.repeatable === e.repeatable;
}
function sg(n, e) {
  for (const t of n.keys)
    if (!t.optional && !e.keys.find(Ns.bind(null, t)))
      return ie(`Alias "${e.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`);
  for (const t of e.keys)
    if (!t.optional && !n.keys.find(Ns.bind(null, t)))
      return ie(`Alias "${e.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`);
}
function ag(n, e) {
  e && e.record.name && !n.name && !n.path && ie(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function lg(n, e) {
  for (let t = e; t; t = t.parent)
    if (t.record.name === n.name)
      throw new Error(`A route named "${String(n.name)}" has been added as a ${e === t ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function ug(n, e) {
  for (const t of e.keys)
    if (!n.keys.find(Ns.bind(null, t)))
      return ie(`Absolute path "${n.record.path}" must have the exact same param named "${t.name}" as its parent "${e.record.path}".`);
}
function cg(n, e) {
  let t = 0, r = e.length;
  for (; t !== r; ) {
    const o = t + r >> 1;
    nd(n, e[o]) < 0 ? r = o : t = o + 1;
  }
  const i = dg(n);
  return i && (r = e.lastIndexOf(i, r - 1), process.env.NODE_ENV !== "production" && r < 0 && ie(`Finding ancestor route "${i.record.path}" failed for "${n.record.path}"`)), r;
}
function dg(n) {
  let e = n;
  for (; e = e.parent; )
    if (rd(e) && nd(n, e) === 0)
      return e;
}
function rd({ record: n }) {
  return !!(n.name || n.components && Object.keys(n.components).length || n.redirect);
}
function fg(n) {
  const e = {};
  if (n === "" || n === "?")
    return e;
  const r = (n[0] === "?" ? n.slice(1) : n).split("&");
  for (let i = 0; i < r.length; ++i) {
    const o = r[i].replace(Gc, " "), s = o.indexOf("="), a = hr(s < 0 ? o : o.slice(0, s)), l = s < 0 ? null : hr(o.slice(s + 1));
    if (a in e) {
      let u = e[a];
      mt(u) || (u = e[a] = [u]), u.push(l);
    } else
      e[a] = l;
  }
  return e;
}
function Rl(n) {
  let e = "";
  for (let t in n) {
    const r = n[t];
    if (t = Em(t), r == null) {
      r !== void 0 && (e += (e.length ? "&" : "") + t);
      continue;
    }
    (mt(r) ? r.map((o) => o && Es(o)) : [r && Es(r)]).forEach((o) => {
      o !== void 0 && (e += (e.length ? "&" : "") + t, o != null && (e += "=" + o));
    });
  }
  return e;
}
function pg(n) {
  const e = {};
  for (const t in n) {
    const r = n[t];
    r !== void 0 && (e[t] = mt(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
  }
  return e;
}
const hg = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), Ll = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), fa = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), id = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), As = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Ar() {
  let n = [];
  function e(r) {
    return n.push(r), () => {
      const i = n.indexOf(r);
      i > -1 && n.splice(i, 1);
    };
  }
  function t() {
    n = [];
  }
  return {
    add: e,
    list: () => n.slice(),
    reset: t
  };
}
function sn(n, e, t, r, i, o = (s) => s()) {
  const s = r && // name is defined if record is because of the function overload
  (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((a, l) => {
    const u = (p) => {
      p === !1 ? l(mr(4, {
        from: t,
        to: e
      })) : p instanceof Error ? l(p) : so(p) ? l(mr(2, {
        from: e,
        to: p
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      r.enterCallbacks[i] === s && typeof p == "function" && s.push(p), a());
    }, c = o(() => n.call(r && r.instances[i], e, t, process.env.NODE_ENV !== "production" ? mg(u, e, t) : u));
    let d = Promise.resolve(c);
    if (n.length < 3 && (d = d.then(u)), process.env.NODE_ENV !== "production" && n.length > 2) {
      const p = `The "next" callback was never called inside of ${n.name ? '"' + n.name + '"' : ""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof c == "object" && "then" in c)
        d = d.then((f) => u._called ? f : (ie(p), Promise.reject(new Error("Invalid navigation guard"))));
      else if (c !== void 0 && !u._called) {
        ie(p), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((p) => l(p));
  });
}
function mg(n, e, t) {
  let r = 0;
  return function() {
    r++ === 1 && ie(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), n._called = !0, r === 1 && n.apply(null, arguments);
  };
}
function Jo(n, e, t, r, i = (o) => o()) {
  const o = [];
  for (const s of n) {
    process.env.NODE_ENV !== "production" && !s.components && !s.children.length && ie(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in s.components) {
      let l = s.components[a];
      if (process.env.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw ie(`Component "${a}" in record with path "${s.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          ie(`Component "${a}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = l;
          l = () => u;
        } else l.__asyncLoader && // warn only once per component
        !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, ie(`Component "${a}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(e !== "beforeRouteEnter" && !s.instances[a]))
        if (Kc(l)) {
          const c = (l.__vccOpts || l)[e];
          c && o.push(sn(c, t, r, s, a, i));
        } else {
          let u = l();
          process.env.NODE_ENV !== "production" && !("catch" in u) && (ie(`Component "${a}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), o.push(() => u.then((c) => {
            if (!c)
              throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);
            const d = gm(c) ? c.default : c;
            s.mods[a] = c, s.components[a] = d;
            const f = (d.__vccOpts || d)[e];
            return f && sn(f, t, r, s, a, i)();
          }));
        }
    }
  }
  return o;
}
function Vl(n) {
  const e = Fn(fa), t = Fn(id);
  let r = !1, i = null;
  const o = ot(() => {
    const c = Ae(n.to);
    return process.env.NODE_ENV !== "production" && (!r || c !== i) && (so(c) || (r ? ie(`Invalid value for prop "to" in useLink()
- to:`, c, `
- previous to:`, i, `
- props:`, n) : ie(`Invalid value for prop "to" in useLink()
- to:`, c, `
- props:`, n)), i = c, r = !0), e.resolve(c);
  }), s = ot(() => {
    const { matched: c } = o.value, { length: d } = c, p = c[d - 1], f = t.matched;
    if (!p || !f.length)
      return -1;
    const h = f.findIndex(bn.bind(null, p));
    if (h > -1)
      return h;
    const m = Bl(c[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Bl(p) === m && // avoid comparing the child with its parent
      f[f.length - 1].path !== m ? f.findIndex(bn.bind(null, c[d - 2])) : h
    );
  }), a = ot(() => s.value > -1 && Sg(t.params, o.value.params)), l = ot(() => s.value > -1 && s.value === t.matched.length - 1 && Zc(t.params, o.value.params));
  function u(c = {}) {
    if (bg(c)) {
      const d = e[Ae(n.replace) ? "replace" : "push"](
        Ae(n.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(Hr);
      return n.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Gt) {
    const c = Zr();
    if (c) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: l.value,
        error: null
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(d), Tc(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = l.value, d.error = so(Ae(n.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: ot(() => o.value.href),
    isActive: a,
    isExactActive: l,
    navigate: u
  };
}
function gg(n) {
  return n.length === 1 ? n[0] : n;
}
const vg = /* @__PURE__ */ xe({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: Vl,
  setup(n, { slots: e }) {
    const t = Vp(Vl(n)), { options: r } = Fn(fa), i = ot(() => ({
      [zl(n.activeClass, r.linkActiveClass, "router-link-active")]: t.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [zl(n.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: t.isExactActive
    }));
    return () => {
      const o = e.default && gg(e.default(t));
      return n.custom ? o : Gn("a", {
        "aria-current": t.isExactActive ? n.ariaCurrentValue : null,
        href: t.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: t.navigate,
        class: i.value
      }, o);
    };
  }
}), yg = vg;
function bg(n) {
  if (!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey) && !n.defaultPrevented && !(n.button !== void 0 && n.button !== 0)) {
    if (n.currentTarget && n.currentTarget.getAttribute) {
      const e = n.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e))
        return;
    }
    return n.preventDefault && n.preventDefault(), !0;
  }
}
function Sg(n, e) {
  for (const t in e) {
    const r = e[t], i = n[t];
    if (typeof r == "string") {
      if (r !== i)
        return !1;
    } else if (!mt(i) || i.length !== r.length || r.some((o, s) => o !== i[s]))
      return !1;
  }
  return !0;
}
function Bl(n) {
  return n ? n.aliasOf ? n.aliasOf.path : n.path : "";
}
const zl = (n, e, t) => n ?? e ?? t, xg = /* @__PURE__ */ xe({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(n, { attrs: e, slots: t }) {
    process.env.NODE_ENV !== "production" && kg();
    const r = Fn(As), i = ot(() => n.route || r.value), o = Fn(Ll, 0), s = ot(() => {
      let u = Ae(o);
      const { matched: c } = i.value;
      let d;
      for (; (d = c[u]) && !d.components; )
        u++;
      return u;
    }), a = ot(() => i.value.matched[s.value]);
    Fo(Ll, ot(() => s.value + 1)), Fo(hg, a), Fo(As, i);
    const l = $();
    return aa(() => [l.value, a.value, n.name], ([u, c, d], [p, f, h]) => {
      c && (c.instances[d] = u, f && f !== c && u && u === p && (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards), c.updateGuards.size || (c.updateGuards = f.updateGuards))), u && c && // if there is no instance but to and from are the same this might be
      // the first visit
      (!f || !bn(c, f) || !p) && (c.enterCallbacks[d] || []).forEach((m) => m(u));
    }, { flush: "post" }), () => {
      const u = i.value, c = n.name, d = a.value, p = d && d.components[c];
      if (!p)
        return jl(t.default, { Component: p, route: u });
      const f = d.props[c], h = f ? f === !0 ? u.params : typeof f == "function" ? f(u) : f : null, g = Gn(p, ce({}, h, e, {
        onVnodeUnmounted: (y) => {
          y.component.isUnmounted && (d.instances[c] = null);
        },
        ref: l
      }));
      if (process.env.NODE_ENV !== "production" && Gt && g.ref) {
        const y = {
          depth: s.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (mt(g.ref) ? g.ref.map((C) => C.i) : [g.ref.i]).forEach((C) => {
          C.__vrv_devtools = y;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        jl(t.default, { Component: g, route: u }) || g
      );
    };
  }
});
function jl(n, e) {
  if (!n)
    return null;
  const t = n(e);
  return t.length === 1 ? t[0] : t;
}
const wg = xg;
function kg() {
  const n = Zr(), e = n.parent && n.parent.type.name, t = n.parent && n.parent.subTree && n.parent.subTree.type;
  if (e && (e === "KeepAlive" || e.includes("Transition")) && typeof t == "object" && t.name === "RouterView") {
    const r = e === "KeepAlive" ? "keep-alive" : "transition";
    ie(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function $r(n, e) {
  const t = ce({}, n, {
    // remove variables that can contain vue instances
    matched: n.matched.map((r) => Pg(r, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: n.fullPath,
      tooltip: e,
      value: t
    }
  };
}
function Bi(n) {
  return {
    _custom: {
      display: n
    }
  };
}
let Cg = 0;
function Tg(n, e, t) {
  if (e.__hasDevtools)
    return;
  e.__hasDevtools = !0;
  const r = Cg++;
  mm({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: n
  }, (i) => {
    typeof i.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), i.on.inspectComponent((c, d) => {
      c.instanceData && c.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: $r(e.currentRoute.value, "Current Route")
      });
    }), i.on.visitComponentTree(({ treeNode: c, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const p = d.__vrv_devtools;
        c.tags.push({
          label: (p.name ? `${p.name.toString()}: ` : "") + p.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: od
        });
      }
      mt(d.__vrl_devtools) && (d.__devtoolsApi = i, d.__vrl_devtools.forEach((p) => {
        let f = p.route.path, h = ld, m = "", g = 0;
        p.error ? (f = p.error, h = Ng, g = Ag) : p.isExactActive ? (h = ad, m = "This is exactly active") : p.isActive && (h = sd, m = "This link is active"), c.tags.push({
          label: f,
          textColor: g,
          tooltip: m,
          backgroundColor: h
        });
      }));
    }), aa(e.currentRoute, () => {
      l(), i.notifyComponentUpdate(), i.sendInspectorTree(a), i.sendInspectorState(a);
    });
    const o = "router:navigations:" + r;
    i.addTimelineLayer({
      id: o,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), e.onError((c, d) => {
      i.addTimelineEvent({
        layerId: o,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: i.now(),
          data: { error: c },
          groupId: d.meta.__navigationId
        }
      });
    });
    let s = 0;
    e.beforeEach((c, d) => {
      const p = {
        guard: Bi("beforeEach"),
        from: $r(d, "Current Location during this navigation"),
        to: $r(c, "Target location")
      };
      Object.defineProperty(c.meta, "__navigationId", {
        value: s++
      }), i.addTimelineEvent({
        layerId: o,
        event: {
          time: i.now(),
          title: "Start of navigation",
          subtitle: c.fullPath,
          data: p,
          groupId: c.meta.__navigationId
        }
      });
    }), e.afterEach((c, d, p) => {
      const f = {
        guard: Bi("afterEach")
      };
      p ? (f.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: p ? p.message : "",
          tooltip: "Navigation Failure",
          value: p
        }
      }, f.status = Bi("❌")) : f.status = Bi("✅"), f.from = $r(d, "Current Location during this navigation"), f.to = $r(c, "Target location"), i.addTimelineEvent({
        layerId: o,
        event: {
          title: "End of navigation",
          subtitle: c.fullPath,
          time: i.now(),
          data: f,
          logType: p ? "warning" : "default",
          groupId: c.meta.__navigationId
        }
      });
    });
    const a = "router-inspector:" + r;
    i.addInspector({
      id: a,
      label: "Routes" + (r ? " " + r : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function l() {
      if (!u)
        return;
      const c = u;
      let d = t.getRoutes().filter((p) => !p.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !p.parent.record.components);
      d.forEach(dd), c.filter && (d = d.filter((p) => (
        // save matches state based on the payload
        $s(p, c.filter.toLowerCase())
      ))), d.forEach((p) => cd(p, e.currentRoute.value)), c.rootNodes = d.map(ud);
    }
    let u;
    i.on.getInspectorTree((c) => {
      u = c, c.app === n && c.inspectorId === a && l();
    }), i.on.getInspectorState((c) => {
      if (c.app === n && c.inspectorId === a) {
        const p = t.getRoutes().find((f) => f.record.__vd_id === c.nodeId);
        p && (c.state = {
          options: Eg(p)
        });
      }
    }), i.sendInspectorTree(a), i.sendInspectorState(a);
  });
}
function Og(n) {
  return n.optional ? n.repeatable ? "*" : "?" : n.repeatable ? "+" : "";
}
function Eg(n) {
  const { record: e } = n, t = [
    { editable: !1, key: "path", value: e.path }
  ];
  return e.name != null && t.push({
    editable: !1,
    key: "name",
    value: e.name
  }), t.push({ editable: !1, key: "regexp", value: n.re }), n.keys.length && t.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: n.keys.map((r) => `${r.name}${Og(r)}`).join(" "),
        tooltip: "Param keys",
        value: n.keys
      }
    }
  }), e.redirect != null && t.push({
    editable: !1,
    key: "redirect",
    value: e.redirect
  }), n.alias.length && t.push({
    editable: !1,
    key: "aliases",
    value: n.alias.map((r) => r.record.path)
  }), Object.keys(n.record.meta).length && t.push({
    editable: !1,
    key: "meta",
    value: n.record.meta
  }), t.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: n.score.map((r) => r.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: n.score
      }
    }
  }), t;
}
const od = 15485081, sd = 2450411, ad = 8702998, _g = 2282478, ld = 16486972, Mg = 6710886, Ng = 16704226, Ag = 12131356;
function ud(n) {
  const e = [], { record: t } = n;
  t.name != null && e.push({
    label: String(t.name),
    textColor: 0,
    backgroundColor: _g
  }), t.aliasOf && e.push({
    label: "alias",
    textColor: 0,
    backgroundColor: ld
  }), n.__vd_match && e.push({
    label: "matches",
    textColor: 0,
    backgroundColor: od
  }), n.__vd_exactActive && e.push({
    label: "exact",
    textColor: 0,
    backgroundColor: ad
  }), n.__vd_active && e.push({
    label: "active",
    textColor: 0,
    backgroundColor: sd
  }), t.redirect && e.push({
    label: typeof t.redirect == "string" ? `redirect: ${t.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Mg
  });
  let r = t.__vd_id;
  return r == null && (r = String($g++), t.__vd_id = r), {
    id: r,
    label: t.path,
    tags: e,
    children: n.children.map(ud)
  };
}
let $g = 0;
const Dg = /^\/(.*)\/([a-z]*)$/;
function cd(n, e) {
  const t = e.matched.length && bn(e.matched[e.matched.length - 1], n.record);
  n.__vd_exactActive = n.__vd_active = t, t || (n.__vd_active = e.matched.some((r) => bn(r, n.record))), n.children.forEach((r) => cd(r, e));
}
function dd(n) {
  n.__vd_match = !1, n.children.forEach(dd);
}
function $s(n, e) {
  const t = String(n.re).match(Dg);
  if (n.__vd_match = !1, !t || t.length < 3)
    return !1;
  if (new RegExp(t[1].replace(/\$$/, ""), t[2]).test(e))
    return n.children.forEach((s) => $s(s, e)), n.record.path !== "/" || e === "/" ? (n.__vd_match = n.re.test(e), !0) : !1;
  const i = n.record.path.toLowerCase(), o = hr(i);
  return !e.startsWith("/") && (o.includes(e) || i.includes(e)) || o.startsWith(e) || i.startsWith(e) || n.record.name && String(n.record.name).includes(e) ? !0 : n.children.some((s) => $s(s, e));
}
function Pg(n, e) {
  const t = {};
  for (const r in n)
    e.includes(r) || (t[r] = n[r]);
  return t;
}
function Ig(n) {
  const e = rg(n.routes, n), t = n.parseQuery || fg, r = n.stringifyQuery || Rl, i = n.history;
  if (process.env.NODE_ENV !== "production" && !i)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const o = Ar(), s = Ar(), a = Ar(), l = Or(rn);
  let u = rn;
  Gt && n.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = qo.bind(null, (E) => "" + E), d = qo.bind(null, Mm), p = (
    // @ts-expect-error: intentionally avoid the type check
    qo.bind(null, hr)
  );
  function f(E, P) {
    let I, z;
    return td(E) ? (I = e.getRecordMatcher(E), process.env.NODE_ENV !== "production" && !I && ie(`Parent route "${String(E)}" not found when adding child route`, P), z = P) : z = E, e.addRoute(z, I);
  }
  function h(E) {
    const P = e.getRecordMatcher(E);
    P ? e.removeRoute(P) : process.env.NODE_ENV !== "production" && ie(`Cannot remove non-existent route "${String(E)}"`);
  }
  function m() {
    return e.getRoutes().map((E) => E.record);
  }
  function g(E) {
    return !!e.getRecordMatcher(E);
  }
  function y(E, P) {
    if (P = ce({}, P || l.value), typeof E == "string") {
      const Y = Ko(t, E, P.path), fe = e.resolve({ path: Y.path }, P), Ze = i.createHref(Y.fullPath);
      return process.env.NODE_ENV !== "production" && (Ze.startsWith("//") ? ie(`Location "${E}" resolved to "${Ze}". A resolved location cannot start with multiple slashes.`) : fe.matched.length || ie(`No match found for location with path "${E}"`)), ce(Y, fe, {
        params: p(fe.params),
        hash: hr(Y.hash),
        redirectedFrom: void 0,
        href: Ze
      });
    }
    if (process.env.NODE_ENV !== "production" && !so(E))
      return ie(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, E), y({});
    let I;
    if (E.path != null)
      process.env.NODE_ENV !== "production" && "params" in E && !("name" in E) && // @ts-expect-error: the type is never
      Object.keys(E.params).length && ie(`Path "${E.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), I = ce({}, E, {
        path: Ko(t, E.path, P.path).path
      });
    else {
      const Y = ce({}, E.params);
      for (const fe in Y)
        Y[fe] == null && delete Y[fe];
      I = ce({}, E, {
        params: d(Y)
      }), P.params = d(P.params);
    }
    const z = e.resolve(I, P), te = E.hash || "";
    process.env.NODE_ENV !== "production" && te && !te.startsWith("#") && ie(`A \`hash\` should always start with the character "#". Replace "${te}" with "#${te}".`), z.params = c(p(z.params));
    const ge = $m(r, ce({}, E, {
      hash: Om(te),
      path: z.path
    })), Z = i.createHref(ge);
    return process.env.NODE_ENV !== "production" && (Z.startsWith("//") ? ie(`Location "${E}" resolved to "${Z}". A resolved location cannot start with multiple slashes.`) : z.matched.length || ie(`No match found for location with path "${E.path != null ? E.path : E}"`)), ce({
      fullPath: ge,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: te,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        r === Rl ? pg(E.query) : E.query || {}
      )
    }, z, {
      redirectedFrom: void 0,
      href: Z
    });
  }
  function S(E) {
    return typeof E == "string" ? Ko(t, E, l.value.path) : ce({}, E);
  }
  function C(E, P) {
    if (u !== E)
      return mr(8, {
        from: P,
        to: E
      });
  }
  function v(E) {
    return O(E);
  }
  function k(E) {
    return v(ce(S(E), { replace: !0 }));
  }
  function x(E) {
    const P = E.matched[E.matched.length - 1];
    if (P && P.redirect) {
      const { redirect: I } = P;
      let z = typeof I == "function" ? I(E) : I;
      if (typeof z == "string" && (z = z.includes("?") || z.includes("#") ? z = S(z) : (
        // force empty params
        { path: z }
      ), z.params = {}), process.env.NODE_ENV !== "production" && z.path == null && !("name" in z))
        throw ie(`Invalid redirect found:
${JSON.stringify(z, null, 2)}
 when navigating to "${E.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return ce({
        query: E.query,
        hash: E.hash,
        // avoid transferring params if the redirect has a path
        params: z.path != null ? {} : E.params
      }, z);
    }
  }
  function O(E, P) {
    const I = u = y(E), z = l.value, te = E.state, ge = E.force, Z = E.replace === !0, Y = x(I);
    if (Y)
      return O(
        ce(S(Y), {
          state: typeof Y == "object" ? ce({}, te, Y.state) : te,
          force: ge,
          replace: Z
        }),
        // keep original redirectedFrom if it exists
        P || I
      );
    const fe = I;
    fe.redirectedFrom = P;
    let Ze;
    return !ge && Tl(r, z, I) && (Ze = mr(16, { to: fe, from: z }), _e(
      z,
      z,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ze ? Promise.resolve(Ze) : j(fe, z)).catch((ke) => Wt(ke) ? (
      // navigation redirects still mark the router as ready
      Wt(
        ke,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ke : we(ke)
    ) : (
      // reject any unknown error
      me(ke, fe, z)
    )).then((ke) => {
      if (ke) {
        if (Wt(
          ke,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Tl(r, y(ke.to), fe) && // and we have done it a couple of times
          P && // @ts-expect-error: added only in dev
          (P._count = P._count ? (
            // @ts-expect-error
            P._count + 1
          ) : 1) > 30 ? (ie(`Detected a possibly infinite redirection in a navigation guard when going from "${z.fullPath}" to "${fe.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : O(
            // keep options
            ce({
              // preserve an existing replacement but allow the redirect to override it
              replace: Z
            }, S(ke.to), {
              state: typeof ke.to == "object" ? ce({}, te, ke.to.state) : te,
              force: ge
            }),
            // preserve the original redirectedFrom if any
            P || fe
          );
      } else
        ke = L(fe, z, !0, Z, te);
      return F(fe, z, ke), ke;
    });
  }
  function N(E, P) {
    const I = C(E, P);
    return I ? Promise.reject(I) : Promise.resolve();
  }
  function U(E) {
    const P = Me.values().next().value;
    return P && typeof P.runWithContext == "function" ? P.runWithContext(E) : E();
  }
  function j(E, P) {
    let I;
    const [z, te, ge] = Rg(E, P);
    I = Jo(z.reverse(), "beforeRouteLeave", E, P);
    for (const Y of z)
      Y.leaveGuards.forEach((fe) => {
        I.push(sn(fe, E, P));
      });
    const Z = N.bind(null, E, P);
    return I.push(Z), Re(I).then(() => {
      I = [];
      for (const Y of o.list())
        I.push(sn(Y, E, P));
      return I.push(Z), Re(I);
    }).then(() => {
      I = Jo(te, "beforeRouteUpdate", E, P);
      for (const Y of te)
        Y.updateGuards.forEach((fe) => {
          I.push(sn(fe, E, P));
        });
      return I.push(Z), Re(I);
    }).then(() => {
      I = [];
      for (const Y of ge)
        if (Y.beforeEnter)
          if (mt(Y.beforeEnter))
            for (const fe of Y.beforeEnter)
              I.push(sn(fe, E, P));
          else
            I.push(sn(Y.beforeEnter, E, P));
      return I.push(Z), Re(I);
    }).then(() => (E.matched.forEach((Y) => Y.enterCallbacks = {}), I = Jo(ge, "beforeRouteEnter", E, P, U), I.push(Z), Re(I))).then(() => {
      I = [];
      for (const Y of s.list())
        I.push(sn(Y, E, P));
      return I.push(Z), Re(I);
    }).catch((Y) => Wt(
      Y,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? Y : Promise.reject(Y));
  }
  function F(E, P, I) {
    a.list().forEach((z) => U(() => z(E, P, I)));
  }
  function L(E, P, I, z, te) {
    const ge = C(E, P);
    if (ge)
      return ge;
    const Z = P === rn, Y = Gt ? history.state : {};
    I && (z || Z ? i.replace(E.fullPath, ce({
      scroll: Z && Y && Y.scroll
    }, te)) : i.push(E.fullPath, te)), l.value = E, _e(E, P, I, Z), we();
  }
  let H;
  function ue() {
    H || (H = i.listen((E, P, I) => {
      const z = y(E), te = x(z);
      if (te) {
        O(ce(te, { replace: !0, force: !0 }), z).catch(Hr);
        return;
      }
      u = z;
      const ge = l.value;
      Gt && zm(El(ge.fullPath, I.delta), Co()), j(z, ge).catch((Z) => Wt(
        Z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? Z : Wt(
        Z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (O(
        ce(S(Z.to), {
          force: !0
        }),
        z
        // avoid an uncaught rejection, let push call triggerError
      ).then((Y) => {
        Wt(
          Y,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !I.delta && I.type === ai.pop && i.go(-1, !1);
      }).catch(Hr), Promise.reject()) : (I.delta && i.go(-I.delta, !1), me(Z, z, ge))).then((Z) => {
        Z = Z || L(
          // after navigation, all matched components are resolved
          z,
          ge,
          !1
        ), Z && (I.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Wt(
          Z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? i.go(-I.delta, !1) : I.type === ai.pop && Wt(
          Z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && i.go(-1, !1)), F(z, ge, Z);
      }).catch(Hr);
    }));
  }
  let be = Ar(), ye = Ar(), de;
  function me(E, P, I) {
    we(E);
    const z = ye.list();
    return z.length ? z.forEach((te) => te(E, P, I)) : (process.env.NODE_ENV !== "production" && ie("uncaught error during route navigation:"), console.error(E)), Promise.reject(E);
  }
  function Ie() {
    return de && l.value !== rn ? Promise.resolve() : new Promise((E, P) => {
      be.add([E, P]);
    });
  }
  function we(E) {
    return de || (de = !E, ue(), be.list().forEach(([P, I]) => E ? I(E) : P()), be.reset()), E;
  }
  function _e(E, P, I, z) {
    const { scrollBehavior: te } = n;
    if (!Gt || !te)
      return Promise.resolve();
    const ge = !I && jm(El(E.fullPath, 0)) || (z || !I) && history.state && history.state.scroll || null;
    return sa().then(() => te(E, P, ge)).then((Z) => Z && Bm(Z)).catch((Z) => me(Z, E, P));
  }
  const Te = (E) => i.go(E);
  let Je;
  const Me = /* @__PURE__ */ new Set(), Ge = {
    currentRoute: l,
    listening: !0,
    addRoute: f,
    removeRoute: h,
    clearRoutes: e.clearRoutes,
    hasRoute: g,
    getRoutes: m,
    resolve: y,
    options: n,
    push: v,
    replace: k,
    go: Te,
    back: () => Te(-1),
    forward: () => Te(1),
    beforeEach: o.add,
    beforeResolve: s.add,
    afterEach: a.add,
    onError: ye.add,
    isReady: Ie,
    install(E) {
      const P = this;
      E.component("RouterLink", yg), E.component("RouterView", wg), E.config.globalProperties.$router = P, Object.defineProperty(E.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Ae(l)
      }), Gt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Je && l.value === rn && (Je = !0, v(i.location).catch((te) => {
        process.env.NODE_ENV !== "production" && ie("Unexpected error when starting the router:", te);
      }));
      const I = {};
      for (const te in rn)
        Object.defineProperty(I, te, {
          get: () => l.value[te],
          enumerable: !0
        });
      E.provide(fa, P), E.provide(id, Lp(I)), E.provide(As, l);
      const z = E.unmount;
      Me.add(E), E.unmount = function() {
        Me.delete(E), Me.size < 1 && (u = rn, H && H(), H = null, l.value = rn, Je = !1, de = !1), z();
      }, process.env.NODE_ENV !== "production" && Gt && Tg(E, P, e);
    }
  };
  function Re(E) {
    return E.reduce((P, I) => P.then(() => U(I)), Promise.resolve());
  }
  return Ge;
}
function Rg(n, e) {
  const t = [], r = [], i = [], o = Math.max(e.matched.length, n.matched.length);
  for (let s = 0; s < o; s++) {
    const a = e.matched[s];
    a && (n.matched.find((u) => bn(u, a)) ? r.push(a) : t.push(a));
    const l = n.matched[s];
    l && (e.matched.find((u) => bn(u, l)) || i.push(l));
  }
  return [t, r, i];
}
const xn = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
};
var V = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  EQUALS: "equals",
  IN: "in",
  DATE_IS: "dateIs"
}, Q = {
  AND: "and",
  OR: "or"
}, Lg = `
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        background: dt('tabs.tablist.background');
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`, Vg = {
  root: function(e) {
    var t = e.props;
    return ["p-tabs p-component", {
      "p-tabs-scrollable": t.scrollable
    }];
  }
}, Bg = Ne.extend({
  name: "tabs",
  style: Lg,
  classes: Vg
}), zg = {
  name: "BaseTabs",
  extends: Er,
  props: {
    value: {
      type: [String, Number],
      default: void 0
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    scrollable: {
      type: Boolean,
      default: !1
    },
    showNavigators: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    selectOnFocus: {
      type: Boolean,
      default: !1
    }
  },
  style: Bg,
  provide: function() {
    return {
      $pcTabs: this,
      $parentInstance: this
    };
  }
}, pa = {
  name: "Tabs",
  extends: zg,
  inheritAttrs: !1,
  emits: ["update:value"],
  data: function() {
    return {
      d_value: this.value
    };
  },
  watch: {
    value: function(e) {
      this.d_value = e;
    }
  },
  methods: {
    updateValue: function(e) {
      this.d_value !== e && (this.d_value = e, this.$emit("update:value", e));
    },
    isVertical: function() {
      return this.orientation === "vertical";
    }
  }
};
function jg(n, e, t, r, i, o) {
  return w(), M("div", $e({
    class: n.cx("root")
  }, n.ptmi("root")), [Lt(n.$slots, "default")], 16);
}
pa.render = jg;
var fd = {
  name: "ChevronLeftIcon",
  extends: Hc
};
function Fg(n) {
  return qg(n) || Wg(n) || Ug(n) || Hg();
}
function Hg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ug(n, e) {
  if (n) {
    if (typeof n == "string") return Ds(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ds(n, e) : void 0;
  }
}
function Wg(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function qg(n) {
  if (Array.isArray(n)) return Ds(n);
}
function Ds(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function Kg(n, e, t, r, i, o) {
  return w(), M("svg", $e({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, n.pti()), Fg(e[0] || (e[0] = [b("path", {
    d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
fd.render = Kg;
var Jg = {
  root: "p-tablist",
  content: "p-tablist-content p-tablist-viewport",
  tabList: "p-tablist-tab-list",
  activeBar: "p-tablist-active-bar",
  prevButton: "p-tablist-prev-button p-tablist-nav-button",
  nextButton: "p-tablist-next-button p-tablist-nav-button"
}, Gg = Ne.extend({
  name: "tablist",
  classes: Jg
}), Yg = {
  name: "BaseTabList",
  extends: Er,
  props: {},
  style: Gg,
  provide: function() {
    return {
      $pcTabList: this,
      $parentInstance: this
    };
  }
}, ha = {
  name: "TabList",
  extends: Yg,
  inheritAttrs: !1,
  inject: ["$pcTabs"],
  data: function() {
    return {
      isPrevButtonEnabled: !1,
      isNextButtonEnabled: !0
    };
  },
  resizeObserver: void 0,
  watch: {
    showNavigators: function(e) {
      e ? this.bindResizeObserver() : this.unbindResizeObserver();
    },
    activeValue: {
      flush: "post",
      handler: function() {
        this.updateInkBar();
      }
    }
  },
  mounted: function() {
    var e = this;
    setTimeout(function() {
      e.updateInkBar();
    }, 150), this.showNavigators && (this.updateButtonState(), this.bindResizeObserver());
  },
  updated: function() {
    this.showNavigators && this.updateButtonState();
  },
  beforeUnmount: function() {
    this.unbindResizeObserver();
  },
  methods: {
    onScroll: function(e) {
      this.showNavigators && this.updateButtonState(), e.preventDefault();
    },
    onPrevButtonClick: function() {
      var e = this.$refs.content, t = this.getVisibleButtonWidths(), r = jr(e) - t, i = Math.abs(e.scrollLeft), o = r * 0.8, s = i - o, a = Math.max(s, 0);
      e.scrollLeft = nl(e) ? -1 * a : a;
    },
    onNextButtonClick: function() {
      var e = this.$refs.content, t = this.getVisibleButtonWidths(), r = jr(e) - t, i = Math.abs(e.scrollLeft), o = r * 0.8, s = i + o, a = e.scrollWidth - r, l = Math.min(s, a);
      e.scrollLeft = nl(e) ? -1 * l : l;
    },
    bindResizeObserver: function() {
      var e = this;
      this.resizeObserver = new ResizeObserver(function() {
        return e.updateButtonState();
      }), this.resizeObserver.observe(this.$refs.list);
    },
    unbindResizeObserver: function() {
      var e;
      (e = this.resizeObserver) === null || e === void 0 || e.unobserve(this.$refs.list), this.resizeObserver = void 0;
    },
    updateInkBar: function() {
      var e = this.$refs, t = e.content, r = e.inkbar, i = e.tabs;
      if (r) {
        var o = io(t, '[data-pc-name="tab"][data-p-active="true"]');
        this.$pcTabs.isVertical() ? (r.style.height = _c(o) + "px", r.style.top = Rr(o).top - Rr(i).top + "px") : (r.style.width = Ec(o) + "px", r.style.left = Rr(o).left - Rr(i).left + "px");
      }
    },
    updateButtonState: function() {
      var e = this.$refs, t = e.list, r = e.content, i = r.scrollTop, o = r.scrollWidth, s = r.scrollHeight, a = r.offsetWidth, l = r.offsetHeight, u = Math.abs(r.scrollLeft), c = [jr(r), Ss(r)], d = c[0], p = c[1];
      this.$pcTabs.isVertical() ? (this.isPrevButtonEnabled = i !== 0, this.isNextButtonEnabled = t.offsetHeight >= l && parseInt(i) !== s - p) : (this.isPrevButtonEnabled = u !== 0, this.isNextButtonEnabled = t.offsetWidth >= a && parseInt(u) !== o - d);
    },
    getVisibleButtonWidths: function() {
      var e = this.$refs, t = e.prevButton, r = e.nextButton, i = 0;
      return this.showNavigators && (i = ((t == null ? void 0 : t.offsetWidth) || 0) + ((r == null ? void 0 : r.offsetWidth) || 0)), i;
    }
  },
  computed: {
    templates: function() {
      return this.$pcTabs.$slots;
    },
    activeValue: function() {
      return this.$pcTabs.d_value;
    },
    showNavigators: function() {
      return this.$pcTabs.showNavigators;
    },
    prevButtonAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.previous : void 0;
    },
    nextButtonAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.next : void 0;
    },
    dataP: function() {
      return la({
        scrollable: this.$pcTabs.scrollable
      });
    }
  },
  components: {
    ChevronLeftIcon: fd,
    ChevronRightIcon: Uc
  },
  directives: {
    ripple: Wc
  }
}, Qg = ["data-p"], Xg = ["aria-label", "tabindex"], Zg = ["data-p"], ev = ["aria-orientation"], tv = ["aria-label", "tabindex"];
function nv(n, e, t, r, i, o) {
  var s = Oc("ripple");
  return w(), M("div", $e({
    ref: "list",
    class: n.cx("root"),
    "data-p": o.dataP
  }, n.ptmi("root")), [o.showNavigators && i.isPrevButtonEnabled ? no((w(), M("button", $e({
    key: 0,
    ref: "prevButton",
    type: "button",
    class: n.cx("prevButton"),
    "aria-label": o.prevButtonAriaLabel,
    tabindex: o.$pcTabs.tabindex,
    onClick: e[0] || (e[0] = function() {
      return o.onPrevButtonClick && o.onPrevButtonClick.apply(o, arguments);
    })
  }, n.ptm("prevButton"), {
    "data-pc-group-section": "navigator"
  }), [(w(), oe(pr(o.templates.previcon || "ChevronLeftIcon"), $e({
    "aria-hidden": "true"
  }, n.ptm("prevIcon")), null, 16))], 16, Xg)), [[s]]) : Hn("", !0), b("div", $e({
    ref: "content",
    class: n.cx("content"),
    onScroll: e[1] || (e[1] = function() {
      return o.onScroll && o.onScroll.apply(o, arguments);
    }),
    "data-p": o.dataP
  }, n.ptm("content")), [b("div", $e({
    ref: "tabs",
    class: n.cx("tabList"),
    role: "tablist",
    "aria-orientation": o.$pcTabs.orientation || "horizontal"
  }, n.ptm("tabList")), [Lt(n.$slots, "default"), b("span", $e({
    ref: "inkbar",
    class: n.cx("activeBar"),
    role: "presentation",
    "aria-hidden": "true"
  }, n.ptm("activeBar")), null, 16)], 16, ev)], 16, Zg), o.showNavigators && i.isNextButtonEnabled ? no((w(), M("button", $e({
    key: 1,
    ref: "nextButton",
    type: "button",
    class: n.cx("nextButton"),
    "aria-label": o.nextButtonAriaLabel,
    tabindex: o.$pcTabs.tabindex,
    onClick: e[2] || (e[2] = function() {
      return o.onNextButtonClick && o.onNextButtonClick.apply(o, arguments);
    })
  }, n.ptm("nextButton"), {
    "data-pc-group-section": "navigator"
  }), [(w(), oe(pr(o.templates.nexticon || "ChevronRightIcon"), $e({
    "aria-hidden": "true"
  }, n.ptm("nextIcon")), null, 16))], 16, tv)), [[s]]) : Hn("", !0)], 16, Qg);
}
ha.render = nv;
var rv = {
  root: function(e) {
    var t = e.instance, r = e.props;
    return ["p-tab", {
      "p-tab-active": t.active,
      "p-disabled": r.disabled
    }];
  }
}, iv = Ne.extend({
  name: "tab",
  classes: rv
}), ov = {
  name: "BaseTab",
  extends: Er,
  props: {
    value: {
      type: [String, Number],
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    }
  },
  style: iv,
  provide: function() {
    return {
      $pcTab: this,
      $parentInstance: this
    };
  }
}, ma = {
  name: "Tab",
  extends: ov,
  inheritAttrs: !1,
  inject: ["$pcTabs", "$pcTabList"],
  methods: {
    onFocus: function() {
      this.$pcTabs.selectOnFocus && this.changeActiveValue();
    },
    onClick: function() {
      this.changeActiveValue();
    },
    onKeydown: function(e) {
      switch (e.code) {
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "PageDown":
          this.onPageDownKey(e);
          break;
        case "PageUp":
          this.onPageUpKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onEnterKey(e);
          break;
      }
    },
    onArrowRightKey: function(e) {
      var t = this.findNextTab(e.currentTarget);
      t ? this.changeFocusedTab(e, t) : this.onHomeKey(e), e.preventDefault();
    },
    onArrowLeftKey: function(e) {
      var t = this.findPrevTab(e.currentTarget);
      t ? this.changeFocusedTab(e, t) : this.onEndKey(e), e.preventDefault();
    },
    onHomeKey: function(e) {
      var t = this.findFirstTab();
      this.changeFocusedTab(e, t), e.preventDefault();
    },
    onEndKey: function(e) {
      var t = this.findLastTab();
      this.changeFocusedTab(e, t), e.preventDefault();
    },
    onPageDownKey: function(e) {
      this.scrollInView(this.findLastTab()), e.preventDefault();
    },
    onPageUpKey: function(e) {
      this.scrollInView(this.findFirstTab()), e.preventDefault();
    },
    onEnterKey: function(e) {
      this.changeActiveValue();
    },
    findNextTab: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = t ? e : e.nextElementSibling;
      return r ? Ir(r, "data-p-disabled") || Ir(r, "data-pc-section") === "activebar" ? this.findNextTab(r) : io(r, '[data-pc-name="tab"]') : null;
    },
    findPrevTab: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = t ? e : e.previousElementSibling;
      return r ? Ir(r, "data-p-disabled") || Ir(r, "data-pc-section") === "activebar" ? this.findPrevTab(r) : io(r, '[data-pc-name="tab"]') : null;
    },
    findFirstTab: function() {
      return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild, !0);
    },
    findLastTab: function() {
      return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild, !0);
    },
    changeActiveValue: function() {
      this.$pcTabs.updateValue(this.value);
    },
    changeFocusedTab: function(e, t) {
      Jp(t), this.scrollInView(t);
    },
    scrollInView: function(e) {
      var t;
      e == null || (t = e.scrollIntoView) === null || t === void 0 || t.call(e, {
        block: "nearest"
      });
    }
  },
  computed: {
    active: function() {
      var e;
      return Nc((e = this.$pcTabs) === null || e === void 0 ? void 0 : e.d_value, this.value);
    },
    id: function() {
      var e;
      return "".concat((e = this.$pcTabs) === null || e === void 0 ? void 0 : e.$id, "_tab_").concat(this.value);
    },
    ariaControls: function() {
      var e;
      return "".concat((e = this.$pcTabs) === null || e === void 0 ? void 0 : e.$id, "_tabpanel_").concat(this.value);
    },
    attrs: function() {
      return $e(this.asAttrs, this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        id: this.id,
        tabindex: this.active ? this.$pcTabs.tabindex : -1,
        role: "tab",
        "aria-selected": this.active,
        "aria-controls": this.ariaControls,
        "data-pc-name": "tab",
        "data-p-disabled": this.disabled,
        "data-p-active": this.active,
        onFocus: this.onFocus,
        onKeydown: this.onKeydown
      };
    },
    ptParams: function() {
      return {
        context: {
          active: this.active
        }
      };
    },
    dataP: function() {
      return la({
        active: this.active
      });
    }
  },
  directives: {
    ripple: Wc
  }
};
function sv(n, e, t, r, i, o) {
  var s = Oc("ripple");
  return n.asChild ? Lt(n.$slots, "default", {
    key: 1,
    dataP: o.dataP,
    class: en(n.cx("root")),
    active: o.active,
    a11yAttrs: o.a11yAttrs,
    onClick: o.onClick
  }) : no((w(), oe(pr(n.as), $e({
    key: 0,
    class: n.cx("root"),
    "data-p": o.dataP,
    onClick: o.onClick
  }, o.attrs), {
    default: D(function() {
      return [Lt(n.$slots, "default")];
    }),
    _: 3
  }, 16, ["class", "data-p", "onClick"])), [[s]]);
}
ma.render = sv;
var av = {
  root: "p-tabpanels"
}, lv = Ne.extend({
  name: "tabpanels",
  classes: av
}), uv = {
  name: "BaseTabPanels",
  extends: Er,
  props: {},
  style: lv,
  provide: function() {
    return {
      $pcTabPanels: this,
      $parentInstance: this
    };
  }
}, ga = {
  name: "TabPanels",
  extends: uv,
  inheritAttrs: !1
};
function cv(n, e, t, r, i, o) {
  return w(), M("div", $e({
    class: n.cx("root"),
    role: "presentation"
  }, n.ptmi("root")), [Lt(n.$slots, "default")], 16);
}
ga.render = cv;
var dv = {
  root: function(e) {
    var t = e.instance;
    return ["p-tabpanel", {
      "p-tabpanel-active": t.active
    }];
  }
}, fv = Ne.extend({
  name: "tabpanel",
  classes: dv
}), pv = {
  name: "BaseTabPanel",
  extends: Er,
  props: {
    // in Tabs
    value: {
      type: [String, Number],
      default: void 0
    },
    as: {
      type: [String, Object],
      default: "DIV"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    // in TabView
    header: null,
    headerStyle: null,
    headerClass: null,
    headerProps: null,
    headerActionProps: null,
    contentStyle: null,
    contentClass: null,
    contentProps: null,
    disabled: Boolean
  },
  style: fv,
  provide: function() {
    return {
      $pcTabPanel: this,
      $parentInstance: this
    };
  }
}, va = {
  name: "TabPanel",
  extends: pv,
  inheritAttrs: !1,
  inject: ["$pcTabs"],
  computed: {
    active: function() {
      var e;
      return Nc((e = this.$pcTabs) === null || e === void 0 ? void 0 : e.d_value, this.value);
    },
    id: function() {
      var e;
      return "".concat((e = this.$pcTabs) === null || e === void 0 ? void 0 : e.$id, "_tabpanel_").concat(this.value);
    },
    ariaLabelledby: function() {
      var e;
      return "".concat((e = this.$pcTabs) === null || e === void 0 ? void 0 : e.$id, "_tab_").concat(this.value);
    },
    attrs: function() {
      return $e(this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    a11yAttrs: function() {
      var e;
      return {
        id: this.id,
        tabindex: (e = this.$pcTabs) === null || e === void 0 ? void 0 : e.tabindex,
        role: "tabpanel",
        "aria-labelledby": this.ariaLabelledby,
        "data-pc-name": "tabpanel",
        "data-p-active": this.active
      };
    },
    ptParams: function() {
      return {
        context: {
          active: this.active
        }
      };
    }
  }
};
function hv(n, e, t, r, i, o) {
  var s, a;
  return o.$pcTabs ? (w(), M(he, {
    key: 1
  }, [n.asChild ? Lt(n.$slots, "default", {
    key: 1,
    class: en(n.cx("root")),
    active: o.active,
    a11yAttrs: o.a11yAttrs
  }) : (w(), M(he, {
    key: 0
  }, [!((s = o.$pcTabs) !== null && s !== void 0 && s.lazy) || o.active ? no((w(), oe(pr(n.as), $e({
    key: 0,
    class: n.cx("root")
  }, o.attrs), {
    default: D(function() {
      return [Lt(n.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"])), [[Bp, (a = o.$pcTabs) !== null && a !== void 0 && a.lazy ? !0 : o.active]]) : Hn("", !0)], 64))], 64)) : Lt(n.$slots, "default", {
    key: 0
  });
}
va.render = hv;
var mv = Symbol();
function To() {
  var n = Fn(mv);
  if (!n)
    throw new Error("No PrimeVue Toast provided!");
  return n;
}
var gv = Symbol();
function vv() {
  var n = Fn(gv);
  if (!n)
    throw new Error("No PrimeVue Confirmation provided!");
  return n;
}
const yv = { class: "card flex flex-wrap gap-2 justify-center" }, bv = {
  __name: "Dialogsample",
  setup(n) {
    const e = vv(), t = To();
    $(!1);
    const r = () => {
      e.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        closeButtonProps: {
          label: "NO"
        },
        rejectProps: {
          label: "close",
          severity: "secondary",
          outlined: !0
        },
        acceptProps: {
          label: "test"
        },
        accept: () => {
          t.add({ severity: "info", summary: "Confirmed", detail: "You have accepted", life: 3e3 });
        },
        reject: () => {
          t.add({ severity: "error", summary: "Rejected", detail: "You have rejected", life: 3e3 });
        }
      });
    }, i = () => {
      e.require({
        message: "Do you want to delete this record?",
        header: "Danger Zone",
        icon: "pi pi-info-circle",
        rejectProps: {
          label: "Cancel",
          severity: "secondary",
          outlined: !0
        },
        acceptProps: {
          label: "Delete",
          severity: "danger"
        },
        accept: () => {
          t.add({ severity: "info", summary: "Confirmed", detail: "Record deleted", life: 3e3 });
        },
        reject: () => {
          t.add({ severity: "error", summary: "Rejected", detail: "You have rejected", life: 3e3 });
        }
      });
    };
    return (o, s) => {
      const a = R("Toast"), l = R("ConfirmDialog"), u = R("Button");
      return w(), M(he, null, [
        T(a),
        T(l, { closeButtonProps: { label: "關閉" } }),
        b("div", yv, [
          T(u, {
            onClick: s[0] || (s[0] = (c) => r()),
            label: "Save",
            outlined: ""
          }),
          T(u, {
            onClick: s[1] || (s[1] = (c) => i()),
            label: "Delete",
            severity: "danger",
            outlined: ""
          })
        ])
      ], 64);
    };
  }
}, Sv = { class: "flex items-start" }, xv = { class: "flex flex-row gap-2" }, wv = {
  key: 0,
  class: "flex flex-wrap gap-x-4"
}, kv = { class: "font-bold text-purple-700 ml-1" }, Cv = /* @__PURE__ */ xe({
  __name: "PatientInfo",
  props: {
    patientFields: {}
  },
  setup(n) {
    const e = $(!0);
    return (t, r) => (w(), M("div", Sv, [
      r[1] || (r[1] = b("div", { class: "mr-6 flex shrink-0 items-center" }, [
        b("div", { class: "mr-2 flex h-6 w-6 items-center justify-center rounded-sm bg-blue-100 p-3" }, [
          b("i", { class: "pi pi-user text-primary" })
        ]),
        b("p", { class: "text-primary" }, "病人資訊")
      ], -1)),
      b("div", xv, [
        e.value ? (w(), M("dl", wv, [
          (w(!0), M(he, null, Ee(t.patientFields, (i, o) => (w(), M("div", {
            class: "flex flex-nowrap",
            key: o
          }, [
            b("dt", null, De(i.label) + "：", 1),
            b("dd", kv, De(i.value), 1)
          ]))), 128))
        ])) : Hn("", !0),
        r[0] || (r[0] = b("div", { class: "flex gap-x-2 mt-1" }, [
          b("div", { class: "cursor-pointer rounded-sm border border-blue-300 px-1 py-1 text-blue-700 underline" }, "管理"),
          b("div", { class: "cursor-pointer rounded-sm border border-blue-300 px-1 py-1 text-blue-700 underline" }, "重大"),
          b("div", { class: "cursor-pointer rounded-sm border border-blue-300 px-1 py-1 text-blue-700 underline" }, "藥敏")
        ], -1))
      ])
    ]));
  }
}), Tv = { class: "card flex m-2" }, Ov = { class: "card flex m-2" }, Ev = { class: "card flex justify-center" }, _v = { class: "card flex m-2" }, Mv = { class: "card flex m-2" }, Nv = { class: "card flex m-2" }, Av = { class: "fixed top-4 right-4 z-50" }, $v = /* @__PURE__ */ xe({
  __name: "Home",
  setup(n) {
    const e = $(null), t = $(null), r = $(null), i = $(""), o = $(!1), s = $(), a = $([
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "Londonaaaaaaaaaaaaaaaaaaa", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ]);
    return (l, u) => {
      const c = R("InputGroupAddon"), d = R("InputText"), p = R("InputGroup"), f = R("Button"), h = R("Textarea"), m = R("Select"), g = R("FloatLabel"), y = R("Drawer");
      return w(), M(he, null, [
        b("div", Tv, [
          T(p, { size: "small" }, {
            default: D(() => [
              T(c, { size: "small" }, {
                default: D(() => [...u[7] || (u[7] = [
                  b("i", {
                    class: "pi pi-user",
                    size: "small"
                  }, null, -1)
                ])]),
                _: 1
              }),
              T(d, {
                modelValue: e.value,
                "onUpdate:modelValue": u[0] || (u[0] = (S) => e.value = S),
                placeholder: "Username",
                size: "small"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        b("div", Ov, [
          T(d, {
            type: "text",
            modelValue: t.value,
            "onUpdate:modelValue": u[1] || (u[1] = (S) => t.value = S)
          }, null, 8, ["modelValue"]),
          T(f, { label: "test" }),
          T(f, {
            label: "disabled",
            disabled: ""
          }),
          b("div", Ev, [
            T(h, {
              modelValue: i.value,
              "onUpdate:modelValue": u[2] || (u[2] = (S) => i.value = S),
              variant: "filled",
              rows: "2",
              cols: "30"
            }, null, 8, ["modelValue"])
          ])
        ]),
        b("div", _v, [
          T(m, {
            modelValue: s.value,
            "onUpdate:modelValue": u[3] || (u[3] = (S) => s.value = S),
            options: a.value,
            showClear: "",
            optionLabel: "name",
            placeholder: "Select a City",
            class: "w-full md:w-56"
          }, null, 8, ["modelValue", "options"])
        ]),
        b("div", Mv, [
          T(g, { variant: "on" }, {
            default: D(() => [
              T(d, {
                id: "on_label",
                modelValue: r.value,
                "onUpdate:modelValue": u[4] || (u[4] = (S) => r.value = S),
                autocomplete: "off"
              }, null, 8, ["modelValue"]),
              u[8] || (u[8] = b("label", { for: "on_label" }, "就醫序號", -1))
            ]),
            _: 1
          })
        ]),
        b("div", Nv, [
          T(bv)
        ]),
        b("div", null, [
          T(Cv, { patientFields: [
            { label: "病歷號", value: "0201234" },
            { label: "就醫號", value: "IA130798" },
            { label: "姓名", value: "林偉哲" },
            { label: "性別", value: "男" },
            { label: "出生日期", value: "1971-08-30 (52y11m17d)" },
            { label: "身分證號", value: "E123456789" }
          ] })
        ]),
        b("div", Av, [
          T(f, {
            label: "?",
            onClick: u[5] || (u[5] = (S) => o.value = !0),
            severity: "danger",
            rounded: "",
            raised: "",
            "aria-label": "QA",
            text: "",
            pt: {
              root: {
                class: "bg-transparent hover:bg-gray-300 border-none shadow-none"
              }
            }
          }),
          T(y, {
            visible: o.value,
            "onUpdate:visible": u[6] || (u[6] = (S) => o.value = S),
            header: "作業說明",
            position: "bottom",
            style: { height: "auto" }
          }, {
            default: D(() => [...u[9] || (u[9] = [
              b("p", null, "作業操作及作業規則問題： 宿舍：楊璧慈 #1122。 停車/分機：許怡婷 #1103。 制服：侯佳妤 #1104。 公會費：鄭乃 #1146。 手術室訂餐：營養科(組)。 合約書/合約用印：馬蘊淇 #1703。 系統維護：方誌緯 #1541/潘財文 #1519 ", -1)
            ])]),
            _: 1
          }, 8, ["visible"])
        ])
      ], 64);
    };
  }
});
function He(n) {
  this.content = n;
}
He.prototype = {
  constructor: He,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), o = r.content.slice();
    return i == -1 ? o.push(t || n, e) : (o[i + 1] = e, t && (o[i] = t)), new He(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new He(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new He([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new He(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(n);
    return i.splice(o == -1 ? i.length : o, 0, e, t), new He(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = He.from(n), n.size ? new He(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = He.from(n), n.size ? new He(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = He.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
He.from = function(n) {
  if (n instanceof He) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new He(e);
};
function pd(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), o = e.child(r);
    if (i == o) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return t;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        t++;
      return t;
    }
    if (i.content.size || o.content.size) {
      let s = pd(i.content, o.content, t + 1);
      if (s != null)
        return s;
    }
    t += i.nodeSize;
  }
}
function hd(n, e, t, r) {
  for (let i = n.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: t, b: r };
    let s = n.child(--i), a = e.child(--o), l = s.nodeSize;
    if (s == a) {
      t -= l, r -= l;
      continue;
    }
    if (!s.sameMarkup(a))
      return { a: t, b: r };
    if (s.isText && s.text != a.text) {
      let u = 0, c = Math.min(s.text.length, a.text.length);
      for (; u < c && s.text[s.text.length - u - 1] == a.text[a.text.length - u - 1]; )
        u++, t--, r--;
      return { a: t, b: r };
    }
    if (s.content.size || a.content.size) {
      let u = hd(s.content, a.content, t - 1, r - 1);
      if (u)
        return u;
    }
    t -= l, r -= l;
  }
}
class A {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, o) {
    for (let s = 0, a = 0; a < t; s++) {
      let l = this.content[s], u = a + l.nodeSize;
      if (u > e && r(l, i + a, o || null, s) !== !1 && l.content.size) {
        let c = a + 1;
        l.nodesBetween(Math.max(0, e - c), Math.min(l.content.size, t - c), r, i + c);
      }
      a = u;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, t, (a, l) => {
      let u = a.isText ? a.text.slice(Math.max(e, l) - l, t - l) : a.isLeaf ? i ? typeof i == "function" ? i(a) : i : a.type.spec.leafText ? a.type.spec.leafText(a) : "" : "";
      a.isBlock && (a.isLeaf && u || a.isTextblock) && r && (s ? s = !1 : o += r), o += u;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new A(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let o = 0, s = 0; s < t; o++) {
        let a = this.content[o], l = s + a.nodeSize;
        l > e && ((s < e || l > t) && (a.isText ? a = a.cut(Math.max(0, e - s), Math.min(a.text.length, t - s)) : a = a.cut(Math.max(0, e - s - 1), Math.min(a.content.size, t - s - 1))), r.push(a), i += a.nodeSize), s = l;
      }
    return new A(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? A.empty : e == 0 && t == this.content.length ? this : new A(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), o = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new A(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new A([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new A(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return pd(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return hd(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return zi(0, e);
    if (e == this.size)
      return zi(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, r = 0; ; t++) {
      let i = this.child(t), o = r + i.nodeSize;
      if (o >= e)
        return o == e ? zi(t + 1, o) : zi(t, r);
      r = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return A.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new A(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return A.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
    }
    return new A(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return A.empty;
    if (e instanceof A)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new A([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
A.empty = new A([], 0);
const Go = { index: 0, offset: 0 };
function zi(n, e) {
  return Go.index = n, Go.offset = e, Go;
}
function ao(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!ao(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !ao(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let ve = class Ps {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        t || (t = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(o);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && ao(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Ps.none;
    if (e instanceof Ps)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
ve.none = [];
class lo extends Error {
}
class B {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = gd(this.content, e + this.openStart, t);
    return r && new B(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new B(md(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return B.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new B(A.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new B(e, r, i);
  }
}
B.empty = new B(A.empty, 0, 0);
function md(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), o = n.maybeChild(r), { index: s, offset: a } = n.findIndex(t);
  if (i == e || o.isText) {
    if (a != t && !n.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, o.copy(md(o.content, e - i - 1, t - i - 1)));
}
function gd(n, e, t, r) {
  let { index: i, offset: o } = n.findIndex(e), s = n.maybeChild(i);
  if (o == e || s.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let a = gd(s.content, e - o - 1, t, s);
  return a && n.replaceChild(i, s.copy(a));
}
function Dv(n, e, t) {
  if (t.openStart > n.depth)
    throw new lo("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new lo("Inconsistent open depths");
  return vd(n, e, t, 0);
}
function vd(n, e, t, r) {
  let i = n.index(r), o = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let s = vd(n, e, t, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let s = n.parent, a = s.content;
      return Ln(s, a.cut(0, n.parentOffset).append(t.content).append(a.cut(e.parentOffset)));
    } else {
      let { start: s, end: a } = Pv(t, n);
      return Ln(o, bd(n, s, a, e, r));
    }
  else return Ln(o, uo(n, e, r));
}
function yd(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new lo("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Is(n, e, t) {
  let r = n.node(t);
  return yd(r, e.node(t)), r;
}
function Rn(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function Wr(n, e, t, r) {
  let i = (e || n).node(t), o = 0, s = e ? e.index(t) : i.childCount;
  n && (o = n.index(t), n.depth > t ? o++ : n.textOffset && (Rn(n.nodeAfter, r), o++));
  for (let a = o; a < s; a++)
    Rn(i.child(a), r);
  e && e.depth == t && e.textOffset && Rn(e.nodeBefore, r);
}
function Ln(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function bd(n, e, t, r, i) {
  let o = n.depth > i && Is(n, e, i + 1), s = r.depth > i && Is(t, r, i + 1), a = [];
  return Wr(null, n, i, a), o && s && e.index(i) == t.index(i) ? (yd(o, s), Rn(Ln(o, bd(n, e, t, r, i + 1)), a)) : (o && Rn(Ln(o, uo(n, e, i + 1)), a), Wr(e, t, i, a), s && Rn(Ln(s, uo(t, r, i + 1)), a)), Wr(r, null, i, a), new A(a);
}
function uo(n, e, t) {
  let r = [];
  if (Wr(null, n, t, r), n.depth > t) {
    let i = Is(n, e, t + 1);
    Rn(Ln(i, uo(n, e, t + 1)), r);
  }
  return Wr(e, null, t, r), new A(r);
}
function Pv(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let o = t - 1; o >= 0; o--)
    i = e.node(o).copy(A.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class li {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return ve.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let a = r;
      r = i, i = a;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new co(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, o = t;
    for (let s = e; ; ) {
      let { index: a, offset: l } = s.content.findIndex(o), u = o - l;
      if (r.push(s, a, i + l), !u || (s = s.child(a), s.isText))
        break;
      o = u - 1, i += l + 1;
    }
    return new li(t, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = Fl.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let s = r.elts[o];
        if (s.pos == t)
          return s;
      }
    else
      Fl.set(e, r = new Iv());
    let i = r.elts[r.i] = li.resolve(e, t);
    return r.i = (r.i + 1) % Rv, i;
  }
}
class Iv {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Rv = 12, Fl = /* @__PURE__ */ new WeakMap();
class co {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Lv = /* @__PURE__ */ Object.create(null);
let mn = class Rs {
  /**
  @internal
  */
  constructor(e, t, r, i = ve.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || A.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && ao(this.attrs, t || e.defaultAttrs || Lv) && ve.sameSet(this.marks, r || ve.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Rs(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Rs(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return B.empty;
    let i = this.resolve(e), o = this.resolve(t), s = r ? 0 : i.sharedDepth(t), a = i.start(s), u = i.node(s).content.cut(i.pos - a, o.pos - a);
    return new B(u, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return Dv(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return li.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return li.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Sd(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = A.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), a = s && s.matchFragment(this.content, t);
    if (!a || !a.validEnd)
      return !1;
    for (let l = i; l < o; l++)
      if (!this.type.allowsMarks(r.child(l).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, t);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = ve.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!ve.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = A.fromJSON(e, t.content), o = e.nodeType(t.type).create(t.attrs, i, r);
    return o.type.checkAttrs(o.attrs), o;
  }
};
mn.prototype.text = void 0;
class fo extends mn {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Sd(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new fo(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new fo(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Sd(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class Un {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new Vv(e, t);
    if (r.next == null)
      return Un.empty;
    let i = xd(r);
    r.next && r.err("Unexpected trailing text");
    let o = Wv(Uv(i));
    return qv(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let o = t; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function o(s, a) {
      let l = s.matchFragment(e, r);
      if (l && (!t || l.validEnd))
        return A.from(a.map((u) => u.createAndFill()));
      for (let u = 0; u < s.next.length; u++) {
        let { type: c, next: d } = s.next[u];
        if (!(c.isText || c.hasRequiredAttrs()) && i.indexOf(d) == -1) {
          i.push(d);
          let p = o(d, a.concat(c));
          if (p)
            return p;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let a = i; a.type; a = a.via)
          s.push(a.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: a, next: l } = o.next[s];
        !a.isLeaf && !a.hasRequiredAttrs() && !(a.name in t) && (!i.type || l.validEnd) && (r.push({ match: a.contentMatch, type: a, via: i }), t[a.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
Un.empty = new Un(!0);
class Vv {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function xd(n) {
  let e = [];
  do
    e.push(Bv(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Bv(n) {
  let e = [];
  do
    e.push(zv(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function zv(n) {
  let e = Hv(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = jv(n, e);
    else
      break;
  return e;
}
function Hl(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function jv(n, e) {
  let t = Hl(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Hl(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function Fv(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let o in t) {
    let s = t[o];
    s.isInGroup(e) && i.push(s);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function Hv(n) {
  if (n.eat("(")) {
    let e = xd(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = Fv(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Uv(n) {
  let e = [[]];
  return i(o(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(s, a, l) {
    let u = { term: l, to: a };
    return e[s].push(u), u;
  }
  function i(s, a) {
    s.forEach((l) => l.to = a);
  }
  function o(s, a) {
    if (s.type == "choice")
      return s.exprs.reduce((l, u) => l.concat(o(u, a)), []);
    if (s.type == "seq")
      for (let l = 0; ; l++) {
        let u = o(s.exprs[l], a);
        if (l == s.exprs.length - 1)
          return u;
        i(u, a = t());
      }
    else if (s.type == "star") {
      let l = t();
      return r(a, l), i(o(s.expr, l), l), [r(l)];
    } else if (s.type == "plus") {
      let l = t();
      return i(o(s.expr, a), l), i(o(s.expr, l), l), [r(l)];
    } else {
      if (s.type == "opt")
        return [r(a)].concat(o(s.expr, a));
      if (s.type == "range") {
        let l = a;
        for (let u = 0; u < s.min; u++) {
          let c = t();
          i(o(s.expr, l), c), l = c;
        }
        if (s.max == -1)
          i(o(s.expr, l), l);
        else
          for (let u = s.min; u < s.max; u++) {
            let c = t();
            r(l, c), i(o(s.expr, l), c), l = c;
          }
        return [r(l)];
      } else {
        if (s.type == "name")
          return [r(a, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function wd(n, e) {
  return e - n;
}
function Ul(n, e) {
  let t = [];
  return r(e), t.sort(wd);
  function r(i) {
    let o = n[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    t.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: a, to: l } = o[s];
      !a && t.indexOf(l) == -1 && r(l);
    }
  }
}
function Wv(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Ul(n, 0));
  function t(r) {
    let i = [];
    r.forEach((s) => {
      n[s].forEach(({ term: a, to: l }) => {
        if (!a)
          return;
        let u;
        for (let c = 0; c < i.length; c++)
          i[c][0] == a && (u = i[c][1]);
        Ul(n, l).forEach((c) => {
          u || i.push([a, u = []]), u.indexOf(c) == -1 && u.push(c);
        });
      });
    });
    let o = e[r.join(",")] = new Un(r.indexOf(n.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let a = i[s][1].sort(wd);
      o.next.push({ type: i[s][0], next: e[a.join(",")] || t(a) });
    }
    return o;
  }
}
function qv(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], o = !i.validEnd, s = [];
    for (let a = 0; a < i.next.length; a++) {
      let { type: l, next: u } = i.next[a];
      s.push(l.name), o && !(l.isText || l.hasRequiredAttrs()) && (o = !1), r.indexOf(u) == -1 && r.push(u);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function kd(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function Cd(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let o = n[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function Td(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let o = n[i];
    o.validate && o.validate(e[i]);
  }
}
function Od(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new Jv(n, r, e[r]);
  return t;
}
let Wl = class Ed {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Od(e, r.attrs), this.defaultAttrs = kd(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == Un.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Cd(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new mn(this, this.computeAttrs(e), A.from(t), ve.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = A.from(t), this.checkContent(t), new mn(this, this.computeAttrs(e), t, ve.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = A.from(t), t.size) {
      let s = this.contentMatch.fillBefore(t);
      if (!s)
        return null;
      t = s.append(t);
    }
    let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(A.empty, !0);
    return o ? new mn(this, e, t.append(o), ve.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Td(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : ve.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new Ed(o, t, s));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function Kv(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${o}`);
  };
}
class Jv {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Kv(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Oo {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = Od(e, i.attrs), this.excluded = null;
    let o = kd(this.attrs);
    this.instance = o ? new ve(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new ve(this, Cd(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new Oo(o, i++, t, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Td(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class _d {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = He.from(e.nodes), t.marks = He.from(e.marks || {}), this.nodes = Wl.compile(this.spec.nodes, this), this.marks = Oo.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", a = o.spec.marks;
      if (o.contentMatch = r[s] || (r[s] = Un.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = a == "_" ? null : a ? ql(this, a.split(" ")) : a == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : ql(this, s.split(" "));
    }
    this.nodeFromJSON = (i) => mn.fromJSON(this, i), this.markFromJSON = (i) => ve.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof Wl) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new fo(r, r.defaultAttrs, e, ve.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function ql(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = n.marks[i], s = o;
    if (o)
      t.push(o);
    else
      for (let a in n.marks) {
        let l = n.marks[a];
        (i == "_" || l.spec.group && l.spec.group.split(" ").indexOf(i) > -1) && t.push(s = l);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function Gv(n) {
  return n.tag != null;
}
function Yv(n) {
  return n.style != null;
}
let qr = class Ls {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (Gv(i))
        this.tags.push(i);
      else if (Yv(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new Jl(this, t, !1);
    return r.addAll(e, ve.none, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new Jl(this, t, !0);
    return r.addAll(e, ve.none, t.from, t.to), B.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (Zv(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], a = s.style;
      if (!(a.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != t))) {
        if (s.getAttrs) {
          let l = s.getAttrs(t);
          if (l === !1)
            continue;
          s.attrs = l || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < t.length; s++) {
        let a = t[s];
        if ((a.priority == null ? 50 : a.priority) < o)
          break;
      }
      t.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Gl(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Gl(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new Ls(e, Ls.schemaRules(e)));
  }
};
const Md = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Qv = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Nd = { ol: !0, ul: !0 }, ui = 1, Vs = 2, Kr = 4;
function Kl(n, e, t) {
  return e != null ? (e ? ui : 0) | (e === "full" ? Vs : 0) : n && n.whitespace == "pre" ? ui | Vs : t & ~Kr;
}
class ji {
  constructor(e, t, r, i, o, s) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = s, this.content = [], this.activeMarks = ve.none, this.match = o || (s & Kr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(A.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & ui)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let t = A.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(A.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Md.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Jl {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let i = t.topNode, o, s = Kl(null, t.preserveWhitespace, 0) | (r ? Kr : 0);
    i ? o = new ji(i.type, i.attrs, ve.none, !0, t.topMatch || i.type.contentMatch, s) : r ? o = new ji(null, null, ve.none, !0, null, s) : o = new ji(e.schema.topNodeType, null, ve.none, !0, null, s), this.nodes = [o], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let r = e.nodeValue, i = this.top, o = i.options & Vs ? "full" : this.localPreserveWS || (i.options & ui) > 0;
    if (o === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (o)
        o !== "full" ? r = r.replace(/\r?\n|\r/g, " ") : r = r.replace(/\r\n?/g, `
`);
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let s = i.content[i.content.length - 1], a = e.previousSibling;
        (!s || a && a.nodeName == "BR" || s.isText && /[ \t\r\n\u000c]$/.test(s.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), t, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let i = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let s = e.nodeName.toLowerCase(), a;
    Nd.hasOwnProperty(s) && this.parser.normalizeLists && Xv(e);
    let l = this.options.ruleFromNode && this.options.ruleFromNode(e) || (a = this.parser.matchTag(e, this, r));
    e: if (l ? l.ignore : Qv.hasOwnProperty(s))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!l || l.skip || l.closeParent) {
      l && l.closeParent ? this.open = Math.max(0, this.open - 1) : l && l.skip.nodeType && (e = l.skip);
      let u, c = this.needsBlock;
      if (Md.hasOwnProperty(s))
        o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), u = !0, o.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let d = l && l.skip ? t : this.readStyles(e, t);
      d && this.addAll(e, d), u && this.sync(o), this.needsBlock = c;
    } else {
      let u = this.readStyles(e, t);
      u && this.addElementByRule(e, l, u, l.consuming === !1 ? a : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = r.getPropertyValue(o);
        if (s)
          for (let a = void 0; ; ) {
            let l = this.parser.matchStyle(o, s, this, a);
            if (!l)
              break;
            if (l.ignore)
              return null;
            if (l.clearMark ? t = t.filter((u) => !l.clearMark(u)) : t = t.concat(this.parser.schema.marks[l.mark].create(l.attrs)), l.consuming === !1)
              a = l;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r, i) {
    let o, s;
    if (t.node)
      if (s = this.parser.schema.nodes[t.node], s.isLeaf)
        this.insertNode(s.create(t.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let l = this.enter(s, t.attrs || null, r, t.preserveWhitespace);
        l && (o = !0, r = l);
      }
    else {
      let l = this.parser.schema.marks[t.mark];
      r = r.concat(l.create(t.attrs));
    }
    let a = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((l) => this.insertNode(l, r, !1));
    else {
      let l = e;
      typeof t.contentElement == "string" ? l = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? l = t.contentElement(e) : t.contentElement && (l = t.contentElement), this.findAround(e, l, !0), this.addAll(l, r), this.findAround(e, l, !1);
    }
    o && this.sync(a) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, i) {
    let o = r || 0;
    for (let s = r ? e.childNodes[r] : e.firstChild, a = i == null ? null : e.childNodes[i]; s != a; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, t);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, r) {
    let i, o;
    for (let s = this.open, a = 0; s >= 0; s--) {
      let l = this.nodes[s], u = l.findWrapping(e);
      if (u && (!i || i.length > u.length + a) && (i = u, o = l, !u.length))
        break;
      if (l.solid) {
        if (r)
          break;
        a += 2;
      }
    }
    if (!i)
      return null;
    this.sync(o);
    for (let s = 0; s < i.length; s++)
      t = this.enterInner(i[s], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (t = this.enterInner(o, null, t));
    }
    let i = this.findPlace(e, t, r);
    if (i) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let s = ve.none;
      for (let a of i.concat(e.marks))
        (o.type ? o.type.allowsMarkType(a.type) : Yl(a.type, e.type)) && (s = a.addToSet(s));
      return o.content.push(e.mark(s)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, i) {
    let o = this.findPlace(e.create(t), r, !1);
    return o && (o = this.enterInner(e, t, r, !0, i)), o;
  }
  // Open a node of the given type
  enterInner(e, t, r, i = !1, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let a = Kl(e, o, s.options);
    s.options & Kr && s.content.length == 0 && (a |= Kr);
    let l = ve.none;
    return r = r.filter((u) => (s.type ? s.type.allowsMarkType(u.type) : Yl(u.type, e)) ? (l = u.addToSet(l), !1) : !0), this.nodes.push(new ji(e, t, l, i, null, a)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= ui);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (a, l) => {
      for (; a >= 0; a--) {
        let u = t[a];
        if (u == "") {
          if (a == t.length - 1 || a == 0)
            continue;
          for (; l >= o; l--)
            if (s(a - 1, l))
              return !0;
          return !1;
        } else {
          let c = l > 0 || l == 0 && i ? this.nodes[l].type : r && l >= o ? r.node(l - o).type : null;
          if (!c || c.name != u && !c.isInGroup(u))
            return !1;
          l--;
        }
      }
      return !0;
    };
    return s(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Xv(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Nd.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function Zv(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function Gl(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function Yl(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let o = [], s = (a) => {
      o.push(a);
      for (let l = 0; l < a.edgeCount; l++) {
        let { type: u, next: c } = a.edge(l);
        if (u == e || o.indexOf(c) < 0 && s(c))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
class Yn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = Yo(t).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let a = 0, l = 0;
        for (; a < o.length && l < s.marks.length; ) {
          let u = s.marks[l];
          if (!this.marks[u.type.name]) {
            l++;
            continue;
          }
          if (!u.eq(o[a][0]) || u.type.spec.spanning === !1)
            break;
          a++, l++;
        }
        for (; a < o.length; )
          i = o.pop()[1];
        for (; l < s.marks.length; ) {
          let u = s.marks[l++], c = this.serializeMark(u, s.isInline, t);
          c && (o.push([u, i]), i.appendChild(c.dom), i = c.contentDOM || c.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = Qi(Yo(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, t);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && Qi(Yo(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return Qi(e, t, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Yn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = Ql(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Ql(e.marks);
  }
}
function Ql(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function Yo(n) {
  return n.document || window.document;
}
const Xl = /* @__PURE__ */ new WeakMap();
function ey(n) {
  let e = Xl.get(n);
  return e === void 0 && Xl.set(n, e = ty(n)), e;
}
function ty(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function Qi(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], o;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = ey(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = i.indexOf(" ");
  s > 0 && (t = i.slice(0, s), i = i.slice(s + 1));
  let a, l = t ? n.createElementNS(t, i) : n.createElement(i), u = e[1], c = 1;
  if (u && typeof u == "object" && u.nodeType == null && !Array.isArray(u)) {
    c = 2;
    for (let d in u)
      if (u[d] != null) {
        let p = d.indexOf(" ");
        p > 0 ? l.setAttributeNS(d.slice(0, p), d.slice(p + 1), u[d]) : d == "style" && l.style ? l.style.cssText = u[d] : l.setAttribute(d, u[d]);
      }
  }
  for (let d = c; d < e.length; d++) {
    let p = e[d];
    if (p === 0) {
      if (d < e.length - 1 || d > c)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: l, contentDOM: l };
    } else {
      let { dom: f, contentDOM: h } = Qi(n, p, t, r);
      if (l.appendChild(f), h) {
        if (a)
          throw new RangeError("Multiple content holes");
        a = h;
      }
    }
  }
  return { dom: l, contentDOM: a };
}
const Ad = 65535, $d = Math.pow(2, 16);
function ny(n, e) {
  return n + e * $d;
}
function Zl(n) {
  return n & Ad;
}
function ry(n) {
  return (n - (n & Ad)) / $d;
}
const Dd = 1, Pd = 2, Xi = 4, Id = 8;
class Bs {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Id) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Dd | Xi)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Pd | Xi)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Xi) > 0;
  }
}
class dt {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && dt.empty)
      return dt.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = Zl(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + ry(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let l = this.ranges[a] - (this.inverted ? i : 0);
      if (l > e)
        break;
      let u = this.ranges[a + o], c = this.ranges[a + s], d = l + u;
      if (e <= d) {
        let p = u ? e == l ? -1 : e == d ? 1 : t : t, f = l + i + (p < 0 ? 0 : c);
        if (r)
          return f;
        let h = e == (t < 0 ? l : d) ? null : ny(a / 3, e - l), m = e == l ? Pd : e == d ? Dd : Xi;
        return (t < 0 ? e != l : e != d) && (m |= Id), new Bs(f, m, h);
      }
      i += c - u;
    }
    return r ? e + i : new Bs(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = Zl(t), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let l = this.ranges[a] - (this.inverted ? r : 0);
      if (l > e)
        break;
      let u = this.ranges[a + o], c = l + u;
      if (e <= c && a == i * 3)
        return !0;
      r += this.ranges[a + s] - u;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], a = s - (this.inverted ? o : 0), l = s + (this.inverted ? 0 : o), u = this.ranges[i + t], c = this.ranges[i + r];
      e(a, a + u, l, l + c), o += c - u;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new dt(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? dt.empty : new dt(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
dt.empty = new dt([]);
class ci {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, t, r = 0, i = e ? e.length : 0) {
    this.mirror = t, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || t);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new ci(this._maps, this.mirror, e, t);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this._maps.length; t < e._maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this._maps.length + e._maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new ci();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this._maps[o], a = s.mapResult(e, t);
      if (a.recover != null) {
        let l = this.getMirror(o);
        if (l != null && l > o && l < this.to) {
          o = l, e = this._maps[l].recover(a.recover);
          continue;
        }
      }
      i |= a.delInfo, e = a.pos;
    }
    return r ? e : new Bs(e, i, null);
  }
}
const Qo = /* @__PURE__ */ Object.create(null);
class Xe {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return dt.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Qo[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in Qo)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Qo[e] = t, t.prototype.jsonID = e, t;
  }
}
class Pe {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new Pe(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new Pe(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return Pe.ok(e.replace(t, r, i));
    } catch (o) {
      if (o instanceof lo)
        return Pe.fail(o.message);
      throw o;
    }
  }
}
function ya(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let o = n.child(i);
    o.content.size && (o = o.copy(ya(o.content, e, o))), o.isInline && (o = e(o, t, i)), r.push(o);
  }
  return A.fromArray(r);
}
class dn extends Xe {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new B(ya(t.content, (s, a) => !s.isAtom || !a.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), t.openStart, t.openEnd);
    return Pe.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new Rt(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new dn(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof dn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new dn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new dn(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Xe.jsonID("addMark", dn);
class Rt extends Xe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new B(ya(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return Pe.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new dn(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Rt(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Rt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Rt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Rt(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Xe.jsonID("removeMark", Rt);
class fn extends Xe {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Pe.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return Pe.fromReplace(e, this.pos, this.pos + 1, new B(A.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new fn(this.pos, t.marks[i]);
        return new fn(this.pos, this.mark);
      }
    }
    return new Wn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new fn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new fn(t.pos, e.markFromJSON(t.mark));
  }
}
Xe.jsonID("addNodeMark", fn);
class Wn extends Xe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Pe.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return Pe.fromReplace(e, this.pos, this.pos + 1, new B(A.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new fn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Wn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Wn(t.pos, e.markFromJSON(t.mark));
  }
}
Xe.jsonID("removeNodeMark", Wn);
class Be extends Xe {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && zs(e, this.from, this.to) ? Pe.fail("Structure replace would overwrite content") : Pe.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new dt([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Be(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new Be(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof Be) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? B.empty : new B(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Be(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? B.empty : new B(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Be(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new Be(t.from, t.to, B.fromJSON(e, t.slice), !!t.structure);
  }
}
Xe.jsonID("replace", Be);
class ze extends Xe {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, o, s, a = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = a;
  }
  apply(e) {
    if (this.structure && (zs(e, this.from, this.gapFrom) || zs(e, this.gapTo, this.to)))
      return Pe.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return Pe.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? Pe.fromReplace(e, this.from, this.to, r) : Pe.fail("Content does not fit in gap");
  }
  getMap() {
    return new dt([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new ze(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || o > r.pos ? null : new ze(t.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new ze(t.from, t.to, t.gapFrom, t.gapTo, B.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
Xe.jsonID("replaceAround", ze);
function zs(n, e, t) {
  let r = n.resolve(e), i = t - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function iy(n, e, t, r) {
  let i = [], o = [], s, a;
  n.doc.nodesBetween(e, t, (l, u, c) => {
    if (!l.isInline)
      return;
    let d = l.marks;
    if (!r.isInSet(d) && c.type.allowsMarkType(r.type)) {
      let p = Math.max(u, e), f = Math.min(u + l.nodeSize, t), h = r.addToSet(d);
      for (let m = 0; m < d.length; m++)
        d[m].isInSet(h) || (s && s.to == p && s.mark.eq(d[m]) ? s.to = f : i.push(s = new Rt(p, f, d[m])));
      a && a.to == p ? a.to = f : o.push(a = new dn(p, f, r));
    }
  }), i.forEach((l) => n.step(l)), o.forEach((l) => n.step(l));
}
function oy(n, e, t, r) {
  let i = [], o = 0;
  n.doc.nodesBetween(e, t, (s, a) => {
    if (!s.isInline)
      return;
    o++;
    let l = null;
    if (r instanceof Oo) {
      let u = s.marks, c;
      for (; c = r.isInSet(u); )
        (l || (l = [])).push(c), u = c.removeFromSet(u);
    } else r ? r.isInSet(s.marks) && (l = [r]) : l = s.marks;
    if (l && l.length) {
      let u = Math.min(a + s.nodeSize, t);
      for (let c = 0; c < l.length; c++) {
        let d = l[c], p;
        for (let f = 0; f < i.length; f++) {
          let h = i[f];
          h.step == o - 1 && d.eq(i[f].style) && (p = h);
        }
        p ? (p.to = u, p.step = o) : i.push({ style: d, from: Math.max(a, e), to: u, step: o });
      }
    }
  }), i.forEach((s) => n.step(new Rt(s.from, s.to, s.style)));
}
function ba(n, e, t, r = t.contentMatch, i = !0) {
  let o = n.doc.nodeAt(e), s = [], a = e + 1;
  for (let l = 0; l < o.childCount; l++) {
    let u = o.child(l), c = a + u.nodeSize, d = r.matchType(u.type);
    if (!d)
      s.push(new Be(a, c, B.empty));
    else {
      r = d;
      for (let p = 0; p < u.marks.length; p++)
        t.allowsMarkType(u.marks[p].type) || n.step(new Rt(a, c, u.marks[p]));
      if (i && u.isText && t.whitespace != "pre") {
        let p, f = /\r?\n|\r/g, h;
        for (; p = f.exec(u.text); )
          h || (h = new B(A.from(t.schema.text(" ", t.allowedMarks(u.marks))), 0, 0)), s.push(new Be(a + p.index, a + p.index + p[0].length, h));
      }
    }
    a = c;
  }
  if (!r.validEnd) {
    let l = r.fillBefore(A.empty, !0);
    n.replace(a, a, new B(l, 0, 0));
  }
  for (let l = s.length - 1; l >= 0; l--)
    n.step(s[l]);
}
function sy(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function _r(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), o = n.$from.index(r), s = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(o, s, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !sy(i, o, s))
      break;
  }
  return null;
}
function ay(n, e, t) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), a = i.after(o + 1), l = s, u = a, c = A.empty, d = 0;
  for (let h = o, m = !1; h > t; h--)
    m || r.index(h) > 0 ? (m = !0, c = A.from(r.node(h).copy(c)), d++) : l--;
  let p = A.empty, f = 0;
  for (let h = o, m = !1; h > t; h--)
    m || i.after(h + 1) < i.end(h) ? (m = !0, p = A.from(i.node(h).copy(p)), f++) : u++;
  n.step(new ze(l, u, s, a, new B(c.append(p), d, f), c.size - d, !0));
}
function Sa(n, e, t = null, r = n) {
  let i = ly(n, e), o = i && uy(r, e);
  return o ? i.map(eu).concat({ type: e, attrs: t }).concat(o.map(eu)) : null;
}
function eu(n) {
  return { type: n, attrs: null };
}
function ly(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return t.canReplaceWith(r, i, s) ? o : null;
}
function uy(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let l = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let u = r; l && u < i; u++)
    l = l.matchType(t.child(u).type);
  return !l || !l.validEnd ? null : s;
}
function cy(n, e, t) {
  let r = A.empty;
  for (let s = t.length - 1; s >= 0; s--) {
    if (r.size) {
      let a = t[s].type.contentMatch.matchFragment(r);
      if (!a || !a.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = A.from(t[s].type.create(t[s].attrs, r));
  }
  let i = e.start, o = e.end;
  n.step(new ze(i, o, i, o, new B(r, 0, 0), t.length, !0));
}
function dy(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = n.steps.length;
  n.doc.nodesBetween(e, t, (s, a) => {
    let l = typeof i == "function" ? i(s) : i;
    if (s.isTextblock && !s.hasMarkup(r, l) && fy(n.doc, n.mapping.slice(o).map(a), r)) {
      let u = null;
      if (r.schema.linebreakReplacement) {
        let f = r.whitespace == "pre", h = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        f && !h ? u = !1 : !f && h && (u = !0);
      }
      u === !1 && Ld(n, s, a, o), ba(n, n.mapping.slice(o).map(a, 1), r, void 0, u === null);
      let c = n.mapping.slice(o), d = c.map(a, 1), p = c.map(a + s.nodeSize, 1);
      return n.step(new ze(d, p, d + 1, p - 1, new B(A.from(r.create(l, null, s.marks)), 0, 0), 1, !0)), u === !0 && Rd(n, s, a, o), !1;
    }
  });
}
function Rd(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.isText) {
      let s, a = /\r?\n|\r/g;
      for (; s = a.exec(i.text); ) {
        let l = n.mapping.slice(r).map(t + 1 + o + s.index);
        n.replaceWith(l, l + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Ld(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let s = n.mapping.slice(r).map(t + 1 + o);
      n.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function fy(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function py(n, e, t, r, i) {
  let o = n.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  t || (t = o.type);
  let s = t.create(r, null, i || o.marks);
  if (o.isLeaf)
    return n.replaceWith(e, e + o.nodeSize, s);
  if (!t.validContent(o.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new ze(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new B(A.from(s), 0, 0), 1, !0));
}
function Xt(n, e, t = 1, r) {
  let i = n.resolve(e), o = i.depth - t, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let u = i.depth - 1, c = t - 2; u > o; u--, c--) {
    let d = i.node(u), p = i.index(u);
    if (d.type.spec.isolating)
      return !1;
    let f = d.content.cutByIndex(p, d.childCount), h = r && r[c + 1];
    h && (f = f.replaceChild(0, h.type.create(h.attrs)));
    let m = r && r[c] || d;
    if (!d.canReplace(p + 1, d.childCount) || !m.type.validContent(f))
      return !1;
  }
  let a = i.indexAfter(o), l = r && r[0];
  return i.node(o).canReplaceWith(a, a, l ? l.type : i.node(o + 1).type);
}
function hy(n, e, t = 1, r) {
  let i = n.doc.resolve(e), o = A.empty, s = A.empty;
  for (let a = i.depth, l = i.depth - t, u = t - 1; a > l; a--, u--) {
    o = A.from(i.node(a).copy(o));
    let c = r && r[u];
    s = A.from(c ? c.type.create(c.attrs, s) : i.node(a).copy(s));
  }
  n.step(new Be(e, e, new B(o.append(s), t, t), !0));
}
function wn(n, e) {
  let t = n.resolve(e), r = t.index();
  return Vd(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function my(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let o = e.child(i), s = o.type == r ? n.type.schema.nodes.text : o.type;
    if (t = t.matchType(s), !t || !n.type.allowsMarks(o.marks))
      return !1;
  }
  return t.validEnd;
}
function Vd(n, e) {
  return !!(n && e && !n.isLeaf && my(n, e));
}
function Eo(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, a = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : t > 0 ? (o = r.node(i + 1), a++, s = r.node(i).maybeChild(a)) : (o = r.node(i).maybeChild(a - 1), s = r.node(i + 1)), o && !o.isTextblock && Vd(o, s) && r.node(i).canReplace(a, a + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function gy(n, e, t) {
  let r = null, { linebreakReplacement: i } = n.doc.type.schema, o = n.doc.resolve(e - t), s = o.node().type;
  if (i && s.inlineContent) {
    let c = s.whitespace == "pre", d = !!s.contentMatch.matchType(i);
    c && !d ? r = !1 : !c && d && (r = !0);
  }
  let a = n.steps.length;
  if (r === !1) {
    let c = n.doc.resolve(e + t);
    Ld(n, c.node(), c.before(), a);
  }
  s.inlineContent && ba(n, e + t - 1, s, o.node().contentMatchAt(o.index()), r == null);
  let l = n.mapping.slice(a), u = l.map(e - t);
  if (n.step(new Be(u, l.map(e + t, -1), B.empty, !0)), r === !0) {
    let c = n.doc.resolve(u);
    Rd(n, c.node(), c.before(), n.steps.length);
  }
  return n;
}
function vy(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function Bd(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let o = 0; o < t.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (t.openStart == 0 && t.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let a = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, l = r.index(s) + (a > 0 ? 1 : 0), u = r.node(s), c = !1;
      if (o == 1)
        c = u.canReplace(l, l, i);
      else {
        let d = u.contentMatchAt(l).findWrapping(i.firstChild.type);
        c = d && u.canReplaceWith(l, l, d[0]);
      }
      if (c)
        return a == 0 ? r.pos : a < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function _o(n, e, t = e, r = B.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), o = n.resolve(t);
  return zd(i, o, r) ? new Be(e, t, r) : new yy(i, o, r).fit();
}
function zd(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class yy {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = A.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = A.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let u = this.findFittable();
      u ? this.placeNodes(u) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, a = i.depth;
    for (; s && a && o.childCount == 1; )
      o = o.firstChild.content, s--, a--;
    let l = new B(o, s, a);
    return e > -1 ? new ze(r.pos, e, this.$to.pos, this.$to.end(), l, t) : l.size || r.pos != this.$to.pos ? new Be(r.pos, i.pos, l) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = t.firstChild;
      if (t.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = o.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = Xo(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let a = this.depth; a >= 0; a--) {
          let { type: l, match: u } = this.frontier[a], c, d = null;
          if (t == 1 && (s ? u.matchType(s.type) || (d = u.fillBefore(A.from(s), !1)) : o && l.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: a, parent: o, inject: d };
          if (t == 2 && s && (c = u.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: a, parent: o, wrap: c };
          if (o && u.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Xo(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new B(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Xo(e, t);
    if (i.childCount <= 1 && t > 0) {
      let o = e.size - t <= t + i.size;
      this.unplaced = new B(Vr(e, t - 1, 1), t - 1, o ? t - 1 : r);
    } else
      this.unplaced = new B(Vr(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: o }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (o)
      for (let m = 0; m < o.length; m++)
        this.openFrontierNode(o[m]);
    let s = this.unplaced, a = r ? r.content : s.content, l = s.openStart - e, u = 0, c = [], { match: d, type: p } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        c.push(i.child(m));
      d = d.matchFragment(i);
    }
    let f = a.size + e - (s.content.size - s.openEnd);
    for (; u < a.childCount; ) {
      let m = a.child(u), g = d.matchType(m.type);
      if (!g)
        break;
      u++, (u > 1 || l == 0 || m.content.size) && (d = g, c.push(jd(m.mark(p.allowedMarks(m.marks)), u == 1 ? l : 0, u == a.childCount ? f : -1)));
    }
    let h = u == a.childCount;
    h || (f = -1), this.placed = Br(this.placed, t, A.from(c)), this.frontier[t].match = d, h && f < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = a; m < f; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = h ? e == 0 ? B.empty : new B(Vr(s.content, e - 1, 1), e - 1, f < 0 ? s.openEnd : e - 1) : new B(Vr(s.content, e, u), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !Zo(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), s = Zo(e, t, i, r, o);
      if (s) {
        for (let a = t - 1; a >= 0; a--) {
          let { match: l, type: u } = this.frontier[a], c = Zo(e, a, u, l, !0);
          if (!c || c.childCount)
            continue e;
        }
        return { depth: t, fit: s, move: o ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Br(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Br(this.placed, this.depth, A.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(A.empty, !0);
    t.childCount && (this.placed = Br(this.placed, this.frontier.length, t));
  }
}
function Vr(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Vr(n.firstChild.content, e - 1, t)));
}
function Br(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Br(n.lastChild.content, e - 1, t)));
}
function Xo(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function jd(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, jd(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(A.empty, !0)))), n.copy(r);
}
function Zo(n, e, t, r, i) {
  let o = n.node(e), s = i ? n.indexAfter(e) : n.index(e);
  if (s == o.childCount && !t.compatibleContent(o.type))
    return null;
  let a = r.fillBefore(o.content, !0, s);
  return a && !by(t, o.content, s) ? a : null;
}
function by(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Sy(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function xy(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), o = n.doc.resolve(t);
  if (zd(i, o, r))
    return n.step(new Be(e, t, r));
  let s = Hd(i, n.doc.resolve(t));
  s[s.length - 1] == 0 && s.pop();
  let a = -(i.depth + 1);
  s.unshift(a);
  for (let p = i.depth, f = i.pos - 1; p > 0; p--, f--) {
    let h = i.node(p).type.spec;
    if (h.defining || h.definingAsContext || h.isolating)
      break;
    s.indexOf(p) > -1 ? a = p : i.before(p) == f && s.splice(1, 0, -p);
  }
  let l = s.indexOf(a), u = [], c = r.openStart;
  for (let p = r.content, f = 0; ; f++) {
    let h = p.firstChild;
    if (u.push(h), f == r.openStart)
      break;
    p = h.content;
  }
  for (let p = c - 1; p >= 0; p--) {
    let f = u[p], h = Sy(f.type);
    if (h && !f.sameMarkup(i.node(Math.abs(a) - 1)))
      c = p;
    else if (h || !f.type.isTextblock)
      break;
  }
  for (let p = r.openStart; p >= 0; p--) {
    let f = (p + c + 1) % (r.openStart + 1), h = u[f];
    if (h)
      for (let m = 0; m < s.length; m++) {
        let g = s[(m + l) % s.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let S = i.node(g - 1), C = i.index(g - 1);
        if (S.canReplaceWith(C, C, h.type, h.marks))
          return n.replace(i.before(g), y ? o.after(g) : t, new B(Fd(r.content, 0, r.openStart, f), f, r.openEnd));
      }
  }
  let d = n.steps.length;
  for (let p = s.length - 1; p >= 0 && (n.replace(e, t, r), !(n.steps.length > d)); p--) {
    let f = s[p];
    f < 0 || (e = i.before(f), t = o.after(f));
  }
}
function Fd(n, e, t, r, i) {
  if (e < t) {
    let o = n.firstChild;
    n = n.replaceChild(0, o.copy(Fd(o.content, e + 1, t, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(n).append(n);
    n = s.append(o.matchFragment(s).fillBefore(A.empty, !0));
  }
  return n;
}
function wy(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = vy(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new B(A.from(r), 0, 0));
}
function ky(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), o = Hd(r, i);
  for (let s = 0; s < o.length; s++) {
    let a = o[s], l = s == o.length - 1;
    if (l && a == 0 || r.node(a).type.contentMatch.validEnd)
      return n.delete(r.start(a), i.end(a));
    if (a > 0 && (l || r.node(a - 1).canReplace(r.index(a - 1), i.indexAfter(a - 1))))
      return n.delete(r.before(a), i.after(a));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && t > r.end(s) && i.end(s) - t != i.depth - s && r.start(s - 1) == i.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), i.index(s - 1)))
      return n.delete(r.before(s), t);
  n.delete(e, t);
}
function Hd(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = n.start(i);
    if (o < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && t.push(i);
  }
  return t;
}
class dr extends Xe {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Pe.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      r[o] = t.attrs[o];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return Pe.fromReplace(e, this.pos, this.pos + 1, new B(A.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return dt.empty;
  }
  invert(e) {
    return new dr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new dr(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new dr(t.pos, t.attr, t.value);
  }
}
Xe.jsonID("attr", dr);
class di extends Xe {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return Pe.ok(r);
  }
  getMap() {
    return dt.empty;
  }
  invert(e) {
    return new di(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new di(t.attr, t.value);
  }
}
Xe.jsonID("docAttr", di);
let gr = class extends Error {
};
gr = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
gr.prototype = Object.create(Error.prototype);
gr.prototype.constructor = gr;
gr.prototype.name = "TransformError";
class Cy {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new ci();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new gr(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = B.empty) {
    let i = _o(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new B(A.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, B.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return xy(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return wy(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return ky(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return ay(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return gy(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return cy(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return dy(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return py(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new dr(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new di(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new fn(e, t)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (t instanceof ve)
      t.isInSet(r.marks) && this.step(new Wn(e, t));
    else {
      let i = r.marks, o, s = [];
      for (; o = t.isInSet(i); )
        s.push(new Wn(e, o)), i = o.removeFromSet(i);
      for (let a = s.length - 1; a >= 0; a--)
        this.step(s[a]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, t = 1, r) {
    return hy(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return iy(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return oy(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return ba(this, e, t, r), this;
  }
}
const es = /* @__PURE__ */ Object.create(null);
class ee {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new Ty(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = B.empty) {
    let r = t.content.lastChild, i = null;
    for (let a = 0; a < t.openEnd; a++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let a = 0; a < s.length; a++) {
      let { $from: l, $to: u } = s[a], c = e.mapping.slice(o);
      e.replaceRange(c.map(l.pos), c.map(u.pos), a ? B.empty : t), a == 0 && ru(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: a } = i[o], l = e.mapping.slice(r), u = l.map(s.pos), c = l.map(a.pos);
      o ? e.deleteRange(u, c) : (e.replaceRangeWith(u, c, t), ru(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new X(e) : sr(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = t < 0 ? sr(e.node(0), e.node(o), e.before(o + 1), e.index(o), t, r) : sr(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, t, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new ht(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return sr(e, e, 0, 0, 1) || new ht(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return sr(e, e, e.content.size, e.childCount, -1) || new ht(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = es[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in es)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return es[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return X.between(this.$anchor, this.$head).getBookmark();
  }
}
ee.prototype.visible = !0;
class Ty {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let tu = !1;
function nu(n) {
  !tu && !n.parent.inlineContent && (tu = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class X extends ee {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    nu(e), nu(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return ee.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new X(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = B.empty) {
    if (super.replace(e, t), t == B.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof X && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Mo(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new X(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let o = ee.findFrom(t, r, !0) || ee.findFrom(t, -r, !0);
      if (o)
        t = o.$head;
      else
        return ee.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (ee.findFrom(e, -r, !0) || ee.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new X(e, t);
  }
}
ee.jsonID("text", X);
class Mo {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Mo(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return X.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class K extends ee {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
    return r ? ee.near(o) : new K(o);
  }
  content() {
    return new B(A.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof K && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new xa(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new K(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new K(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
K.prototype.visible = !1;
ee.jsonID("node", K);
class xa {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new Mo(r, r) : new xa(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && K.isSelectable(r) ? new K(t) : ee.near(t);
  }
}
class ht extends ee {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = B.empty) {
    if (t == B.empty) {
      e.delete(0, e.doc.content.size);
      let r = ee.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new ht(e);
  }
  map(e) {
    return new ht(e);
  }
  eq(e) {
    return e instanceof ht;
  }
  getBookmark() {
    return Oy;
  }
}
ee.jsonID("all", ht);
const Oy = {
  map() {
    return this;
  },
  resolve(n) {
    return new ht(n);
  }
};
function sr(n, e, t, r, i, o = !1) {
  if (e.inlineContent)
    return X.create(n, t);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let a = e.child(s);
    if (a.isAtom) {
      if (!o && K.isSelectable(a))
        return K.create(n, t - (i < 0 ? a.nodeSize : 0));
    } else {
      let l = sr(n, a, t + i, i < 0 ? a.childCount : 0, i, o);
      if (l)
        return l;
    }
    t += a.nodeSize * i;
  }
  return null;
}
function ru(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof Be || i instanceof ze))
    return;
  let o = n.mapping.maps[r], s;
  o.forEach((a, l, u, c) => {
    s == null && (s = c);
  }), n.setSelection(ee.near(n.doc.resolve(s), t));
}
const iu = 1, Fi = 2, ou = 4;
class Ey extends Cy {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | iu) & ~Fi, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & iu) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Fi, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return ve.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & Fi) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~Fi, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || ve.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(t);
        o = r == t ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, o)), this.selection.empty || this.setSelection(ee.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= ou, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & ou) > 0;
  }
}
function su(n, e) {
  return !e || !n ? n : n.bind(e);
}
class zr {
  constructor(e, t, r) {
    this.name = e, this.init = su(t.init, r), this.apply = su(t.apply, r);
  }
}
const _y = [
  new zr("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new zr("selection", {
    init(n, e) {
      return n.selection || ee.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new zr("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new zr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class ts {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = _y.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new zr(r.key, r.spec.state, r));
    });
  }
}
class ur {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let a = this.config.plugins[s];
        if (a.spec.appendTransaction) {
          let l = i ? i[s].n : 0, u = i ? i[s].state : this, c = l < t.length && a.spec.appendTransaction.call(a, l ? t.slice(l) : t, u, r);
          if (c && r.filterTransaction(c, s)) {
            if (c.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let d = 0; d < this.config.plugins.length; d++)
                i.push(d < s ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(c), r = r.applyInner(c), o = !0;
          }
          i && (i[s] = { state: r, n: t.length });
        }
      }
      if (!o)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new ur(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      t[o.name] = o.apply(e, this[o.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Ey(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new ts(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new ur(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new ts(this.schema, e.plugins), r = t.fields, i = new ur(t);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (t[r] = o.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new ts(e.schema, e.plugins), o = new ur(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = mn.fromJSON(e.schema, t.doc);
      else if (s.name == "selection")
        o.selection = ee.fromJSON(o.doc, t.selection);
      else if (s.name == "storedMarks")
        t.storedMarks && (o.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let a in r) {
            let l = r[a], u = l.spec.state;
            if (l.key == s.name && u && u.fromJSON && Object.prototype.hasOwnProperty.call(t, a)) {
              o[s.name] = u.fromJSON.call(l, e, t[a], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function Ud(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Ud(i, e, {})), t[r] = i;
  }
  return t;
}
class Ke {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Ud(e.props, this, this.props), this.key = e.key ? e.key.key : Wd("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ns = /* @__PURE__ */ Object.create(null);
function Wd(n) {
  return n in ns ? n + "$" + ++ns[n] : (ns[n] = 0, n + "$");
}
class yt {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Wd(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Ue = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, vr = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let js = null;
const Kt = function(n, e, t) {
  let r = js || (js = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, My = function() {
  js = null;
}, qn = function(n, e, t, r) {
  return t && (au(n, e, t, r, -1) || au(n, e, t, r, 1));
}, Ny = /^(img|br|input|textarea|hr)$/i;
function au(n, e, t, r, i) {
  for (var o; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : xt(n))) {
      let s = n.parentNode;
      if (!s || s.nodeType != 1 || Ci(n) || Ny.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = Ue(n) + (i < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      let s = n.childNodes[e + (i < 0 ? -1 : 0)];
      if (s.nodeType == 1 && s.contentEditable == "false")
        if (!((o = s.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += i;
        else
          return !1;
      else
        n = s, e = i < 0 ? xt(n) : 0;
    } else
      return !1;
  }
}
function xt(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Ay(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = xt(n);
    } else if (n.parentNode && !Ci(n))
      e = Ue(n), n = n.parentNode;
    else
      return null;
  }
}
function $y(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !Ci(n))
      e = Ue(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function Dy(n, e, t) {
  for (let r = e == 0, i = e == xt(n); r || i; ) {
    if (n == t)
      return !0;
    let o = Ue(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && o == 0, i = i && o == xt(n);
  }
}
function Ci(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const No = function(n) {
  return n.focusNode && qn(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function Nn(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function Py(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Iy(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(xt(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(xt(r.startContainer), r.startOffset) };
  }
}
const Bt = typeof navigator < "u" ? navigator : null, lu = typeof document < "u" ? document : null, kn = Bt && Bt.userAgent || "", Fs = /Edge\/(\d+)/.exec(kn), qd = /MSIE \d/.exec(kn), Hs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(kn), at = !!(qd || Hs || Fs), gn = qd ? document.documentMode : Hs ? +Hs[1] : Fs ? +Fs[1] : 0, kt = !at && /gecko\/(\d+)/i.test(kn);
kt && +(/Firefox\/(\d+)/.exec(kn) || [0, 0])[1];
const Us = !at && /Chrome\/(\d+)/.exec(kn), Qe = !!Us, Kd = Us ? +Us[1] : 0, nt = !at && !!Bt && /Apple Computer/.test(Bt.vendor), yr = nt && (/Mobile\/\w+/.test(kn) || !!Bt && Bt.maxTouchPoints > 2), St = yr || (Bt ? /Mac/.test(Bt.platform) : !1), Ry = Bt ? /Win/.test(Bt.platform) : !1, Yt = /Android \d/.test(kn), Ti = !!lu && "webkitFontSmoothing" in lu.documentElement.style, Ly = Ti ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Vy(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function qt(n, e) {
  return typeof n == "number" ? n : n[e];
}
function By(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function uu(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, o = n.dom.ownerDocument;
  for (let s = t || n.dom; s; ) {
    if (s.nodeType != 1) {
      s = vr(s);
      continue;
    }
    let a = s, l = a == o.body, u = l ? Vy(o) : By(a), c = 0, d = 0;
    if (e.top < u.top + qt(r, "top") ? d = -(u.top - e.top + qt(i, "top")) : e.bottom > u.bottom - qt(r, "bottom") && (d = e.bottom - e.top > u.bottom - u.top ? e.top + qt(i, "top") - u.top : e.bottom - u.bottom + qt(i, "bottom")), e.left < u.left + qt(r, "left") ? c = -(u.left - e.left + qt(i, "left")) : e.right > u.right - qt(r, "right") && (c = e.right - u.right + qt(i, "right")), c || d)
      if (l)
        o.defaultView.scrollBy(c, d);
      else {
        let f = a.scrollLeft, h = a.scrollTop;
        d && (a.scrollTop += d), c && (a.scrollLeft += c);
        let m = a.scrollLeft - f, g = a.scrollTop - h;
        e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
      }
    let p = l ? "fixed" : getComputedStyle(s).position;
    if (/^(fixed|sticky)$/.test(p))
      break;
    s = p == "absolute" ? s.offsetParent : vr(s);
  }
}
function zy(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = t + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let a = n.root.elementFromPoint(o, s);
    if (!a || a == n.dom || !n.dom.contains(a))
      continue;
    let l = a.getBoundingClientRect();
    if (l.top >= t - 20) {
      r = a, i = l.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Jd(n.dom) };
}
function Jd(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = vr(r))
    ;
  return e;
}
function jy({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  Gd(t, r == 0 ? 0 : r - e);
}
function Gd(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: o } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let nr = null;
function Fy(n) {
  if (n.setActive)
    return n.setActive();
  if (nr)
    return n.focus(nr);
  let e = Jd(n);
  n.focus(nr == null ? {
    get preventScroll() {
      return nr = { preventScroll: !0 }, !0;
    }
  } : void 0), nr || (nr = !1, Gd(e, 0));
}
function Yd(n, e) {
  let t, r = 2e8, i, o = 0, s = e.top, a = e.top, l, u;
  for (let c = n.firstChild, d = 0; c; c = c.nextSibling, d++) {
    let p;
    if (c.nodeType == 1)
      p = c.getClientRects();
    else if (c.nodeType == 3)
      p = Kt(c).getClientRects();
    else
      continue;
    for (let f = 0; f < p.length; f++) {
      let h = p[f];
      if (h.top <= s && h.bottom >= a) {
        s = Math.max(h.bottom, s), a = Math.min(h.top, a);
        let m = h.left > e.left ? h.left - e.left : h.right < e.left ? e.left - h.right : 0;
        if (m < r) {
          t = c, r = m, i = m && t.nodeType == 3 ? {
            left: h.right < e.left ? h.right : h.left,
            top: e.top
          } : e, c.nodeType == 1 && m && (o = d + (e.left >= (h.left + h.right) / 2 ? 1 : 0));
          continue;
        }
      } else h.top > e.top && !l && h.left <= e.left && h.right >= e.left && (l = c, u = { left: Math.max(h.left, Math.min(h.right, e.left)), top: h.top });
      !t && (e.left >= h.right && e.top >= h.top || e.left >= h.left && e.top >= h.bottom) && (o = d + 1);
    }
  }
  return !t && l && (t = l, i = u, r = 0), t && t.nodeType == 3 ? Hy(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: o } : Yd(t, i);
}
function Hy(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let o = on(r, 1);
    if (o.top != o.bottom && wa(e, o))
      return { node: n, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function wa(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function Uy(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function Wy(n, e, t) {
  let { node: r, offset: i } = Yd(e, t), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && t.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, o);
}
function qy(n, e, t, r) {
  let i = -1;
  for (let o = e, s = !1; o != n.dom; ) {
    let a = n.docView.nearestDesc(o, !0), l;
    if (!a)
      return null;
    if (a.dom.nodeType == 1 && (a.node.isBlock && a.parent || !a.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((l = a.dom.getBoundingClientRect()).width || l.height) && (a.node.isBlock && a.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(a.dom.nodeName) && (!s && l.left > r.left || l.top > r.top ? i = a.posBefore : (!s && l.right < r.left || l.bottom < r.top) && (i = a.posAfter), s = !0), !a.contentDOM && i < 0 && !a.node.isText))
      return (a.node.isBlock ? r.top < (l.top + l.bottom) / 2 : r.left < (l.left + l.right) / 2) ? a.posBefore : a.posAfter;
    o = a.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function Qd(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), o = i; ; ) {
      let s = n.childNodes[o];
      if (s.nodeType == 1) {
        let a = s.getClientRects();
        for (let l = 0; l < a.length; l++) {
          let u = a[l];
          if (wa(e, u))
            return Qd(s, e, u);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return n;
}
function Ky(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, o = Iy(t, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), a;
  if (!s || !n.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let u = n.dom.getBoundingClientRect();
    if (!wa(e, u) || (s = Qd(n.dom, e, u), !s))
      return null;
  }
  if (nt)
    for (let u = s; r && u; u = vr(u))
      u.draggable && (r = void 0);
  if (s = Uy(s, e), r) {
    if (kt && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let c = r.childNodes[i], d;
      c.nodeName == "IMG" && (d = c.getBoundingClientRect()).right <= e.left && d.bottom > e.top && i++;
    }
    let u;
    Ti && i && r.nodeType == 1 && (u = r.childNodes[i - 1]).nodeType == 1 && u.contentEditable == "false" && u.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? a = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (a = qy(n, r, i, e));
  }
  a == null && (a = Wy(n, s, e));
  let l = n.docView.nearestDesc(s, !0);
  return { pos: a, inside: l ? l.posAtStart - l.border : -1 };
}
function cu(n) {
  return n.top < n.bottom || n.left < n.right;
}
function on(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (cu(r))
      return r;
  }
  return Array.prototype.find.call(t, cu) || n.getBoundingClientRect();
}
const Jy = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Xd(n, e, t) {
  let { node: r, offset: i, atom: o } = n.docView.domFromPos(e, t < 0 ? -1 : 1), s = Ti || kt;
  if (r.nodeType == 3)
    if (s && (Jy.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let l = on(Kt(r, i, i), t);
      if (kt && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let u = on(Kt(r, i - 1, i - 1), -1);
        if (u.top == l.top) {
          let c = on(Kt(r, i, i + 1), -1);
          if (c.top != l.top)
            return Dr(c, c.left < u.left);
        }
      }
      return l;
    } else {
      let l = i, u = i, c = t < 0 ? 1 : -1;
      return t < 0 && !i ? (u++, c = -1) : t >= 0 && i == r.nodeValue.length ? (l--, c = 1) : t < 0 ? l-- : u++, Dr(on(Kt(r, l, u), c), c < 0);
    }
  if (!n.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (t < 0 || i == xt(r))) {
      let l = r.childNodes[i - 1];
      if (l.nodeType == 1)
        return rs(l.getBoundingClientRect(), !1);
    }
    if (o == null && i < xt(r)) {
      let l = r.childNodes[i];
      if (l.nodeType == 1)
        return rs(l.getBoundingClientRect(), !0);
    }
    return rs(r.getBoundingClientRect(), t >= 0);
  }
  if (o == null && i && (t < 0 || i == xt(r))) {
    let l = r.childNodes[i - 1], u = l.nodeType == 3 ? Kt(l, xt(l) - (s ? 0 : 1)) : l.nodeType == 1 && (l.nodeName != "BR" || !l.nextSibling) ? l : null;
    if (u)
      return Dr(on(u, 1), !1);
  }
  if (o == null && i < xt(r)) {
    let l = r.childNodes[i];
    for (; l.pmViewDesc && l.pmViewDesc.ignoreForCoords; )
      l = l.nextSibling;
    let u = l ? l.nodeType == 3 ? Kt(l, 0, s ? 0 : 1) : l.nodeType == 1 ? l : null : null;
    if (u)
      return Dr(on(u, -1), !0);
  }
  return Dr(on(r.nodeType == 3 ? Kt(r) : r, -t), t >= 0);
}
function Dr(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function rs(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function Zd(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function Gy(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return Zd(n, e, () => {
    let { node: o } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let a = n.docView.nearestDesc(o, !0);
      if (!a)
        break;
      if (a.node.isBlock) {
        o = a.contentDOM || a.dom;
        break;
      }
      o = a.dom.parentNode;
    }
    let s = Xd(n, i.pos, 1);
    for (let a = o.firstChild; a; a = a.nextSibling) {
      let l;
      if (a.nodeType == 1)
        l = a.getClientRects();
      else if (a.nodeType == 3)
        l = Kt(a, 0, a.nodeValue.length).getClientRects();
      else
        continue;
      for (let u = 0; u < l.length; u++) {
        let c = l[u];
        if (c.bottom > c.top + 1 && (t == "up" ? s.top - c.top > (c.bottom - s.top) * 2 : c.bottom - s.bottom > (s.bottom - c.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const Yy = /[\u0590-\u08ac]/;
function Qy(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, a = n.domSelection();
  return a ? !Yy.test(r.parent.textContent) || !a.modify ? t == "left" || t == "backward" ? o : s : Zd(n, e, () => {
    let { focusNode: l, focusOffset: u, anchorNode: c, anchorOffset: d } = n.domSelectionRange(), p = a.caretBidiLevel;
    a.modify("move", t, "character");
    let f = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: h, focusOffset: m } = n.domSelectionRange(), g = h && !f.contains(h.nodeType == 1 ? h : h.parentNode) || l == h && u == m;
    try {
      a.collapse(c, d), l && (l != c || u != d) && a.extend && a.extend(l, u);
    } catch {
    }
    return p != null && (a.caretBidiLevel = p), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let du = null, fu = null, pu = !1;
function Xy(n, e, t) {
  return du == e && fu == t ? pu : (du = e, fu = t, pu = t == "up" || t == "down" ? Gy(n, e, t) : Qy(n, e, t));
}
const Ct = 0, hu = 1, $n = 2, zt = 3;
class Oi {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = Ct, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > Ue(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!t || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          for (let s = 0; s < i.children.length; s++) {
            let a = i.children[s];
            if (a.size) {
              i = a;
              break;
            }
          }
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], a = o + s.size;
      if (a > e || s instanceof tf) {
        i = e - o;
        break;
      }
      o = a;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof ef && o.side >= 0; r--)
      ;
    if (t <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && t && s && !o.border && !o.domAtom ? o.domFromPos(o.size, t) : { node: this.contentDOM, offset: o ? Ue(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, t) : { node: this.contentDOM, offset: o ? Ue(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, a = 0; ; a++) {
      let l = this.children[a], u = s + l.size;
      if (i == -1 && e <= u) {
        let c = s + l.border;
        if (e >= c && t <= u - l.border && l.node && l.contentDOM && this.contentDOM.contains(l.contentDOM))
          return l.parseRange(e, t, c);
        e = s;
        for (let d = a; d > 0; d--) {
          let p = this.children[d - 1];
          if (p.size && p.dom.parentNode == this.contentDOM && !p.emptyChildAt(1)) {
            i = Ue(p.dom) + 1;
            break;
          }
          e -= p.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (u > t || a == this.children.length - 1)) {
        t = u;
        for (let c = a + 1; c < this.children.length; c++) {
          let d = this.children[c];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
            o = Ue(d.dom);
            break;
          }
          t += d.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = u;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let o = Math.min(e, t), s = Math.max(e, t);
    for (let f = 0, h = 0; f < this.children.length; f++) {
      let m = this.children[f], g = h + m.size;
      if (o > h && s < g)
        return m.setSelection(e - h - m.border, t - h - m.border, r, i);
      h = g;
    }
    let a = this.domFromPos(e, e ? -1 : 1), l = t == e ? a : this.domFromPos(t, t ? -1 : 1), u = r.root.getSelection(), c = r.domSelectionRange(), d = !1;
    if ((kt || nt) && e == t) {
      let { node: f, offset: h } = a;
      if (f.nodeType == 3) {
        if (d = !!(h && f.nodeValue[h - 1] == `
`), d && h == f.nodeValue.length)
          for (let m = f, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (a = l = { node: g.parentNode, offset: Ue(g) + 1 });
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let m = f.childNodes[h - 1];
        d = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (kt && c.focusNode && c.focusNode != l.node && c.focusNode.nodeType == 1) {
      let f = c.focusNode.childNodes[c.focusOffset];
      f && f.contentEditable == "false" && (i = !0);
    }
    if (!(i || d && nt) && qn(a.node, a.offset, c.anchorNode, c.anchorOffset) && qn(l.node, l.offset, c.focusNode, c.focusOffset))
      return;
    let p = !1;
    if ((u.extend || e == t) && !(d && kt)) {
      u.collapse(a.node, a.offset);
      try {
        e != t && u.extend(l.node, l.offset), p = !0;
      } catch {
      }
    }
    if (!p) {
      if (e > t) {
        let h = a;
        a = l, l = h;
      }
      let f = document.createRange();
      f.setEnd(l.node, l.offset), f.setStart(a.node, a.offset), u.removeAllRanges(), u.addRange(f);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && t >= r : e < s && t > r) {
        let a = r + o.border, l = s - o.border;
        if (e >= a && t <= l) {
          this.dirty = e == r || t == s ? $n : hu, e == a && t == l && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = zt : o.markDirty(e - a, t - a);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? $n : zt;
      }
      r = s;
    }
    this.dirty = $n;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? $n : hu;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  get ignoreForSelection() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class ef extends Oi {
  constructor(e, t, r, i) {
    let o, s = t.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !t.type.spec.raw) {
      if (s.nodeType != 1) {
        let a = document.createElement("span");
        a.appendChild(s), s = a;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = t, this.widget = t, o = this;
  }
  matchesWidget(e) {
    return this.dirty == Ct && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Zy extends Oi {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Kn extends Oi {
  constructor(e, t, r, i, o) {
    super(e, [], r, i), this.mark = t, this.spec = o;
  }
  static create(e, t, r, i) {
    let o = i.nodeViews[t.type.name], s = o && o(t, i, r);
    return (!s || !s.dom) && (s = Yn.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new Kn(e, t, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & zt || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != zt && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != Ct) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Ct;
    }
  }
  slice(e, t, r) {
    let i = Kn.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    t < s && (o = qs(o, t, s, r)), e > 0 && (o = qs(o, 0, e, r));
    for (let a = 0; a < o.length; a++)
      o[a].parent = i;
    return i.children = o, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class vn extends Oi {
  constructor(e, t, r, i, o, s, a, l, u) {
    super(e, [], o, s), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = a;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, o, s) {
    let a = o.nodeViews[t.type.name], l, u = a && a(t, o, () => {
      if (!l)
        return s;
      if (l.parent)
        return l.parent.posBeforeChild(l);
    }, r, i), c = u && u.dom, d = u && u.contentDOM;
    if (t.isText) {
      if (!c)
        c = document.createTextNode(t.text);
      else if (c.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else c || ({ dom: c, contentDOM: d } = Yn.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !d && !t.isText && c.nodeName != "BR" && (c.hasAttribute("contenteditable") || (c.contentEditable = "false"), t.type.spec.draggable && (c.draggable = !0));
    let p = c;
    return c = of(c, r, t), u ? l = new eb(e, t, r, i, c, d || null, p, u, o, s + 1) : t.isText ? new Ao(e, t, r, i, c, p, o) : new vn(e, t, r, i, c, d || null, p, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => A.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == Ct && e.eq(this.node) && po(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, o = e.composing ? this.localCompositionInfo(e, t) : null, s = o && o.pos > -1 ? o : null, a = o && o.pos < 0, l = new nb(this, s && s.node, e);
    ob(this.node, this.innerDeco, (u, c, d) => {
      u.spec.marks ? l.syncToMarks(u.spec.marks, r, e) : u.type.side >= 0 && !d && l.syncToMarks(c == this.node.childCount ? ve.none : this.node.child(c).marks, r, e), l.placeWidget(u, e, i);
    }, (u, c, d, p) => {
      l.syncToMarks(u.marks, r, e);
      let f;
      l.findNodeMatch(u, c, d, p) || a && e.state.selection.from > i && e.state.selection.to < i + u.nodeSize && (f = l.findIndexWithChild(o.node)) > -1 && l.updateNodeAt(u, c, d, f, e) || l.updateNextNode(u, c, d, e, p, i) || l.addNode(u, c, d, e, i), i += u.nodeSize;
    }), l.syncToMarks([], r, e), this.node.isTextblock && l.addTextblockHacks(), l.destroyRest(), (l.changed || this.dirty == $n) && (s && this.protectLocalComposition(e, s), nf(this.contentDOM, this.children, e), yr && sb(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof X) || r < t || i > t + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, a = ab(this.node.content, s, r - t, i - t);
      return a < 0 ? null : { node: o, pos: a, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let o = t;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new Zy(this, o, t, i);
    e.input.compositionNodes.push(s), this.children = qs(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == zt || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Ct;
  }
  updateOuterDeco(e) {
    if (po(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = rf(this.dom, this.nodeDOM, Ws(this.outerDeco, this.node, t), Ws(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function mu(n, e, t, r, i) {
  of(r, e, n);
  let o = new vn(void 0, n, e, t, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class Ao extends vn {
  constructor(e, t, r, i, o, s, a) {
    super(e, t, r, i, o, null, s, a, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == zt || this.dirty != Ct && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Ct || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Ct, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), o = document.createTextNode(i.text);
    return new Ao(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = zt);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class tf extends Oi {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Ct && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class eb extends vn {
  constructor(e, t, r, i, o, s, a, l, u, c) {
    super(e, t, r, i, o, s, a, u, c), this.spec = l;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == zt)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let o = this.spec.update(e, t, r);
      return o && this.updateInner(e, t, r, i), o;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function nf(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], a = s.dom;
    if (a.parentNode == n) {
      for (; a != r; )
        r = gu(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(a, r);
    if (s instanceof Kn) {
      let l = r ? r.previousSibling : n.lastChild;
      nf(s.contentDOM, s.children, t), r = l ? l.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = gu(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const Jr = function(n) {
  n && (this.nodeName = n);
};
Jr.prototype = /* @__PURE__ */ Object.create(null);
const Dn = [new Jr()];
function Ws(n, e, t) {
  if (n.length == 0)
    return Dn;
  let r = t ? Dn[0] : new Jr(), i = [r];
  for (let o = 0; o < n.length; o++) {
    let s = n[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new Jr(s.nodeName));
      for (let a in s) {
        let l = s[a];
        l != null && (t && i.length == 1 && i.push(r = new Jr(e.isInline ? "span" : "div")), a == "class" ? r.class = (r.class ? r.class + " " : "") + l : a == "style" ? r.style = (r.style ? r.style + ";" : "") + l : a != "nodeName" && (r[a] = l));
      }
    }
  }
  return i;
}
function rf(n, e, t, r) {
  if (t == Dn && r == Dn)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], a = t[o];
    if (o) {
      let l;
      a && a.nodeName == s.nodeName && i != n && (l = i.parentNode) && l.nodeName.toLowerCase() == s.nodeName || (l = document.createElement(s.nodeName), l.pmIsDeco = !0, l.appendChild(i), a = Dn[0]), i = l;
    }
    tb(i, a || Dn[0], s);
  }
  return i;
}
function tb(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && n.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && n.classList.add(i[o]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function of(n, e, t) {
  return rf(n, n, Dn, Ws(e, t, n.nodeType != 1));
}
function po(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function gu(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class nb {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = rb(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = Ct, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let a = -1;
      for (let l = this.index; l < Math.min(this.index + 3, this.top.children.length); l++) {
        let u = this.top.children[l];
        if (u.matchesMark(e[o]) && !this.isLocked(u.dom)) {
          a = l;
          break;
        }
      }
      if (a > -1)
        a > this.index && (this.changed = !0, this.destroyBetween(this.index, a)), this.top = this.top.children[this.index];
      else {
        let l = Kn.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, l), this.top = l, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, t, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let a = this.index, l = Math.min(this.top.children.length, a + 5); a < l; a++) {
        let u = this.top.children[a];
        if (u.matchesNode(e, t, r) && !this.preMatch.matched.has(u)) {
          o = a;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == zt && s.dom == s.contentDOM && (s.dirty = $n), s.update(e, t, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, o, s) {
    for (let a = this.index; a < this.top.children.length; a++) {
      let l = this.top.children[a];
      if (l instanceof vn) {
        let u = this.preMatch.matched.get(l);
        if (u != null && u != o)
          return !1;
        let c = l.dom, d, p = this.isLocked(c) && !(e.isText && l.node && l.node.isText && l.nodeDOM.nodeValue == e.text && l.dirty != zt && po(t, l.outerDeco));
        if (!p && l.update(e, t, r, i))
          return this.destroyBetween(this.index, a), l.dom != c && (this.changed = !0), this.index++, !0;
        if (!p && (d = this.recreateWrapper(l, e, t, r, i, s)))
          return this.destroyBetween(this.index, a), this.top.children[this.index] = d, d.contentDOM && (d.dirty = $n, d.updateChildren(i, s + 1), d.dirty = Ct), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, o, s) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !po(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let a = vn.create(this.top, t, r, i, o, s);
    if (a.contentDOM) {
      a.children = e.children, e.children = [];
      for (let l of a.children)
        l.parent = a;
    }
    return e.destroy(), a;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, o) {
    let s = vn.create(this.top, e, t, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new ef(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Kn; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Ao) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((nt || Qe) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new tf(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function rb(n, e) {
  let t = e, r = t.children.length, i = n.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e: for (; i > 0; ) {
    let a;
    for (; ; )
      if (r) {
        let u = t.children[r - 1];
        if (u instanceof Kn)
          t = u, r = u.children.length;
        else {
          a = u, r--;
          break;
        }
      } else {
        if (t == e)
          break e;
        r = t.parent.children.indexOf(t), t = t.parent;
      }
    let l = a.node;
    if (l) {
      if (l != n.child(i - 1))
        break;
      --i, o.set(a, i), s.push(a);
    }
  }
  return { index: i, matched: o, matches: s.reverse() };
}
function ib(n, e) {
  return n.type.side - e.type.side;
}
function ob(n, e, t, r) {
  let i = e.locals(n), o = 0;
  if (i.length == 0) {
    for (let u = 0; u < n.childCount; u++) {
      let c = n.child(u);
      r(c, i, e.forChild(o, c), u), o += c.nodeSize;
    }
    return;
  }
  let s = 0, a = [], l = null;
  for (let u = 0; ; ) {
    let c, d;
    for (; s < i.length && i[s].to == o; ) {
      let g = i[s++];
      g.widget && (c ? (d || (d = [c])).push(g) : c = g);
    }
    if (c)
      if (d) {
        d.sort(ib);
        for (let g = 0; g < d.length; g++)
          t(d[g], u, !!l);
      } else
        t(c, u, !!l);
    let p, f;
    if (l)
      f = -1, p = l, l = null;
    else if (u < n.childCount)
      f = u, p = n.child(u++);
    else
      break;
    for (let g = 0; g < a.length; g++)
      a[g].to <= o && a.splice(g--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      a.push(i[s++]);
    let h = o + p.nodeSize;
    if (p.isText) {
      let g = h;
      s < i.length && i[s].from < g && (g = i[s].from);
      for (let y = 0; y < a.length; y++)
        a[y].to < g && (g = a[y].to);
      g < h && (l = p.cut(g - o), p = p.cut(0, g - o), h = g, f = -1);
    } else
      for (; s < i.length && i[s].to < h; )
        s++;
    let m = p.isInline && !p.isLeaf ? a.filter((g) => !g.inline) : a.slice();
    r(p, m, e.forChild(o, p), f), o = h;
  }
}
function sb(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function ab(n, e, t, r) {
  for (let i = 0, o = 0; i < n.childCount && o <= r; ) {
    let s = n.child(i++), a = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let l = s.text;
    for (; i < n.childCount; ) {
      let u = n.child(i++);
      if (o += u.nodeSize, !u.isText)
        break;
      l += u.text;
    }
    if (o >= t) {
      if (o >= r && l.slice(r - e.length - a, r - a) == e)
        return r - e.length;
      let u = a < r ? l.lastIndexOf(e, r - a - 1) : -1;
      if (u >= 0 && u + e.length + a >= t)
        return a + u;
      if (t == r && l.length >= r + e.length - a && l.slice(r - a, r - a + e.length) == e)
        return r;
    }
  }
  return -1;
}
function qs(n, e, t, r, i) {
  let o = [];
  for (let s = 0, a = 0; s < n.length; s++) {
    let l = n[s], u = a, c = a += l.size;
    u >= t || c <= e ? o.push(l) : (u < e && o.push(l.slice(0, e - u, r)), i && (o.push(i), i = void 0), c > t && o.push(l.slice(t - u, l.size, r)));
  }
  return o;
}
function ka(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), o = i && i.size == 0, s = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (s < 0)
    return null;
  let a = r.resolve(s), l, u;
  if (No(t)) {
    for (l = s; i && !i.node; )
      i = i.parent;
    let d = i.node;
    if (i && d.isAtom && K.isSelectable(d) && i.parent && !(d.isInline && Dy(t.focusNode, t.focusOffset, i.dom))) {
      let p = i.posBefore;
      u = new K(s == p ? a : r.resolve(p));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let d = s, p = s;
      for (let f = 0; f < t.rangeCount; f++) {
        let h = t.getRangeAt(f);
        d = Math.min(d, n.docView.posFromDOM(h.startContainer, h.startOffset, 1)), p = Math.max(p, n.docView.posFromDOM(h.endContainer, h.endOffset, -1));
      }
      if (d < 0)
        return null;
      [l, s] = p == n.state.selection.anchor ? [p, d] : [d, p], a = r.resolve(s);
    } else
      l = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (l < 0)
      return null;
  }
  let c = r.resolve(l);
  if (!u) {
    let d = e == "pointer" || n.state.selection.head < a.pos && !o ? 1 : -1;
    u = Ca(n, c, a, d);
  }
  return u;
}
function sf(n) {
  return n.editable ? n.hasFocus() : lf(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function Zt(n, e = !1) {
  let t = n.state.selection;
  if (af(n, t), !!sf(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && Qe) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && qn(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      ub(n);
    else {
      let { anchor: r, head: i } = t, o, s;
      vu && !(t instanceof X) && (t.$from.parent.inlineContent || (o = yu(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (s = yu(n, t.to))), n.docView.setSelection(r, i, n, e), vu && (o && bu(o), s && bu(s)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && lb(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const vu = nt || Qe && Kd < 63;
function yu(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, o = r ? t.childNodes[r - 1] : null;
  if (nt && i && i.contentEditable == "false")
    return is(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return is(i);
    if (o)
      return is(o);
  }
}
function is(n) {
  return n.contentEditable = "true", nt && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function bu(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function lb(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!sf(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function ub(n) {
  let e = n.domSelection();
  if (!e)
    return;
  let t = n.cursorWrapper.dom, r = t.nodeName == "IMG";
  r ? e.collapse(t.parentNode, Ue(t) + 1) : e.collapse(t, 0), !r && !n.state.selection.visible && at && gn <= 11 && (t.disabled = !0, t.disabled = !1);
}
function af(n, e) {
  if (e instanceof K) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (Su(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    Su(n);
}
function Su(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function Ca(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || X.between(e, t, r);
}
function xu(n) {
  return n.editable && !n.hasFocus() ? !1 : lf(n);
}
function lf(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function cb(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return qn(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Ks(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), o = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && ee.findFrom(o, e);
}
function an(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function wu(n, e, t) {
  let r = n.state.selection;
  if (r instanceof X)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let s = n.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return an(n, new X(r.$anchor, s));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Ks(n.state, e);
        return i && i instanceof K ? an(n, i) : !1;
      } else if (!(St && t.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
        if (!o || o.isText)
          return !1;
        let a = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (s = n.docView.descAt(a)) && !s.contentDOM ? K.isSelectable(o) ? an(n, new K(e < 0 ? n.state.doc.resolve(i.pos - o.nodeSize) : i)) : Ti ? an(n, new X(n.state.doc.resolve(e < 0 ? a : a + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof K && r.node.isInline)
      return an(n, new X(e > 0 ? r.$to : r.$from));
    {
      let i = Ks(n.state, e);
      return i ? an(n, i) : !1;
    }
  }
}
function ho(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Gr(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function rr(n, e) {
  return e < 0 ? db(n) : fb(n);
}
function db(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, o, s = !1;
  for (kt && t.nodeType == 1 && r < ho(t) && Gr(t.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let a = t.childNodes[r - 1];
        if (Gr(a, -1))
          i = t, o = --r;
        else if (a.nodeType == 3)
          t = a, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (uf(t))
        break;
      {
        let a = t.previousSibling;
        for (; a && Gr(a, -1); )
          i = t.parentNode, o = Ue(a), a = a.previousSibling;
        if (a)
          t = a, r = ho(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  s ? Js(n, t, r) : i && Js(n, i, o);
}
function fb(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = ho(t), o, s;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let a = t.childNodes[r];
      if (Gr(a, 1))
        o = t, s = ++r;
      else
        break;
    } else {
      if (uf(t))
        break;
      {
        let a = t.nextSibling;
        for (; a && Gr(a, 1); )
          o = a.parentNode, s = Ue(a) + 1, a = a.nextSibling;
        if (a)
          t = a, r = 0, i = ho(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && Js(n, o, s);
}
function uf(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function pb(n, e) {
  for (; n && e == n.childNodes.length && !Ci(n); )
    e = Ue(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function hb(n, e) {
  for (; n && !e && !Ci(n); )
    e = Ue(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Js(n, e, t) {
  if (e.nodeType != 3) {
    let o, s;
    (s = pb(e, t)) ? (e = s, t = 0) : (o = hb(e, t)) && (e = o, t = o.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (No(r)) {
    let o = document.createRange();
    o.setEnd(e, t), o.setStart(e, t), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && Zt(n);
  }, 50);
}
function ku(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(Qe || Ry) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let o = n.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let o = n.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Cu(n, e, t) {
  let r = n.state.selection;
  if (r instanceof X && !r.empty || t.indexOf("s") > -1 || St && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = Ks(n.state, e);
    if (s && s instanceof K)
      return an(n, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, a = r instanceof ht ? ee.near(s, e) : ee.findFrom(s, e);
    return a ? an(n, a) : !1;
  }
  return !1;
}
function Tu(n, e) {
  if (!(n.state.selection instanceof X))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (o && !o.isText) {
    let s = n.state.tr;
    return e < 0 ? s.delete(t.pos - o.nodeSize, t.pos) : s.delete(t.pos, t.pos + o.nodeSize), n.dispatch(s), !0;
  }
  return !1;
}
function Ou(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function mb(n) {
  if (!nt || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Ou(n, r, "true"), setTimeout(() => Ou(n, r, "false"), 20);
  }
  return !1;
}
function gb(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function vb(n, e) {
  let t = e.keyCode, r = gb(e);
  if (t == 8 || St && t == 72 && r == "c")
    return Tu(n, -1) || rr(n, -1);
  if (t == 46 && !e.shiftKey || St && t == 68 && r == "c")
    return Tu(n, 1) || rr(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || St && t == 66 && r == "c") {
    let i = t == 37 ? ku(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return wu(n, i, r) || rr(n, i);
  } else if (t == 39 || St && t == 70 && r == "c") {
    let i = t == 39 ? ku(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return wu(n, i, r) || rr(n, i);
  } else {
    if (t == 38 || St && t == 80 && r == "c")
      return Cu(n, -1, r) || rr(n, -1);
    if (t == 40 || St && t == 78 && r == "c")
      return mb(n) || Cu(n, 1, r) || rr(n, 1);
    if (r == (St ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function Ta(n, e) {
  n.someProp("transformCopied", (f) => {
    e = f(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let f = r.firstChild;
    t.push(f.type.name, f.attrs != f.type.defaultAttrs ? f.attrs : null), r = f.content;
  }
  let s = n.someProp("clipboardSerializer") || Yn.fromSchema(n.state.schema), a = mf(), l = a.createElement("div");
  l.appendChild(s.serializeFragment(r, { document: a }));
  let u = l.firstChild, c, d = 0;
  for (; u && u.nodeType == 1 && (c = hf[u.nodeName.toLowerCase()]); ) {
    for (let f = c.length - 1; f >= 0; f--) {
      let h = a.createElement(c[f]);
      for (; l.firstChild; )
        h.appendChild(l.firstChild);
      l.appendChild(h), d++;
    }
    u = l.firstChild;
  }
  u && u.nodeType == 1 && u.setAttribute("data-pm-slice", `${i} ${o}${d ? ` -${d}` : ""} ${JSON.stringify(t)}`);
  let p = n.someProp("clipboardTextSerializer", (f) => f(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: l, text: p, slice: e };
}
function cf(n, e, t, r, i) {
  let o = i.parent.type.spec.code, s, a;
  if (!t && !e)
    return null;
  let l = !!e && (r || o || !t);
  if (l) {
    if (n.someProp("transformPastedText", (p) => {
      e = p(e, o || r, n);
    }), o)
      return a = new B(A.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), n.someProp("transformPasted", (p) => {
        a = p(a, n, !0);
      }), a;
    let d = n.someProp("clipboardTextParser", (p) => p(e, i, r, n));
    if (d)
      a = d;
    else {
      let p = i.marks(), { schema: f } = n.state, h = Yn.fromSchema(f);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = s.appendChild(document.createElement("p"));
        m && g.appendChild(h.serializeNode(f.text(m, p)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (d) => {
      t = d(t, n);
    }), s = xb(t), Ti && wb(s);
  let u = s && s.querySelector("[data-pm-slice]"), c = u && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(u.getAttribute("data-pm-slice") || "");
  if (c && c[3])
    for (let d = +c[3]; d > 0; d--) {
      let p = s.firstChild;
      for (; p && p.nodeType != 1; )
        p = p.nextSibling;
      if (!p)
        break;
      s = p;
    }
  if (a || (a = (n.someProp("clipboardParser") || n.someProp("domParser") || qr.fromSchema(n.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(l || c),
    context: i,
    ruleFromNode(p) {
      return p.nodeName == "BR" && !p.nextSibling && p.parentNode && !yb.test(p.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), c)
    a = kb(Eu(a, +c[1], +c[2]), c[4]);
  else if (a = B.maxOpen(bb(a.content, i), !0), a.openStart || a.openEnd) {
    let d = 0, p = 0;
    for (let f = a.content.firstChild; d < a.openStart && !f.type.spec.isolating; d++, f = f.firstChild)
      ;
    for (let f = a.content.lastChild; p < a.openEnd && !f.type.spec.isolating; p++, f = f.lastChild)
      ;
    a = Eu(a, d, p);
  }
  return n.someProp("transformPasted", (d) => {
    a = d(a, n, l);
  }), a;
}
const yb = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function bb(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), o, s = [];
    if (n.forEach((a) => {
      if (!s)
        return;
      let l = i.findWrapping(a.type), u;
      if (!l)
        return s = null;
      if (u = s.length && o.length && ff(l, o, a, s[s.length - 1], 0))
        s[s.length - 1] = u;
      else {
        s.length && (s[s.length - 1] = pf(s[s.length - 1], o.length));
        let c = df(a, l);
        s.push(c), i = i.matchType(c.type), o = l;
      }
    }), s)
      return A.from(s);
  }
  return n;
}
function df(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, A.from(n));
  return n;
}
function ff(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let o = ff(n, e, t, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(A.from(df(t, n, i + 1))));
  }
}
function pf(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, pf(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(A.empty, !0);
  return n.copy(t.append(r));
}
function Gs(n, e, t, r, i, o) {
  let s = e < 0 ? n.firstChild : n.lastChild, a = s.content;
  return n.childCount > 1 && (o = 0), i < r - 1 && (a = Gs(a, e, t, r, i + 1, o)), i >= t && (a = e < 0 ? s.contentMatchAt(0).fillBefore(a, o <= i).append(a) : a.append(s.contentMatchAt(s.childCount).fillBefore(A.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, s.copy(a));
}
function Eu(n, e, t) {
  return e < n.openStart && (n = new B(Gs(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new B(Gs(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const hf = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let _u = null;
function mf() {
  return _u || (_u = document.implementation.createHTMLDocument("title"));
}
let ss = null;
function Sb(n) {
  let e = window.trustedTypes;
  return e ? (ss || (ss = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), ss.createHTML(n)) : n;
}
function xb(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = mf().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && hf[r[1].toLowerCase()]) && (n = i.map((o) => "<" + o + ">").join("") + n + i.map((o) => "</" + o + ">").reverse().join("")), t.innerHTML = Sb(n), i)
    for (let o = 0; o < i.length; o++)
      t = t.querySelector(i[o]) || t;
  return t;
}
function wb(n) {
  let e = n.querySelectorAll(Qe ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function kb(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: o, openEnd: s } = n;
  for (let a = r.length - 2; a >= 0; a -= 2) {
    let l = t.nodes[r[a]];
    if (!l || l.hasRequiredAttrs())
      break;
    i = A.from(l.create(r[a + 1], i)), o++, s++;
  }
  return new B(i, o, s);
}
const rt = {}, it = {}, Cb = { touchstart: !0, touchmove: !0 };
class Tb {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Ob(n) {
  for (let e in rt) {
    let t = rt[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      _b(n, r) && !Oa(n, r) && (n.editable || !(r.type in it)) && t(n, r);
    }, Cb[e] ? { passive: !0 } : void 0);
  }
  nt && n.dom.addEventListener("input", () => null), Ys(n);
}
function pn(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function Eb(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Ys(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => Oa(n, r));
  });
}
function Oa(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function _b(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Mb(n, e) {
  !Oa(n, e) && rt[e.type] && (n.editable || !(e.type in it)) && rt[e.type](n, e);
}
it.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !vf(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Yt && Qe && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), yr && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, Nn(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (r) => r(n, t)) || vb(n, t) ? t.preventDefault() : pn(n, "key");
};
it.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
it.keypress = (n, e) => {
  let t = e;
  if (vf(n, t) || !t.charCode || t.ctrlKey && !t.altKey || St && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof X) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode), o = () => n.state.tr.insertText(i).scrollIntoView();
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (s) => s(n, r.$from.pos, r.$to.pos, i, o)) && n.dispatch(o()), t.preventDefault();
  }
};
function $o(n) {
  return { left: n.clientX, top: n.clientY };
}
function Nb(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function Ea(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let o = n.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (n.someProp(e, (a) => s > o.depth ? a(n, t, o.nodeAfter, o.before(s), i, !0) : a(n, t, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function fr(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", !0), n.dispatch(r);
}
function Ab(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && K.isSelectable(r) ? (fr(n, new K(t)), !0) : !1;
}
function $b(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof K && (r = t.node);
  let o = n.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let a = s > o.depth ? o.nodeAfter : o.node(s);
    if (K.isSelectable(a)) {
      r && t.$from.depth > 0 && s >= t.$from.depth && o.before(t.$from.depth + 1) == t.$from.pos ? i = o.before(t.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (fr(n, K.create(n.state.doc, i)), !0) : !1;
}
function Db(n, e, t, r, i) {
  return Ea(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (o) => o(n, e, r)) || (i ? $b(n, t) : Ab(n, t));
}
function Pb(n, e, t, r) {
  return Ea(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function Ib(n, e, t, r) {
  return Ea(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || Rb(n, t, r);
}
function Rb(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (fr(n, X.create(r, 0, r.content.size)), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), a = i.before(o);
    if (s.inlineContent)
      fr(n, X.create(r, a + 1, a + 1 + s.content.size));
    else if (K.isSelectable(s))
      fr(n, K.create(r, a));
    else
      continue;
    return !0;
  }
}
function _a(n) {
  return mo(n);
}
const gf = St ? "metaKey" : "ctrlKey";
rt.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = _a(n), i = Date.now(), o = "singleClick";
  i - n.input.lastClick.time < 500 && Nb(t, n.input.lastClick) && !t[gf] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? o = "doubleClick" : n.input.lastClick.type == "doubleClick" && (o = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: o, button: t.button };
  let s = n.posAtCoords($o(t));
  s && (o == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new Lb(n, s, t, !!r)) : (o == "doubleClick" ? Pb : Ib)(n, s.pos, s.inside, t) ? t.preventDefault() : pn(n, "pointer"));
};
class Lb {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[gf], this.allowDefault = r.shiftKey;
    let o, s;
    if (t.inside > -1)
      o = e.state.doc.nodeAt(t.inside), s = t.inside;
    else {
      let c = e.state.doc.resolve(t.pos);
      o = c.parent, s = c.depth ? c.before() : 0;
    }
    const a = i ? null : r.target, l = a ? e.docView.nearestDesc(a, !0) : null;
    this.target = l && l.dom.nodeType == 1 ? l.dom : null;
    let { selection: u } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || u instanceof K && u.from <= s && u.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && kt && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), pn(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Zt(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords($o(e))), this.updateAllowDefault(e), this.allowDefault || !t ? pn(this.view, "pointer") : Db(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    nt && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Qe && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (fr(this.view, ee.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : pn(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), pn(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
rt.touchstart = (n) => {
  n.input.lastTouch = Date.now(), _a(n), pn(n, "pointer");
};
rt.touchmove = (n) => {
  n.input.lastTouch = Date.now(), pn(n, "pointer");
};
rt.contextmenu = (n) => _a(n);
function vf(n, e) {
  return n.composing ? !0 : nt && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const Vb = Yt ? 5e3 : -1;
it.compositionstart = it.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof X && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), mo(n, !0), n.markCursor = null;
    else if (mo(n, !e.selection.empty), kt && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let a = n.domSelection();
          a && a.collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    n.input.composing = !0;
  }
  yf(n, Vb);
};
it.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, yf(n, 20));
};
function yf(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => mo(n), e));
}
function bf(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = zb()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function Bb(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = Ay(e.focusNode, e.focusOffset), r = $y(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, o = n.domObserver.lastChangedTextNode;
    if (t == o || r == o)
      return o;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let s = t.pmViewDesc;
      if (!(!s || !s.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function zb() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function mo(n, e = !1) {
  if (!(Yt && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), bf(n), e || n.docView && n.docView.dirty) {
      let t = ka(n), r = n.state.selection;
      return t && !t.eq(r) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function jb(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const fi = at && gn < 15 || yr && Ly < 604;
rt.copy = it.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let o = fi ? null : t.clipboardData, s = r.content(), { dom: a, text: l } = Ta(n, s);
  o ? (t.preventDefault(), o.clearData(), o.setData("text/html", a.innerHTML), o.setData("text/plain", l)) : jb(n, a), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Fb(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function Hb(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? pi(n, r.value, null, i, e) : pi(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function pi(n, e, t, r, i) {
  let o = cf(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (l) => l(n, i, o || B.empty)))
    return !0;
  if (!o)
    return !1;
  let s = Fb(o), a = s ? n.state.tr.replaceSelectionWith(s, r) : n.state.tr.replaceSelection(o);
  return n.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Sf(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
it.paste = (n, e) => {
  let t = e;
  if (n.composing && !Yt)
    return;
  let r = fi ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && pi(n, Sf(r), r.getData("text/html"), i, t) ? t.preventDefault() : Hb(n, t);
};
class xf {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const Ub = St ? "altKey" : "ctrlKey";
function wf(n, e) {
  let t = n.someProp("dragCopies", (r) => !r(e));
  return t ?? !e[Ub];
}
rt.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, o = i.empty ? null : n.posAtCoords($o(t)), s;
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof K ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      s = K.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let d = n.docView.nearestDesc(t.target, !0);
      d && d.node.type.spec.draggable && d != n.docView && (s = K.create(n.state.doc, d.posBefore));
    }
  }
  let a = (s || n.state.selection).content(), { dom: l, text: u, slice: c } = Ta(n, a);
  (!t.dataTransfer.files.length || !Qe || Kd > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(fi ? "Text" : "text/html", l.innerHTML), t.dataTransfer.effectAllowed = "copyMove", fi || t.dataTransfer.setData("text/plain", u), n.dragging = new xf(c, wf(n, t), s);
};
rt.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
it.dragover = it.dragenter = (n, e) => e.preventDefault();
it.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords($o(t));
  if (!i)
    return;
  let o = n.state.doc.resolve(i.pos), s = r && r.slice;
  s ? n.someProp("transformPasted", (h) => {
    s = h(s, n, !1);
  }) : s = cf(n, Sf(t.dataTransfer), fi ? null : t.dataTransfer.getData("text/html"), !1, o);
  let a = !!(r && wf(n, t));
  if (n.someProp("handleDrop", (h) => h(n, t, s || B.empty, a))) {
    t.preventDefault();
    return;
  }
  if (!s)
    return;
  t.preventDefault();
  let l = s ? Bd(n.state.doc, o.pos, s) : o.pos;
  l == null && (l = o.pos);
  let u = n.state.tr;
  if (a) {
    let { node: h } = r;
    h ? h.replace(u) : u.deleteSelection();
  }
  let c = u.mapping.map(l), d = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, p = u.doc;
  if (d ? u.replaceRangeWith(c, c, s.content.firstChild) : u.replaceRange(c, c, s), u.doc.eq(p))
    return;
  let f = u.doc.resolve(c);
  if (d && K.isSelectable(s.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(s.content.firstChild))
    u.setSelection(new K(f));
  else {
    let h = u.mapping.map(l);
    u.mapping.maps[u.mapping.maps.length - 1].forEach((m, g, y, S) => h = S), u.setSelection(Ca(n, f, u.doc.resolve(h)));
  }
  n.focus(), n.dispatch(u.setMeta("uiEvent", "drop"));
};
rt.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Zt(n);
  }, 20));
};
rt.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
rt.beforeinput = (n, e) => {
  if (Qe && Yt && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (o) => o(n, Nn(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in it)
  rt[n] = it[n];
function hi(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class go {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || Vn, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: o, deleted: s } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new wt(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof go && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && hi(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class yn {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Vn;
  }
  map(e, t, r, i) {
    let o = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new wt(o, s, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof yn && hi(this.attrs, e.attrs) && hi(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof yn;
  }
  destroy() {
  }
}
class Ma {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Vn;
  }
  map(e, t, r, i) {
    let o = e.mapResult(t.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(t.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new wt(o.pos - r, s.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), o;
    return i == t.from && !(o = e.child(r)).isText && i + o.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Ma && hi(this.attrs, e.attrs) && hi(this.spec, e.spec);
  }
  destroy() {
  }
}
class wt {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new wt(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new wt(e, e, new go(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new wt(e, t, new yn(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new wt(e, t, new Ma(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof yn;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof go;
  }
}
const ar = [], Vn = {};
class Le {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : ar, this.children = t.length ? t : ar;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? vo(t, e, 0, Vn) : Ye;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let a = this.local[s];
      a.from <= t && a.to >= e && (!o || o(a.spec)) && r.push(a.copy(a.from + i, a.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < t && this.children[s + 1] > e) {
        let a = this.children[s] + 1;
        this.children[s + 2].findInner(e - a, t - a, r, i + a, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == Ye || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || Vn);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, o) {
    let s;
    for (let a = 0; a < this.local.length; a++) {
      let l = this.local[a].map(e, r, i);
      l && l.type.valid(t, l) ? (s || (s = [])).push(l) : o.onRemove && o.onRemove(this.local[a].spec);
    }
    return this.children.length ? Wb(this.children, s || [], e, t, r, i, o) : s ? new Le(s.sort(Bn), ar) : Ye;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == Ye ? Le.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, o = 0;
    e.forEach((a, l) => {
      let u = l + r, c;
      if (c = Cf(t, a, u)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < l; )
          o += 3;
        i[o] == l ? i[o + 2] = i[o + 2].addInner(a, c, u + 1) : i.splice(o, 0, l, l + a.nodeSize, vo(c, a, u + 1, Vn)), o += 3;
      }
    });
    let s = kf(o ? Tf(t) : t, -r);
    for (let a = 0; a < s.length; a++)
      s[a].type.valid(e, s[a]) || s.splice(a--, 1);
    return new Le(s.length ? this.local.concat(s).sort(Bn) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Ye ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, a = r[o] + t, l = r[o + 1] + t;
      for (let c = 0, d; c < e.length; c++)
        (d = e[c]) && d.from > a && d.to < l && (e[c] = null, (s || (s = [])).push(d));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let u = r[o + 2].removeInner(s, a + 1);
      u != Ye ? r[o + 2] = u : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let a = 0; a < i.length; a++)
            i[a].eq(s, t) && (i == this.local && (i = this.local.slice()), i.splice(a--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new Le(i, r) : Ye;
  }
  forChild(e, t) {
    if (this == Ye)
      return this;
    if (t.isLeaf)
      return Le.empty;
    let r, i;
    for (let a = 0; a < this.children.length; a += 3)
      if (this.children[a] >= e) {
        this.children[a] == e && (r = this.children[a + 2]);
        break;
      }
    let o = e + 1, s = o + t.content.size;
    for (let a = 0; a < this.local.length; a++) {
      let l = this.local[a];
      if (l.from < s && l.to > o && l.type instanceof yn) {
        let u = Math.max(o, l.from) - o, c = Math.min(s, l.to) - o;
        u < c && (i || (i = [])).push(l.copy(u, c));
      }
    }
    if (i) {
      let a = new Le(i.sort(Bn), ar);
      return r ? new cn([a, r]) : a;
    }
    return r || Ye;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Le) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return Na(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Ye)
      return ar;
    if (e.inlineContent || !this.local.some(yn.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof yn || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
Le.empty = new Le([], []);
Le.removeOverlap = Na;
const Ye = Le.empty;
class cn {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, Vn));
    return cn.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return Le.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, t);
      o != Ye && (o instanceof cn ? r = r.concat(o.members) : r.push(o));
    }
    return cn.from(r);
  }
  eq(e) {
    if (!(e instanceof cn) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!t)
          t = o;
        else {
          r && (t = t.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            t.push(o[s]);
        }
    }
    return t ? Na(r ? t : t.sort(Bn)) : ar;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Ye;
      case 1:
        return e[0];
      default:
        return new cn(e.every((t) => t instanceof Le) ? e : e.reduce((t, r) => t.concat(r instanceof Le ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function Wb(n, e, t, r, i, o, s) {
  let a = n.slice();
  for (let u = 0, c = o; u < t.maps.length; u++) {
    let d = 0;
    t.maps[u].forEach((p, f, h, m) => {
      let g = m - h - (f - p);
      for (let y = 0; y < a.length; y += 3) {
        let S = a[y + 1];
        if (S < 0 || p > S + c - d)
          continue;
        let C = a[y] + c - d;
        f >= C ? a[y + 1] = p <= C ? -2 : -1 : p >= c && g && (a[y] += g, a[y + 1] += g);
      }
      d += g;
    }), c = t.maps[u].map(c, -1);
  }
  let l = !1;
  for (let u = 0; u < a.length; u += 3)
    if (a[u + 1] < 0) {
      if (a[u + 1] == -2) {
        l = !0, a[u + 1] = -1;
        continue;
      }
      let c = t.map(n[u] + o), d = c - i;
      if (d < 0 || d >= r.content.size) {
        l = !0;
        continue;
      }
      let p = t.map(n[u + 1] + o, -1), f = p - i, { index: h, offset: m } = r.content.findIndex(d), g = r.maybeChild(h);
      if (g && m == d && m + g.nodeSize == f) {
        let y = a[u + 2].mapInner(t, g, c + 1, n[u] + o + 1, s);
        y != Ye ? (a[u] = d, a[u + 1] = f, a[u + 2] = y) : (a[u + 1] = -2, l = !0);
      } else
        l = !0;
    }
  if (l) {
    let u = qb(a, n, e, t, i, o, s), c = vo(u, r, 0, s);
    e = c.local;
    for (let d = 0; d < a.length; d += 3)
      a[d + 1] < 0 && (a.splice(d, 3), d -= 3);
    for (let d = 0, p = 0; d < c.children.length; d += 3) {
      let f = c.children[d];
      for (; p < a.length && a[p] < f; )
        p += 3;
      a.splice(p, 0, c.children[d], c.children[d + 1], c.children[d + 2]);
    }
  }
  return new Le(e.sort(Bn), a);
}
function kf(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new wt(i.from + e, i.to + e, i.type));
  }
  return t;
}
function qb(n, e, t, r, i, o, s) {
  function a(l, u) {
    for (let c = 0; c < l.local.length; c++) {
      let d = l.local[c].map(r, i, u);
      d ? t.push(d) : s.onRemove && s.onRemove(l.local[c].spec);
    }
    for (let c = 0; c < l.children.length; c += 3)
      a(l.children[c + 2], l.children[c] + u + 1);
  }
  for (let l = 0; l < n.length; l += 3)
    n[l + 1] == -1 && a(n[l + 2], e[l] + o + 1);
  return t;
}
function Cf(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let o = 0, s; o < n.length; o++)
    (s = n[o]) && s.from > t && s.to < r && ((i || (i = [])).push(s), n[o] = null);
  return i;
}
function Tf(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function vo(n, e, t, r) {
  let i = [], o = !1;
  e.forEach((a, l) => {
    let u = Cf(n, a, l + t);
    if (u) {
      o = !0;
      let c = vo(u, a, t + l + 1, r);
      c != Ye && i.push(l, l + a.nodeSize, c);
    }
  });
  let s = kf(o ? Tf(n) : n, -t).sort(Bn);
  for (let a = 0; a < s.length; a++)
    s[a].type.valid(e, s[a]) || (r.onRemove && r.onRemove(s[a].spec), s.splice(a--, 1));
  return s.length || i.length ? new Le(s, i) : Ye;
}
function Bn(n, e) {
  return n.from - e.from || n.to - e.to;
}
function Na(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == n && (e = n.slice()), e[i] = o.copy(o.from, r.to), Mu(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, o.from), Mu(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Mu(n, e, t) {
  for (; e < n.length && Bn(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function as(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != Ye && e.push(r);
  }), n.cursorWrapper && e.push(Le.create(n.state.doc, [n.cursorWrapper.deco])), cn.from(e);
}
const Kb = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, Jb = at && gn <= 11;
class Gb {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class Yb {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Gb(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      at && gn <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Jb && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Kb)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (xu(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Zt(this.view);
      if (at && gn <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && qn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = vr(o))
      t.add(o);
    for (let o = e.anchorNode; o; o = vr(o))
      if (t.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && xu(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, a = !1, l = [];
    if (e.editable)
      for (let c = 0; c < t.length; c++) {
        let d = this.registerMutation(t[c], l);
        d && (o = o < 0 ? d.from : Math.min(d.from, o), s = s < 0 ? d.to : Math.max(d.to, s), d.typeOver && (a = !0));
      }
    if (kt && l.length) {
      let c = l.filter((d) => d.nodeName == "BR");
      if (c.length == 2) {
        let [d, p] = c;
        d.parentNode && d.parentNode.parentNode == p.parentNode ? p.remove() : d.remove();
      } else {
        let { focusNode: d } = this.currentSelection;
        for (let p of c) {
          let f = p.parentNode;
          f && f.nodeName == "LI" && (!d || Zb(e, d) != f) && p.remove();
        }
      }
    }
    let u = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && No(r) && (u = ka(e)) && u.eq(ee.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Zt(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), Qb(e)), this.handleDOMChange(o, s, a, l), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Zt(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let c = 0; c < e.addedNodes.length; c++) {
        let d = e.addedNodes[c];
        t.push(d), d.nodeType == 3 && (this.lastChangedTextNode = d);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (at && gn <= 11 && e.addedNodes.length)
        for (let c = 0; c < e.addedNodes.length; c++) {
          let { previousSibling: d, nextSibling: p } = e.addedNodes[c];
          (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (i = d), (!p || Array.prototype.indexOf.call(e.addedNodes, p) < 0) && (o = p);
        }
      let s = i && i.parentNode == e.target ? Ue(i) + 1 : 0, a = r.localPosFromDOM(e.target, s, -1), l = o && o.parentNode == e.target ? Ue(o) : e.target.childNodes.length, u = r.localPosFromDOM(e.target, l, 1);
      return { from: a, to: u };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let Nu = /* @__PURE__ */ new WeakMap(), Au = !1;
function Qb(n) {
  if (!Nu.has(n) && (Nu.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = kt, Au)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Au = !0;
  }
}
function $u(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = n.domAtPos(n.state.selection.anchor);
  return qn(s.node, s.offset, i, o) && ([t, r, i, o] = [i, o, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: o };
}
function Xb(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return $u(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? $u(n, t) : null;
}
function Zb(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function e0(n, e, t) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: a } = n.docView.parseRange(e, t), l = n.domSelectionRange(), u, c = l.anchorNode;
  if (c && n.dom.contains(c.nodeType == 1 ? c : c.parentNode) && (u = [{ node: c, offset: l.anchorOffset }], No(l) || u.push({ node: l.focusNode, offset: l.focusOffset })), Qe && n.input.lastKeyCode === 8)
    for (let g = o; g > i; g--) {
      let y = r.childNodes[g - 1], S = y.pmViewDesc;
      if (y.nodeName == "BR" && !S) {
        o = g;
        break;
      }
      if (!S || S.size)
        break;
    }
  let d = n.state.doc, p = n.someProp("domParser") || qr.fromSchema(n.state.schema), f = d.resolve(s), h = null, m = p.parse(r, {
    topNode: f.parent,
    topMatch: f.parent.contentMatchAt(f.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: f.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: u,
    ruleFromNode: t0,
    context: f
  });
  if (u && u[0].pos != null) {
    let g = u[0].pos, y = u[1] && u[1].pos;
    y == null && (y = g), h = { anchor: g + s, head: y + s };
  }
  return { doc: m, sel: h, from: s, to: a };
}
function t0(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (nt && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || nt && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const n0 = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function r0(n, e, t, r, i) {
  let o = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let N = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, U = ka(n, N);
    if (U && !n.state.selection.eq(U)) {
      if (Qe && Yt && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (F) => F(n, Nn(13, "Enter"))))
        return;
      let j = n.state.tr.setSelection(U);
      N == "pointer" ? j.setMeta("pointer", !0) : N == "key" && j.scrollIntoView(), o && j.setMeta("composition", o), n.dispatch(j);
    }
    return;
  }
  let s = n.state.doc.resolve(e), a = s.sharedDepth(t);
  e = s.before(a + 1), t = n.state.doc.resolve(t).after(a + 1);
  let l = n.state.selection, u = e0(n, e, t), c = n.state.doc, d = c.slice(u.from, u.to), p, f;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (p = n.state.selection.to, f = "end") : (p = n.state.selection.from, f = "start"), n.input.lastKeyCode = null;
  let h = s0(d.content, u.doc.content, u.from, p, f);
  if (h && n.input.domChangeCount++, (yr && n.input.lastIOSEnter > Date.now() - 225 || Yt) && i.some((N) => N.nodeType == 1 && !n0.test(N.nodeName)) && (!h || h.endA >= h.endB) && n.someProp("handleKeyDown", (N) => N(n, Nn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!h)
    if (r && l instanceof X && !l.empty && l.$head.sameParent(l.$anchor) && !n.composing && !(u.sel && u.sel.anchor != u.sel.head))
      h = { start: l.from, endA: l.to, endB: l.to };
    else {
      if (u.sel) {
        let N = Du(n, n.state.doc, u.sel);
        if (N && !N.eq(n.state.selection)) {
          let U = n.state.tr.setSelection(N);
          o && U.setMeta("composition", o), n.dispatch(U);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && h.start == h.endB && n.state.selection instanceof X && (h.start > n.state.selection.from && h.start <= n.state.selection.from + 2 && n.state.selection.from >= u.from ? h.start = n.state.selection.from : h.endA < n.state.selection.to && h.endA >= n.state.selection.to - 2 && n.state.selection.to <= u.to && (h.endB += n.state.selection.to - h.endA, h.endA = n.state.selection.to)), at && gn <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > u.from && u.doc.textBetween(h.start - u.from - 1, h.start - u.from + 1) == "  " && (h.start--, h.endA--, h.endB--);
  let m = u.doc.resolveNoCache(h.start - u.from), g = u.doc.resolveNoCache(h.endB - u.from), y = c.resolve(h.start), S = m.sameParent(g) && m.parent.inlineContent && y.end() >= h.endA, C;
  if ((yr && n.input.lastIOSEnter > Date.now() - 225 && (!S || i.some((N) => N.nodeName == "DIV" || N.nodeName == "P")) || !S && m.pos < u.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && !/\S/.test(u.doc.textBetween(m.pos, g.pos, "", "")) && (C = ee.findFrom(u.doc.resolve(m.pos + 1), 1, !0)) && C.head > m.pos) && n.someProp("handleKeyDown", (N) => N(n, Nn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > h.start && o0(c, h.start, h.endA, m, g) && n.someProp("handleKeyDown", (N) => N(n, Nn(8, "Backspace")))) {
    Yt && Qe && n.domObserver.suppressSelectionUpdates();
    return;
  }
  Qe && h.endB == h.start && (n.input.lastChromeDelete = Date.now()), Yt && !S && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && u.sel && u.sel.anchor == u.sel.head && u.sel.head == h.endA && (h.endB -= 2, g = u.doc.resolveNoCache(h.endB - u.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(N) {
      return N(n, Nn(13, "Enter"));
    });
  }, 20));
  let v = h.start, k = h.endA, x = (N) => {
    let U = N || n.state.tr.replace(v, k, u.doc.slice(h.start - u.from, h.endB - u.from));
    if (u.sel) {
      let j = Du(n, U.doc, u.sel);
      j && !(Qe && n.composing && j.empty && (h.start != h.endB || n.input.lastChromeDelete < Date.now() - 100) && (j.head == v || j.head == U.mapping.map(k) - 1) || at && j.empty && j.head == v) && U.setSelection(j);
    }
    return o && U.setMeta("composition", o), U.scrollIntoView();
  }, O;
  if (S) {
    if (m.pos == g.pos) {
      at && gn <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => Zt(n), 20));
      let N = x(n.state.tr.delete(v, k)), U = c.resolve(h.start).marksAcross(c.resolve(h.endA));
      U && N.ensureMarks(U), n.dispatch(N);
    } else if (
      // Adding or removing a mark
      h.endA == h.endB && (O = i0(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, h.endA - y.start())))
    ) {
      let N = x(n.state.tr);
      O.type == "add" ? N.addMark(v, k, O.mark) : N.removeMark(v, k, O.mark), n.dispatch(N);
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let N = m.parent.textBetween(m.parentOffset, g.parentOffset), U = () => x(n.state.tr.insertText(N, v, k));
      n.someProp("handleTextInput", (j) => j(n, v, k, N, U)) || n.dispatch(U());
    }
  } else
    n.dispatch(x());
}
function Du(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : Ca(n, e.resolve(t.anchor), e.resolve(t.head));
}
function i0(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, o = r, s, a, l;
  for (let c = 0; c < r.length; c++)
    i = r[c].removeFromSet(i);
  for (let c = 0; c < t.length; c++)
    o = t[c].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    a = i[0], s = "add", l = (c) => c.mark(a.addToSet(c.marks));
  else if (i.length == 0 && o.length == 1)
    a = o[0], s = "remove", l = (c) => c.mark(a.removeFromSet(c.marks));
  else
    return null;
  let u = [];
  for (let c = 0; c < e.childCount; c++)
    u.push(l(e.child(c)));
  if (A.from(u).eq(n))
    return { mark: a, type: s };
}
function o0(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    ls(r, !0, !1) < i.pos
  )
    return !1;
  let o = n.resolve(e);
  if (!r.parent.isTextblock) {
    let a = o.nodeAfter;
    return a != null && t == e + a.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = n.resolve(ls(o, !0, !0));
  return !s.parent.isTextblock || s.pos > t || ls(s, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function ls(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let o = n.node(r).maybeChild(n.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function s0(n, e, t, r, i) {
  let o = n.findDiffStart(e, t);
  if (o == null)
    return null;
  let { a: s, b: a } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let l = Math.max(0, o - Math.min(s, a));
    r -= s + l - o;
  }
  if (s < o && n.size < e.size) {
    let l = r <= o && r >= s ? o - r : 0;
    o -= l, o && o < e.size && Pu(e.textBetween(o - 1, o + 1)) && (o += l ? 1 : -1), a = o + (a - s), s = o;
  } else if (a < o) {
    let l = r <= o && r >= a ? o - r : 0;
    o -= l, o && o < n.size && Pu(n.textBetween(o - 1, o + 1)) && (o += l ? 1 : -1), s = o + (s - a), a = o;
  }
  return { start: o, endA: s, endB: a };
}
function Pu(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class Of {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Tb(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Bu), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Lu(this), Ru(this), this.nodeViews = Vu(this), this.docView = mu(this.state.doc, Iu(this), as(this), this.dom, this), this.domObserver = new Yb(this, (r, i, o, s) => r0(this, r, i, o, s)), this.domObserver.start(), Ob(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Ys(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Bu), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, o = !1, s = !1;
    e.storedMarks && this.composing && (bf(this), s = !0), this.state = e;
    let a = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let f = Vu(this);
      l0(f, this.nodeViews) && (this.nodeViews = f, o = !0);
    }
    (a || t.handleDOMEvents != this._props.handleDOMEvents) && Ys(this), this.editable = Lu(this), Ru(this);
    let l = as(this), u = Iu(this), c = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", d = o || !this.docView.matchesNode(e.doc, u, l);
    (d || !e.selection.eq(i.selection)) && (s = !0);
    let p = c == "preserve" && s && this.dom.style.overflowAnchor == null && zy(this);
    if (s) {
      this.domObserver.stop();
      let f = d && (at || Qe) && !this.composing && !i.selection.empty && !e.selection.empty && a0(i.selection, e.selection);
      if (d) {
        let h = Qe ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = Bb(this)), (o || !this.docView.update(e.doc, u, l, this)) && (this.docView.updateOuterDeco(u), this.docView.destroy(), this.docView = mu(e.doc, u, l, this.dom, this)), h && !this.trackWrites && (f = !0);
      }
      f || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && cb(this)) ? Zt(this, f) : (af(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : p && jy(p);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof K) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && uu(this, t.getBoundingClientRect(), e);
      } else
        uu(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let o = r.from + (this.state.doc.content.size - t.doc.content.size);
      (o > 0 && this.state.doc.nodeAt(o)) == r.node && (i = o);
    }
    this.dragging = new xf(e.slice, e.move, i < 0 ? void 0 : K.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let a = this.directPlugins[s].props[e];
      if (a != null && (i = t ? t(a) : a))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let a = o[s].props[e];
        if (a != null && (i = t ? t(a) : a))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (at) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && Fy(this.dom), Zt(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return Ky(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return Xd(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return Xy(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return pi(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return pi(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return Ta(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (Eb(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], as(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, My());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Mb(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? nt && this.root.nodeType === 11 && Py(this.dom.ownerDocument) == this.dom && Xb(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
Of.prototype.dispatch = function(n) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, n) : this.updateState(this.state.apply(n));
};
function Iu(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [wt.node(0, n.state.doc.content.size, e)];
}
function Ru(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: wt.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Lu(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function a0(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Vu(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function l0(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Bu(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Sn = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, yo = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, u0 = typeof navigator < "u" && /Mac/.test(navigator.platform), c0 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var We = 0; We < 10; We++) Sn[48 + We] = Sn[96 + We] = String(We);
for (var We = 1; We <= 24; We++) Sn[We + 111] = "F" + We;
for (var We = 65; We <= 90; We++)
  Sn[We] = String.fromCharCode(We + 32), yo[We] = String.fromCharCode(We);
for (var us in Sn) yo.hasOwnProperty(us) || (yo[us] = Sn[us]);
function d0(n) {
  var e = u0 && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || c0 && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? yo : Sn)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const f0 = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), p0 = typeof navigator < "u" && /Win/.test(navigator.platform);
function h0(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, o, s;
  for (let a = 0; a < e.length - 1; a++) {
    let l = e[a];
    if (/^(cmd|meta|m)$/i.test(l))
      s = !0;
    else if (/^a(lt)?$/i.test(l))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      i = !0;
    else if (/^s(hift)?$/i.test(l))
      o = !0;
    else if (/^mod$/i.test(l))
      f0 ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + l);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), s && (t = "Meta-" + t), o && (t = "Shift-" + t), t;
}
function m0(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[h0(t)] = n[t];
  return e;
}
function cs(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function g0(n) {
  return new Ke({ props: { handleKeyDown: Ef(n) } });
}
function Ef(n) {
  let e = m0(n);
  return function(t, r) {
    let i = d0(r), o, s = e[cs(i, r)];
    if (s && s(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let a = e[cs(i, r, !1)];
        if (a && a(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(p0 && r.ctrlKey && r.altKey) && (o = Sn[r.keyCode]) && o != i) {
        let a = e[cs(o, r)];
        if (a && a(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const Aa = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function _f(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Mf = (n, e, t) => {
  let r = _f(n, t);
  if (!r)
    return !1;
  let i = $a(r);
  if (!i) {
    let s = r.blockRange(), a = s && _r(s);
    return a == null ? !1 : (e && e(n.tr.lift(s, a).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (Vf(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (br(o, "end") || K.isSelectable(o)))
    for (let s = r.depth; ; s--) {
      let a = _o(n.doc, r.before(s), r.after(s), B.empty);
      if (a && a.slice.size < a.to - a.from) {
        if (e) {
          let l = n.tr.step(a);
          l.setSelection(br(o, "end") ? ee.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : K.create(l.doc, i.pos - o.nodeSize)), e(l.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, v0 = (n, e, t) => {
  let r = _f(n, t);
  if (!r)
    return !1;
  let i = $a(r);
  return i ? Nf(n, i, e) : !1;
}, y0 = (n, e, t) => {
  let r = $f(n, t);
  if (!r)
    return !1;
  let i = Da(r);
  return i ? Nf(n, i, e) : !1;
};
function Nf(n, e, t) {
  let r = e.nodeBefore, i = r, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return !1;
    let c = i.lastChild;
    if (!c)
      return !1;
    i = c;
  }
  let s = e.nodeAfter, a = s, l = e.pos + 1;
  for (; !a.isTextblock; l++) {
    if (a.type.spec.isolating)
      return !1;
    let c = a.firstChild;
    if (!c)
      return !1;
    a = c;
  }
  let u = _o(n.doc, o, l, B.empty);
  if (!u || u.from != o || u instanceof Be && u.slice.size >= l - o)
    return !1;
  if (t) {
    let c = n.tr.step(u);
    c.setSelection(X.create(c.doc, o)), t(c.scrollIntoView());
  }
  return !0;
}
function br(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Af = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    o = $a(r);
  }
  let s = o && o.nodeBefore;
  return !s || !K.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(K.create(n.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function $a(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function $f(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Df = (n, e, t) => {
  let r = $f(n, t);
  if (!r)
    return !1;
  let i = Da(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (Vf(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (br(o, "start") || K.isSelectable(o))) {
    let s = _o(n.doc, r.before(), r.after(), B.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let a = n.tr.step(s);
        a.setSelection(br(o, "start") ? ee.findFrom(a.doc.resolve(a.mapping.map(i.pos)), 1) : K.create(a.doc, a.mapping.map(i.pos))), e(a.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, Pf = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Da(r);
  }
  let s = o && o.nodeAfter;
  return !s || !K.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(K.create(n.doc, o.pos)).scrollIntoView()), !0);
};
function Da(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const b0 = (n, e) => {
  let t = n.selection, r = t instanceof K, i;
  if (r) {
    if (t.node.isTextblock || !wn(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Eo(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let o = n.tr.join(i);
    r && o.setSelection(K.create(o.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, S0 = (n, e) => {
  let t = n.selection, r;
  if (t instanceof K) {
    if (t.node.isTextblock || !wn(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Eo(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, x0 = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), o = i && _r(i);
  return o == null ? !1 : (e && e(n.tr.lift(i, o).scrollIntoView()), !0);
}, If = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function Pa(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const w0 = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), o = t.indexAfter(-1), s = Pa(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let a = t.after(), l = n.tr.replaceWith(a, a, s.createAndFill());
    l.setSelection(ee.near(l.doc.resolve(a), 1)), e(l.scrollIntoView());
  }
  return !0;
}, Rf = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof ht || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = Pa(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, a = n.tr.insert(s, o.createAndFill());
    a.setSelection(X.create(a.doc, s + 1)), e(a.scrollIntoView());
  }
  return !0;
}, Lf = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let o = t.before();
    if (Xt(n.doc, o))
      return e && e(n.tr.split(o).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && _r(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
};
function k0(n) {
  return (e, t) => {
    let { $from: r, $to: i } = e.selection;
    if (e.selection instanceof K && e.selection.node.isBlock)
      return !r.parentOffset || !Xt(e.doc, r.pos) ? !1 : (t && t(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], s, a, l = !1, u = !1;
    for (let f = r.depth; ; f--)
      if (r.node(f).isBlock) {
        l = r.end(f) == r.pos + (r.depth - f), u = r.start(f) == r.pos - (r.depth - f), a = Pa(r.node(f - 1).contentMatchAt(r.indexAfter(f - 1))), o.unshift(l && a ? { type: a } : null), s = f;
        break;
      } else {
        if (f == 1)
          return !1;
        o.unshift(null);
      }
    let c = e.tr;
    (e.selection instanceof X || e.selection instanceof ht) && c.deleteSelection();
    let d = c.mapping.map(r.pos), p = Xt(c.doc, d, o.length, o);
    if (p || (o[0] = a ? { type: a } : null, p = Xt(c.doc, d, o.length, o)), !p)
      return !1;
    if (c.split(d, o.length, o), !l && u && r.node(s).type != a) {
      let f = c.mapping.map(r.before(s)), h = c.doc.resolve(f);
      a && r.node(s - 1).canReplaceWith(h.index(), h.index() + 1, a) && c.setNodeMarkup(c.mapping.map(r.before(s)), a);
    }
    return t && t(c.scrollIntoView()), !0;
  };
}
const C0 = k0(), T0 = (n, e) => {
  let { $from: t, to: r } = n.selection, i, o = t.sharedDepth(r);
  return o == 0 ? !1 : (i = t.before(o), e && e(n.tr.setSelection(K.create(n.doc, i))), !0);
};
function O0(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || wn(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function Vf(n, e, t, r) {
  let i = e.nodeBefore, o = e.nodeAfter, s, a, l = i.type.spec.isolating || o.type.spec.isolating;
  if (!l && O0(n, e, t))
    return !0;
  let u = !l && e.parent.canReplace(e.index(), e.index() + 1);
  if (u && (s = (a = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && a.matchType(s[0] || o.type).validEnd) {
    if (t) {
      let f = e.pos + o.nodeSize, h = A.empty;
      for (let y = s.length - 1; y >= 0; y--)
        h = A.from(s[y].create(null, h));
      h = A.from(i.copy(h));
      let m = n.tr.step(new ze(e.pos - 1, f, e.pos, f, new B(h, 1, 0), s.length, !0)), g = m.doc.resolve(f + 2 * s.length);
      g.nodeAfter && g.nodeAfter.type == i.type && wn(m.doc, g.pos) && m.join(g.pos), t(m.scrollIntoView());
    }
    return !0;
  }
  let c = o.type.spec.isolating || r > 0 && l ? null : ee.findFrom(e, 1), d = c && c.$from.blockRange(c.$to), p = d && _r(d);
  if (p != null && p >= e.depth)
    return t && t(n.tr.lift(d, p).scrollIntoView()), !0;
  if (u && br(o, "start", !0) && br(i, "end")) {
    let f = i, h = [];
    for (; h.push(f), !f.isTextblock; )
      f = f.lastChild;
    let m = o, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (f.canReplace(f.childCount, f.childCount, m.content)) {
      if (t) {
        let y = A.empty;
        for (let C = h.length - 1; C >= 0; C--)
          y = A.from(h[C].copy(y));
        let S = n.tr.step(new ze(e.pos - h.length, e.pos + o.nodeSize, e.pos + g, e.pos + o.nodeSize - g, new B(y, h.length, 0), 0, !0));
        t(S.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Bf(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (t && t(e.tr.setSelection(X.create(e.doc, n < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const E0 = Bf(-1), _0 = Bf(1);
function M0(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), a = s && Sa(s, n, e);
    return a ? (r && r(t.tr.wrap(s, a).scrollIntoView()), !0) : !1;
  };
}
function zu(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let o = 0; o < t.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: a } } = t.selection.ranges[o];
      t.doc.nodesBetween(s, a, (l, u) => {
        if (i)
          return !1;
        if (!(!l.isTextblock || l.hasMarkup(n, e)))
          if (l.type == n)
            i = !0;
          else {
            let c = t.doc.resolve(u), d = c.index();
            i = c.parent.canReplaceWith(d, d + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = t.tr;
      for (let s = 0; s < t.selection.ranges.length; s++) {
        let { $from: { pos: a }, $to: { pos: l } } = t.selection.ranges[s];
        o.setBlockType(a, l, n, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
function Ia(...n) {
  return function(e, t, r) {
    for (let i = 0; i < n.length; i++)
      if (n[i](e, t, r))
        return !0;
    return !1;
  };
}
Ia(Aa, Mf, Af);
Ia(Aa, Df, Pf);
Ia(If, Rf, Lf, C0);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function N0(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o);
    if (!s)
      return !1;
    let a = r ? t.tr : null;
    return A0(a, s, n, e) ? (r && r(a.scrollIntoView()), !0) : !1;
  };
}
function A0(n, e, t, r = null) {
  let i = !1, o = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let l = s.resolve(e.start - 2);
    o = new co(l, l, e.depth), e.endIndex < e.parent.childCount && (e = new co(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let a = Sa(o, t, r, e);
  return a ? (n && $0(n, e, a, i, t), !0) : !1;
}
function $0(n, e, t, r, i) {
  let o = A.empty;
  for (let c = t.length - 1; c >= 0; c--)
    o = A.from(t[c].type.create(t[c].attrs, o));
  n.step(new ze(e.start - (r ? 2 : 0), e.end, e.start, e.end, new B(o, 0, 0), t.length, !0));
  let s = 0;
  for (let c = 0; c < t.length; c++)
    t[c].type == i && (s = c + 1);
  let a = t.length - s, l = e.start + t.length - (r ? 2 : 0), u = e.parent;
  for (let c = e.startIndex, d = e.endIndex, p = !0; c < d; c++, p = !1)
    !p && Xt(n.doc, l, a) && (n.split(l, a), l += 2 * a), l += u.child(c).nodeSize;
  return n;
}
function D0(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == n);
    return o ? t ? r.node(o.depth - 1).type == n ? P0(e, t, n, o) : I0(e, t, o) : !0 : !1;
  };
}
function P0(n, e, t, r) {
  let i = n.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new ze(o - 1, s, o, s, new B(A.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new co(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const a = _r(r);
  if (a == null)
    return !1;
  i.lift(r, a);
  let l = i.doc.resolve(i.mapping.map(o, -1) - 1);
  return wn(i.doc, l.pos) && l.nodeBefore.type == l.nodeAfter.type && i.join(l.pos), e(i.scrollIntoView()), !0;
}
function I0(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let f = t.end, h = t.endIndex - 1, m = t.startIndex; h > m; h--)
    f -= i.child(h).nodeSize, r.delete(f - 1, f + 1);
  let o = r.doc.resolve(t.start), s = o.nodeAfter;
  if (r.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize)
    return !1;
  let a = t.startIndex == 0, l = t.endIndex == i.childCount, u = o.node(-1), c = o.index(-1);
  if (!u.canReplace(c + (a ? 0 : 1), c + 1, s.content.append(l ? A.empty : A.from(i))))
    return !1;
  let d = o.pos, p = d + s.nodeSize;
  return r.step(new ze(d - (a ? 1 : 0), p + (l ? 1 : 0), d + 1, p - 1, new B((a ? A.empty : A.from(i.copy(A.empty))).append(l ? A.empty : A.from(i.copy(A.empty))), a ? 0 : 1, l ? 0 : 1), a ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function R0(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (u) => u.childCount > 0 && u.firstChild.type == n);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let a = o.parent, l = a.child(s - 1);
    if (l.type != n)
      return !1;
    if (t) {
      let u = l.lastChild && l.lastChild.type == a.type, c = A.from(u ? n.create() : null), d = new B(A.from(n.create(null, A.from(a.type.create(null, c)))), u ? 3 : 1, 0), p = o.start, f = o.end;
      t(e.tr.step(new ze(p - (u ? 3 : 1), f, p, f, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Do(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: o } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, o = t.storedMarks, t;
    }
  };
}
class Po {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: o } = r, s = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([a, l]) => [a, (...c) => {
      const d = l(...c)(s);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), d;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, a = [], l = !!e, u = e || o.tr, c = () => (!l && t && !u.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(u), a.every((p) => p === !0)), d = {
      ...Object.fromEntries(Object.entries(r).map(([p, f]) => [p, (...m) => {
        const g = this.buildProps(u, t), y = f(...m)(g);
        return a.push(y), d;
      }])),
      run: c
    };
    return d;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, o = e || r.tr, s = this.buildProps(o, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([l, u]) => [l, (...c) => u(...c)({ ...s, dispatch: void 0 })])),
      chain: () => this.createChain(o, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, a = {
      tr: e,
      editor: i,
      view: s,
      state: Do({
        state: o,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([l, u]) => [l, (...c) => u(...c)(a)]));
      }
    };
    return a;
  }
}
class L0 {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  once(e, t) {
    const r = (...i) => {
      this.off(e, r), t.apply(this, i);
    };
    return this.on(e, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function W(n, e, t) {
  return n.config[e] === void 0 && n.parent ? W(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? W(n.parent, e, t) : null
  }) : n.config[e];
}
function Io(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function zf(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = Io(n), i = [...t, ...r], o = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((s) => {
    const a = {
      name: s.name,
      options: s.options,
      storage: s.storage,
      extensions: i
    }, l = W(s, "addGlobalAttributes", a);
    if (!l)
      return;
    l().forEach((c) => {
      c.types.forEach((d) => {
        Object.entries(c.attributes).forEach(([p, f]) => {
          e.push({
            type: d,
            name: p,
            attribute: {
              ...o,
              ...f
            }
          });
        });
      });
    });
  }), i.forEach((s) => {
    const a = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, l = W(s, "addAttributes", a);
    if (!l)
      return;
    const u = l();
    Object.entries(u).forEach(([c, d]) => {
      const p = {
        ...o,
        ...d
      };
      typeof (p == null ? void 0 : p.default) == "function" && (p.default = p.default()), p != null && p.isRequired && (p == null ? void 0 : p.default) === void 0 && delete p.default, e.push({
        type: s.name,
        name: c,
        attribute: p
      });
    });
  }), e;
}
function Fe(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function qe(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const a = o ? String(o).split(" ") : [], l = r[i] ? r[i].split(" ") : [], u = a.filter((c) => !l.includes(c));
        r[i] = [...l, ...u].join(" ");
      } else if (i === "style") {
        const a = o ? o.split(";").map((c) => c.trim()).filter(Boolean) : [], l = r[i] ? r[i].split(";").map((c) => c.trim()).filter(Boolean) : [], u = /* @__PURE__ */ new Map();
        l.forEach((c) => {
          const [d, p] = c.split(":").map((f) => f.trim());
          u.set(d, p);
        }), a.forEach((c) => {
          const [d, p] = c.split(":").map((f) => f.trim());
          u.set(d, p);
        }), r[i] = Array.from(u.entries()).map(([c, d]) => `${c}: ${d}`).join("; ");
      } else
        r[i] = o;
    }), r;
  }, {});
}
function Qs(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => qe(t, r), {});
}
function jf(n) {
  return typeof n == "function";
}
function re(n, e = void 0, ...t) {
  return jf(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function V0(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function B0(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function ju(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, s) => {
        const a = s.attribute.parseHTML ? s.attribute.parseHTML(t) : B0(t.getAttribute(s.name));
        return a == null ? o : {
          ...o,
          [s.name]: a
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function Fu(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && V0(t) ? !1 : t != null)
  );
}
function z0(n, e) {
  var t;
  const r = zf(n), { nodeExtensions: i, markExtensions: o } = Io(n), s = (t = i.find((u) => W(u, "topNode"))) === null || t === void 0 ? void 0 : t.name, a = Object.fromEntries(i.map((u) => {
    const c = r.filter((y) => y.type === u.name), d = {
      name: u.name,
      options: u.options,
      storage: u.storage,
      editor: e
    }, p = n.reduce((y, S) => {
      const C = W(S, "extendNodeSchema", d);
      return {
        ...y,
        ...C ? C(u) : {}
      };
    }, {}), f = Fu({
      ...p,
      content: re(W(u, "content", d)),
      marks: re(W(u, "marks", d)),
      group: re(W(u, "group", d)),
      inline: re(W(u, "inline", d)),
      atom: re(W(u, "atom", d)),
      selectable: re(W(u, "selectable", d)),
      draggable: re(W(u, "draggable", d)),
      code: re(W(u, "code", d)),
      whitespace: re(W(u, "whitespace", d)),
      linebreakReplacement: re(W(u, "linebreakReplacement", d)),
      defining: re(W(u, "defining", d)),
      isolating: re(W(u, "isolating", d)),
      attrs: Object.fromEntries(c.map((y) => {
        var S;
        return [y.name, { default: (S = y == null ? void 0 : y.attribute) === null || S === void 0 ? void 0 : S.default }];
      }))
    }), h = re(W(u, "parseHTML", d));
    h && (f.parseDOM = h.map((y) => ju(y, c)));
    const m = W(u, "renderHTML", d);
    m && (f.toDOM = (y) => m({
      node: y,
      HTMLAttributes: Qs(y, c)
    }));
    const g = W(u, "renderText", d);
    return g && (f.toText = g), [u.name, f];
  })), l = Object.fromEntries(o.map((u) => {
    const c = r.filter((g) => g.type === u.name), d = {
      name: u.name,
      options: u.options,
      storage: u.storage,
      editor: e
    }, p = n.reduce((g, y) => {
      const S = W(y, "extendMarkSchema", d);
      return {
        ...g,
        ...S ? S(u) : {}
      };
    }, {}), f = Fu({
      ...p,
      inclusive: re(W(u, "inclusive", d)),
      excludes: re(W(u, "excludes", d)),
      group: re(W(u, "group", d)),
      spanning: re(W(u, "spanning", d)),
      code: re(W(u, "code", d)),
      attrs: Object.fromEntries(c.map((g) => {
        var y;
        return [g.name, { default: (y = g == null ? void 0 : g.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), h = re(W(u, "parseHTML", d));
    h && (f.parseDOM = h.map((g) => ju(g, c)));
    const m = W(u, "renderHTML", d);
    return m && (f.toDOM = (g) => m({
      mark: g,
      HTMLAttributes: Qs(g, c)
    })), [u.name, f];
  }));
  return new _d({
    topNode: s,
    nodes: a,
    marks: l
  });
}
function ds(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function Hu(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function Ra(n, e) {
  const t = Yn.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
const j0 = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, o, s, a) => {
    var l, u;
    const c = ((u = (l = i.type.spec).toText) === null || u === void 0 ? void 0 : u.call(l, {
      node: i,
      pos: o,
      parent: s,
      index: a
    })) || i.textContent || "%leaf%";
    t += i.isAtom && !i.isText ? c : c.slice(0, Math.max(0, r - o));
  }), t;
};
function La(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class Ro {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const F0 = (n, e) => {
  if (La(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function Hi(n) {
  var e;
  const { editor: t, from: r, to: i, text: o, rules: s, plugin: a } = n, { view: l } = t;
  if (l.composing)
    return !1;
  const u = l.state.doc.resolve(r);
  if (
    // check for code node
    u.parent.type.spec.code || !((e = u.nodeBefore || u.nodeAfter) === null || e === void 0) && e.marks.find((p) => p.type.spec.code)
  )
    return !1;
  let c = !1;
  const d = j0(u) + o;
  return s.forEach((p) => {
    if (c)
      return;
    const f = F0(d, p.find);
    if (!f)
      return;
    const h = l.state.tr, m = Do({
      state: l.state,
      transaction: h
    }), g = {
      from: r - (f[0].length - o.length),
      to: i
    }, { commands: y, chain: S, can: C } = new Po({
      editor: t,
      state: m
    });
    p.handler({
      state: m,
      range: g,
      match: f,
      commands: y,
      chain: S,
      can: C
    }) === null || !h.steps.length || (h.setMeta(a, {
      transform: h,
      from: r,
      to: i,
      text: o
    }), l.dispatch(h), c = !0);
  }), c;
}
function H0(n) {
  const { editor: e, rules: t } = n, r = new Ke({
    state: {
      init() {
        return null;
      },
      apply(i, o, s) {
        const a = i.getMeta(r);
        if (a)
          return a;
        const l = i.getMeta("applyInputRules");
        return !!l && setTimeout(() => {
          let { text: c } = l;
          typeof c == "string" ? c = c : c = Ra(A.from(c), s.schema);
          const { from: d } = l, p = d + c.length;
          Hi({
            editor: e,
            from: d,
            to: p,
            text: c,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(i, o, s, a) {
        return Hi({
          editor: e,
          from: o,
          to: s,
          text: a,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && Hi({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: s } = i.state.selection;
        return s ? Hi({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function U0(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Ui(n) {
  return U0(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function Lo(n, e) {
  const t = { ...n };
  return Ui(n) && Ui(e) && Object.keys(e).forEach((r) => {
    Ui(e[r]) && Ui(n[r]) ? t[r] = Lo(n[r], e[r]) : t[r] = e[r];
  }), t;
}
class jt {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = re(W(this, "addOptions", {
      name: this.name
    }))), this.storage = re(W(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new jt(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Lo(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new jt(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = re(W(t, "addOptions", {
      name: t.name
    })), t.storage = re(W(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((u) => (u == null ? void 0 : u.type.name) === t.name))
        return !1;
      const l = s.find((u) => (u == null ? void 0 : u.type.name) === t.name);
      return l && r.removeStoredMark(l), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
function W0(n) {
  return typeof n == "number";
}
class q0 {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const K0 = (n, e, t) => {
  if (La(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const o = [i.text];
    return o.index = i.index, o.input = n, o.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(i.replaceWith)), o;
  }) : [];
};
function J0(n) {
  const { editor: e, state: t, from: r, to: i, rule: o, pasteEvent: s, dropEvent: a } = n, { commands: l, chain: u, can: c } = new Po({
    editor: e,
    state: t
  }), d = [];
  return t.doc.nodesBetween(r, i, (f, h) => {
    if (!f.isTextblock || f.type.spec.code)
      return;
    const m = Math.max(r, h), g = Math.min(i, h + f.content.size), y = f.textBetween(m - h, g - h, void 0, "￼");
    K0(y, o.find, s).forEach((C) => {
      if (C.index === void 0)
        return;
      const v = m + C.index + 1, k = v + C[0].length, x = {
        from: t.tr.mapping.map(v),
        to: t.tr.mapping.map(k)
      }, O = o.handler({
        state: t,
        range: x,
        match: C,
        commands: l,
        chain: u,
        can: c,
        pasteEvent: s,
        dropEvent: a
      });
      d.push(O);
    });
  }), d.every((f) => f !== null);
}
let Wi = null;
const G0 = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function Y0(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, o = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, a;
  try {
    a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    a = null;
  }
  const l = ({ state: c, from: d, to: p, rule: f, pasteEvt: h }) => {
    const m = c.tr, g = Do({
      state: c,
      transaction: m
    });
    if (!(!J0({
      editor: e,
      state: g,
      from: Math.max(d - 1, 0),
      to: p.b - 1,
      rule: f,
      pasteEvent: h,
      dropEvent: a
    }) || !m.steps.length)) {
      try {
        a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        a = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return t.map((c) => new Ke({
    // we register a global drag handler to track the current drag source element
    view(d) {
      const p = (h) => {
        var m;
        r = !((m = d.dom.parentElement) === null || m === void 0) && m.contains(h.target) ? d.dom.parentElement : null, r && (Wi = e);
      }, f = () => {
        Wi && (Wi = null);
      };
      return window.addEventListener("dragstart", p), window.addEventListener("dragend", f), {
        destroy() {
          window.removeEventListener("dragstart", p), window.removeEventListener("dragend", f);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (d, p) => {
          if (o = r === d.dom.parentElement, a = p, !o) {
            const f = Wi;
            f != null && f.isEditable && setTimeout(() => {
              const h = f.state.selection;
              h && f.commands.deleteRange({ from: h.from, to: h.to });
            }, 10);
          }
          return !1;
        },
        paste: (d, p) => {
          var f;
          const h = (f = p.clipboardData) === null || f === void 0 ? void 0 : f.getData("text/html");
          return s = p, i = !!(h != null && h.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (d, p, f) => {
      const h = d[0], m = h.getMeta("uiEvent") === "paste" && !i, g = h.getMeta("uiEvent") === "drop" && !o, y = h.getMeta("applyPasteRules"), S = !!y;
      if (!m && !g && !S)
        return;
      if (S) {
        let { text: k } = y;
        typeof k == "string" ? k = k : k = Ra(A.from(k), f.schema);
        const { from: x } = y, O = x + k.length, N = G0(k);
        return l({
          rule: c,
          state: f,
          from: x,
          to: { b: O },
          pasteEvt: N
        });
      }
      const C = p.doc.content.findDiffStart(f.doc.content), v = p.doc.content.findDiffEnd(f.doc.content);
      if (!(!W0(C) || !v || C === v.b))
        return l({
          rule: c,
          state: f,
          from: C,
          to: v,
          pasteEvt: s
        });
    }
  }));
}
function Q0(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
class cr {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = cr.resolve(e), this.schema = z0(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = cr.sort(cr.flatten(e)), r = Q0(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = W(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, i) => {
      const o = W(r, "priority") || 100, s = W(i, "priority") || 100;
      return o > s ? -1 : o < s ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: ds(t.name, this.schema)
      }, i = W(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = cr.sort([...this.extensions].reverse()), r = [], i = [], o = t.map((s) => {
      const a = {
        name: s.name,
        options: s.options,
        storage: s.storage,
        editor: e,
        type: ds(s.name, this.schema)
      }, l = [], u = W(s, "addKeyboardShortcuts", a);
      let c = {};
      if (s.type === "mark" && W(s, "exitable", a) && (c.ArrowRight = () => jt.handleExit({ editor: e, mark: s })), u) {
        const m = Object.fromEntries(Object.entries(u()).map(([g, y]) => [g, () => y({ editor: e })]));
        c = { ...c, ...m };
      }
      const d = g0(c);
      l.push(d);
      const p = W(s, "addInputRules", a);
      Hu(s, e.options.enableInputRules) && p && r.push(...p());
      const f = W(s, "addPasteRules", a);
      Hu(s, e.options.enablePasteRules) && f && i.push(...f());
      const h = W(s, "addProseMirrorPlugins", a);
      if (h) {
        const m = h();
        l.push(...m);
      }
      return l;
    }).flat();
    return [
      H0({
        editor: e,
        rules: r
      }),
      ...Y0({
        editor: e,
        rules: i
      }),
      ...o
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return zf(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = Io(this.extensions);
    return Object.fromEntries(t.filter((r) => !!W(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((l) => l.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: Fe(r.name, this.schema)
      }, s = W(r, "addNodeView", o);
      if (!s)
        return [];
      const a = (l, u, c, d, p) => {
        const f = Qs(l, i);
        return s()({
          // pass-through
          node: l,
          view: u,
          getPos: c,
          decorations: d,
          innerDecorations: p,
          // tiptap-specific
          editor: e,
          extension: r,
          HTMLAttributes: f
        });
      };
      return [r.name, a];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: ds(e.name, this.schema)
      };
      e.type === "mark" && (!((t = re(W(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const i = W(e, "onBeforeCreate", r), o = W(e, "onCreate", r), s = W(e, "onUpdate", r), a = W(e, "onSelectionUpdate", r), l = W(e, "onTransaction", r), u = W(e, "onFocus", r), c = W(e, "onBlur", r), d = W(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), o && this.editor.on("create", o), s && this.editor.on("update", s), a && this.editor.on("selectionUpdate", a), l && this.editor.on("transaction", l), u && this.editor.on("focus", u), c && this.editor.on("blur", c), d && this.editor.on("destroy", d);
    });
  }
}
class Ve {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = re(W(this, "addOptions", {
      name: this.name
    }))), this.storage = re(W(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Ve(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Lo(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new Ve({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = re(W(t, "addOptions", {
      name: t.name
    })), t.storage = re(W(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Ff(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = t || {};
  let a = "";
  return n.nodesBetween(r, i, (l, u, c, d) => {
    var p;
    l.isBlock && u > r && (a += o);
    const f = s == null ? void 0 : s[l.type.name];
    if (f)
      return c && (a += f({
        node: l,
        pos: u,
        parent: c,
        index: d,
        range: e
      })), !1;
    l.isText && (a += (p = l == null ? void 0 : l.text) === null || p === void 0 ? void 0 : p.slice(Math.max(r, u) - u, i - u));
  }), a;
}
function Va(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const X0 = Ve.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new Ke({
        key: new yt("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((c) => c.$from.pos)), a = Math.max(...o.map((c) => c.$to.pos)), l = Va(t);
            return Ff(r, { from: s, to: a }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: l
            });
          }
        }
      })
    ];
  }
}), Z0 = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), e1 = (n = !1) => ({ commands: e }) => e.setContent("", n), t1 = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: o, $to: s }) => {
    n.doc.nodesBetween(o.pos, s.pos, (a, l) => {
      if (a.type.isText)
        return;
      const { doc: u, mapping: c } = e, d = u.resolve(c.map(l)), p = u.resolve(c.map(l + a.nodeSize)), f = d.blockRange(p);
      if (!f)
        return;
      const h = _r(f);
      if (a.type.isTextblock) {
        const { defaultType: m } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(f.start, m);
      }
      (h || h === 0) && e.lift(f, h);
    });
  }), !0;
}, n1 = (n) => (e) => n(e), r1 = () => ({ state: n, dispatch: e }) => Rf(n, e), i1 = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, o = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const s = r.mapping.map(e);
  return r.insert(s, o.content), r.setSelection(new X(r.doc.resolve(Math.max(s - 1, 0)))), !0;
}, o1 = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const a = i.before(o), l = i.after(o);
        n.delete(a, l).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, s1 = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = Fe(n, t.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const l = o.before(s), u = o.after(s);
        e.delete(l, u).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, a1 = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, l1 = () => ({ state: n, dispatch: e }) => Aa(n, e), u1 = () => ({ commands: n }) => n.keyboardShortcut("Enter"), c1 = () => ({ state: n, dispatch: e }) => w0(n, e);
function bo(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : La(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function Hf(n, e, t = {}) {
  return n.find((r) => r.type === e && bo(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((i) => [i, r.attrs[i]])),
    t
  ));
}
function Uu(n, e, t = {}) {
  return !!Hf(n, e, t);
}
function Ba(n, e, t) {
  var r;
  if (!n || !e)
    return;
  let i = n.parent.childAfter(n.parentOffset);
  if ((!i.node || !i.node.marks.some((c) => c.type === e)) && (i = n.parent.childBefore(n.parentOffset)), !i.node || !i.node.marks.some((c) => c.type === e) || (t = t || ((r = i.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !Hf([...i.node.marks], e, t)))
    return;
  let s = i.index, a = n.start() + i.offset, l = s + 1, u = a + i.node.nodeSize;
  for (; s > 0 && Uu([...n.parent.child(s - 1).marks], e, t); )
    s -= 1, a -= n.parent.child(s).nodeSize;
  for (; l < n.parent.childCount && Uu([...n.parent.child(l).marks], e, t); )
    u += n.parent.child(l).nodeSize, l += 1;
  return {
    from: a,
    to: u
  };
}
function Cn(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const d1 = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const o = Cn(n, r.schema), { doc: s, selection: a } = t, { $from: l, from: u, to: c } = a;
  if (i) {
    const d = Ba(l, o, e);
    if (d && d.from <= u && d.to >= c) {
      const p = X.create(s, d.from, d.to);
      t.setSelection(p);
    }
  }
  return !0;
}, f1 = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function za(n) {
  return n instanceof X;
}
function Qt(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function Uf(n, e = null) {
  if (!e)
    return null;
  const t = ee.atStart(n), r = ee.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, o = r.to;
  return e === "all" ? X.create(n, Qt(0, i, o), Qt(n.content.size, i, o)) : X.create(n, Qt(e, i, o), Qt(e, i, o));
}
function p1() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function ja() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const h1 = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    (ja() || p1()) && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (o && n === null && !za(t.state.selection))
    return s(), !0;
  const a = Uf(i.doc, n) || t.state.selection, l = t.state.selection.eq(a);
  return o && (l || i.setSelection(a), l && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, m1 = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), g1 = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), Wf = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && Wf(r);
  }
  return n;
};
function qi(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return Wf(t);
}
function mi(n, e, t) {
  if (n instanceof mn || n instanceof A)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return A.fromArray(n.map((a) => e.nodeFromJSON(a)));
      const s = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && s.check(), s;
    } catch (o) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", o), mi("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let s = !1, a = "";
      const l = new _d({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (u) => (s = !0, a = typeof u == "string" ? u : u.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? qr.fromSchema(l).parseSlice(qi(n), t.parseOptions) : qr.fromSchema(l).parse(qi(n), t.parseOptions), t.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${a}`) });
    }
    const o = qr.fromSchema(e);
    return t.slice ? o.parseSlice(qi(n), t.parseOptions).content : o.parse(qi(n), t.parseOptions);
  }
  return mi("", e, t);
}
function v1(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof Be || i instanceof ze))
    return;
  const o = n.mapping.maps[r];
  let s = 0;
  o.forEach((a, l, u, c) => {
    s === 0 && (s = c);
  }), n.setSelection(ee.near(n.doc.resolve(s), t));
}
const y1 = (n) => !("type" in n), b1 = (n, e, t) => ({ tr: r, dispatch: i, editor: o }) => {
  var s;
  if (i) {
    t = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let a;
    const l = (g) => {
      o.emit("contentError", {
        editor: o,
        error: g,
        disableCollaboration: () => {
          o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      });
    }, u = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError)
      try {
        mi(e, o.schema, {
          parseOptions: u,
          errorOnInvalidContent: !0
        });
      } catch (g) {
        l(g);
      }
    try {
      a = mi(e, o.schema, {
        parseOptions: u,
        errorOnInvalidContent: (s = t.errorOnInvalidContent) !== null && s !== void 0 ? s : o.options.enableContentCheck
      });
    } catch (g) {
      return l(g), !1;
    }
    let { from: c, to: d } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, p = !0, f = !0;
    if ((y1(a) ? a : [a]).forEach((g) => {
      g.check(), p = p ? g.isText && g.marks.length === 0 : !1, f = f ? g.isBlock : !1;
    }), c === d && f) {
      const { parent: g } = r.doc.resolve(c);
      g.isTextblock && !g.type.spec.code && !g.childCount && (c -= 1, d += 1);
    }
    let m;
    if (p) {
      if (Array.isArray(e))
        m = e.map((g) => g.text || "").join("");
      else if (e instanceof A) {
        let g = "";
        e.forEach((y) => {
          y.text && (g += y.text);
        }), m = g;
      } else typeof e == "object" && e && e.text ? m = e.text : m = e;
      r.insertText(m, c, d);
    } else
      m = a, r.replaceWith(c, d, m);
    t.updateSelection && v1(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: c, text: m }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: c, text: m });
  }
  return !0;
}, S1 = () => ({ state: n, dispatch: e }) => b0(n, e), x1 = () => ({ state: n, dispatch: e }) => S0(n, e), w1 = () => ({ state: n, dispatch: e }) => Mf(n, e), k1 = () => ({ state: n, dispatch: e }) => Df(n, e), C1 = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Eo(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, T1 = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Eo(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, O1 = () => ({ state: n, dispatch: e }) => v0(n, e), E1 = () => ({ state: n, dispatch: e }) => y0(n, e);
function qf() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function _1(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, o, s;
  for (let a = 0; a < e.length - 1; a += 1) {
    const l = e[a];
    if (/^(cmd|meta|m)$/i.test(l))
      s = !0;
    else if (/^a(lt)?$/i.test(l))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      i = !0;
    else if (/^s(hift)?$/i.test(l))
      o = !0;
    else if (/^mod$/i.test(l))
      ja() || qf() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${l}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), s && (t = `Meta-${t}`), o && (t = `Shift-${t}`), t;
}
const M1 = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const o = _1(n).split(/-(?!$)/), s = o.find((u) => !["Alt", "Ctrl", "Meta", "Shift"].includes(u)), a = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), l = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (u) => u(t, a));
  });
  return l == null || l.steps.forEach((u) => {
    const c = u.map(r.mapping);
    c && i && r.maybeStep(c);
  }), !0;
};
function gi(n, e, t = {}) {
  const { from: r, to: i, empty: o } = n.selection, s = e ? Fe(e, n.schema) : null, a = [];
  n.doc.nodesBetween(r, i, (d, p) => {
    if (d.isText)
      return;
    const f = Math.max(r, p), h = Math.min(i, p + d.nodeSize);
    a.push({
      node: d,
      from: f,
      to: h
    });
  });
  const l = i - r, u = a.filter((d) => s ? s.name === d.node.type.name : !0).filter((d) => bo(d.node.attrs, t, { strict: !1 }));
  return o ? !!u.length : u.reduce((d, p) => d + p.to - p.from, 0) >= l;
}
const N1 = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Fe(n, t.schema);
  return gi(t, i, e) ? x0(t, r) : !1;
}, A1 = () => ({ state: n, dispatch: e }) => Lf(n, e), $1 = (n) => ({ state: e, dispatch: t }) => {
  const r = Fe(n, e.schema);
  return D0(r)(e, t);
}, D1 = () => ({ state: n, dispatch: e }) => If(n, e);
function Vo(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Wu(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const P1 = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const a = Vo(typeof n == "string" ? n : n.name, r.schema);
  return a ? (a === "node" && (o = Fe(n, r.schema)), a === "mark" && (s = Cn(n, r.schema)), i && t.selection.ranges.forEach((l) => {
    r.doc.nodesBetween(l.$from.pos, l.$to.pos, (u, c) => {
      o && o === u.type && t.setNodeMarkup(c, void 0, Wu(u.attrs, e)), s && u.marks.length && u.marks.forEach((d) => {
        s === d.type && t.addMark(c, c + u.nodeSize, s.create(Wu(d.attrs, e)));
      });
    });
  }), !0) : !1;
}, I1 = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), R1 = () => ({ tr: n, dispatch: e }) => {
  if (e) {
    const t = new ht(n.doc);
    n.setSelection(t);
  }
  return !0;
}, L1 = () => ({ state: n, dispatch: e }) => Af(n, e), V1 = () => ({ state: n, dispatch: e }) => Pf(n, e), B1 = () => ({ state: n, dispatch: e }) => T0(n, e), z1 = () => ({ state: n, dispatch: e }) => _0(n, e), j1 = () => ({ state: n, dispatch: e }) => E0(n, e);
function Xs(n, e, t = {}, r = {}) {
  return mi(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const F1 = (n, e = !1, t = {}, r = {}) => ({ editor: i, tr: o, dispatch: s, commands: a }) => {
  var l, u;
  const { doc: c } = o;
  if (t.preserveWhitespace !== "full") {
    const d = Xs(n, i.schema, t, {
      errorOnInvalidContent: (l = r.errorOnInvalidContent) !== null && l !== void 0 ? l : i.options.enableContentCheck
    });
    return s && o.replaceWith(0, c.content.size, d).setMeta("preventUpdate", !e), !0;
  }
  return s && o.setMeta("preventUpdate", !e), a.insertContentAt({ from: 0, to: c.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (u = r.errorOnInvalidContent) !== null && u !== void 0 ? u : i.options.enableContentCheck
  });
};
function Kf(n, e) {
  const t = Cn(e, n.schema), { from: r, to: i, empty: o } = n.selection, s = [];
  o ? (n.storedMarks && s.push(...n.storedMarks), s.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (l) => {
    s.push(...l.marks);
  });
  const a = s.find((l) => l.type.name === t.name);
  return a ? { ...a.attrs } : {};
}
function H1(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function U1(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function Fa(n) {
  return (e) => U1(e.$from, n);
}
function Jf(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return Ff(n, t, e);
}
function W1(n, e) {
  const t = Fe(e, n.schema), { from: r, to: i } = n.selection, o = [];
  n.doc.nodesBetween(r, i, (a) => {
    o.push(a);
  });
  const s = o.reverse().find((a) => a.type.name === t.name);
  return s ? { ...s.attrs } : {};
}
function q1(n, e) {
  const t = Vo(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? W1(n, e) : t === "mark" ? Kf(n, e) : {};
}
function Gf(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const o = t.resolve(n), s = Ba(o, i.type);
    s && r.push({
      mark: i,
      ...s
    });
  }) : t.nodesBetween(n, e, (i, o) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(...i.marks.map((s) => ({
      from: o,
      to: o + i.nodeSize,
      mark: s
    })));
  }), r;
}
function Zi(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((o) => o.type === e && o.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function Zs(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, o = e ? Cn(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => bo(d.attrs, t, { strict: !1 }));
  let s = 0;
  const a = [];
  if (i.forEach(({ $from: d, $to: p }) => {
    const f = d.pos, h = p.pos;
    n.doc.nodesBetween(f, h, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(f, g), S = Math.min(h, g + m.nodeSize), C = S - y;
      s += C, a.push(...m.marks.map((v) => ({
        mark: v,
        from: y,
        to: S
      })));
    });
  }), s === 0)
    return !1;
  const l = a.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => bo(d.mark.attrs, t, { strict: !1 })).reduce((d, p) => d + p.to - p.from, 0), u = a.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, p) => d + p.to - p.from, 0);
  return (l > 0 ? l + u : l) >= s;
}
function K1(n, e, t = {}) {
  if (!e)
    return gi(n, null, t) || Zs(n, null, t);
  const r = Vo(e, n.schema);
  return r === "node" ? gi(n, e, t) : r === "mark" ? Zs(n, e, t) : !1;
}
function qu(n, e) {
  const { nodeExtensions: t } = Io(e), r = t.find((s) => s.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = re(W(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function Ha(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  var r;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) !== null && r !== void 0 ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return n.content.forEach((o) => {
      i !== !1 && (Ha(o, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function Yf(n) {
  return n instanceof K;
}
function Qf(n, e, t) {
  const i = n.state.doc.content.size, o = Qt(e, 0, i), s = Qt(t, 0, i), a = n.coordsAtPos(o), l = n.coordsAtPos(s, -1), u = Math.min(a.top, l.top), c = Math.max(a.bottom, l.bottom), d = Math.min(a.left, l.left), p = Math.max(a.right, l.right), f = p - d, h = c - u, y = {
    top: u,
    bottom: c,
    left: d,
    right: p,
    width: f,
    height: h,
    x: d,
    y: u
  };
  return {
    ...y,
    toJSON: () => y
  };
}
function J1(n, e, t) {
  var r;
  const { selection: i } = e;
  let o = null;
  if (za(i) && (o = i.$cursor), o) {
    const a = (r = n.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!t.isInSet(a) || !a.some((l) => l.type.excludes(t));
  }
  const { ranges: s } = i;
  return s.some(({ $from: a, $to: l }) => {
    let u = a.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(a.pos, l.pos, (c, d, p) => {
      if (u)
        return !1;
      if (c.isInline) {
        const f = !p || p.type.allowsMarkType(t), h = !!t.isInSet(c.marks) || !c.marks.some((m) => m.type.excludes(t));
        u = f && h;
      }
      return !u;
    }), u;
  });
}
const G1 = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: o } = t, { empty: s, ranges: a } = o, l = Cn(n, r.schema);
  if (i)
    if (s) {
      const u = Kf(r, l);
      t.addStoredMark(l.create({
        ...u,
        ...e
      }));
    } else
      a.forEach((u) => {
        const c = u.$from.pos, d = u.$to.pos;
        r.doc.nodesBetween(c, d, (p, f) => {
          const h = Math.max(f, c), m = Math.min(f + p.nodeSize, d);
          p.marks.find((y) => y.type === l) ? p.marks.forEach((y) => {
            l === y.type && t.addMark(h, m, l.create({
              ...y.attrs,
              ...e
            }));
          }) : t.addMark(h, m, l.create(e));
        });
      });
  return J1(r, t, l);
}, Y1 = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), Q1 = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const o = Fe(n, t.schema);
  let s;
  return t.selection.$anchor.sameParent(t.selection.$head) && (s = t.selection.$anchor.parent.attrs), o.isTextblock ? i().command(({ commands: a }) => zu(o, { ...s, ...e })(t) ? !0 : a.clearNodes()).command(({ state: a }) => zu(o, { ...s, ...e })(a, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, X1 = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = Qt(n, 0, r.content.size), o = K.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, Z1 = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: o } = typeof n == "number" ? { from: n, to: n } : n, s = X.atStart(r).from, a = X.atEnd(r).to, l = Qt(i, s, a), u = Qt(o, s, a), c = X.create(r, l, u);
    e.setSelection(c);
  }
  return !0;
}, eS = (n) => ({ state: e, dispatch: t }) => {
  const r = Fe(n, e.schema);
  return R0(r)(e, t);
};
function Ku(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const tS = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: a, $to: l } = o, u = i.extensionManager.attributes, c = Zi(u, a.node().type.name, a.node().attrs);
  if (o instanceof K && o.node.isBlock)
    return !a.parentOffset || !Xt(s, a.pos) ? !1 : (r && (n && Ku(t, i.extensionManager.splittableMarks), e.split(a.pos).scrollIntoView()), !0);
  if (!a.parent.isBlock)
    return !1;
  const d = l.parentOffset === l.parent.content.size, p = a.depth === 0 ? void 0 : H1(a.node(-1).contentMatchAt(a.indexAfter(-1)));
  let f = d && p ? [
    {
      type: p,
      attrs: c
    }
  ] : void 0, h = Xt(e.doc, e.mapping.map(a.pos), 1, f);
  if (!f && !h && Xt(e.doc, e.mapping.map(a.pos), 1, p ? [{ type: p }] : void 0) && (h = !0, f = p ? [
    {
      type: p,
      attrs: c
    }
  ] : void 0), r) {
    if (h && (o instanceof X && e.deleteSelection(), e.split(e.mapping.map(a.pos), 1, f), p && !d && !a.parentOffset && a.parent.type !== p)) {
      const m = e.mapping.map(a.before()), g = e.doc.resolve(m);
      a.node(-1).canReplaceWith(g.index(), g.index() + 1, p) && e.setNodeMarkup(e.mapping.map(a.before()), p);
    }
    n && Ku(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return h;
}, nS = (n, e = {}) => ({ tr: t, state: r, dispatch: i, editor: o }) => {
  var s;
  const a = Fe(n, r.schema), { $from: l, $to: u } = r.selection, c = r.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(u))
    return !1;
  const d = l.node(-1);
  if (d.type !== a)
    return !1;
  const p = o.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== a || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (i) {
      let y = A.empty;
      const S = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let N = l.depth - S; N >= l.depth - 3; N -= 1)
        y = A.from(l.node(N).copy(y));
      const C = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, v = {
        ...Zi(p, l.node().type.name, l.node().attrs),
        ...e
      }, k = ((s = a.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(v)) || void 0;
      y = y.append(A.from(a.createAndFill(null, k) || void 0));
      const x = l.before(l.depth - (S - 1));
      t.replace(x, l.after(-C), new B(y, 4 - S, 0));
      let O = -1;
      t.doc.nodesBetween(x, t.doc.content.size, (N, U) => {
        if (O > -1)
          return !1;
        N.isTextblock && N.content.size === 0 && (O = U + 1);
      }), O > -1 && t.setSelection(X.near(t.doc.resolve(O))), t.scrollIntoView();
    }
    return !0;
  }
  const f = u.pos === l.end() ? d.contentMatchAt(0).defaultType : null, h = {
    ...Zi(p, d.type.name, d.attrs),
    ...e
  }, m = {
    ...Zi(p, l.node().type.name, l.node().attrs),
    ...e
  };
  t.delete(l.pos, u.pos);
  const g = f ? [
    { type: a, attrs: h },
    { type: f, attrs: m }
  ] : [{ type: a, attrs: h }];
  if (!Xt(t.doc, l.pos, 2))
    return !1;
  if (i) {
    const { selection: y, storedMarks: S } = r, { splittableMarks: C } = o.extensionManager, v = S || y.$to.parentOffset && y.$from.marks();
    if (t.split(l.pos, 2, g).scrollIntoView(), !v || !i)
      return !0;
    const k = v.filter((x) => C.includes(x.type.name));
    t.ensureMarks(k);
  }
  return !0;
}, fs = (n, e) => {
  const t = Fa((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && wn(n.doc, t.pos) && n.join(t.pos), !0;
}, ps = (n, e) => {
  const t = Fa((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && wn(n.doc, r) && n.join(r), !0;
}, rS = (n, e, t, r = {}) => ({ editor: i, tr: o, state: s, dispatch: a, chain: l, commands: u, can: c }) => {
  const { extensions: d, splittableMarks: p } = i.extensionManager, f = Fe(n, s.schema), h = Fe(e, s.schema), { selection: m, storedMarks: g } = s, { $from: y, $to: S } = m, C = y.blockRange(S), v = g || m.$to.parentOffset && m.$from.marks();
  if (!C)
    return !1;
  const k = Fa((x) => qu(x.type.name, d))(m);
  if (C.depth >= 1 && k && C.depth - k.depth <= 1) {
    if (k.node.type === f)
      return u.liftListItem(h);
    if (qu(k.node.type.name, d) && f.validContent(k.node.content) && a)
      return l().command(() => (o.setNodeMarkup(k.pos, f), !0)).command(() => fs(o, f)).command(() => ps(o, f)).run();
  }
  return !t || !v || !a ? l().command(() => c().wrapInList(f, r) ? !0 : u.clearNodes()).wrapInList(f, r).command(() => fs(o, f)).command(() => ps(o, f)).run() : l().command(() => {
    const x = c().wrapInList(f, r), O = v.filter((N) => p.includes(N.type.name));
    return o.ensureMarks(O), x ? !0 : u.clearNodes();
  }).wrapInList(f, r).command(() => fs(o, f)).command(() => ps(o, f)).run();
}, iS = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = t, s = Cn(n, r.schema);
  return Zs(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, oS = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const o = Fe(n, r.schema), s = Fe(e, r.schema), a = gi(r, o, t);
  let l;
  return r.selection.$anchor.sameParent(r.selection.$head) && (l = r.selection.$anchor.parent.attrs), a ? i.setNode(s, l) : i.setNode(o, { ...l, ...t });
}, sS = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = Fe(n, t.schema);
  return gi(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, aS = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(n))) {
      if (e) {
        const s = n.tr, a = o.transform;
        for (let l = a.steps.length - 1; l >= 0; l -= 1)
          s.step(a.steps[l].invert(a.docs[l]));
        if (o.text) {
          const l = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, n.schema.text(o.text, l));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, lS = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((o) => {
    n.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, uS = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: a } = t, l = Cn(n, r.schema), { $from: u, empty: c, ranges: d } = a;
  if (!i)
    return !0;
  if (c && s) {
    let { from: p, to: f } = a;
    const h = (o = u.marks().find((g) => g.type === l)) === null || o === void 0 ? void 0 : o.attrs, m = Ba(u, l, h);
    m && (p = m.from, f = m.to), t.removeMark(p, f, l);
  } else
    d.forEach((p) => {
      t.removeMark(p.$from.pos, p.$to.pos, l);
    });
  return t.removeStoredMark(l), !0;
}, cS = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const a = Vo(typeof n == "string" ? n : n.name, r.schema);
  return a ? (a === "node" && (o = Fe(n, r.schema)), a === "mark" && (s = Cn(n, r.schema)), i && t.selection.ranges.forEach((l) => {
    const u = l.$from.pos, c = l.$to.pos;
    let d, p, f, h;
    t.selection.empty ? r.doc.nodesBetween(u, c, (m, g) => {
      o && o === m.type && (f = Math.max(g, u), h = Math.min(g + m.nodeSize, c), d = g, p = m);
    }) : r.doc.nodesBetween(u, c, (m, g) => {
      g < u && o && o === m.type && (f = Math.max(g, u), h = Math.min(g + m.nodeSize, c), d = g, p = m), g >= u && g <= c && (o && o === m.type && t.setNodeMarkup(g, void 0, {
        ...m.attrs,
        ...e
      }), s && m.marks.length && m.marks.forEach((y) => {
        if (s === y.type) {
          const S = Math.max(g, u), C = Math.min(g + m.nodeSize, c);
          t.addMark(S, C, s.create({
            ...y.attrs,
            ...e
          }));
        }
      }));
    }), p && (d !== void 0 && t.setNodeMarkup(d, void 0, {
      ...p.attrs,
      ...e
    }), s && p.marks.length && p.marks.forEach((m) => {
      s === m.type && t.addMark(f, h, s.create({
        ...m.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, dS = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Fe(n, t.schema);
  return M0(i, e)(t, r);
}, fS = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Fe(n, t.schema);
  return N0(i, e)(t, r);
};
var pS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: Z0,
  clearContent: e1,
  clearNodes: t1,
  command: n1,
  createParagraphNear: r1,
  cut: i1,
  deleteCurrentNode: o1,
  deleteNode: s1,
  deleteRange: a1,
  deleteSelection: l1,
  enter: u1,
  exitCode: c1,
  extendMarkRange: d1,
  first: f1,
  focus: h1,
  forEach: m1,
  insertContent: g1,
  insertContentAt: b1,
  joinBackward: w1,
  joinDown: x1,
  joinForward: k1,
  joinItemBackward: C1,
  joinItemForward: T1,
  joinTextblockBackward: O1,
  joinTextblockForward: E1,
  joinUp: S1,
  keyboardShortcut: M1,
  lift: N1,
  liftEmptyBlock: A1,
  liftListItem: $1,
  newlineInCode: D1,
  resetAttributes: P1,
  scrollIntoView: I1,
  selectAll: R1,
  selectNodeBackward: L1,
  selectNodeForward: V1,
  selectParentNode: B1,
  selectTextblockEnd: z1,
  selectTextblockStart: j1,
  setContent: F1,
  setMark: G1,
  setMeta: Y1,
  setNode: Q1,
  setNodeSelection: X1,
  setTextSelection: Z1,
  sinkListItem: eS,
  splitBlock: tS,
  splitListItem: nS,
  toggleList: rS,
  toggleMark: iS,
  toggleNode: oS,
  toggleWrap: sS,
  undoInputRule: aS,
  unsetAllMarks: lS,
  unsetMark: uS,
  updateAttributes: cS,
  wrapIn: dS,
  wrapInList: fS
});
const hS = Ve.create({
  name: "commands",
  addCommands() {
    return {
      ...pS
    };
  }
}), mS = Ve.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Ke({
        key: new yt("tiptapDrop"),
        props: {
          handleDrop: (n, e, t, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: r
            });
          }
        }
      })
    ];
  }
}), gS = Ve.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Ke({
        key: new yt("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), vS = new yt("focusEvents"), yS = Ve.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new Ke({
        key: vS,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), bS = Ve.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: a }) => {
        const { selection: l, doc: u } = a, { empty: c, $anchor: d } = l, { pos: p, parent: f } = d, h = d.parent.isTextblock && p > 0 ? a.doc.resolve(p - 1) : d, m = h.parent.type.spec.isolating, g = d.pos - d.parentOffset, y = m && h.parent.childCount === 1 ? g === d.pos : ee.atStart(u).from === p;
        return !c || !f.type.isTextblock || f.textContent.length || !y || y && d.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return ja() || qf() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Ke({
        key: new yt("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (n.some((m) => m.getMeta("composition")))
            return;
          const r = n.some((m) => m.docChanged) && !e.doc.eq(t.doc), i = n.some((m) => m.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: o, from: s, to: a } = e.selection, l = ee.atStart(e.doc).from, u = ee.atEnd(e.doc).to;
          if (o || !(s === l && a === u) || !Ha(t.doc))
            return;
          const p = t.tr, f = Do({
            state: t,
            transaction: p
          }), { commands: h } = new Po({
            editor: this.editor,
            state: f
          });
          if (h.clearNodes(), !!p.steps.length)
            return p;
        }
      })
    ];
  }
}), SS = Ve.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Ke({
        key: new yt("tiptapPaste"),
        props: {
          handlePaste: (n, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), xS = Ve.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Ke({
        key: new yt("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class An {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new An(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new An(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new An(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, o = t.isAtom && !t.isText, s = this.pos + r + (o ? 0 : 1);
      if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2)
        return;
      const a = this.resolvedPos.doc.resolve(s);
      if (!i && a.depth <= this.depth)
        return;
      const l = new An(a, this.editor, i, i ? t : null);
      i && (l.actualDepth = this.depth + 1), e.push(new An(a, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const o = i.node.attrs, s = Object.keys(t);
          for (let a = 0; a < s.length; a += 1) {
            const l = s[a];
            if (o[l] !== t[l])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const o = Object.keys(t);
    return this.children.forEach((s) => {
      r && i.length > 0 || (s.node.type.name === e && o.every((l) => t[l] === s.node.attrs[l]) && i.push(s), !(r && i.length > 0) && (i = i.concat(s.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}
const wS = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function kS(n, e, t) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
let CS = class extends L0 {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: t }) => {
        throw t;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: t, slice: r, moved: i }) => this.options.onDrop(t, r, i)), this.on("paste", ({ event: t, slice: r }) => this.options.onPaste(t, r)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = kS(wS, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, t) {
    const r = jf(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    return this.view.updateState(i), i;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = this.state.plugins;
    let r = t;
    if ([].concat(e).forEach((o) => {
      const s = typeof o == "string" ? `${o}$` : o.key;
      r = r.filter((a) => !a.key.startsWith(s));
    }), t.length === r.length)
      return;
    const i = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(i), i;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const i = [...this.options.enableCoreExtensions ? [
      gS,
      X0.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      hS,
      yS,
      bS,
      xS,
      mS,
      SS
    ].filter((o) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[o.name] !== !1 : !0) : [], ...this.options.extensions].filter((o) => ["extension", "node", "mark"].includes(o == null ? void 0 : o.type));
    this.extensionManager = new cr(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Po({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var e;
    let t;
    try {
      t = Xs(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (s) {
      if (!(s instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(s.message))
        throw s;
      this.emit("contentError", {
        editor: this,
        error: s,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((a) => a.name !== "collaboration"), this.createExtensionManager();
        }
      }), t = Xs(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = Uf(t, this.options.autofocus);
    this.view = new Of(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: ur.create({
        doc: t,
        selection: r || void 0
      })
    });
    const i = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(i), this.createNodeViews(), this.prependClass();
    const o = this.view.dom;
    o.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((s) => {
        var a;
        return (a = this.capturedTransaction) === null || a === void 0 ? void 0 : a.step(s);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), o = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return q1(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return K1(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Ra(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return Jf(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...Va(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Ha(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    if (this.emit("destroy"), this.view) {
      const e = this.view.dom;
      e && e.editor && delete e.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new An(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function Sr(n) {
  return new Ro({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = re(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], a = r[0];
      if (s) {
        const l = a.search(/\S/), u = t.from + a.indexOf(s), c = u + s.length;
        if (Gf(t.from, t.to, e.doc).filter((f) => f.mark.type.excluded.find((m) => m === n.type && m !== f.mark.type)).filter((f) => f.to > u).length)
          return null;
        c < t.to && o.delete(c, t.to), u > t.from && o.delete(t.from + l, u);
        const p = t.from + l + s.length;
        o.addMark(t.from + l, p, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function TS(n) {
  return new Ro({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = re(n.getAttributes, void 0, r) || {}, { tr: o } = e, s = t.from;
      let a = t.to;
      const l = n.type.create(i);
      if (r[1]) {
        const u = r[0].lastIndexOf(r[1]);
        let c = s + u;
        c > a ? c = a : a = c + r[1].length;
        const d = r[0][r[0].length - 1];
        o.insertText(d, s + r[0].length - 1), o.replaceWith(c, a, l);
      } else if (r[0]) {
        const u = n.type.isInline ? s : s - 1;
        o.insert(u, n.type.create(i)).delete(o.mapping.map(s), o.mapping.map(a));
      }
      o.scrollIntoView();
    }
  });
}
function ea(n) {
  return new Ro({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), o = re(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, o);
    }
  });
}
function vi(n) {
  return new Ro({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const o = re(n.getAttributes, void 0, r) || {}, s = e.tr.delete(t.from, t.to), l = s.doc.resolve(t.from).blockRange(), u = l && Sa(l, n.type, o);
      if (!u)
        return null;
      if (s.wrap(l, u), n.keepMarks && n.editor) {
        const { selection: d, storedMarks: p } = e, { splittableMarks: f } = n.editor.extensionManager, h = p || d.$to.parentOffset && d.$from.marks();
        if (h) {
          const m = h.filter((g) => f.includes(g.type.name));
          s.ensureMarks(m);
        }
      }
      if (n.keepAttributes) {
        const d = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(d, o).run();
      }
      const c = s.doc.resolve(t.from - 1).nodeBefore;
      c && c.type === n.type && wn(s.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, c)) && s.join(t.from - 1);
    }
  });
}
class ct {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = re(W(this, "addOptions", {
      name: this.name
    }))), this.storage = re(W(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new ct(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Lo(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new ct(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = re(W(t, "addOptions", {
      name: t.name
    })), t.storage = re(W(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function xr(n) {
  return new q0({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const o = re(n.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: s } = e, a = r[r.length - 1], l = r[0];
      let u = t.to;
      if (a) {
        const c = l.search(/\S/), d = t.from + l.indexOf(a), p = d + a.length;
        if (Gf(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((g) => g === n.type && g !== h.mark.type)).filter((h) => h.to > d).length)
          return null;
        p < t.to && s.delete(p, t.to), d > t.from && s.delete(t.from + c, d), u = t.from + c + a.length, s.addMark(t.from + c, u, n.type.create(o || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function OS(n, e) {
  const { selection: t } = n, { $from: r } = t;
  if (t instanceof K) {
    const o = r.index();
    return r.parent.canReplaceWith(o, o + 1, e);
  }
  let i = r.depth;
  for (; i >= 0; ) {
    const o = r.index(i);
    if (r.node(i).contentMatchAt(o).matchType(e))
      return !0;
    i -= 1;
  }
  return !1;
}
var lt = "top", Ot = "bottom", Et = "right", ut = "left", Ua = "auto", Ei = [lt, Ot, Et, ut], wr = "start", yi = "end", ES = "clippingParents", Xf = "viewport", Pr = "popper", _S = "reference", Ju = /* @__PURE__ */ Ei.reduce(function(n, e) {
  return n.concat([e + "-" + wr, e + "-" + yi]);
}, []), Zf = /* @__PURE__ */ [].concat(Ei, [Ua]).reduce(function(n, e) {
  return n.concat([e, e + "-" + wr, e + "-" + yi]);
}, []), MS = "beforeRead", NS = "read", AS = "afterRead", $S = "beforeMain", DS = "main", PS = "afterMain", IS = "beforeWrite", RS = "write", LS = "afterWrite", VS = [MS, NS, AS, $S, DS, PS, IS, RS, LS];
function Ft(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function gt(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function Jn(n) {
  var e = gt(n).Element;
  return n instanceof e || n instanceof Element;
}
function Tt(n) {
  var e = gt(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function Wa(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = gt(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function BS(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, o = e.elements[t];
    !Tt(o) || !Ft(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(s) {
      var a = i[s];
      a === !1 ? o.removeAttribute(s) : o.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function zS(n) {
  var e = n.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], o = e.attributes[r] || {}, s = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]), a = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Tt(i) || !Ft(i) || (Object.assign(i.style, a), Object.keys(o).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const ep = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: BS,
  effect: zS,
  requires: ["computeStyles"]
};
function Vt(n) {
  return n.split("-")[0];
}
var zn = Math.max, So = Math.min, kr = Math.round;
function ta() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function tp() {
  return !/^((?!chrome|android).)*safari/i.test(ta());
}
function Cr(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, o = 1;
  e && Tt(n) && (i = n.offsetWidth > 0 && kr(r.width) / n.offsetWidth || 1, o = n.offsetHeight > 0 && kr(r.height) / n.offsetHeight || 1);
  var s = Jn(n) ? gt(n) : window, a = s.visualViewport, l = !tp() && t, u = (r.left + (l && a ? a.offsetLeft : 0)) / i, c = (r.top + (l && a ? a.offsetTop : 0)) / o, d = r.width / i, p = r.height / o;
  return {
    width: d,
    height: p,
    top: c,
    right: u + d,
    bottom: c + p,
    left: u,
    x: u,
    y: c
  };
}
function qa(n) {
  var e = Cr(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function np(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && Wa(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function tn(n) {
  return gt(n).getComputedStyle(n);
}
function jS(n) {
  return ["table", "td", "th"].indexOf(Ft(n)) >= 0;
}
function Tn(n) {
  return ((Jn(n) ? n.ownerDocument : (
    // $FlowFixMe[prop-missing]
    n.document
  )) || window.document).documentElement;
}
function Bo(n) {
  return Ft(n) === "html" ? n : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    n.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    n.parentNode || // DOM Element detected
    (Wa(n) ? n.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Tn(n)
  );
}
function Gu(n) {
  return !Tt(n) || // https://github.com/popperjs/popper-core/issues/837
  tn(n).position === "fixed" ? null : n.offsetParent;
}
function FS(n) {
  var e = /firefox/i.test(ta()), t = /Trident/i.test(ta());
  if (t && Tt(n)) {
    var r = tn(n);
    if (r.position === "fixed")
      return null;
  }
  var i = Bo(n);
  for (Wa(i) && (i = i.host); Tt(i) && ["html", "body"].indexOf(Ft(i)) < 0; ) {
    var o = tn(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function _i(n) {
  for (var e = gt(n), t = Gu(n); t && jS(t) && tn(t).position === "static"; )
    t = Gu(t);
  return t && (Ft(t) === "html" || Ft(t) === "body" && tn(t).position === "static") ? e : t || FS(n) || e;
}
function Ka(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Yr(n, e, t) {
  return zn(n, So(e, t));
}
function HS(n, e, t) {
  var r = Yr(n, e, t);
  return r > t ? t : r;
}
function rp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ip(n) {
  return Object.assign({}, rp(), n);
}
function op(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var US = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, ip(typeof e != "number" ? e : op(e, Ei));
};
function WS(n) {
  var e, t = n.state, r = n.name, i = n.options, o = t.elements.arrow, s = t.modifiersData.popperOffsets, a = Vt(t.placement), l = Ka(a), u = [ut, Et].indexOf(a) >= 0, c = u ? "height" : "width";
  if (!(!o || !s)) {
    var d = US(i.padding, t), p = qa(o), f = l === "y" ? lt : ut, h = l === "y" ? Ot : Et, m = t.rects.reference[c] + t.rects.reference[l] - s[l] - t.rects.popper[c], g = s[l] - t.rects.reference[l], y = _i(o), S = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, C = m / 2 - g / 2, v = d[f], k = S - p[c] - d[h], x = S / 2 - p[c] / 2 + C, O = Yr(v, x, k), N = l;
    t.modifiersData[r] = (e = {}, e[N] = O, e.centerOffset = O - x, e);
  }
}
function qS(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || np(e.elements.popper, i) && (e.elements.arrow = i));
}
const KS = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: WS,
  effect: qS,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Tr(n) {
  return n.split("-")[1];
}
var JS = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function GS(n, e) {
  var t = n.x, r = n.y, i = e.devicePixelRatio || 1;
  return {
    x: kr(t * i) / i || 0,
    y: kr(r * i) / i || 0
  };
}
function Yu(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, o = n.variation, s = n.offsets, a = n.position, l = n.gpuAcceleration, u = n.adaptive, c = n.roundOffsets, d = n.isFixed, p = s.x, f = p === void 0 ? 0 : p, h = s.y, m = h === void 0 ? 0 : h, g = typeof c == "function" ? c({
    x: f,
    y: m
  }) : {
    x: f,
    y: m
  };
  f = g.x, m = g.y;
  var y = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), C = ut, v = lt, k = window;
  if (u) {
    var x = _i(t), O = "clientHeight", N = "clientWidth";
    if (x === gt(t) && (x = Tn(t), tn(x).position !== "static" && a === "absolute" && (O = "scrollHeight", N = "scrollWidth")), x = x, i === lt || (i === ut || i === Et) && o === yi) {
      v = Ot;
      var U = d && x === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[O]
      );
      m -= U - r.height, m *= l ? 1 : -1;
    }
    if (i === ut || (i === lt || i === Ot) && o === yi) {
      C = Et;
      var j = d && x === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[N]
      );
      f -= j - r.width, f *= l ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: a
  }, u && JS), L = c === !0 ? GS({
    x: f,
    y: m
  }, gt(t)) : {
    x: f,
    y: m
  };
  if (f = L.x, m = L.y, l) {
    var H;
    return Object.assign({}, F, (H = {}, H[v] = S ? "0" : "", H[C] = y ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", H));
  }
  return Object.assign({}, F, (e = {}, e[v] = S ? m + "px" : "", e[C] = y ? f + "px" : "", e.transform = "", e));
}
function YS(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, o = t.adaptive, s = o === void 0 ? !0 : o, a = t.roundOffsets, l = a === void 0 ? !0 : a, u = {
    placement: Vt(e.placement),
    variation: Tr(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Yu(Object.assign({}, u, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Yu(Object.assign({}, u, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const QS = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: YS,
  data: {}
};
var Ki = {
  passive: !0
};
function XS(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, o = i === void 0 ? !0 : i, s = r.resize, a = s === void 0 ? !0 : s, l = gt(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && u.forEach(function(c) {
    c.addEventListener("scroll", t.update, Ki);
  }), a && l.addEventListener("resize", t.update, Ki), function() {
    o && u.forEach(function(c) {
      c.removeEventListener("scroll", t.update, Ki);
    }), a && l.removeEventListener("resize", t.update, Ki);
  };
}
const ZS = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: XS,
  data: {}
};
var ex = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function eo(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return ex[e];
  });
}
var tx = {
  start: "end",
  end: "start"
};
function Qu(n) {
  return n.replace(/start|end/g, function(e) {
    return tx[e];
  });
}
function Ja(n) {
  var e = gt(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function Ga(n) {
  return Cr(Tn(n)).left + Ja(n).scrollLeft;
}
function nx(n, e) {
  var t = gt(n), r = Tn(n), i = t.visualViewport, o = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (i) {
    o = i.width, s = i.height;
    var u = tp();
    (u || !u && e === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a + Ga(n),
    y: l
  };
}
function rx(n) {
  var e, t = Tn(n), r = Ja(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, o = zn(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = zn(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -r.scrollLeft + Ga(n), l = -r.scrollTop;
  return tn(i || t).direction === "rtl" && (a += zn(t.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
function Ya(n) {
  var e = tn(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function sp(n) {
  return ["html", "body", "#document"].indexOf(Ft(n)) >= 0 ? n.ownerDocument.body : Tt(n) && Ya(n) ? n : sp(Bo(n));
}
function Qr(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = sp(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), o = gt(r), s = i ? [o].concat(o.visualViewport || [], Ya(r) ? r : []) : r, a = e.concat(s);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Qr(Bo(s)))
  );
}
function na(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function ix(n, e) {
  var t = Cr(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Xu(n, e, t) {
  return e === Xf ? na(nx(n, t)) : Jn(e) ? ix(e, t) : na(rx(Tn(n)));
}
function ox(n) {
  var e = Qr(Bo(n)), t = ["absolute", "fixed"].indexOf(tn(n).position) >= 0, r = t && Tt(n) ? _i(n) : n;
  return Jn(r) ? e.filter(function(i) {
    return Jn(i) && np(i, r) && Ft(i) !== "body";
  }) : [];
}
function sx(n, e, t, r) {
  var i = e === "clippingParents" ? ox(n) : [].concat(e), o = [].concat(i, [t]), s = o[0], a = o.reduce(function(l, u) {
    var c = Xu(n, u, r);
    return l.top = zn(c.top, l.top), l.right = So(c.right, l.right), l.bottom = So(c.bottom, l.bottom), l.left = zn(c.left, l.left), l;
  }, Xu(n, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function ap(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? Vt(r) : null, o = r ? Tr(r) : null, s = e.x + e.width / 2 - t.width / 2, a = e.y + e.height / 2 - t.height / 2, l;
  switch (i) {
    case lt:
      l = {
        x: s,
        y: e.y - t.height
      };
      break;
    case Ot:
      l = {
        x: s,
        y: e.y + e.height
      };
      break;
    case Et:
      l = {
        x: e.x + e.width,
        y: a
      };
      break;
    case ut:
      l = {
        x: e.x - t.width,
        y: a
      };
      break;
    default:
      l = {
        x: e.x,
        y: e.y
      };
  }
  var u = i ? Ka(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (o) {
      case wr:
        l[u] = l[u] - (e[c] / 2 - t[c] / 2);
        break;
      case yi:
        l[u] = l[u] + (e[c] / 2 - t[c] / 2);
        break;
    }
  }
  return l;
}
function bi(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, o = t.strategy, s = o === void 0 ? n.strategy : o, a = t.boundary, l = a === void 0 ? ES : a, u = t.rootBoundary, c = u === void 0 ? Xf : u, d = t.elementContext, p = d === void 0 ? Pr : d, f = t.altBoundary, h = f === void 0 ? !1 : f, m = t.padding, g = m === void 0 ? 0 : m, y = ip(typeof g != "number" ? g : op(g, Ei)), S = p === Pr ? _S : Pr, C = n.rects.popper, v = n.elements[h ? S : p], k = sx(Jn(v) ? v : v.contextElement || Tn(n.elements.popper), l, c, s), x = Cr(n.elements.reference), O = ap({
    reference: x,
    element: C,
    placement: i
  }), N = na(Object.assign({}, C, O)), U = p === Pr ? N : x, j = {
    top: k.top - U.top + y.top,
    bottom: U.bottom - k.bottom + y.bottom,
    left: k.left - U.left + y.left,
    right: U.right - k.right + y.right
  }, F = n.modifiersData.offset;
  if (p === Pr && F) {
    var L = F[i];
    Object.keys(j).forEach(function(H) {
      var ue = [Et, Ot].indexOf(H) >= 0 ? 1 : -1, be = [lt, Ot].indexOf(H) >= 0 ? "y" : "x";
      j[H] += L[be] * ue;
    });
  }
  return j;
}
function ax(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, o = t.rootBoundary, s = t.padding, a = t.flipVariations, l = t.allowedAutoPlacements, u = l === void 0 ? Zf : l, c = Tr(r), d = c ? a ? Ju : Ju.filter(function(h) {
    return Tr(h) === c;
  }) : Ei, p = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = d);
  var f = p.reduce(function(h, m) {
    return h[m] = bi(n, {
      placement: m,
      boundary: i,
      rootBoundary: o,
      padding: s
    })[Vt(m)], h;
  }, {});
  return Object.keys(f).sort(function(h, m) {
    return f[h] - f[m];
  });
}
function lx(n) {
  if (Vt(n) === Ua)
    return [];
  var e = eo(n);
  return [Qu(n), e, Qu(e)];
}
function ux(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, a = s === void 0 ? !0 : s, l = t.fallbackPlacements, u = t.padding, c = t.boundary, d = t.rootBoundary, p = t.altBoundary, f = t.flipVariations, h = f === void 0 ? !0 : f, m = t.allowedAutoPlacements, g = e.options.placement, y = Vt(g), S = y === g, C = l || (S || !h ? [eo(g)] : lx(g)), v = [g].concat(C).reduce(function(Me, Ge) {
      return Me.concat(Vt(Ge) === Ua ? ax(e, {
        placement: Ge,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : Ge);
    }, []), k = e.rects.reference, x = e.rects.popper, O = /* @__PURE__ */ new Map(), N = !0, U = v[0], j = 0; j < v.length; j++) {
      var F = v[j], L = Vt(F), H = Tr(F) === wr, ue = [lt, Ot].indexOf(L) >= 0, be = ue ? "width" : "height", ye = bi(e, {
        placement: F,
        boundary: c,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), de = ue ? H ? Et : ut : H ? Ot : lt;
      k[be] > x[be] && (de = eo(de));
      var me = eo(de), Ie = [];
      if (o && Ie.push(ye[L] <= 0), a && Ie.push(ye[de] <= 0, ye[me] <= 0), Ie.every(function(Me) {
        return Me;
      })) {
        U = F, N = !1;
        break;
      }
      O.set(F, Ie);
    }
    if (N)
      for (var we = h ? 3 : 1, _e = function(Ge) {
        var Re = v.find(function(E) {
          var P = O.get(E);
          if (P)
            return P.slice(0, Ge).every(function(I) {
              return I;
            });
        });
        if (Re)
          return U = Re, "break";
      }, Te = we; Te > 0; Te--) {
        var Je = _e(Te);
        if (Je === "break") break;
      }
    e.placement !== U && (e.modifiersData[r]._skip = !0, e.placement = U, e.reset = !0);
  }
}
const cx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ux,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Zu(n, e, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: n.top - e.height - t.y,
    right: n.right - e.width + t.x,
    bottom: n.bottom - e.height + t.y,
    left: n.left - e.width - t.x
  };
}
function ec(n) {
  return [lt, Et, Ot, ut].some(function(e) {
    return n[e] >= 0;
  });
}
function dx(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, s = bi(e, {
    elementContext: "reference"
  }), a = bi(e, {
    altBoundary: !0
  }), l = Zu(s, r), u = Zu(a, i, o), c = ec(l), d = ec(u);
  e.modifiersData[t] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const fx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: dx
};
function px(n, e, t) {
  var r = Vt(n), i = [ut, lt].indexOf(r) >= 0 ? -1 : 1, o = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, s = o[0], a = o[1];
  return s = s || 0, a = (a || 0) * i, [ut, Et].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function hx(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, o = i === void 0 ? [0, 0] : i, s = Zf.reduce(function(c, d) {
    return c[d] = px(d, e.rects, o), c;
  }, {}), a = s[e.placement], l = a.x, u = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += u), e.modifiersData[r] = s;
}
const mx = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: hx
};
function gx(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = ap({
    reference: e.rects.reference,
    element: e.rects.popper,
    placement: e.placement
  });
}
const vx = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: gx,
  data: {}
};
function yx(n) {
  return n === "x" ? "y" : "x";
}
function bx(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, a = s === void 0 ? !1 : s, l = t.boundary, u = t.rootBoundary, c = t.altBoundary, d = t.padding, p = t.tether, f = p === void 0 ? !0 : p, h = t.tetherOffset, m = h === void 0 ? 0 : h, g = bi(e, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), y = Vt(e.placement), S = Tr(e.placement), C = !S, v = Ka(y), k = yx(v), x = e.modifiersData.popperOffsets, O = e.rects.reference, N = e.rects.popper, U = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, j = typeof U == "number" ? {
    mainAxis: U,
    altAxis: U
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, U), F = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (x) {
    if (o) {
      var H, ue = v === "y" ? lt : ut, be = v === "y" ? Ot : Et, ye = v === "y" ? "height" : "width", de = x[v], me = de + g[ue], Ie = de - g[be], we = f ? -N[ye] / 2 : 0, _e = S === wr ? O[ye] : N[ye], Te = S === wr ? -N[ye] : -O[ye], Je = e.elements.arrow, Me = f && Je ? qa(Je) : {
        width: 0,
        height: 0
      }, Ge = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : rp(), Re = Ge[ue], E = Ge[be], P = Yr(0, O[ye], Me[ye]), I = C ? O[ye] / 2 - we - P - Re - j.mainAxis : _e - P - Re - j.mainAxis, z = C ? -O[ye] / 2 + we + P + E + j.mainAxis : Te + P + E + j.mainAxis, te = e.elements.arrow && _i(e.elements.arrow), ge = te ? v === "y" ? te.clientTop || 0 : te.clientLeft || 0 : 0, Z = (H = F == null ? void 0 : F[v]) != null ? H : 0, Y = de + I - Z - ge, fe = de + z - Z, Ze = Yr(f ? So(me, Y) : me, de, f ? zn(Ie, fe) : Ie);
      x[v] = Ze, L[v] = Ze - de;
    }
    if (a) {
      var ke, Qn = v === "x" ? lt : ut, Xn = v === "x" ? Ot : Et, _t = x[k], $t = k === "y" ? "height" : "width", On = _t + g[Qn], Ht = _t - g[Xn], En = [lt, ut].indexOf(y) !== -1, Mi = (ke = F == null ? void 0 : F[k]) != null ? ke : 0, Ni = En ? On : _t - O[$t] - N[$t] - Mi + j.altAxis, Ai = En ? _t + O[$t] + N[$t] - Mi - j.altAxis : Ht, $i = f && En ? HS(Ni, _t, Ai) : Yr(f ? Ni : On, _t, f ? Ai : Ht);
      x[k] = $i, L[k] = $i - _t;
    }
    e.modifiersData[r] = L;
  }
}
const Sx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: bx,
  requiresIfExists: ["offset"]
};
function xx(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function wx(n) {
  return n === gt(n) || !Tt(n) ? Ja(n) : xx(n);
}
function kx(n) {
  var e = n.getBoundingClientRect(), t = kr(e.width) / n.offsetWidth || 1, r = kr(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function Cx(n, e, t) {
  t === void 0 && (t = !1);
  var r = Tt(e), i = Tt(e) && kx(e), o = Tn(e), s = Cr(n, i, t), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((Ft(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ya(o)) && (a = wx(e)), Tt(e) ? (l = Cr(e, !0), l.x += e.clientLeft, l.y += e.clientTop) : o && (l.x = Ga(o))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Tx(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), r = [];
  n.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    t.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(a) {
      if (!t.has(a)) {
        var l = e.get(a);
        l && i(l);
      }
    }), r.push(o);
  }
  return n.forEach(function(o) {
    t.has(o.name) || i(o);
  }), r;
}
function Ox(n) {
  var e = Tx(n);
  return VS.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Ex(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function _x(n) {
  var e = n.reduce(function(t, r) {
    var i = t[r.name];
    return t[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
var tc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function nc() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Mx(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, o = i === void 0 ? tc : i;
  return function(a, l, u) {
    u === void 0 && (u = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, tc, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, f = {
      state: c,
      setOptions: function(y) {
        var S = typeof y == "function" ? y(c.options) : y;
        m(), c.options = Object.assign({}, o, c.options, S), c.scrollParents = {
          reference: Jn(a) ? Qr(a) : a.contextElement ? Qr(a.contextElement) : [],
          popper: Qr(l)
        };
        var C = Ox(_x([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = C.filter(function(v) {
          return v.enabled;
        }), h(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var y = c.elements, S = y.reference, C = y.popper;
          if (nc(S, C)) {
            c.rects = {
              reference: Cx(S, _i(C), c.options.strategy === "fixed"),
              popper: qa(C)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(j) {
              return c.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var v = 0; v < c.orderedModifiers.length; v++) {
              if (c.reset === !0) {
                c.reset = !1, v = -1;
                continue;
              }
              var k = c.orderedModifiers[v], x = k.fn, O = k.options, N = O === void 0 ? {} : O, U = k.name;
              typeof x == "function" && (c = x({
                state: c,
                options: N,
                name: U,
                instance: f
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ex(function() {
        return new Promise(function(g) {
          f.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        m(), p = !0;
      }
    };
    if (!nc(a, l))
      return f;
    f.setOptions(u).then(function(g) {
      !p && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      c.orderedModifiers.forEach(function(g) {
        var y = g.name, S = g.options, C = S === void 0 ? {} : S, v = g.effect;
        if (typeof v == "function") {
          var k = v({
            state: c,
            name: y,
            instance: f,
            options: C
          }), x = function() {
          };
          d.push(k || x);
        }
      });
    }
    function m() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return f;
  };
}
var Nx = [ZS, vx, QS, ep, mx, cx, Sx, KS, fx], Ax = /* @__PURE__ */ Mx({
  defaultModifiers: Nx
}), $x = "tippy-box", lp = "tippy-content", Dx = "tippy-backdrop", up = "tippy-arrow", cp = "tippy-svg-arrow", Mn = {
  passive: !0,
  capture: !0
}, dp = function() {
  return document.body;
};
function Px(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function hs(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r ?? (Array.isArray(t) ? t[e] : t);
  }
  return n;
}
function Qa(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function fp(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function rc(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function Ix(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function Rx(n) {
  return n.split(/\s+/).filter(Boolean);
}
function lr(n) {
  return [].concat(n);
}
function ic(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function Lx(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function Vx(n) {
  return n.split("-")[0];
}
function xo(n) {
  return [].slice.call(n);
}
function oc(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function Xr() {
  return document.createElement("div");
}
function Si(n) {
  return ["Element", "Fragment"].some(function(e) {
    return Qa(n, e);
  });
}
function Bx(n) {
  return Qa(n, "NodeList");
}
function zx(n) {
  return Qa(n, "MouseEvent");
}
function jx(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function Fx(n) {
  return Si(n) ? [n] : Bx(n) ? xo(n) : Array.isArray(n) ? n : xo(document.querySelectorAll(n));
}
function ms(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function sc(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function Hx(n) {
  var e, t = lr(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function Ux(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var o = i.popperRect, s = i.popperState, a = i.props, l = a.interactiveBorder, u = Vx(s.placement), c = s.modifiersData.offset;
    if (!c)
      return !0;
    var d = u === "bottom" ? c.top.y : 0, p = u === "top" ? c.bottom.y : 0, f = u === "right" ? c.left.x : 0, h = u === "left" ? c.right.x : 0, m = o.top - r + d > l, g = r - o.bottom - p > l, y = o.left - t + f > l, S = t - o.right - h > l;
    return m || g || y || S;
  });
}
function gs(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function ac(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var Pt = {
  isTouch: !1
}, lc = 0;
function Wx() {
  Pt.isTouch || (Pt.isTouch = !0, window.performance && document.addEventListener("mousemove", pp));
}
function pp() {
  var n = performance.now();
  n - lc < 20 && (Pt.isTouch = !1, document.removeEventListener("mousemove", pp)), lc = n;
}
function qx() {
  var n = document.activeElement;
  if (jx(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function Kx() {
  document.addEventListener("touchstart", Wx, Mn), window.addEventListener("blur", qx);
}
var Jx = typeof window < "u" && typeof document < "u", Gx = Jx ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function ir(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function uc(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function Yx(n) {
  return uc(`
  %ctippy.js

  %c` + uc(n) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function hp(n) {
  return [
    Yx(n),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var xi;
process.env.NODE_ENV !== "production" && Qx();
function Qx() {
  xi = /* @__PURE__ */ new Set();
}
function Jt(n, e) {
  if (n && !xi.has(e)) {
    var t;
    xi.add(e), (t = console).warn.apply(t, hp(e));
  }
}
function ra(n, e) {
  if (n && !xi.has(e)) {
    var t;
    xi.add(e), (t = console).error.apply(t, hp(e));
  }
}
function Xx(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  ra(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), ra(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var mp = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, Zx = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, ft = Object.assign({
  appendTo: dp,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, mp, Zx), ew = Object.keys(ft), tw = function(e) {
  process.env.NODE_ENV !== "production" && vp(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    ft[r] = e[r];
  });
};
function gp(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var o = i.name, s = i.defaultValue;
    if (o) {
      var a;
      r[o] = n[o] !== void 0 ? n[o] : (a = ft[o]) != null ? a : s;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function nw(n, e) {
  var t = e ? Object.keys(gp(Object.assign({}, ft, {
    plugins: e
  }))) : ew, r = t.reduce(function(i, o) {
    var s = (n.getAttribute("data-tippy-" + o) || "").trim();
    if (!s)
      return i;
    if (o === "content")
      i[o] = s;
    else
      try {
        i[o] = JSON.parse(s);
      } catch {
        i[o] = s;
      }
    return i;
  }, {});
  return r;
}
function cc(n, e) {
  var t = Object.assign({}, e, {
    content: fp(e.content, [n])
  }, e.ignoreAttributes ? {} : nw(n, e.plugins));
  return t.aria = Object.assign({}, ft.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function vp(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = Ix(ft, Object.keys(mp)), o = !Px(i, r);
    o && (o = e.filter(function(s) {
      return s.name === r;
    }).length === 0), Jt(o, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var rw = function() {
  return "innerHTML";
};
function ia(n, e) {
  n[rw()] = e;
}
function dc(n) {
  var e = Xr();
  return n === !0 ? e.className = up : (e.className = cp, Si(n) ? e.appendChild(n) : ia(e, n)), e;
}
function fc(n, e) {
  Si(e.content) ? (ia(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? ia(n, e.content) : n.textContent = e.content);
}
function oa(n) {
  var e = n.firstElementChild, t = xo(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(lp);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(up) || r.classList.contains(cp);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(Dx);
    })
  };
}
function yp(n) {
  var e = Xr(), t = Xr();
  t.className = $x, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = Xr();
  r.className = lp, r.setAttribute("data-state", "hidden"), fc(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(o, s) {
    var a = oa(e), l = a.box, u = a.content, c = a.arrow;
    s.theme ? l.setAttribute("data-theme", s.theme) : l.removeAttribute("data-theme"), typeof s.animation == "string" ? l.setAttribute("data-animation", s.animation) : l.removeAttribute("data-animation"), s.inertia ? l.setAttribute("data-inertia", "") : l.removeAttribute("data-inertia"), l.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? l.setAttribute("role", s.role) : l.removeAttribute("role"), (o.content !== s.content || o.allowHTML !== s.allowHTML) && fc(u, n.props), s.arrow ? c ? o.arrow !== s.arrow && (l.removeChild(c), l.appendChild(dc(s.arrow))) : l.appendChild(dc(s.arrow)) : c && l.removeChild(c);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
yp.$$tippy = !0;
var iw = 1, Ji = [], vs = [];
function ow(n, e) {
  var t = cc(n, Object.assign({}, ft, gp(oc(e)))), r, i, o, s = !1, a = !1, l = !1, u = !1, c, d, p, f = [], h = rc(Y, t.interactiveDebounce), m, g = iw++, y = null, S = Lx(t.plugins), C = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, v = {
    // properties
    id: g,
    reference: n,
    popper: Xr(),
    popperInstance: y,
    props: t,
    state: C,
    plugins: S,
    // methods
    clearDelayTimeouts: Ni,
    setProps: Ai,
    setContent: $i,
    show: Mp,
    hide: Np,
    hideWithInteractivity: Ap,
    enable: En,
    disable: Mi,
    unmount: $p,
    destroy: Dp
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && ra(!0, "render() function has not been supplied."), v;
  var k = t.render(v), x = k.popper, O = k.onUpdate;
  x.setAttribute("data-tippy-root", ""), x.id = "tippy-" + v.id, v.popper = x, n._tippy = v, x._tippy = v;
  var N = S.map(function(_) {
    return _.fn(v);
  }), U = n.hasAttribute("aria-expanded");
  return te(), we(), de(), me("onCreate", [v]), t.showOnCreate && On(), x.addEventListener("mouseenter", function() {
    v.props.interactive && v.state.isVisible && v.clearDelayTimeouts();
  }), x.addEventListener("mouseleave", function() {
    v.props.interactive && v.props.trigger.indexOf("mouseenter") >= 0 && ue().addEventListener("mousemove", h);
  }), v;
  function j() {
    var _ = v.props.touch;
    return Array.isArray(_) ? _ : [_, 0];
  }
  function F() {
    return j()[0] === "hold";
  }
  function L() {
    var _;
    return !!((_ = v.props.render) != null && _.$$tippy);
  }
  function H() {
    return m || n;
  }
  function ue() {
    var _ = H().parentNode;
    return _ ? Hx(_) : document;
  }
  function be() {
    return oa(x);
  }
  function ye(_) {
    return v.state.isMounted && !v.state.isVisible || Pt.isTouch || c && c.type === "focus" ? 0 : hs(v.props.delay, _ ? 0 : 1, ft.delay);
  }
  function de(_) {
    _ === void 0 && (_ = !1), x.style.pointerEvents = v.props.interactive && !_ ? "" : "none", x.style.zIndex = "" + v.props.zIndex;
  }
  function me(_, q, G) {
    if (G === void 0 && (G = !0), N.forEach(function(ae) {
      ae[_] && ae[_].apply(ae, q);
    }), G) {
      var pe;
      (pe = v.props)[_].apply(pe, q);
    }
  }
  function Ie() {
    var _ = v.props.aria;
    if (_.content) {
      var q = "aria-" + _.content, G = x.id, pe = lr(v.props.triggerTarget || n);
      pe.forEach(function(ae) {
        var et = ae.getAttribute(q);
        if (v.state.isVisible)
          ae.setAttribute(q, et ? et + " " + G : G);
        else {
          var bt = et && et.replace(G, "").trim();
          bt ? ae.setAttribute(q, bt) : ae.removeAttribute(q);
        }
      });
    }
  }
  function we() {
    if (!(U || !v.props.aria.expanded)) {
      var _ = lr(v.props.triggerTarget || n);
      _.forEach(function(q) {
        v.props.interactive ? q.setAttribute("aria-expanded", v.state.isVisible && q === H() ? "true" : "false") : q.removeAttribute("aria-expanded");
      });
    }
  }
  function _e() {
    ue().removeEventListener("mousemove", h), Ji = Ji.filter(function(_) {
      return _ !== h;
    });
  }
  function Te(_) {
    if (!(Pt.isTouch && (l || _.type === "mousedown"))) {
      var q = _.composedPath && _.composedPath()[0] || _.target;
      if (!(v.props.interactive && ac(x, q))) {
        if (lr(v.props.triggerTarget || n).some(function(G) {
          return ac(G, q);
        })) {
          if (Pt.isTouch || v.state.isVisible && v.props.trigger.indexOf("click") >= 0)
            return;
        } else
          me("onClickOutside", [v, _]);
        v.props.hideOnClick === !0 && (v.clearDelayTimeouts(), v.hide(), a = !0, setTimeout(function() {
          a = !1;
        }), v.state.isMounted || Re());
      }
    }
  }
  function Je() {
    l = !0;
  }
  function Me() {
    l = !1;
  }
  function Ge() {
    var _ = ue();
    _.addEventListener("mousedown", Te, !0), _.addEventListener("touchend", Te, Mn), _.addEventListener("touchstart", Me, Mn), _.addEventListener("touchmove", Je, Mn);
  }
  function Re() {
    var _ = ue();
    _.removeEventListener("mousedown", Te, !0), _.removeEventListener("touchend", Te, Mn), _.removeEventListener("touchstart", Me, Mn), _.removeEventListener("touchmove", Je, Mn);
  }
  function E(_, q) {
    I(_, function() {
      !v.state.isVisible && x.parentNode && x.parentNode.contains(x) && q();
    });
  }
  function P(_, q) {
    I(_, q);
  }
  function I(_, q) {
    var G = be().box;
    function pe(ae) {
      ae.target === G && (gs(G, "remove", pe), q());
    }
    if (_ === 0)
      return q();
    gs(G, "remove", d), gs(G, "add", pe), d = pe;
  }
  function z(_, q, G) {
    G === void 0 && (G = !1);
    var pe = lr(v.props.triggerTarget || n);
    pe.forEach(function(ae) {
      ae.addEventListener(_, q, G), f.push({
        node: ae,
        eventType: _,
        handler: q,
        options: G
      });
    });
  }
  function te() {
    F() && (z("touchstart", Z, {
      passive: !0
    }), z("touchend", fe, {
      passive: !0
    })), Rx(v.props.trigger).forEach(function(_) {
      if (_ !== "manual")
        switch (z(_, Z), _) {
          case "mouseenter":
            z("mouseleave", fe);
            break;
          case "focus":
            z(Gx ? "focusout" : "blur", Ze);
            break;
          case "focusin":
            z("focusout", Ze);
            break;
        }
    });
  }
  function ge() {
    f.forEach(function(_) {
      var q = _.node, G = _.eventType, pe = _.handler, ae = _.options;
      q.removeEventListener(G, pe, ae);
    }), f = [];
  }
  function Z(_) {
    var q, G = !1;
    if (!(!v.state.isEnabled || ke(_) || a)) {
      var pe = ((q = c) == null ? void 0 : q.type) === "focus";
      c = _, m = _.currentTarget, we(), !v.state.isVisible && zx(_) && Ji.forEach(function(ae) {
        return ae(_);
      }), _.type === "click" && (v.props.trigger.indexOf("mouseenter") < 0 || s) && v.props.hideOnClick !== !1 && v.state.isVisible ? G = !0 : On(_), _.type === "click" && (s = !G), G && !pe && Ht(_);
    }
  }
  function Y(_) {
    var q = _.target, G = H().contains(q) || x.contains(q);
    if (!(_.type === "mousemove" && G)) {
      var pe = $t().concat(x).map(function(ae) {
        var et, bt = ae._tippy, Zn = (et = bt.popperInstance) == null ? void 0 : et.state;
        return Zn ? {
          popperRect: ae.getBoundingClientRect(),
          popperState: Zn,
          props: t
        } : null;
      }).filter(Boolean);
      Ux(pe, _) && (_e(), Ht(_));
    }
  }
  function fe(_) {
    var q = ke(_) || v.props.trigger.indexOf("click") >= 0 && s;
    if (!q) {
      if (v.props.interactive) {
        v.hideWithInteractivity(_);
        return;
      }
      Ht(_);
    }
  }
  function Ze(_) {
    v.props.trigger.indexOf("focusin") < 0 && _.target !== H() || v.props.interactive && _.relatedTarget && x.contains(_.relatedTarget) || Ht(_);
  }
  function ke(_) {
    return Pt.isTouch ? F() !== _.type.indexOf("touch") >= 0 : !1;
  }
  function Qn() {
    Xn();
    var _ = v.props, q = _.popperOptions, G = _.placement, pe = _.offset, ae = _.getReferenceClientRect, et = _.moveTransition, bt = L() ? oa(x).arrow : null, Zn = ae ? {
      getBoundingClientRect: ae,
      contextElement: ae.contextElement || H()
    } : n, el = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(Di) {
        var er = Di.state;
        if (L()) {
          var Pp = be(), jo = Pp.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Pi) {
            Pi === "placement" ? jo.setAttribute("data-placement", er.placement) : er.attributes.popper["data-popper-" + Pi] ? jo.setAttribute("data-" + Pi, "") : jo.removeAttribute("data-" + Pi);
          }), er.attributes.popper = {};
        }
      }
    }, _n = [{
      name: "offset",
      options: {
        offset: pe
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !et
      }
    }, el];
    L() && bt && _n.push({
      name: "arrow",
      options: {
        element: bt,
        padding: 3
      }
    }), _n.push.apply(_n, (q == null ? void 0 : q.modifiers) || []), v.popperInstance = Ax(Zn, x, Object.assign({}, q, {
      placement: G,
      onFirstUpdate: p,
      modifiers: _n
    }));
  }
  function Xn() {
    v.popperInstance && (v.popperInstance.destroy(), v.popperInstance = null);
  }
  function _t() {
    var _ = v.props.appendTo, q, G = H();
    v.props.interactive && _ === dp || _ === "parent" ? q = G.parentNode : q = fp(_, [G]), q.contains(x) || q.appendChild(x), v.state.isMounted = !0, Qn(), process.env.NODE_ENV !== "production" && Jt(v.props.interactive && _ === ft.appendTo && G.nextElementSibling !== x, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function $t() {
    return xo(x.querySelectorAll("[data-tippy-root]"));
  }
  function On(_) {
    v.clearDelayTimeouts(), _ && me("onTrigger", [v, _]), Ge();
    var q = ye(!0), G = j(), pe = G[0], ae = G[1];
    Pt.isTouch && pe === "hold" && ae && (q = ae), q ? r = setTimeout(function() {
      v.show();
    }, q) : v.show();
  }
  function Ht(_) {
    if (v.clearDelayTimeouts(), me("onUntrigger", [v, _]), !v.state.isVisible) {
      Re();
      return;
    }
    if (!(v.props.trigger.indexOf("mouseenter") >= 0 && v.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(_.type) >= 0 && s)) {
      var q = ye(!1);
      q ? i = setTimeout(function() {
        v.state.isVisible && v.hide();
      }, q) : o = requestAnimationFrame(function() {
        v.hide();
      });
    }
  }
  function En() {
    v.state.isEnabled = !0;
  }
  function Mi() {
    v.hide(), v.state.isEnabled = !1;
  }
  function Ni() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o);
  }
  function Ai(_) {
    if (process.env.NODE_ENV !== "production" && Jt(v.state.isDestroyed, ir("setProps")), !v.state.isDestroyed) {
      me("onBeforeUpdate", [v, _]), ge();
      var q = v.props, G = cc(n, Object.assign({}, q, oc(_), {
        ignoreAttributes: !0
      }));
      v.props = G, te(), q.interactiveDebounce !== G.interactiveDebounce && (_e(), h = rc(Y, G.interactiveDebounce)), q.triggerTarget && !G.triggerTarget ? lr(q.triggerTarget).forEach(function(pe) {
        pe.removeAttribute("aria-expanded");
      }) : G.triggerTarget && n.removeAttribute("aria-expanded"), we(), de(), O && O(q, G), v.popperInstance && (Qn(), $t().forEach(function(pe) {
        requestAnimationFrame(pe._tippy.popperInstance.forceUpdate);
      })), me("onAfterUpdate", [v, _]);
    }
  }
  function $i(_) {
    v.setProps({
      content: _
    });
  }
  function Mp() {
    process.env.NODE_ENV !== "production" && Jt(v.state.isDestroyed, ir("show"));
    var _ = v.state.isVisible, q = v.state.isDestroyed, G = !v.state.isEnabled, pe = Pt.isTouch && !v.props.touch, ae = hs(v.props.duration, 0, ft.duration);
    if (!(_ || q || G || pe) && !H().hasAttribute("disabled") && (me("onShow", [v], !1), v.props.onShow(v) !== !1)) {
      if (v.state.isVisible = !0, L() && (x.style.visibility = "visible"), de(), Ge(), v.state.isMounted || (x.style.transition = "none"), L()) {
        var et = be(), bt = et.box, Zn = et.content;
        ms([bt, Zn], 0);
      }
      p = function() {
        var _n;
        if (!(!v.state.isVisible || u)) {
          if (u = !0, x.offsetHeight, x.style.transition = v.props.moveTransition, L() && v.props.animation) {
            var zo = be(), Di = zo.box, er = zo.content;
            ms([Di, er], ae), sc([Di, er], "visible");
          }
          Ie(), we(), ic(vs, v), (_n = v.popperInstance) == null || _n.forceUpdate(), me("onMount", [v]), v.props.animation && L() && P(ae, function() {
            v.state.isShown = !0, me("onShown", [v]);
          });
        }
      }, _t();
    }
  }
  function Np() {
    process.env.NODE_ENV !== "production" && Jt(v.state.isDestroyed, ir("hide"));
    var _ = !v.state.isVisible, q = v.state.isDestroyed, G = !v.state.isEnabled, pe = hs(v.props.duration, 1, ft.duration);
    if (!(_ || q || G) && (me("onHide", [v], !1), v.props.onHide(v) !== !1)) {
      if (v.state.isVisible = !1, v.state.isShown = !1, u = !1, s = !1, L() && (x.style.visibility = "hidden"), _e(), Re(), de(!0), L()) {
        var ae = be(), et = ae.box, bt = ae.content;
        v.props.animation && (ms([et, bt], pe), sc([et, bt], "hidden"));
      }
      Ie(), we(), v.props.animation ? L() && E(pe, v.unmount) : v.unmount();
    }
  }
  function Ap(_) {
    process.env.NODE_ENV !== "production" && Jt(v.state.isDestroyed, ir("hideWithInteractivity")), ue().addEventListener("mousemove", h), ic(Ji, h), h(_);
  }
  function $p() {
    process.env.NODE_ENV !== "production" && Jt(v.state.isDestroyed, ir("unmount")), v.state.isVisible && v.hide(), v.state.isMounted && (Xn(), $t().forEach(function(_) {
      _._tippy.unmount();
    }), x.parentNode && x.parentNode.removeChild(x), vs = vs.filter(function(_) {
      return _ !== v;
    }), v.state.isMounted = !1, me("onHidden", [v]));
  }
  function Dp() {
    process.env.NODE_ENV !== "production" && Jt(v.state.isDestroyed, ir("destroy")), !v.state.isDestroyed && (v.clearDelayTimeouts(), v.unmount(), ge(), delete n._tippy, v.state.isDestroyed = !0, me("onDestroy", [v]));
  }
}
function Mr(n, e) {
  e === void 0 && (e = {});
  var t = ft.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (Xx(n), vp(e, t)), Kx();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = Fx(n);
  if (process.env.NODE_ENV !== "production") {
    var o = Si(r.content), s = i.length > 1;
    Jt(o && s, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var a = i.reduce(function(l, u) {
    var c = u && ow(u, r);
    return c && l.push(c), l;
  }, []);
  return Si(n) ? a[0] : a;
}
Mr.defaultProps = ft;
Mr.setDefaultProps = tw;
Mr.currentInput = Pt;
Object.assign({}, ep, {
  effect: function(e) {
    var t = e.state, r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow);
  }
});
Mr.setDefaultProps({
  render: yp
});
class sw {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: o = 250, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: a, state: l, from: u, to: c }) => {
      const { doc: d, selection: p } = l, { empty: f } = p, h = !d.textBetween(u, c).length && za(l.selection), m = this.element.contains(document.activeElement);
      return !(!(a.hasFocus() || m) || f || h || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: a }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      a != null && a.relatedTarget && (!((l = this.element.parentNode) === null || l === void 0) && l.contains(a.relatedTarget)) || (a == null ? void 0 : a.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (a) => {
      this.blurHandler({ event: a });
    }, this.handleDebouncedUpdate = (a, l) => {
      const u = !(l != null && l.selection.eq(a.state.selection)), c = !(l != null && l.doc.eq(a.state.doc));
      !u && !c || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(a, u, c, l);
      }, this.updateDelay));
    }, this.updateHandler = (a, l, u, c) => {
      var d, p, f;
      const { state: h, composing: m } = a, { selection: g } = h;
      if (m || !l && !u)
        return;
      this.createTooltip();
      const { ranges: S } = g, C = Math.min(...S.map((x) => x.$from.pos)), v = Math.max(...S.map((x) => x.$to.pos));
      if (!((d = this.shouldShow) === null || d === void 0 ? void 0 : d.call(this, {
        editor: this.editor,
        element: this.element,
        view: a,
        state: h,
        oldState: c,
        from: C,
        to: v
      }))) {
        this.hide();
        return;
      }
      (p = this.tippy) === null || p === void 0 || p.setProps({
        getReferenceClientRect: ((f = this.tippyOptions) === null || f === void 0 ? void 0 : f.getReferenceClientRect) || (() => {
          if (Yf(h.selection)) {
            let x = a.nodeDOM(C);
            if (x) {
              const O = x.dataset.nodeViewWrapper ? x : x.querySelector("[data-node-view-wrapper]");
              if (O && (x = O.firstChild), x)
                return x.getBoundingClientRect();
            }
          }
          return Qf(a, C, v);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = o, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.element.tabIndex = 0, !(this.tippy || !t) && (this.tippy = Mr(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    const { state: r } = e, i = r.selection.from !== r.selection.to;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const o = !(t != null && t.selection.eq(e.state.selection)), s = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, o, s, t);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const bp = (n) => new Ke({
  key: typeof n.pluginKey == "string" ? new yt(n.pluginKey) : n.pluginKey,
  view: (e) => new sw({ view: e, ...n })
});
Ve.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      bp({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
class aw {
  getTextContent(e) {
    return Jf(e, { textSerializers: Va(this.editor.schema) });
  }
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: s, state: a }) => {
      const { selection: l } = a, { $anchor: u, empty: c } = l, d = u.depth === 1, p = u.parent.isTextblock && !u.parent.type.spec.code && !u.parent.textContent && u.parent.childCount === 0 && !this.getTextContent(u.parent);
      return !(!s.hasFocus() || !c || !d || !p || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: s }) => {
      var a;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      s != null && s.relatedTarget && (!((a = this.element.parentNode) === null || a === void 0) && a.contains(s.relatedTarget)) || (s == null ? void 0 : s.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (s) => {
      this.blurHandler({ event: s });
    }, this.editor = e, this.element = t, this.view = r, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.element.tabIndex = 0, !(this.tippy || !t) && (this.tippy = Mr(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    var r, i, o;
    const { state: s } = e, { doc: a, selection: l } = s, { from: u, to: c } = l;
    if (t && t.doc.eq(a) && t.selection.eq(l))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: s,
      oldState: t
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((o = this.tippyOptions) === null || o === void 0 ? void 0 : o.getReferenceClientRect) || (() => Qf(e, u, c))
    }), this.show();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const Sp = (n) => new Ke({
  key: typeof n.pluginKey == "string" ? new yt(n.pluginKey) : n.pluginKey,
  view: (e) => new aw({ view: e, ...n })
});
Ve.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Sp({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
xe({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = $(null);
    return vt(() => {
      const { updateDelay: r, editor: i, pluginKey: o, shouldShow: s, tippyOptions: a } = n;
      i.registerPlugin(bp({
        updateDelay: r,
        editor: i,
        element: t.value,
        pluginKey: o,
        shouldShow: s,
        tippyOptions: a
      }));
    }), ko(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Gn("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function pc(n) {
  return jp((e, t) => ({
    get() {
      return e(), n;
    },
    set(r) {
      n = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    }
  }));
}
class lw extends CS {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = pc(this.view.state), this.reactiveExtensionStorage = pc(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), zp(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, t) {
    const r = super.registerPlugin(e, t);
    return this.reactiveState && (this.reactiveState.value = r), r;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    const t = super.unregisterPlugin(e);
    return this.reactiveState && t && (this.reactiveState.value = t), t;
  }
}
const hc = xe({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = $(), t = Zr();
    return Tc(() => {
      const r = n.editor;
      r && r.options.element && e.value && sa(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = Ae(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, t && (r.appContext = {
          ...t.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: t.provides
        }), r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), ko(() => {
      const r = n.editor;
      r && (r.contentComponent = null, r.appContext = null);
    }), { rootEl: e };
  },
  render() {
    return Gn("div", {
      ref: (n) => {
        this.rootEl = n;
      }
    });
  }
});
xe({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = $(null);
    return vt(() => {
      const { pluginKey: r, editor: i, tippyOptions: o, shouldShow: s } = n;
      i.registerPlugin(Sp({
        pluginKey: r,
        editor: i,
        element: t.value,
        tippyOptions: o,
        shouldShow: s
      }));
    }), ko(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Gn("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
xe({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return Gn(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
xe({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var n, e;
    return Gn(this.as, {
      // @ts-ignore
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
const mc = (n = {}) => {
  const e = Or();
  return vt(() => {
    e.value = new lw(n);
  }), ko(() => {
    var t, r, i;
    const o = (t = e.value) === null || t === void 0 ? void 0 : t.options.element, s = o == null ? void 0 : o.cloneNode(!0);
    (r = o == null ? void 0 : o.parentNode) === null || r === void 0 || r.replaceChild(s, o), (i = e.value) === null || i === void 0 || i.destroy();
  }), e;
}, uw = /^\s*>\s$/, cw = ct.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", qe(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      vi({
        find: uw,
        type: this.type
      })
    ];
  }
}), dw = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, fw = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, pw = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, hw = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, mw = jt.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", qe(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Sr({
        find: dw,
        type: this.type
      }),
      Sr({
        find: pw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      xr({
        find: fw,
        type: this.type
      }),
      xr({
        find: hw,
        type: this.type
      })
    ];
  }
}), gw = "listItem", gc = "textStyle", vc = /^\s*([-+*])\s$/, vw = ct.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", qe(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(gw, this.editor.getAttributes(gc)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = vi({
      find: vc,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = vi({
      find: vc,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(gc),
      editor: this.editor
    })), [
      n
    ];
  }
}), yw = /(^|[^`])`([^`]+)`(?!`)/, bw = /(^|[^`])`([^`]+)`(?!`)/g, Sw = jt.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", qe(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      Sr({
        find: yw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      xr({
        find: bw,
        type: this.type
      })
    ];
  }
}), xw = /^```([a-z]+)?[\s\n]$/, ww = /^~~~([a-z]+)?[\s\n]$/, kw = ct.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, o = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((s) => s.startsWith(t)).map((s) => s.replace(t, ""))[0];
          return o || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      qe(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: i } = t;
        if (!i || r.parent.type !== this.type)
          return !1;
        const o = r.parentOffset === r.parent.nodeSize - 2, s = r.parent.textContent.endsWith(`

`);
        return !o || !s ? !1 : n.chain().command(({ tr: a }) => (a.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: o } = t;
        if (!o || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const a = i.after();
        return a === void 0 ? !1 : r.nodeAt(a) ? n.commands.command(({ tr: u }) => (u.setSelection(ee.near(r.resolve(a))), !0)) : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      ea({
        find: xw,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      ea({
        find: ww,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new Ke({
        key: new yt("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, o = i == null ? void 0 : i.mode;
            if (!t || !o)
              return !1;
            const { tr: s, schema: a } = n.state, l = a.text(t.replace(/\r\n?/g, `
`));
            return s.replaceSelectionWith(this.type.create({ language: o }, l)), s.selection.$from.parent.type !== this.type && s.setSelection(X.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.setMeta("paste", !0), n.dispatch(s), !0;
          }
        }
      })
    ];
  }
}), Cw = ct.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function Tw(n = {}) {
  return new Ke({
    view(e) {
      return new Ow(e, n);
    }
  });
}
class Ow {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r, i = this.editorView.dom, o = i.getBoundingClientRect(), s = o.width / i.offsetWidth, a = o.height / i.offsetHeight;
    if (t) {
      let d = e.nodeBefore, p = e.nodeAfter;
      if (d || p) {
        let f = this.editorView.nodeDOM(this.cursorPos - (d ? d.nodeSize : 0));
        if (f) {
          let h = f.getBoundingClientRect(), m = d ? h.bottom : h.top;
          d && p && (m = (m + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let g = this.width / 2 * a;
          r = { left: h.left, right: h.right, top: m - g, bottom: m + g };
        }
      }
    }
    if (!r) {
      let d = this.editorView.coordsAtPos(this.cursorPos), p = this.width / 2 * s;
      r = { left: d.left - p, right: d.left + p, top: d.top, bottom: d.bottom };
    }
    let l = this.editorView.dom.offsetParent;
    this.element || (this.element = l.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let u, c;
    if (!l || l == document.body && getComputedStyle(l).position == "static")
      u = -pageXOffset, c = -pageYOffset;
    else {
      let d = l.getBoundingClientRect(), p = d.width / l.offsetWidth, f = d.height / l.offsetHeight;
      u = d.left - l.scrollLeft * p, c = d.top - l.scrollTop * f;
    }
    this.element.style.left = (r.left - u) / s + "px", this.element.style.top = (r.top - c) / a + "px", this.element.style.width = (r.right - r.left) / s + "px", this.element.style.height = (r.bottom - r.top) / a + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !o) {
      let s = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let a = Bd(this.editorView.state.doc, s, this.editorView.dragging.slice);
        a != null && (s = a);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
  }
}
const Ew = Ve.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      Tw(this.options)
    ];
  }
});
class Oe extends ee {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return Oe.valid(r) ? new Oe(r) : ee.near(r);
  }
  content() {
    return B.empty;
  }
  eq(e) {
    return e instanceof Oe && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new Oe(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Xa(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !_w(e) || !Mw(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e: for (; ; ) {
      if (!r && Oe.valid(e))
        return e;
      let i = e.pos, o = null;
      for (let s = e.depth; ; s--) {
        let a = e.node(s);
        if (t > 0 ? e.indexAfter(s) < a.childCount : e.index(s) > 0) {
          o = a.child(t > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        i += t;
        let l = e.doc.resolve(i);
        if (Oe.valid(l))
          return l;
      }
      for (; ; ) {
        let s = t > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !K.isSelectable(o)) {
            e = e.doc.resolve(i + o.nodeSize * t), r = !1;
            continue e;
          }
          break;
        }
        o = s, i += t;
        let a = e.doc.resolve(i);
        if (Oe.valid(a))
          return a;
      }
      return null;
    }
  }
}
Oe.prototype.visible = !1;
Oe.findFrom = Oe.findGapCursorFrom;
ee.jsonID("gapcursor", Oe);
class Xa {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Xa(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return Oe.valid(t) ? new Oe(t) : ee.near(t);
  }
}
function _w(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Mw(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Nw() {
  return new Ke({
    props: {
      decorations: Pw,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && Oe.valid(t) ? new Oe(t) : null;
      },
      handleClick: $w,
      handleKeyDown: Aw,
      handleDOMEvents: { beforeinput: Dw }
    }
  });
}
const Aw = Ef({
  ArrowLeft: Gi("horiz", -1),
  ArrowRight: Gi("horiz", 1),
  ArrowUp: Gi("vert", -1),
  ArrowDown: Gi("vert", 1)
});
function Gi(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, a = e > 0 ? s.$to : s.$from, l = s.empty;
    if (s instanceof X) {
      if (!o.endOfTextblock(t) || a.depth == 0)
        return !1;
      l = !1, a = r.doc.resolve(e > 0 ? a.after() : a.before());
    }
    let u = Oe.findGapCursorFrom(a, e, l);
    return u ? (i && i(r.tr.setSelection(new Oe(u))), !0) : !1;
  };
}
function $w(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!Oe.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && K.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new Oe(r))), !0);
}
function Dw(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof Oe))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = A.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = A.from(r[s].createAndFill(null, i));
  let o = n.state.tr.replace(t.pos, t.pos, new B(i, 0, 0));
  return o.setSelection(X.near(o.doc.resolve(t.pos + 1))), n.dispatch(o), !1;
}
function Pw(n) {
  if (!(n.selection instanceof Oe))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", Le.create(n.doc, [wt.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const Iw = Ve.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      Nw()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = re(W(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), Rw = ct.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", qe(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: o } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: a } = r.extensionManager, l = o || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: u, dispatch: c }) => {
            if (c && l && s) {
              const d = l.filter((p) => a.includes(p.type.name));
              u.ensureMarks(d);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), Lw = ct.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, qe(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => ea({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var wo = 200, je = function() {
};
je.prototype.append = function(e) {
  return e.length ? (e = je.from(e), !this.length && e || e.length < wo && this.leafAppend(e) || this.length < wo && e.leafPrepend(this) || this.appendInner(e)) : this;
};
je.prototype.prepend = function(e) {
  return e.length ? je.from(e).append(this) : this;
};
je.prototype.appendInner = function(e) {
  return new Vw(this, e);
};
je.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? je.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
je.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
je.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
je.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, t, r), i;
};
je.from = function(e) {
  return e instanceof je ? e : e && e.length ? new xp(e) : je.empty;
};
var xp = /* @__PURE__ */ (function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, a) {
    for (var l = o; l < s; l++)
      if (i(this.values[l], a + l) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, a) {
    for (var l = o - 1; l >= s; l--)
      if (i(this.values[l], a + l) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= wo)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= wo)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
})(je);
je.empty = new xp([]);
var Vw = /* @__PURE__ */ (function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var a = this.left.length;
    if (i < a && this.left.forEachInner(r, i, Math.min(o, a), s) === !1 || o > a && this.right.forEachInner(r, Math.max(i - a, 0), Math.min(this.length, o) - a, s + a) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var a = this.left.length;
    if (i > a && this.right.forEachInvertedInner(r, i - a, Math.max(o, a) - a, s + a) === !1 || o < a && this.left.forEachInvertedInner(r, Math.min(i, a), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
})(je);
const Bw = 500;
class At {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    t && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, a, l, u = [], c = [];
    return this.items.forEach((d, p) => {
      if (!d.step) {
        i || (i = this.remapping(r, p + 1), o = i.maps.length), o--, c.push(d);
        return;
      }
      if (i) {
        c.push(new Dt(d.map));
        let f = d.step.map(i.slice(o)), h;
        f && s.maybeStep(f).doc && (h = s.mapping.maps[s.mapping.maps.length - 1], u.push(new Dt(h, void 0, void 0, u.length + c.length))), o--, h && i.appendMap(h, o);
      } else
        s.maybeStep(d.step);
      if (d.selection)
        return a = i ? d.selection.map(i.slice(o)) : d.selection, l = new At(this.items.slice(0, r).append(c.reverse().concat(u)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: l, transform: s, selection: a };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let o = [], s = this.eventCount, a = this.items, l = !i && a.length ? a.get(a.length - 1) : null;
    for (let c = 0; c < e.steps.length; c++) {
      let d = e.steps[c].invert(e.docs[c]), p = new Dt(e.mapping.maps[c], d, t), f;
      (f = l && l.merge(p)) && (p = f, c ? o.pop() : a = a.slice(0, a.length - 1)), o.push(p), t && (s++, t = void 0), i || (l = p);
    }
    let u = s - r.depth;
    return u > jw && (a = zw(a, u), s -= u), new At(a.append(o), s);
  }
  remapping(e, t) {
    let r = new ci();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new At(this.items.append(e.map((t) => new Dt(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), o = e.mapping, s = e.steps.length, a = this.eventCount;
    this.items.forEach((p) => {
      p.selection && a--;
    }, i);
    let l = t;
    this.items.forEach((p) => {
      let f = o.getMirror(--l);
      if (f == null)
        return;
      s = Math.min(s, f);
      let h = o.maps[f];
      if (p.step) {
        let m = e.steps[f].invert(e.docs[f]), g = p.selection && p.selection.map(o.slice(l + 1, f));
        g && a++, r.push(new Dt(h, m, g));
      } else
        r.push(new Dt(h));
    }, i);
    let u = [];
    for (let p = t; p < s; p++)
      u.push(new Dt(o.maps[p]));
    let c = this.items.slice(0, i).append(u).append(r), d = new At(c, a);
    return d.emptyItemCount() > Bw && (d = d.compress(this.items.length - r.length)), d;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], o = 0;
    return this.items.forEach((s, a) => {
      if (a >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let l = s.step.map(t.slice(r)), u = l && l.getMap();
        if (r--, u && t.appendMap(u, r), l) {
          let c = s.selection && s.selection.map(t.slice(r));
          c && o++;
          let d = new Dt(u.invert(), l, c), p, f = i.length - 1;
          (p = i.length && i[f].merge(d)) ? i[f] = p : i.push(d);
        }
      } else s.map && r--;
    }, this.items.length, 0), new At(je.from(i.reverse()), o);
  }
}
At.empty = new At(je.empty, 0);
function zw(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class Dt {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new Dt(t.getMap().invert(), t, this.selection);
    }
  }
}
class ln {
  constructor(e, t, r, i, o) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const jw = 20;
function Fw(n, e, t, r) {
  let i = t.getMeta(jn), o;
  if (i)
    return i.historyState;
  t.getMeta(Ww) && (n = new ln(n.done, n.undone, null, 0, -1));
  let s = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (s && s.getMeta(jn))
    return s.getMeta(jn).redo ? new ln(n.done.addTransform(t, void 0, r, to(e)), n.undone, yc(t.mapping.maps), n.prevTime, n.prevComposition) : new ln(n.done, n.undone.addTransform(t, void 0, r, to(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let a = t.getMeta("composition"), l = n.prevTime == 0 || !s && n.prevComposition != a && (n.prevTime < (t.time || 0) - r.newGroupDelay || !Hw(t, n.prevRanges)), u = s ? ys(n.prevRanges, t.mapping) : yc(t.mapping.maps);
    return new ln(n.done.addTransform(t, l ? e.selection.getBookmark() : void 0, r, to(e)), At.empty, u, t.time, a ?? n.prevComposition);
  } else return (o = t.getMeta("rebased")) ? new ln(n.done.rebased(t, o), n.undone.rebased(t, o), ys(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new ln(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), ys(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function Hw(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (t = !0);
  }), t;
}
function yc(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, i, o, s) => e.push(o, s));
  return e;
}
function ys(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), o = e.map(n[r + 1], -1);
    i <= o && t.push(i, o);
  }
  return t;
}
function Uw(n, e, t) {
  let r = to(e), i = jn.get(e).spec.config, o = (t ? n.undone : n.done).popEvent(e, r);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), a = (t ? n.done : n.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), l = new ln(t ? a : o.remaining, t ? o.remaining : a, null, 0, -1);
  return o.transform.setSelection(s).setMeta(jn, { redo: t, historyState: l });
}
let bs = !1, bc = null;
function to(n) {
  let e = n.plugins;
  if (bc != e) {
    bs = !1, bc = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        bs = !0;
        break;
      }
  }
  return bs;
}
const jn = new yt("history"), Ww = new yt("closeHistory");
function qw(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new Ke({
    key: jn,
    state: {
      init() {
        return new ln(At.empty, At.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return Fw(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? kp : r == "historyRedo" ? Cp : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function wp(n, e) {
  return (t, r) => {
    let i = jn.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let o = Uw(i, t, n);
      o && r(e ? o.scrollIntoView() : o);
    }
    return !0;
  };
}
const kp = wp(!1, !0), Cp = wp(!0, !0), Kw = Ve.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => kp(n, e),
      redo: () => ({ state: n, dispatch: e }) => Cp(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      qw(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), Jw = ct.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", qe(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        if (!OS(e, e.schema.nodes[this.name]))
          return !1;
        const { selection: t } = e, { $from: r, $to: i } = t, o = n();
        return r.parentOffset === 0 ? o.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: i.pos
        }, {
          type: this.name
        }) : Yf(t) ? o.insertContentAt(i.pos, {
          type: this.name
        }) : o.insertContent({ type: this.name }), o.command(({ tr: s, dispatch: a }) => {
          var l;
          if (a) {
            const { $to: u } = s.selection, c = u.end();
            if (u.nodeAfter)
              u.nodeAfter.isTextblock ? s.setSelection(X.create(s.doc, u.pos + 1)) : u.nodeAfter.isBlock ? s.setSelection(K.create(s.doc, u.pos)) : s.setSelection(X.create(s.doc, u.pos));
            else {
              const d = (l = u.parent.type.contentMatch.defaultType) === null || l === void 0 ? void 0 : l.create();
              d && (s.insert(c, d), s.setSelection(X.create(s.doc, c + 1)));
            }
            s.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      TS({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), Gw = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Yw = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Qw = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Xw = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Zw = jt.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", qe(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Sr({
        find: Gw,
        type: this.type
      }),
      Sr({
        find: Qw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      xr({
        find: Yw,
        type: this.type
      }),
      xr({
        find: Xw,
        type: this.type
      })
    ];
  }
}), ek = ct.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", qe(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), tk = "listItem", Sc = "textStyle", xc = /^(\d+)\.\s$/, nk = ct.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (n) => n.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", qe(this.options.HTMLAttributes, t), 0] : ["ol", qe(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(tk, this.editor.getAttributes(Sc)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = vi({
      find: xc,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = vi({
      find: xc,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Sc) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), rk = ct.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", qe(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), ik = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, ok = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, sk = jt.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", qe(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      Sr({
        find: ik,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      xr({
        find: ok,
        type: this.type
      })
    ];
  }
}), ak = ct.create({
  name: "text",
  group: "inline"
}), wc = Ve.create({
  name: "starterKit",
  addExtensions() {
    const n = [];
    return this.options.bold !== !1 && n.push(mw.configure(this.options.bold)), this.options.blockquote !== !1 && n.push(cw.configure(this.options.blockquote)), this.options.bulletList !== !1 && n.push(vw.configure(this.options.bulletList)), this.options.code !== !1 && n.push(Sw.configure(this.options.code)), this.options.codeBlock !== !1 && n.push(kw.configure(this.options.codeBlock)), this.options.document !== !1 && n.push(Cw.configure(this.options.document)), this.options.dropcursor !== !1 && n.push(Ew.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && n.push(Iw.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && n.push(Rw.configure(this.options.hardBreak)), this.options.heading !== !1 && n.push(Lw.configure(this.options.heading)), this.options.history !== !1 && n.push(Kw.configure(this.options.history)), this.options.horizontalRule !== !1 && n.push(Jw.configure(this.options.horizontalRule)), this.options.italic !== !1 && n.push(Zw.configure(this.options.italic)), this.options.listItem !== !1 && n.push(ek.configure(this.options.listItem)), this.options.orderedList !== !1 && n.push(nk.configure(this.options.orderedList)), this.options.paragraph !== !1 && n.push(rk.configure(this.options.paragraph)), this.options.strike !== !1 && n.push(sk.configure(this.options.strike)), this.options.text !== !1 && n.push(ak.configure(this.options.text)), n;
  }
}), kc = jt.create({
  name: "deletion",
  addAttributes() {
    return {
      user: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "del",
        getAttrs: (n) => typeof n == "string" ? {} : {
          user: n.getAttribute("data-user")
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const e = n.user || "unknown";
    return ["del", qe(
      {
        title: `新增者：${e}`
        // hover 顯示用戶名稱
      },
      n
    ), 0];
  },
  addCommands() {
    return {
      setDeletion: (n) => ({ commands: e }) => e.setMark(this.name, n)
    };
  }
}), lk = Ve.create({
  name: "deletionOnKey",
  addKeyboardShortcuts() {
    return {
      Backspace: ({ editor: n }) => {
        const { state: e, commands: t } = n, { from: r, to: i } = e.selection, o = this.options.user;
        return r === i ? !1 : (t.setMark("deletion", { user: o }), !0);
      },
      Delete: ({ editor: n }) => {
        const { state: e, commands: t } = n, { from: r, to: i } = e.selection, o = this.options.user;
        return r === i ? !1 : (t.setMark("deletion", { user: o }), !0);
      }
    };
  }
}), Cc = jt.create({
  name: "insertion",
  addAttributes() {
    return {
      user: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "span[data-insertion]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const e = n.user || "unknown";
    return [
      "span",
      qe(
        {
          "data-insertion": "true",
          style: "color: green; background-color: #e6ffe6;",
          title: `新增者：${e}`
          // hover 顯示用戶名稱
        },
        n
      ),
      0
    ];
  },
  addCommands() {
    return {
      setInsertion: (n) => ({ commands: e }) => e.setMark(this.name, n),
      unsetInsertion: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  }
}), uk = Ve.create({
  name: "insertionOnInput",
  addProseMirrorPlugins() {
    return [
      new Ke({
        key: new yt("insertionOnInput"),
        props: {
          handleTextInput: (n, e, t, r) => {
            const { state: i, dispatch: o } = n, { tr: s, schema: a } = i, l = this.options.user, u = a.marks.deletion, c = a.marks.insertion;
            if (s.insertText(r, e, t), u && s.removeMark(e, e + r.length, u), c) {
              const d = c.create({ user: l });
              s.addMark(e, e + r.length, d);
            }
            return o(s), !0;
          }
        }
      })
    ];
  }
}), ck = { class: "p-4 space-y-4" }, dk = { class: "space-x-2" }, fk = {
  key: 0,
  class: "prose border p-4 rounded shadow bg-gray-50 relative"
}, pk = ["innerHTML"], Yi = "欣怡", hk = /* @__PURE__ */ xe({
  __name: "TiptapEditor",
  setup(n) {
    const e = mc({
      content: "<p>Hello 選文字後按 Backspace 就會標記刪除</p>",
      extensions: [
        wc,
        kc.configure({ user: Yi }),
        lk.configure({ user: Yi }),
        Cc.configure({ user: Yi }),
        uk.configure({ user: Yi })
      ]
    }), t = mc({
      editable: !1,
      extensions: [
        wc,
        kc,
        Cc
      ]
    }), r = $(""), i = () => {
      var u;
      const l = (u = e.value) == null ? void 0 : u.getJSON();
      l && (localStorage.setItem("draft", JSON.stringify(l)), alert("草稿已儲存！"));
    }, o = () => {
      var u;
      const l = localStorage.getItem("draft");
      if (l) {
        const c = JSON.parse(l);
        (u = e.value) == null || u.commands.setContent(c);
      }
    }, s = () => {
      var u;
      const l = localStorage.getItem("draft");
      if (l) {
        const c = JSON.parse(l);
        (u = t.value) == null || u.commands.setContent(c);
      }
    }, a = () => {
      var c;
      const l = ((c = e.value) == null ? void 0 : c.getHTML()) || "", u = new DOMParser().parseFromString(l, "text/html");
      u.querySelectorAll("del").forEach((d) => d.remove()), u.querySelectorAll("span[data-insertion]").forEach((d) => {
        const p = d, f = document.createTextNode(p.textContent || "");
        d.replaceWith(f);
      }), r.value = u.body.innerHTML;
    };
    return (l, u) => {
      const c = R("Button");
      return w(), M("div", ck, [
        b("div", null, [
          u[0] || (u[0] = b("h2", { class: "text-lg font-semibold mb-2" }, "內容編輯區", -1)),
          T(Ae(hc), {
            editor: Ae(e),
            class: "border border-gray-300 p-4 rounded shadow-sm min-h-[150px]"
          }, null, 8, ["editor"])
        ]),
        b("div", dk, [
          T(c, {
            label: "儲存草稿",
            onClick: i
          }),
          T(c, {
            label: "載入草稿到原來的textarea",
            onClick: o
          }),
          T(c, {
            label: "載入草稿到下方預覽",
            onClick: s
          }),
          T(c, {
            label: "審核變更",
            onClick: a,
            severity: "warning"
          })
        ]),
        b("div", null, [
          u[1] || (u[1] = b("h3", { class: "font-bold" }, "草稿預覽（唯讀）", -1)),
          T(Ae(hc), {
            editor: Ae(t),
            class: "border p-2 rounded shadow bg-gray-50"
          }, null, 8, ["editor"])
        ]),
        r.value ? (w(), M("div", fk, [
          u[2] || (u[2] = b("h4", null, "審核後結果：", -1)),
          b("div", { innerHTML: r.value }, null, 8, pk)
        ])) : Hn("", !0)
      ]);
    };
  }
}), mk = /* @__PURE__ */ xn(hk, [["__scopeId", "data-v-fcc13030"]]), gk = /* @__PURE__ */ xe({
  __name: "Textcheck",
  setup(n) {
    return (e, t) => (w(), oe(mk));
  }
}), nn = {
  getProductsData() {
    return [
      {
        id: "005",
        check: "1",
        status: "A",
        feeno: "0201234",
        name: "林偉哲",
        sex: "男",
        birthday: "1971-08-30(52y11m17d)",
        tag: [
          {
            id: "tag1",
            tagname: "跌",
            button: "0",
            color: "danger"
          }
        ],
        din: "0",
        page: [
          {
            pagename: "報",
            button: "0"
          },
          {
            pagename: "危",
            button: "0"
          }
        ]
      },
      {
        id: "009",
        check: "0",
        status: "",
        feeno: "",
        name: "陳大興",
        sex: "男",
        birthday: "",
        tag: [],
        din: "1",
        page: []
      },
      {
        id: "001",
        check: "1",
        status: "C",
        feeno: "0201235",
        name: "林小美",
        sex: "女",
        birthday: "2013-03-20(11y4m17d)",
        tag: [
          {
            id: "tag1",
            tagname: "跌",
            button: "0",
            color: "danger"
          },
          {
            id: "tag2",
            tagname: "管理",
            button: "0",
            color: "info"
          }
        ],
        din: "1",
        page: []
      }
    ];
  },
  getProductsWithOrdersData() {
    return [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description1111111111111111111111111111111111111111111111111111",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1000-0",
            productCode: "f230fh0g3",
            date: "2020-09-13",
            amount: 65,
            quantity: 1,
            customer: "David James",
            status: "PENDING"
          },
          {
            id: "1000-1",
            productCode: "f230fh0g3",
            date: "2020-05-14",
            amount: 130,
            quantity: 2,
            customer: "Leon Rodrigues",
            status: "DELIVERED"
          },
          {
            id: "1000-2",
            productCode: "f230fh0g3",
            date: "2019-01-04",
            amount: 65,
            quantity: 1,
            customer: "Juan Alejandro",
            status: "RETURNED"
          },
          {
            id: "1000-3",
            productCode: "f230fh0g3",
            date: "2020-09-13",
            amount: 195,
            quantity: 3,
            customer: "Claire Morrow",
            status: "CANCELLED"
          }
        ]
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1001-0",
            productCode: "nvklal433",
            date: "2020-05-14",
            amount: 72,
            quantity: 1,
            customer: "Maisha Jefferson",
            status: "DELIVERED"
          },
          {
            id: "1001-1",
            productCode: "nvklal433",
            date: "2020-02-28",
            amount: 144,
            quantity: 2,
            customer: "Octavia Murillo",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1002-0",
            productCode: "zz21cz3c1",
            date: "2020-07-05",
            amount: 79,
            quantity: 1,
            customer: "Stacey Leja",
            status: "DELIVERED"
          },
          {
            id: "1002-1",
            productCode: "zz21cz3c1",
            date: "2020-02-06",
            amount: 79,
            quantity: 1,
            customer: "Ashley Wickens",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "blue-t-shirt.jpg",
        price: 29,
        category: "Clothing",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: []
      },
      {
        id: "1004",
        code: "h456wer53",
        name: "Bracelet",
        description: "Product Description11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        image: "bracelet.jpg",
        price: 15,
        category: "Accessories",
        quantity: 73,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1004-0",
            productCode: "h456wer53",
            date: "2020-09-05",
            amount: 60,
            quantity: 4,
            customer: "Mayumi Misaki",
            status: "PENDING"
          },
          {
            id: "1004-1",
            productCode: "h456wer53",
            date: "2019-04-16",
            amount: 2,
            quantity: 30,
            customer: "Francesco Salvatore",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1005",
        code: "av2231fwg",
        name: "Brown Purse",
        description: "Product Description",
        image: "brown-purse.jpg",
        price: 120,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        orders: [
          {
            id: "1005-0",
            productCode: "av2231fwg",
            date: "2020-01-25",
            amount: 120,
            quantity: 1,
            customer: "Isabel Sinclair",
            status: "RETURNED"
          },
          {
            id: "1005-1",
            productCode: "av2231fwg",
            date: "2019-03-12",
            amount: 240,
            quantity: 2,
            customer: "Lionel Clifford",
            status: "DELIVERED"
          },
          {
            id: "1005-2",
            productCode: "av2231fwg",
            date: "2019-05-05",
            amount: 120,
            quantity: 1,
            customer: "Cody Chavez",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1006",
        code: "bib36pfvm",
        name: "Chakra Bracelet",
        description: "Product Description",
        image: "chakra-bracelet.jpg",
        price: 32,
        category: "Accessories",
        quantity: 5,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1006-0",
            productCode: "bib36pfvm",
            date: "2020-02-24",
            amount: 32,
            quantity: 1,
            customer: "Arvin Darci",
            status: "DELIVERED"
          },
          {
            id: "1006-1",
            productCode: "bib36pfvm",
            date: "2020-01-14",
            amount: 64,
            quantity: 2,
            customer: "Izzy Jones",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1007",
        code: "mbvjkgip5",
        name: "Galaxy Earrings",
        description: "Product Description1111111111111111111111111111111111111111111111111111",
        image: "galaxy-earrings.jpg",
        price: 34,
        category: "Accessories",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1007-0",
            productCode: "mbvjkgip5",
            date: "2020-06-19",
            amount: 34,
            quantity: 1,
            customer: "Jennifer Smith",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1008",
        code: "vbb124btr",
        name: "Game Controller",
        description: "Product Description",
        image: "game-controller.jpg",
        price: 99,
        category: "Electronics",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 4,
        orders: [
          {
            id: "1008-0",
            productCode: "vbb124btr",
            date: "2020-01-05",
            amount: 99,
            quantity: 1,
            customer: "Jeanfrancois David",
            status: "DELIVERED"
          },
          {
            id: "1008-1",
            productCode: "vbb124btr",
            date: "2020-01-19",
            amount: 198,
            quantity: 2,
            customer: "Ivar Greenwood",
            status: "RETURNED"
          }
        ]
      },
      {
        id: "1009",
        code: "cm230f032",
        name: "Gaming Set",
        description: "Product Description",
        image: "gaming-set.jpg",
        price: 299,
        category: "Electronics",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 3,
        orders: [
          {
            id: "1009-0",
            productCode: "cm230f032",
            date: "2020-06-24",
            amount: 299,
            quantity: 1,
            customer: "Kadeem Mujtaba",
            status: "PENDING"
          },
          {
            id: "1009-1",
            productCode: "cm230f032",
            date: "2020-05-11",
            amount: 299,
            quantity: 1,
            customer: "Ashley Wickens",
            status: "DELIVERED"
          },
          {
            id: "1009-2",
            productCode: "cm230f032",
            date: "2019-02-07",
            amount: 299,
            quantity: 1,
            customer: "Julie Johnson",
            status: "DELIVERED"
          },
          {
            id: "1009-3",
            productCode: "cm230f032",
            date: "2020-04-26",
            amount: 299,
            quantity: 1,
            customer: "Tony Costa",
            status: "CANCELLED"
          }
        ]
      },
      {
        id: "1010",
        code: "plb34234v",
        name: "Gold Phone Case",
        description: "Product Description1111111111111111111111111111111111111111111111111111",
        image: "gold-phone-case.jpg",
        price: 24,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        orders: [
          {
            id: "1010-0",
            productCode: "plb34234v",
            date: "2020-02-04",
            amount: 24,
            quantity: 1,
            customer: "James Butt",
            status: "DELIVERED"
          },
          {
            id: "1010-1",
            productCode: "plb34234v",
            date: "2020-05-05",
            amount: 48,
            quantity: 2,
            customer: "Josephine Darakjy",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1011",
        code: "4920nnc2d",
        name: "Green Earbuds",
        description: "Product Description",
        image: "green-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1011-0",
            productCode: "4920nnc2d",
            date: "2020-06-01",
            amount: 89,
            quantity: 1,
            customer: "Art Venere",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1012",
        code: "250vm23cc",
        name: "Green T-Shirt",
        description: "Product Description",
        image: "green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 74,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1012-0",
            productCode: "250vm23cc",
            date: "2020-02-05",
            amount: 49,
            quantity: 1,
            customer: "Lenna Paprocki",
            status: "DELIVERED"
          },
          {
            id: "1012-1",
            productCode: "250vm23cc",
            date: "2020-02-15",
            amount: 49,
            quantity: 1,
            customer: "Donette Foller",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1013",
        code: "fldsmn31b",
        name: "Grey T-Shirt",
        description: "Product Description",
        image: "grey-t-shirt.jpg",
        price: 48,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 3,
        orders: [
          {
            id: "1013-0",
            productCode: "fldsmn31b",
            date: "2020-04-01",
            amount: 48,
            quantity: 1,
            customer: "Simona Morasca",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1014",
        code: "waas1x2as",
        name: "Headphones",
        description: "Product Description",
        image: "headphones.jpg",
        price: 175,
        category: "Electronics",
        quantity: 8,
        inventoryStatus: "LOWSTOCK",
        rating: 5,
        orders: [
          {
            id: "1014-0",
            productCode: "waas1x2as",
            date: "2020-05-15",
            amount: 175,
            quantity: 1,
            customer: "Lenna Paprocki",
            status: "DELIVERED"
          },
          {
            id: "1014-1",
            productCode: "waas1x2as",
            date: "2020-01-02",
            amount: 175,
            quantity: 1,
            customer: "Donette Foller",
            status: "CANCELLED"
          }
        ]
      },
      {
        id: "1015",
        code: "vb34btbg5",
        name: "Light Green T-Shirt",
        description: "Product Description",
        image: "light-green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 34,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1015-0",
            productCode: "vb34btbg5",
            date: "2020-07-02",
            amount: 98,
            quantity: 2,
            customer: "Mitsue Tollner",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1016",
        code: "k8l6j58jl",
        name: "Lime Band",
        description: "Product Description",
        image: "lime-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 12,
        inventoryStatus: "INSTOCK",
        rating: 3,
        orders: []
      },
      {
        id: "1017",
        code: "v435nn85n",
        name: "Mini Speakers",
        description: "Product Description",
        image: "mini-speakers.jpg",
        price: 85,
        category: "Clothing",
        quantity: 42,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1017-0",
            productCode: "v435nn85n",
            date: "2020-07-12",
            amount: 85,
            quantity: 1,
            customer: "Minna Amigon",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1018",
        code: "09zx9c0zc",
        name: "Painted Phone Case",
        description: "Product Description",
        image: "painted-phone-case.jpg",
        price: 56,
        category: "Accessories",
        quantity: 41,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1018-0",
            productCode: "09zx9c0zc",
            date: "2020-07-01",
            amount: 56,
            quantity: 1,
            customer: "Abel Maclead",
            status: "DELIVERED"
          },
          {
            id: "1018-1",
            productCode: "09zx9c0zc",
            date: "2020-05-02",
            amount: 56,
            quantity: 1,
            customer: "Minna Amigon",
            status: "RETURNED"
          }
        ]
      },
      {
        id: "1019",
        code: "mnb5mb2m5",
        name: "Pink Band",
        description: "Product Description",
        image: "pink-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: []
      },
      {
        id: "1020",
        code: "r23fwf2w3",
        name: "Pink Purse",
        description: "Product Description",
        image: "pink-purse.jpg",
        price: 110,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        orders: [
          {
            id: "1020-0",
            productCode: "r23fwf2w3",
            date: "2020-05-29",
            amount: 110,
            quantity: 1,
            customer: "Kiley Caldarera",
            status: "DELIVERED"
          },
          {
            id: "1020-1",
            productCode: "r23fwf2w3",
            date: "2020-02-11",
            amount: 220,
            quantity: 2,
            customer: "Graciela Ruta",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1021",
        code: "pxpzczo23",
        name: "Purple Band",
        description: "Product Description",
        image: "purple-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 6,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1021-0",
            productCode: "pxpzczo23",
            date: "2020-02-02",
            amount: 79,
            quantity: 1,
            customer: "Cammy Albares",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1022",
        code: "2c42cb5cb",
        name: "Purple Gemstone Necklace",
        description: "Product Description",
        image: "purple-gemstone-necklace.jpg",
        price: 45,
        category: "Accessories",
        quantity: 62,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1022-0",
            productCode: "2c42cb5cb",
            date: "2020-06-29",
            amount: 45,
            quantity: 1,
            customer: "Mattie Poquette",
            status: "DELIVERED"
          },
          {
            id: "1022-1",
            productCode: "2c42cb5cb",
            date: "2020-02-11",
            amount: 135,
            quantity: 3,
            customer: "Meaghan Garufi",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1023",
        code: "5k43kkk23",
        name: "Purple T-Shirt",
        description: "Product Description",
        image: "purple-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 5,
        orders: [
          {
            id: "1023-0",
            productCode: "5k43kkk23",
            date: "2020-04-15",
            amount: 49,
            quantity: 1,
            customer: "Gladys Rim",
            status: "RETURNED"
          }
        ]
      },
      {
        id: "1024",
        code: "lm2tny2k4",
        name: "Shoes",
        description: "Product Description",
        image: "shoes.jpg",
        price: 64,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: []
      },
      {
        id: "1025",
        code: "nbm5mv45n",
        name: "Sneakers",
        description: "Product Description",
        image: "sneakers.jpg",
        price: 78,
        category: "Clothing",
        quantity: 52,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1025-0",
            productCode: "nbm5mv45n",
            date: "2020-02-19",
            amount: 78,
            quantity: 1,
            customer: "Yuki Whobrey",
            status: "DELIVERED"
          },
          {
            id: "1025-1",
            productCode: "nbm5mv45n",
            date: "2020-05-21",
            amount: 78,
            quantity: 1,
            customer: "Fletcher Flosi",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1026",
        code: "zx23zc42c",
        name: "Teal T-Shirt",
        description: "Product Description",
        image: "teal-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 3,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1026-0",
            productCode: "zx23zc42c",
            date: "2020-04-24",
            amount: 98,
            quantity: 2,
            customer: "Bette Nicka",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1027",
        code: "acvx872gc",
        name: "Yellow Earbuds",
        description: "Product Description",
        image: "yellow-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 35,
        inventoryStatus: "INSTOCK",
        rating: 3,
        orders: [
          {
            id: "1027-0",
            productCode: "acvx872gc",
            date: "2020-01-29",
            amount: 89,
            quantity: 1,
            customer: "Veronika Inouye",
            status: "DELIVERED"
          },
          {
            id: "1027-1",
            productCode: "acvx872gc",
            date: "2020-06-11",
            amount: 89,
            quantity: 1,
            customer: "Willard Kolmetz",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1028",
        code: "tx125ck42",
        name: "Yoga Mat",
        description: "Product Description",
        image: "yoga-mat.jpg",
        price: 20,
        category: "Fitness",
        quantity: 15,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: []
      },
      {
        id: "1029",
        code: "gwuby345v",
        name: "Yoga Set",
        description: "Product Description",
        image: "yoga-set.jpg",
        price: 20,
        category: "Fitness",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 8,
        orders: [
          {
            id: "1029-0",
            productCode: "gwuby345v",
            date: "2020-02-14",
            amount: 4,
            quantity: 80,
            customer: "Maryann Royster",
            status: "DELIVERED"
          }
        ]
      }
    ];
  },
  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },
  getProducts() {
    return Promise.resolve(this.getProductsData());
  },
  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },
  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  }
}, vk = { class: "card" }, yk = { class: "flex justify-end" }, bk = { key: 0 }, Sk = { key: 0 }, xk = { key: 1 }, wk = { key: 1 }, kk = { key: 0 }, Ck = { key: 1 }, Tk = { key: 2 }, Ok = {
  key: 2,
  class: "flex flex-wrap gap-1"
}, Ek = { key: 3 }, _k = { key: 0 }, Mk = { key: 1 }, Nk = {
  key: 4,
  class: "card flex flex-wrap gap-2"
}, Ak = { key: 5 }, $k = { class: "whitespace-normal w-80 break-word" }, Dk = {
  key: 0,
  class: "block text-gray-500 cursor-not-allowed",
  title: "此欄位不可編輯"
}, Pk = {
  key: 1,
  class: "block text-gray-500 cursor-not-allowed",
  title: "此欄位不可編輯"
}, Ik = { key: 0 }, Rk = { key: 0 }, Lk = { key: 1 }, Vk = { key: 1 }, Bk = { key: 0 }, zk = { key: 1 }, jk = { key: 2 }, Fk = {
  key: 2,
  class: "flex flex-wrap gap-1"
}, Hk = { key: 3 }, Uk = { key: 0 }, Wk = { key: 1 }, qk = {
  key: 4,
  class: "card flex flex-wrap gap-2"
}, Kk = { key: 5 }, Jk = { class: "block w-80 truncate" }, Gk = /* @__PURE__ */ xe({
  __name: "Datatable",
  setup(n) {
    function e(p) {
      return p.status === "C" ? "cursor-not-allowed" : "";
    }
    const t = $(), r = $(null), i = $([]), o = $([
      { field: "id", header: "診號" },
      { field: "check", header: "報到" },
      { field: "status", header: "狀態" },
      { field: "feeno", header: "病歷號" },
      { field: "name", header: "姓名" },
      { field: "sex", header: "性別" },
      { field: "birthday", header: "生日" },
      { field: "tag", header: "註記" },
      { field: "din", header: "身分" },
      { field: "page", header: "報告" }
    ]), s = $({
      global: { value: null, matchMode: V.CONTAINS },
      id: { value: null, matchMode: V.STARTS_WITH },
      check: { value: null, matchMode: V.STARTS_WITH },
      status: { value: null, matchMode: V.EQUALS },
      feeno: { value: null, matchMode: V.CONTAINS },
      name: { value: null, matchMode: V.CONTAINS },
      sex: { value: null, matchMode: V.EQUALS },
      birthday: { value: null, matchMode: V.CONTAINS },
      tag: { value: null, matchMode: V.CONTAINS },
      din: { value: null, matchMode: V.EQUALS },
      page: { value: null, matchMode: V.CONTAINS }
    });
    let a = null;
    function l({ props: p, context: f }) {
      const h = p.field ?? "", m = f == null ? void 0 : f.index;
      if (typeof m != "number") return {};
      m === 0 && a === null ? a = 0 : a != null && m === 0 && a++;
      const g = a !== null ? t.value[a] : void 0;
      return g ? u(g, h) ? {} : {
        class: "cursor-not-allowed text-gray-500",
        title: "此欄位不可編輯"
      } : {};
    }
    function u(p, f) {
      if (!p) return !0;
      const { status: h, sex: m } = p;
      return console.log("欄位:", f, "狀態:", h, "性別:", m), !(f === "sex" && m === "男");
    }
    vt(() => {
      nn.getProductsMini().then((p) => t.value = p);
    });
    const c = (p) => {
      const { data: f, newValue: h, field: m } = p;
      h != null && String(h).trim().length > 0 ? f[m] = h : console.warn("Invalid value. Cell edit canceled.");
    }, d = (p) => {
      let { newData: f, index: h } = p;
      t.value[h] = f;
    };
    return (p, f) => {
      const h = R("Tab"), m = R("TabList"), g = R("InputIcon"), y = R("InputText"), S = R("IconField"), C = R("Tag"), v = R("Column"), k = R("DataTable"), x = R("TabPanel"), O = R("Button"), N = R("TabPanels"), U = R("Tabs");
      return w(), M("div", vk, [
        f[16] || (f[16] = b("div", { class: "hidden" }, " text-red-100 text-red-800 bg-red-100 text-blue-100 text-blue-800 bg-blue-100 ", -1)),
        T(U, { value: "0" }, {
          default: D(() => [
            T(m, null, {
              default: D(() => [
                T(h, { value: "0" }, {
                  default: D(() => [...f[3] || (f[3] = [
                    J("乳房外科特別門診(早)", -1)
                  ])]),
                  _: 1
                }),
                T(h, { value: "1" }, {
                  default: D(() => [...f[4] || (f[4] = [
                    J("一般外科(午)", -1)
                  ])]),
                  _: 1
                }),
                T(h, { value: "2" }, {
                  default: D(() => [...f[5] || (f[5] = [
                    J("一般外科(晚)", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            T(N, null, {
              default: D(() => [
                T(x, { value: "0" }, {
                  default: D(() => [
                    T(k, {
                      selection: r.value,
                      "onUpdate:selection": f[1] || (f[1] = (j) => r.value = j),
                      filters: s.value,
                      dataKey: "id",
                      value: t.value,
                      editMode: "cell",
                      onCellEditComplete: c,
                      size: "small",
                      resizableColumns: "",
                      columnResizeMode: "fit",
                      showGridlines: "",
                      paginator: "",
                      rows: 10,
                      rowClass: e,
                      filterDisplay: "row"
                    }, {
                      header: D(() => [
                        b("div", yk, [
                          T(S, null, {
                            default: D(() => [
                              T(g, null, {
                                default: D(() => [...f[6] || (f[6] = [
                                  b("i", { class: "pi pi-search" }, null, -1)
                                ])]),
                                _: 1
                              }),
                              T(y, {
                                modelValue: s.value.global.value,
                                "onUpdate:modelValue": f[0] || (f[0] = (j) => s.value.global.value = j),
                                placeholder: "Keyword Search"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      default: D(() => [
                        (w(!0), M(he, null, Ee(o.value, (j) => (w(), oe(v, {
                          key: j.field,
                          field: j.field,
                          header: j.header,
                          class: "max-w-200 whitespace-normal break-word",
                          size: "small",
                          pt: {
                            bodyCell: l
                          }
                        }, {
                          body: D(({ data: F, field: L }) => [
                            L === "check" ? (w(), M("div", bk, [
                              F[L] === "1" ? (w(), M("span", Sk, [...f[7] || (f[7] = [
                                b("i", { class: "pi pi-check" }, null, -1)
                              ])])) : (w(), M("span", xk, [...f[8] || (f[8] = [
                                b("i", { class: "pi pi-times" }, null, -1)
                              ])]))
                            ])) : L === "status" ? (w(), M("div", wk, [
                              F[L] === "A" ? (w(), M("span", kk, [...f[9] || (f[9] = [
                                b("i", { class: "pi pi-times text-red-500" }, null, -1),
                                J("暫存", -1)
                              ])])) : F[L] === "C" ? (w(), M("span", Ck, [...f[10] || (f[10] = [
                                b("i", { class: "pi pi-check text-green-500" }, null, -1),
                                J("已完成", -1)
                              ])])) : (w(), M("span", Tk, "待看診"))
                            ])) : L === "tag" ? (w(), M("div", Ok, [
                              (w(!0), M(he, null, Ee(F[L], (H, ue) => (w(), oe(C, {
                                key: H.id || ue,
                                outlined: "",
                                class: en([
                                  H.color === "danger" ? "p-tag-danger" : H.color === "warning" ? "p-tag-warning" : H.color === "info" ? "p-tag-info" : H.color === "success" ? "p-tag-success" : "",
                                  "font-medium transition p-1 m-1",
                                  H.button === "0" ? "underline" : ""
                                ]),
                                value: H.tagname
                              }, null, 8, ["class", "value"]))), 128))
                            ])) : L === "din" ? (w(), M("div", Ek, [
                              F[L] === "1" ? (w(), M("span", _k, "健保")) : (w(), M("span", Mk, "自費"))
                            ])) : L === "page" ? (w(), M("div", Nk, [
                              (w(!0), M(he, null, Ee(F[L], (H, ue) => (w(), oe(C, {
                                key: H.id || ue,
                                severity: "secondary",
                                value: H.pagename
                              }, null, 8, ["value"]))), 128))
                            ])) : (w(), M("div", Ak, [
                              b("span", $k, De(typeof L == "string" && L in F ? F[L] : ""), 1)
                            ]))
                          ]),
                          editor: D(({ data: F, field: L }) => [
                            F.status === "C" ? (w(), M("span", Dk, De(L === "status" ? "已完成" : F[L]), 1)) : L === "sex" && F[L] === "男" ? (w(), M("span", Pk, De(F[L]), 1)) : (w(), oe(y, {
                              key: 2,
                              modelValue: F[L],
                              "onUpdate:modelValue": (H) => F[L] = H,
                              size: "small",
                              fluid: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                          ]),
                          filter: D(({ filterModel: F, filterCallback: L }) => [
                            T(y, {
                              modelValue: F.value,
                              "onUpdate:modelValue": (H) => F.value = H,
                              type: "text",
                              onInput: (H) => L()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                          ]),
                          _: 1
                        }, 8, ["field", "header", "pt"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["selection", "filters", "value"])
                  ]),
                  _: 1
                }),
                T(x, { value: "1" }, {
                  default: D(() => [
                    T(k, {
                      editingRows: i.value,
                      "onUpdate:editingRows": f[2] || (f[2] = (j) => i.value = j),
                      value: t.value,
                      editMode: "row",
                      dataKey: "id",
                      onRowEditSave: d,
                      size: "small",
                      resizableColumns: "",
                      columnResizeMode: "fit",
                      showGridlines: "",
                      paginator: "",
                      roweditoriniticon: "",
                      rows: 10,
                      pt: {
                        // table: { style: 'min-width: 50rem' },
                        // column: {
                        //     bodycell: ({ state }) => ({
                        //         style:  state['d_editing']&&'padding-top: 0.75rem; padding-bottom: 0.75rem'
                        //     })
                        // }
                      }
                    }, {
                      default: D(() => [
                        (w(!0), M(he, null, Ee(o.value, (j) => (w(), oe(v, {
                          key: j.field,
                          field: j.field,
                          header: j.header,
                          class: "max-w-200 truncate",
                          size: "small"
                        }, {
                          body: D(({ data: F, field: L }) => [
                            L === "check" ? (w(), M("div", Ik, [
                              F[L] === "1" ? (w(), M("span", Rk, [...f[11] || (f[11] = [
                                b("i", { class: "pi pi-check" }, null, -1)
                              ])])) : (w(), M("span", Lk, [...f[12] || (f[12] = [
                                b("i", { class: "pi pi-times" }, null, -1)
                              ])]))
                            ])) : L === "status" ? (w(), M("div", Vk, [
                              F[L] === "A" ? (w(), M("span", Bk, [...f[13] || (f[13] = [
                                b("i", { class: "pi pi-times text-red-500" }, null, -1),
                                J("暫存", -1)
                              ])])) : F[L] === "C" ? (w(), M("span", zk, [...f[14] || (f[14] = [
                                b("i", { class: "pi pi-check text-green-500" }, null, -1),
                                J("已完成", -1)
                              ])])) : (w(), M("span", jk, "待看診"))
                            ])) : L === "tag" ? (w(), M("div", Fk, [
                              (w(!0), M(he, null, Ee(F[L], (H, ue) => (w(), oe(C, {
                                key: H.id || ue,
                                class: en([
                                  H.color === "danger" ? "p-tag-danger" : H.color === "warning" ? "p-tag-warning" : H.color === "info" ? "p-tag-info" : H.color === "success" ? "p-tag-success" : "",
                                  "font-medium transition p-1 m-1",
                                  H.button === "0" ? "underline" : ""
                                ]),
                                value: H.tagname
                              }, null, 8, ["class", "value"]))), 128))
                            ])) : L === "din" ? (w(), M("div", Hk, [
                              F[L] === "1" ? (w(), M("span", Uk, "健保")) : (w(), M("span", Wk, "自費"))
                            ])) : L === "page" ? (w(), M("div", qk, [
                              (w(!0), M(he, null, Ee(F[L], (H, ue) => (w(), oe(C, {
                                key: H.id || ue,
                                severity: "secondary",
                                value: H.pagename
                              }, null, 8, ["value"]))), 128))
                            ])) : (w(), M("div", Kk, [
                              b("span", Jk, De(typeof L == "string" && L in F ? F[L] : ""), 1)
                            ]))
                          ]),
                          editor: D(({ data: F, field: L }) => [
                            T(y, {
                              modelValue: F[L],
                              "onUpdate:modelValue": (H) => F[L] = H,
                              autofocus: "",
                              fluid: "",
                              size: "small"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }, 8, ["field", "header"]))), 128)),
                        T(v, {
                          header: "操作",
                          size: "small"
                        }, {
                          body: D(({ editorInitCallback: j }) => [
                            T(O, {
                              size: "small",
                              label: "編輯",
                              icon: "pi pi-pencil",
                              severity: "secondary",
                              class: "p-link",
                              text: "",
                              onClick: j
                            }, null, 8, ["onClick"]),
                            T(O, {
                              size: "small",
                              label: "刪除",
                              icon: "pi pi-trash",
                              severity: "secondary",
                              text: ""
                            })
                          ]),
                          editor: D(({ editorSaveCallback: j, editorCancelCallback: F, index: L }) => [
                            T(O, {
                              label: "儲存",
                              icon: "pi pi-save",
                              text: "",
                              onClick: j
                            }, null, 8, ["onClick"]),
                            T(O, {
                              label: "取消",
                              icon: "pi pi-times",
                              severity: "danger",
                              text: "",
                              onClick: F
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["editingRows", "value"])
                  ]),
                  _: 1
                }),
                T(x, { value: "2" }, {
                  default: D(() => [...f[15] || (f[15] = [
                    b("p", { class: "m-0" }, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}), Yk = { class: "card" }, Qk = { class: "flex flex-wrap items-center justify-between gap-2" }, Xk = { key: 1 }, Zk = {
  __name: "DatatableSaveCell",
  setup(n) {
    const e = To(), t = $(), r = $([]), i = $({}), o = $([
      { field: "code", header: "Code" },
      { field: "name", header: "Name" },
      { field: "quantity", header: "Quantity" },
      { field: "price", header: "Price" },
      { field: "category", header: "Category" },
      { field: "description", header: "Description" },
      { field: "rating", header: "Rating" }
    ]);
    vt(() => {
      nn.getProductsWithOrders().then((f) => {
        t.value = f, r.value = JSON.parse(JSON.stringify(f));
      });
    });
    const s = (f, h, m) => {
      var g;
      return ((g = i.value[f]) == null ? void 0 : g[h]) !== void 0 && String(m) !== String(i.value[f][h]) ? "bg-yellow-400" : "";
    }, a = $(null), l = (f) => {
      const { data: h, field: m } = f;
      a.value = h[m];
    }, u = (f) => {
      let { data: h, newValue: m, field: g } = f;
      const y = h.id, S = a.value;
      if (m === S) {
        console.log("資料沒有變動，不做任何事");
        return;
      }
      switch (g) {
        case "quantity":
        case "price":
          d(m) ? h[g] = m : f.preventDefault();
          break;
        default:
          m.trim().length > 0 ? h[g] = m : f.preventDefault();
          break;
      }
      h[g] = m, i.value[y] || (i.value[y] = {}), g in i.value[y] || (i.value[y][g] = S);
    }, c = () => {
      localStorage.setItem("savedProducts", JSON.stringify(t.value)), e.add({ severity: "success", summary: "成功", detail: "資料已儲存", life: 3e3 });
    }, d = (f) => {
      let h = String(f);
      if (h = h.trim(), !h)
        return !1;
      h = h.replace(/^0+/, "") || "0";
      var m = Math.floor(Number(h));
      return m !== 1 / 0 && String(m) === h && m >= 0;
    }, p = (f) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(f);
    return (f, h) => {
      const m = R("Button"), g = R("InputText"), y = R("InputNumber"), S = R("Column"), C = R("DataTable"), v = R("Toast");
      return w(), M(he, null, [
        b("div", Yk, [
          T(C, {
            value: t.value,
            editMode: "cell",
            onCellEditComplete: u,
            onCellEditInit: l,
            paginator: "",
            rows: 5,
            rowsPerPageOptions: [5, 10, 20, 50],
            size: "small",
            stripedRows: "",
            showGridlines: "",
            selectionMode: "single",
            pt: {
              table: { style: "min-width: 50rem" },
              column: {
                bodycell: ({ state: k }) => ({
                  // class: [{ '!p-0': state['d_editing'] }]
                  class: "!p-0"
                })
              }
            }
          }, {
            header: D(() => [
              b("div", Qk, [
                h[1] || (h[1] = b("span", { class: "text-xl font-bold" }, "測試", -1)),
                T(m, {
                  label: "存檔",
                  rounded: "",
                  raised: "",
                  onClick: h[0] || (h[0] = (k) => c())
                })
              ])
            ]),
            default: D(() => [
              (w(!0), M(he, null, Ee(o.value, (k) => (w(), oe(S, {
                key: k.field,
                field: k.field,
                header: k.header
              }, {
                header: D(() => [
                  k.field === "price" ? (w(), oe(m, {
                    key: 0,
                    label: "操作",
                    size: "small",
                    rounded: "",
                    onClick: (x) => f.onHeaderButtonClick(k.field)
                  }, null, 8, ["onClick"])) : (w(), M("span", Xk, De(k.header), 1))
                ]),
                body: D(({ data: x, field: O }) => [
                  b("div", {
                    class: en([
                      s(x.id, O),
                      O === "description" ? "w-[200px] whitespace-normal break-words" : ""
                    ])
                  }, De(O === "price" ? p(x[O]) : x[O]), 3)
                ]),
                editor: D(({ data: x, field: O }) => [
                  O !== "price" ? (w(), oe(g, {
                    key: 0,
                    modelValue: x[O],
                    "onUpdate:modelValue": (N) => x[O] = N,
                    autofocus: "",
                    fluid: "",
                    size: "small"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (w(), oe(y, {
                    key: 1,
                    modelValue: x[O],
                    "onUpdate:modelValue": (N) => x[O] = N,
                    mode: "currency",
                    currency: "USD",
                    locale: "en-US",
                    autofocus: "",
                    fluid: "",
                    size: "small"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                ]),
                _: 2
              }, 1032, ["field", "header"]))), 128))
            ]),
            _: 1
          }, 8, ["value"])
        ]),
        T(v)
      ], 64);
    };
  }
}, eC = /* @__PURE__ */ xe({
  __name: "Tabs2",
  props: {
    items: {},
    activeId: {},
    variant: {},
    scrollable: { type: Boolean },
    closable: { type: Boolean }
  },
  emits: ["change", "close"],
  setup(n, { emit: e }) {
    const t = n, r = e, i = ot(
      () => Array.isArray(t.items) ? t.items.findIndex((l) => l.id === t.activeId) : -1
    ), o = ot(() => {
      switch (t.variant) {
        case "his":
          return "bg-blue-100 text-blue-700";
        case "fn":
          return "bg-green-100 text-green-700";
        case "card-1":
          return "bg-purple-100 text-purple-700";
        case "card-2":
          return "bg-yellow-100 text-yellow-700";
        default:
          return "";
      }
    });
    function s(l) {
      console.log("使用者切換到：", l), r("change", String(l));
    }
    const a = (l) => {
      r("close", l);
    };
    return (l, u) => {
      const c = R("Button");
      return w(), oe(Ae(pa), {
        value: t.activeId,
        scrollable: l.scrollable,
        "onUpdate:value": s
      }, {
        default: D(() => [
          T(Ae(ha), { pt: { tablist: { class: "gap-1 !border-white !border-0" } } }, {
            default: D(() => [
              (w(!0), M(he, null, Ee(t.items, (d) => (w(), oe(Ae(ma), {
                key: d.id,
                value: d.id,
                class: "!rounded-tl-md !rounded-tr-md !border !border-b-0 !border-gray-400 !px-4",
                pt: {
                  headerAction: {
                    class: [
                      o.value,
                      l.activeId === d.id ? "font-bold bg-blue-500 " : "",
                      "flex items-center justify-between"
                    ]
                  }
                }
              }, {
                default: D(() => [
                  J(De(d.name) + " ", 1),
                  l.closable ? (w(), oe(c, {
                    key: 0,
                    icon: "pi pi-times",
                    severity: "danger",
                    text: "",
                    size: "small",
                    class: "absolute top-0 right-0",
                    onClick: (p) => a(d.id)
                  }, null, 8, ["onClick"])) : Hn("", !0)
                ]),
                _: 2
              }, 1032, ["value", "pt"]))), 128))
            ]),
            _: 1
          }),
          T(Ae(ga), { class: "!p-0" }, {
            default: D(() => [
              (w(!0), M(he, null, Ee(t.items, (d, p) => (w(), oe(Ae(va), {
                key: d.id,
                header: d.name,
                disabled: d.disabled,
                value: d.id
              }, {
                default: D(() => [
                  i.value === p && d.panel ? (w(), oe(pr(d.panel), { key: 0 })) : Lt(l.$slots, d.id, { key: 1 }, void 0, !0)
                ]),
                _: 2
              }, 1032, ["header", "disabled", "value"]))), 128))
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["value", "scrollable"]);
    };
  }
}), Tp = /* @__PURE__ */ xn(eC, [["__scopeId", "data-v-f8bc971d"]]), tC = { key: 0 }, nC = { key: 0 }, rC = { key: 1 }, iC = { key: 1 }, oC = { key: 0 }, sC = { key: 1 }, aC = { key: 2 }, lC = {
  key: 2,
  class: "flex flex-wrap gap-1"
}, uC = { key: 3 }, cC = { key: 0 }, dC = { key: 1 }, fC = {
  key: 4,
  class: "card flex flex-wrap gap-2"
}, pC = { key: 5 }, hC = { class: "whitespace-normal w-80 break-word" }, mC = { key: 0 }, gC = { key: 0 }, vC = { key: 1 }, yC = { key: 1 }, bC = { key: 0 }, SC = { key: 1 }, xC = { key: 2 }, wC = {
  key: 2,
  class: "flex flex-wrap gap-1"
}, kC = { key: 3 }, CC = { key: 0 }, TC = { key: 1 }, OC = {
  key: 4,
  class: "card flex flex-wrap gap-2"
}, EC = { key: 5 }, _C = { class: "block w-30 truncate" }, Za = /* @__PURE__ */ xe({
  __name: "DatatableSample",
  props: {
    items: {},
    columns: {}
  },
  emits: ["save-row", "delete-row"],
  setup(n, { emit: e }) {
    const t = $(), r = $(null), i = $([]), o = $([
      { field: "id", header: "診號" },
      { field: "check", header: "報到" },
      { field: "status", header: "狀態" },
      { field: "feeno", header: "病歷號" },
      { field: "name", header: "姓名" },
      { field: "sex", header: "性別" },
      { field: "birthday", header: "生日" },
      { field: "tag", header: "註記" },
      { field: "din", header: "身分" },
      { field: "page", header: "報告" }
    ]), s = $({
      global: { value: null, matchMode: V.CONTAINS }
    });
    return (() => {
      s.value = {
        global: { value: null, matchMode: V.CONTAINS },
        id: { operator: Q.AND, constraints: [{ value: null, matchMode: V.STARTS_WITH }] },
        check: { operator: Q.AND, constraints: [{ value: null, matchMode: V.STARTS_WITH }] },
        status: { value: null, matchMode: V.IN },
        feeno: { operator: Q.AND, constraints: [{ value: null, matchMode: V.DATE_IS }] },
        name: { operator: Q.AND, constraints: [{ value: null, matchMode: V.EQUALS }] },
        sex: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        birthday: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        tag: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        din: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        page: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] }
      };
    })(), vt(() => {
      nn.getProductsMini().then((l) => t.value = l);
    }), (l, u) => {
      const c = R("Tab"), d = R("TabList"), p = R("Tag"), f = R("Column"), h = R("DataTable"), m = R("TabPanel"), g = R("InputText"), y = R("Button"), S = R("TabPanels"), C = R("Tabs"), v = R("ard");
      return w(), oe(v, { class: "card" }, {
        default: D(() => [
          T(C, { value: "0" }, {
            default: D(() => [
              T(d, null, {
                default: D(() => [
                  T(c, { value: "0" }, {
                    default: D(() => [...u[2] || (u[2] = [
                      J("乳房外科特別門診(早)", -1)
                    ])]),
                    _: 1
                  }),
                  T(c, { value: "1" }, {
                    default: D(() => [...u[3] || (u[3] = [
                      J("一般外科(午)", -1)
                    ])]),
                    _: 1
                  }),
                  T(c, { value: "2" }, {
                    default: D(() => [...u[4] || (u[4] = [
                      J("一般外科(晚)", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              T(S, null, {
                default: D(() => [
                  T(m, { value: "0" }, {
                    default: D(() => [
                      T(h, {
                        selection: r.value,
                        "onUpdate:selection": u[0] || (u[0] = (k) => r.value = k),
                        dataKey: "id",
                        value: t.value,
                        size: "small",
                        resizableColumns: "",
                        columnResizeMode: "fit",
                        showGridlines: "",
                        paginator: "",
                        rows: 10
                      }, {
                        default: D(() => [
                          (w(!0), M(he, null, Ee(o.value, (k) => (w(), oe(f, {
                            key: k.field,
                            field: k.field,
                            header: k.header,
                            class: "max-w-200 whitespace-normal break-word",
                            size: "small"
                          }, {
                            body: D(({ data: x, field: O }) => [
                              O === "check" ? (w(), M("div", tC, [
                                x[O] === "1" ? (w(), M("span", nC, [...u[5] || (u[5] = [
                                  b("i", { class: "pi pi-check" }, null, -1)
                                ])])) : (w(), M("span", rC, [...u[6] || (u[6] = [
                                  b("i", { class: "pi pi-times" }, null, -1)
                                ])]))
                              ])) : O === "status" ? (w(), M("div", iC, [
                                x[O] === "A" ? (w(), M("span", oC, [...u[7] || (u[7] = [
                                  b("i", { class: "pi pi-times text-red-500" }, null, -1),
                                  J("暫存", -1)
                                ])])) : x[O] === "C" ? (w(), M("span", sC, [...u[8] || (u[8] = [
                                  b("i", { class: "pi pi-check text-green-500" }, null, -1),
                                  J("已完成", -1)
                                ])])) : (w(), M("span", aC, "待看診"))
                              ])) : O === "tag" ? (w(), M("div", lC, [
                                (w(!0), M(he, null, Ee(x[O], (N, U) => (w(), oe(p, {
                                  key: N.id || U,
                                  outlined: "",
                                  class: en([
                                    N.color === "danger" ? "p-tag-danger" : N.color === "warning" ? "p-tag-warning" : N.color === "info" ? "p-tag-info" : N.color === "success" ? "p-tag-success" : "",
                                    "font-medium transition p-1 m-1",
                                    N.button === "0" ? "underline" : ""
                                  ]),
                                  value: N.tagname
                                }, null, 8, ["class", "value"]))), 128))
                              ])) : O === "din" ? (w(), M("div", uC, [
                                x[O] === "1" ? (w(), M("span", cC, "健保")) : (w(), M("span", dC, "自費"))
                              ])) : O === "page" ? (w(), M("div", fC, [
                                (w(!0), M(he, null, Ee(x[O], (N, U) => (w(), oe(p, {
                                  key: N.id || U,
                                  severity: "secondary",
                                  value: N.pagename
                                }, null, 8, ["value"]))), 128))
                              ])) : (w(), M("div", pC, [
                                b("span", hC, De(typeof O == "string" && O in x ? x[O] : ""), 1)
                              ]))
                            ]),
                            _: 1
                          }, 8, ["field", "header"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["selection", "value"])
                    ]),
                    _: 1
                  }),
                  T(m, { value: "1" }, {
                    default: D(() => [
                      T(h, {
                        editingRows: i.value,
                        "onUpdate:editingRows": u[1] || (u[1] = (k) => i.value = k),
                        value: t.value,
                        editMode: "row",
                        dataKey: "id",
                        size: "small",
                        resizableColumns: "",
                        columnResizeMode: "fit",
                        selectionMode: "single",
                        showGridlines: "",
                        stripedRows: "",
                        paginator: "",
                        roweditoriniticon: "",
                        rows: 10,
                        pt: {
                          // table: { style: 'min-width: 50rem' },
                          // column: {
                          //     bodycell: ({ state }) => ({
                          //         style:  state['d_editing']&&'padding-top: 0.75rem; padding-bottom: 0.75rem'
                          //     })
                          // }
                        }
                      }, {
                        default: D(() => [
                          (w(!0), M(he, null, Ee(o.value, (k) => (w(), oe(f, {
                            key: k.field,
                            field: k.field,
                            header: k.header,
                            class: "max-w-200 truncate",
                            size: "small"
                          }, {
                            body: D(({ data: x, field: O }) => [
                              O === "check" ? (w(), M("div", mC, [
                                x[O] === "1" ? (w(), M("span", gC, [...u[9] || (u[9] = [
                                  b("i", { class: "pi pi-check" }, null, -1)
                                ])])) : (w(), M("span", vC, [...u[10] || (u[10] = [
                                  b("i", { class: "pi pi-times" }, null, -1)
                                ])]))
                              ])) : O === "status" ? (w(), M("div", yC, [
                                x[O] === "A" ? (w(), M("span", bC, [...u[11] || (u[11] = [
                                  b("i", { class: "pi pi-times text-red-500" }, null, -1),
                                  J("暫存", -1)
                                ])])) : x[O] === "C" ? (w(), M("span", SC, [...u[12] || (u[12] = [
                                  b("i", { class: "pi pi-check text-green-500" }, null, -1),
                                  J("已完成", -1)
                                ])])) : (w(), M("span", xC, "待看診"))
                              ])) : O === "tag" ? (w(), M("div", wC, [
                                (w(!0), M(he, null, Ee(x[O], (N, U) => (w(), oe(p, {
                                  key: N.id || U,
                                  class: en([
                                    N.color === "danger" ? "p-tag-danger" : N.color === "warning" ? "p-tag-warning" : N.color === "info" ? "p-tag-info" : N.color === "success" ? "p-tag-success" : "",
                                    "font-medium transition p-1 m-1",
                                    N.button === "0" ? "underline" : ""
                                  ]),
                                  value: N.tagname
                                }, null, 8, ["class", "value"]))), 128))
                              ])) : O === "din" ? (w(), M("div", kC, [
                                x[O] === "1" ? (w(), M("span", CC, "健保")) : (w(), M("span", TC, "自費"))
                              ])) : O === "page" ? (w(), M("div", OC, [
                                (w(!0), M(he, null, Ee(x[O], (N, U) => (w(), oe(p, {
                                  key: N.id || U,
                                  severity: "secondary",
                                  value: N.pagename
                                }, null, 8, ["value"]))), 128))
                              ])) : (w(), M("div", EC, [
                                b("span", _C, De(typeof O == "string" && O in x ? x[O] : ""), 1)
                              ]))
                            ]),
                            editor: D(({ data: x, field: O }) => [
                              T(g, {
                                modelValue: x[O],
                                "onUpdate:modelValue": (N) => x[O] = N,
                                autofocus: "",
                                fluid: "",
                                size: "small"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }, 8, ["field", "header"]))), 128)),
                          T(f, { header: "操作" }, {
                            body: D(({ editorInitCallback: k, data: x }) => [
                              T(y, {
                                size: "small",
                                label: "編輯",
                                icon: "pi pi-pencil",
                                text: "",
                                onClick: k
                              }, null, 8, ["onClick"]),
                              T(y, {
                                size: "small",
                                label: "刪除",
                                icon: "pi pi-trash",
                                text: "",
                                onClick: (O) => l.$emit("delete-row", x)
                              }, null, 8, ["onClick"])
                            ]),
                            editor: D(({ editorSaveCallback: k, editorCancelCallback: x, data: O }) => [
                              T(y, {
                                label: "儲存",
                                icon: "pi pi-save",
                                text: "",
                                onClick: k
                              }, null, 8, ["onClick"]),
                              T(y, {
                                label: "取消",
                                icon: "pi pi-times",
                                severity: "danger",
                                text: "",
                                onClick: x
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["editingRows", "value"])
                    ]),
                    _: 1
                  }),
                  T(m, { value: "2" }, {
                    default: D(() => [...u[13] || (u[13] = [
                      b("p", { class: "m-0" }, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), MC = { class: "flex-grow" }, NC = { class: "flex flex-wrap justify-between" }, AC = { class: "flex flex-wrap gap-x-4 gap-y-2 divide-x-1 divide-solid divide-gray-300 mb-2" }, $C = { class: "pr-2" }, DC = { class: "flex items-center gap-3 pr-2" }, PC = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, IC = {
  class: "flex items-center gap-1",
  for: "ingredient2"
}, RC = { class: "flex items-center gap-3 pr-2" }, LC = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, VC = {
  class: "flex items-center gap-1",
  for: "ingredient2"
}, BC = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, zC = { class: "flex items-center gap-2" }, jC = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, FC = {
  class: "flex items-center gap-1",
  for: "ingredient2"
}, HC = /* @__PURE__ */ xe({
  __name: "TabPane5",
  setup(n) {
    const e = $("實體IC"), t = $(["實體IC", "虛擬IC"]), r = $(), i = $([
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" }
    ]), o = $([]), s = (p, f) => {
      console.log("要儲存的資料", p), f();
    }, a = (p) => {
      console.log("要刪除的資料", p);
    }, l = $(), u = $([
      { field: "id", header: "診號" },
      { field: "check", header: "報到" },
      { field: "status", header: "狀態" },
      { field: "feeno", header: "病歷號" },
      { field: "name", header: "姓名" },
      { field: "sex", header: "性別" },
      { field: "birthday", header: "生日" },
      { field: "tag", header: "註記" },
      { field: "din", header: "身分" },
      { field: "page", header: "報告" }
    ]), c = $({
      global: { value: null, matchMode: V.CONTAINS }
    });
    return (() => {
      c.value = {
        global: { value: null, matchMode: V.CONTAINS },
        id: { operator: Q.AND, constraints: [{ value: null, matchMode: V.STARTS_WITH }] },
        check: { operator: Q.AND, constraints: [{ value: null, matchMode: V.STARTS_WITH }] },
        status: { value: null, matchMode: V.IN },
        feeno: { operator: Q.AND, constraints: [{ value: null, matchMode: V.DATE_IS }] },
        name: { operator: Q.AND, constraints: [{ value: null, matchMode: V.EQUALS }] },
        sex: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        birthday: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        tag: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        din: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        page: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] }
      };
    })(), (p, f) => {
      const h = R("Button"), m = R("SelectButton"), g = R("Checkbox"), y = R("Select");
      return w(), M("div", MC, [
        b("div", NC, [
          f[9] || (f[9] = b("div", { class: "flex gap-2 mb-3" }, [
            b("div", { class: "bg-primary h-[20px] w-2" }),
            b("p", { class: "text-primary text-lg" }, "病患等候清單")
          ], -1)),
          T(h, {
            label: "未確認清單(5)",
            severity: "secondary",
            size: "small"
          })
        ]),
        b("div", AC, [
          b("div", $C, [
            T(m, {
              modelValue: e.value,
              "onUpdate:modelValue": f[0] || (f[0] = (S) => e.value = S),
              options: t.value,
              size: "small"
            }, null, 8, ["modelValue", "options"])
          ]),
          b("div", DC, [
            b("label", PC, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[1] || (f[1] = (S) => o.value = S),
                inputId: "ingredient1",
                name: "pizza",
                value: "自費",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[10] || (f[10] = J(" 自費 ", -1))
            ]),
            b("label", IC, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[2] || (f[2] = (S) => o.value = S),
                inputId: "ingredient2",
                name: "pizza",
                value: "健保欠卡",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[11] || (f[11] = J(" 健保欠卡 ", -1))
            ]),
            T(y, {
              modelValue: r.value,
              "onUpdate:modelValue": f[3] || (f[3] = (S) => r.value = S),
              editable: "",
              options: i.value,
              showClear: "",
              optionLabel: "name",
              placeholder: "異常碼",
              size: "small"
            }, null, 8, ["modelValue", "options"]),
            f[12] || (f[12] = b("label", { class: "flex items-center" }, [
              J(" 看診號： "),
              b("p", null, "--")
            ], -1))
          ]),
          b("div", RC, [
            b("label", LC, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[4] || (f[4] = (S) => o.value = S),
                inputId: "ingredient3",
                name: "pizza",
                value: "Cheese",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[13] || (f[13] = J(" 已完成(4) ", -1))
            ]),
            b("label", VC, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[5] || (f[5] = (S) => o.value = S),
                inputId: "ingredient4",
                name: "pizza",
                value: "Mushroom",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[14] || (f[14] = J(" 暫存(2) ", -1))
            ]),
            b("label", BC, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[6] || (f[6] = (S) => o.value = S),
                inputId: "ingredient5",
                name: "pizza",
                value: "Cheese1",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[15] || (f[15] = J(" 待看診(3) ", -1))
            ])
          ]),
          b("div", zC, [
            b("label", jC, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[7] || (f[7] = (S) => o.value = S),
                inputId: "ingredient6",
                name: "pizza",
                value: "Cheese2",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[16] || (f[16] = J(" 已報到 ", -1))
            ]),
            b("label", FC, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[8] || (f[8] = (S) => o.value = S),
                inputId: "ingredient7",
                name: "pizza",
                value: "Mushroom1",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[17] || (f[17] = J(" 未報到 ", -1))
            ])
          ])
        ]),
        T(h, {
          label: "查詢",
          size: "small"
        }),
        T(Za, {
          items: l.value,
          columns: u.value,
          onSaveRow: s,
          onDeleteRow: a
        }, null, 8, ["items", "columns"])
      ]);
    };
  }
}), UC = /* @__PURE__ */ xn(HC, [["__scopeId", "data-v-d4f6e896"]]), WC = { class: "flex-grow border-1 border-gray-200 p-2 bg-white shadow-lg" }, qC = { class: "flex items-start" }, KC = { class: "flex-wrap" }, JC = { class: "flex items-center gap-2" }, GC = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, YC = { class: "flex items-start mt-2" }, QC = { class: "flex border-1 border-gray-200" }, XC = { class: "flex-wrap p-2" }, ZC = { class: "flex items-start gap-3 pr-2" }, eT = { class: "flex border-1 border-gray-200" }, tT = { class: "flex-wrap" }, nT = { class: "flex items-center gap-2" }, rT = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, iT = /* @__PURE__ */ xe({
  __name: "TabPane6",
  setup(n) {
    $("實體IC"), $(["實體IC", "虛擬IC"]), $(), $([
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" }
    ]), $([]), $(), $([
      { field: "id", header: "診號" },
      { field: "check", header: "報到" },
      { field: "status", header: "狀態" },
      { field: "feeno", header: "病歷號" },
      { field: "name", header: "姓名" },
      { field: "sex", header: "性別" },
      { field: "birthday", header: "生日" },
      { field: "tag", header: "註記" },
      { field: "din", header: "身分" },
      { field: "page", header: "報告" }
    ]);
    const e = $({
      global: { value: null, matchMode: V.CONTAINS }
    });
    return (() => {
      e.value = {
        global: { value: null, matchMode: V.CONTAINS },
        id: { operator: Q.AND, constraints: [{ value: null, matchMode: V.STARTS_WITH }] },
        check: { operator: Q.AND, constraints: [{ value: null, matchMode: V.STARTS_WITH }] },
        status: { value: null, matchMode: V.IN },
        feeno: { operator: Q.AND, constraints: [{ value: null, matchMode: V.DATE_IS }] },
        name: { operator: Q.AND, constraints: [{ value: null, matchMode: V.EQUALS }] },
        sex: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        birthday: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        tag: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        din: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        page: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] }
      };
    })(), (r, i) => {
      const o = R("Tag"), s = R("Button"), a = R("Tab"), l = R("TabList"), u = R("TabPanel"), c = R("TabPanels"), d = R("Tabs");
      return w(), M(he, null, [
        b("div", WC, [
          b("div", qC, [
            T(o, {
              icon: "pi pi-info",
              class: "mr-1 p-5",
              size: "small",
              severity: "secondary",
              rounded: ""
            }),
            b("div", KC, [
              i[2] || (i[2] = Fp('<div class="flex items-center gap-3 pr-2" data-v-54ea67ba><dl class="flex flex-wrap gap-x-4" data-v-54ea67ba><div class="flex flex-nowrap" data-v-54ea67ba><dt data-v-54ea67ba>身高</dt><dd class="font-bold text-purple-700 ml-1" data-v-54ea67ba>170.0cm</dd></div><div class="flex flex-nowrap" data-v-54ea67ba><dt data-v-54ea67ba>體重</dt><dd class="font-bold text-purple-700 ml-1" data-v-54ea67ba>170.0cm</dd></div><div class="flex flex-nowrap" data-v-54ea67ba><dt data-v-54ea67ba>BMI</dt><dd class="font-bold text-purple-700 ml-1" data-v-54ea67ba>18.5</dd></div><div class="flex flex-nowrap" data-v-54ea67ba><dt data-v-54ea67ba>BSA</dt><dd class="font-bold text-purple-700 ml-1" data-v-54ea67ba>1.95</dd></div><div class="flex flex-nowrap" data-v-54ea67ba><dt data-v-54ea67ba>血壓</dt><dd class="font-bold text-purple-700 ml-1" data-v-54ea67ba>132/70 mmHg</dd></div><div class="flex flex-nowrap" data-v-54ea67ba><dt data-v-54ea67ba>體溫</dt><dd class="font-bold text-purple-700 ml-1" data-v-54ea67ba>36.2℃</dd></div><div class="flex flex-nowrap" data-v-54ea67ba><dt data-v-54ea67ba>血糖</dt><dd class="font-bold text-purple-700 ml-1" data-v-54ea67ba>00 mg/dL</dd></div><div class="flex flex-nowrap" data-v-54ea67ba><dt data-v-54ea67ba>脈搏</dt><dd class="font-bold text-purple-700 ml-1" data-v-54ea67ba>000次/分</dd></div></dl></div>', 1)),
              b("div", JC, [
                b("label", GC, [
                  i[1] || (i[1] = J(" 疼痛指數 : ", -1)),
                  T(s, {
                    size: "small",
                    class: "!gap-[0.2rem] flex items-center"
                  }, {
                    default: D(() => [...i[0] || (i[0] = [
                      b("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        class: "bi bi-emoji-smile",
                        viewBox: "0 0 16 16"
                      }, [
                        b("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }),
                        b("path", { d: "M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" })
                      ], -1),
                      b("span", { class: "align-middle" }, "0", -1)
                    ])]),
                    _: 1
                  })
                ]),
                T(s, {
                  label: "編輯",
                  size: "small",
                  icon: "pi pi-pencil",
                  severity: "secondary"
                })
              ])
            ])
          ])
        ]),
        b("div", YC, [
          b("div", QC, [
            b("div", XC, [
              b("div", ZC, [
                T(d, { value: "0" }, {
                  default: D(() => [
                    T(l, null, {
                      default: D(() => [
                        T(s, {
                          label: "CPOE",
                          size: "small"
                        }),
                        T(a, { value: "0" }, {
                          default: D(() => [...i[3] || (i[3] = [
                            J("就醫資訊", -1)
                          ])]),
                          _: 1
                        }),
                        T(a, { value: "1" }, {
                          default: D(() => [...i[4] || (i[4] = [
                            J("過敏藥(4)", -1)
                          ])]),
                          _: 1
                        }),
                        T(a, { value: "2" }, {
                          default: D(() => [...i[5] || (i[5] = [
                            J("個人重大傷病", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    T(c, null, {
                      default: D(() => [
                        T(u, { value: "0" }, {
                          default: D(() => [...i[6] || (i[6] = [
                            b("div", { class: "horizontal-label flex gap-2 items-center flex-wrap" }, [
                              b("div", { class: "label-wrapper show-colon text-right" }, [
                                b("label", { for: "name1" }, "診號"),
                                b("span", null, ":")
                              ]),
                              b("div", { class: "flex flex-wrap divide-x divide-gray-300 gap-x-1" }, [
                                b("span", { class: "pr-1" }, "001")
                              ])
                            ], -1),
                            b("div", { class: "horizontal-label flex gap-2 items-center flex-wrap" }, [
                              b("div", { class: "label-wrapper show-colon text-right" }, [
                                b("label", { for: "name1" }, "卡序"),
                                b("span", null, ":")
                              ]),
                              b("div", { class: "flex flex-wrap divide-x divide-gray-300 gap-x-1" }, [
                                b("span", { class: "pr-1" }, "IC07")
                              ])
                            ], -1),
                            b("div", { class: "horizontal-label flex gap-2 items-center flex-wrap" }, [
                              b("div", { class: "label-wrapper show-colon text-right" }, [
                                b("label", { for: "name1" }, "優待身分"),
                                b("span", null, ":")
                              ]),
                              b("div", { class: "flex flex-wrap divide-x divide-gray-300 gap-x-1" }, [
                                b("span", { class: "pr-1" }, "70歲以上年長者")
                              ])
                            ], -1),
                            b("div", { class: "grid grid-cols-[auto_1rem_auto] gap-x-2 place-content-center mb-2" }, [
                              b("label", { class: "text-right" }, "診號"),
                              b("span", null, ":"),
                              b("span", null, "001")
                            ], -1),
                            b("div", { class: "grid grid-cols-[auto_1rem_auto] gap-x-2 place-content-center mb-2" }, [
                              b("label", { class: "text-right" }, "卡序"),
                              b("span", null, ":"),
                              b("span", null, "IC07")
                            ], -1),
                            b("div", { class: "grid grid-cols-[auto_1rem_auto] gap-x-2 place-content-center" }, [
                              b("label", { class: "text-right" }, "優待身分"),
                              b("span", null, ":"),
                              b("span", null, "70歲以上年長者")
                            ], -1)
                          ])]),
                          _: 1
                        }),
                        T(u, { value: "1" }, {
                          default: D(() => [...i[7] || (i[7] = [
                            b("p", { class: "m-0" }, null, -1)
                          ])]),
                          _: 1
                        }),
                        T(u, { value: "2" }, {
                          default: D(() => [...i[8] || (i[8] = [
                            b("p", { class: "m-0" }, " At vero eos et accusamus ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          b("div", eT, [
            b("div", tT, [
              b("div", nT, [
                b("label", rT, [
                  i[10] || (i[10] = J(" 疼痛指數 : ", -1)),
                  T(s, {
                    size: "small",
                    class: "!gap-[0.2rem] flex items-center"
                  }, {
                    default: D(() => [...i[9] || (i[9] = [
                      b("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        class: "bi bi-emoji-smile",
                        viewBox: "0 0 16 16"
                      }, [
                        b("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }),
                        b("path", { d: "M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" })
                      ], -1),
                      b("span", { class: "align-middle" }, "0", -1)
                    ])]),
                    _: 1
                  })
                ]),
                T(s, {
                  label: "編輯",
                  size: "small",
                  icon: "pi pi-pencil",
                  severity: "secondary"
                })
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
}), oT = /* @__PURE__ */ xn(iT, [["__scopeId", "data-v-54ea67ba"]]), sT = { class: "flex flex-col md:flex-row items-start gap-4" }, aT = { class: "flex-grow min-w-0" }, lT = /* @__PURE__ */ xe({
  __name: "PatientList",
  setup(n) {
    const e = $(), t = $("his"), r = $(!0), i = $(!0), o = Or([
      { id: "REGSFN05", name: "病患候診清單", panel: UC },
      { id: "REGSFN06", name: "門診醫囑", panel: oT, disabled: !0 }
    ]), s = $(o.value[1].id), a = (u) => {
      const c = o.value.filter((d) => d.id !== u);
      o.value = c;
    }, l = (u) => {
      console.log("Parent received change:", u), s.value = u;
    };
    return vt(() => {
      nn.getProductsMini().then((u) => e.value = u);
    }), (u, c) => (w(), M("div", sT, [
      b("div", aT, [
        T(Tp, {
          "active-id": s.value,
          variant: t.value,
          items: o.value,
          scrollable: i.value,
          closable: r.value,
          class: "",
          onChange: l,
          onClose: a
        }, null, 8, ["active-id", "variant", "items", "scrollable", "closable"])
      ])
    ]));
  }
}), uT = { class: "flex gap-3" }, cT = { class: "flex-auto" }, dT = { class: "flex-grow" }, fT = /* @__PURE__ */ xe({
  __name: "TabPane3",
  setup(n) {
    return (e, t) => (w(), M("div", uT, [
      t[0] || (t[0] = b("div", { class: "space-y-3" }, [
        b("div", { class: "flex-none mr-2 border-1 border-gray-300 p-2" }, [
          b("div", { class: "flex gap-2 mb-3" }, [
            b("div", { class: "bg-primary h-[20px] w-2" }),
            b("p", { class: "text-primary text-lg" }, "病人資訊")
          ]),
          b("div", { class: "flex-grow" }, [
            b("div", { class: "horizontal-label flex gap-2 items-center flex-wrap" }, [
              b("div", { class: "label-wrapper show-colon text-right" }, [
                b("label", { for: "name1" }, "看診"),
                b("span", null, ":")
              ]),
              b("div", { class: "flex flex-wrap divide-x divide-gray-300 gap-x-1" }, [
                b("span", { class: "pr-1" }, "2024-12-14"),
                b("span", { class: "pr-1" }, "午"),
                b("span", { class: "pr-1" }, "李華陀")
              ])
            ]),
            b("div", { class: "horizontal-label flex gap-2 items-center flex-wrap" }, [
              b("div", { class: "label-wrapper show-colon text-right" }, [
                b("label", { for: "name3" }, "科別"),
                b("span", null, ":")
              ]),
              b("div", { class: "flex flex-wrap divide-x divide-gray-300 gap-x-1" }, [
                b("span", { class: "pr-1" }, "感染科"),
                b("span", { class: "pr-1" }, "類流感門診")
              ])
            ]),
            b("hr", { class: "h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" }),
            b("div", { class: "horizontal-label flex gap-2 items-center flex-wrap" }, [
              b("div", { class: "label-wrapper show-colon text-right" }, [
                b("label", { for: "name4" }, "姓名"),
                b("span", null, ":")
              ]),
              b("div", { class: "flex flex-wrap divide-x divide-gray-300 gap-x-1" }, [
                b("span", { class: "pr-1" }, "林祥白"),
                b("span", { class: "pr-1" }, "男")
              ])
            ]),
            b("div", { class: "horizontal-label flex gap-2 items-center flex-wrap" }, [
              b("div", { class: "label-wrapper show-colon text-right" }, [
                b("label", { for: "name4" }, "生日"),
                b("span", null, ":")
              ]),
              b("div", { class: "flex flex-wrap divide-x divide-gray-300 gap-x-1" }, [
                b("span", { class: "pr-1" }, "1971-08-30(54y10m30d)")
              ])
            ]),
            b("div", { class: "mt-1 flex gap-1 items-center" }, [
              b("div", {
                class: "bg-orange-300 border-surface-500 relative inline-block min-h-10 min-w-10 overflow-hidden rounded-full border px-0.5 py-1.5 text-center select-none font-bold",
                "data-pd-tooltip": "true"
              }, [
                b("span", { class: "text-color" }, "跌")
              ]),
              b("div", {
                role: "button",
                class: "border-sky-700 relative inline-block min-h-5 min-w-5 overflow-hidden border px-0.5 py-1.5 text-center select-none cursor-pointer rounded-md hover:border-2 font-bold"
              }, [
                b("span", { class: "text-sky-700 underline" }, "管理")
              ]),
              b("div", {
                role: "button",
                class: "border-sky-700 relative inline-block min-h-5 min-w-5 overflow-hidden border px-0.5 py-1.5 text-center select-none cursor-pointer rounded-md hover:border-2 font-bold"
              }, [
                b("span", { class: "text-sky-700 underline" }, "過敏")
              ]),
              b("div", {
                role: "button",
                class: "border-sky-700 relative inline-block min-h-5 min-w-5 overflow-hidden border px-0.5 py-1.5 text-center select-none cursor-pointer rounded-md hover:border-2 font-bold"
              }, [
                b("span", { class: "text-sky-700 underline" }, "重大")
              ])
            ])
          ])
        ]),
        b("div", { class: "flex-none mr-2 border-1 border-gray-300 p-2" }, [
          b("div", { class: "flex gap-2 mb-3" }, [
            b("div", { class: "bg-primary h-[20px] w-2" }),
            b("p", { class: "text-primary text-lg" }, "功能選單")
          ]),
          b("div", { class: "flex-grow" })
        ])
      ], -1)),
      b("div", cT, [
        b("div", dT, [
          T(lT)
        ])
      ])
    ]));
  }
}), pT = { class: "flex-grow" }, hT = { class: "flex flex-wrap justify-between" }, mT = { class: "flex flex-wrap gap-x-4 gap-y-2 divide-x-1 divide-solid divide-gray-300 mb-2" }, gT = { class: "pr-2" }, vT = { class: "flex items-center gap-3 pr-2" }, yT = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, bT = {
  class: "flex items-center gap-1",
  for: "ingredient2"
}, ST = { class: "flex items-center gap-3 pr-2" }, xT = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, wT = {
  class: "flex items-center gap-1",
  for: "ingredient2"
}, kT = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, CT = { class: "flex items-center gap-2" }, TT = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, OT = {
  class: "flex items-center gap-1",
  for: "ingredient2"
}, ET = /* @__PURE__ */ xe({
  __name: "TabPane4",
  setup(n) {
    const e = $("實體IC"), t = $(["實體IC", "虛擬IC"]), r = $(), i = $([
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" }
    ]), o = $([]);
    $([]);
    const s = (p, f) => {
      console.log("要儲存的資料", p), f();
    }, a = (p) => {
      console.log("要刪除的資料", p);
    }, l = $(), u = $([
      { field: "id", header: "診號" },
      { field: "check", header: "報到" },
      { field: "status", header: "狀態" },
      { field: "feeno", header: "病歷號" },
      { field: "name", header: "姓名" },
      { field: "sex", header: "性別" },
      { field: "birthday", header: "生日" },
      { field: "tag", header: "註記" },
      { field: "din", header: "身分" },
      { field: "page", header: "報告" }
    ]), c = $({
      global: { value: null, matchMode: V.CONTAINS }
    });
    return (() => {
      c.value = {
        global: { value: null, matchMode: V.CONTAINS },
        id: { operator: Q.AND, constraints: [{ value: null, matchMode: V.STARTS_WITH }] },
        check: { operator: Q.AND, constraints: [{ value: null, matchMode: V.STARTS_WITH }] },
        status: { value: null, matchMode: V.IN },
        feeno: { operator: Q.AND, constraints: [{ value: null, matchMode: V.DATE_IS }] },
        name: { operator: Q.AND, constraints: [{ value: null, matchMode: V.EQUALS }] },
        sex: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        birthday: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        tag: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        din: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        page: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] }
      };
    })(), (p, f) => {
      const h = R("Button"), m = R("SelectButton"), g = R("Checkbox"), y = R("Select");
      return w(), M("div", pT, [
        b("div", hT, [
          f[9] || (f[9] = b("div", { class: "flex gap-2 mb-3" }, [
            b("div", { class: "bg-primary h-[20px] w-2" }),
            b("p", { class: "text-primary text-lg" }, "病患等候清單")
          ], -1)),
          T(h, {
            label: "未確認清單(5)",
            severity: "secondary",
            size: "small"
          })
        ]),
        b("div", mT, [
          b("div", gT, [
            T(m, {
              modelValue: e.value,
              "onUpdate:modelValue": f[0] || (f[0] = (S) => e.value = S),
              options: t.value,
              size: "small"
            }, null, 8, ["modelValue", "options"])
          ]),
          b("div", vT, [
            b("label", yT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[1] || (f[1] = (S) => o.value = S),
                inputId: "ingredient1",
                name: "pizza",
                value: "自費",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[10] || (f[10] = J(" 自費 ", -1))
            ]),
            b("label", bT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[2] || (f[2] = (S) => o.value = S),
                inputId: "ingredient2",
                name: "pizza",
                value: "健保欠卡",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[11] || (f[11] = J(" 健保欠卡 ", -1))
            ]),
            T(y, {
              modelValue: r.value,
              "onUpdate:modelValue": f[3] || (f[3] = (S) => r.value = S),
              editable: "",
              options: i.value,
              showClear: "",
              optionLabel: "name",
              placeholder: "異常碼",
              size: "small"
            }, null, 8, ["modelValue", "options"]),
            f[12] || (f[12] = b("label", { class: "flex items-center" }, [
              J(" 看診號： "),
              b("p", null, "--")
            ], -1))
          ]),
          b("div", ST, [
            b("label", xT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[4] || (f[4] = (S) => o.value = S),
                inputId: "ingredient3",
                name: "pizza",
                value: "Cheese",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[13] || (f[13] = J(" 已完成(4) ", -1))
            ]),
            b("label", wT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[5] || (f[5] = (S) => o.value = S),
                inputId: "ingredient4",
                name: "pizza",
                value: "Mushroom",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[14] || (f[14] = J(" 暫存(2) ", -1))
            ]),
            b("label", kT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[6] || (f[6] = (S) => o.value = S),
                inputId: "ingredient5",
                name: "pizza",
                value: "Cheese1",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[15] || (f[15] = J(" 待看診(3) ", -1))
            ])
          ]),
          b("div", CT, [
            b("label", TT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[7] || (f[7] = (S) => o.value = S),
                inputId: "ingredient6",
                name: "pizza",
                value: "Cheese2",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[16] || (f[16] = J(" 已報到 ", -1))
            ]),
            b("label", OT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[8] || (f[8] = (S) => o.value = S),
                inputId: "ingredient7",
                name: "pizza",
                value: "Mushroom1",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[17] || (f[17] = J(" 未報到 ", -1))
            ])
          ])
        ]),
        T(h, {
          label: "查詢",
          size: "small"
        }),
        T(Za, {
          items: l.value,
          columns: u.value,
          onSaveRow: s,
          onDeleteRow: a
        }, null, 8, ["items", "columns"])
      ]);
    };
  }
}), _T = /* @__PURE__ */ xn(ET, [["__scopeId", "data-v-954428b2"]]), MT = { class: "flex-grow min-w-0 h-full" }, NT = /* @__PURE__ */ xe({
  __name: "CPOEDemo",
  setup(n) {
    const e = $(), t = $("his"), r = $(!0), i = $(!0), o = Or([
      { id: "REGSFN01", name: "病患清單", panel: fT, disabled: !0 },
      { id: "REGSFN02", name: "門診醫囑", panel: _T }
    ]), s = $(o.value[0].id), a = (u) => {
      const c = o.value.filter((d) => d.id !== u);
      o.value = c;
    }, l = (u) => {
      console.log("Parent received change:", u), s.value = u;
    };
    return $([
      { field: "id", header: "診號" },
      { field: "status", header: "狀態" },
      { field: "name", header: "姓名" }
    ]), vt(() => {
      nn.getProductsMini().then((u) => e.value = u);
    }), (u, c) => (w(), M("div", MT, [
      T(Tp, {
        "active-id": s.value,
        variant: t.value,
        items: o.value,
        scrollable: i.value,
        closable: r.value,
        onChange: l,
        onClose: a
      }, null, 8, ["active-id", "variant", "items", "scrollable", "closable"])
    ]));
  }
}), AT = /* @__PURE__ */ xe({
  __name: "Tabs",
  props: {
    items: {},
    activeId: {},
    variant: {},
    scrollable: { type: Boolean },
    closable: { type: Boolean }
  },
  emits: ["change", "close"],
  setup(n, { emit: e }) {
    const t = n, r = e, i = ot(
      () => Array.isArray(t.items) ? t.items.findIndex((l) => l.id === t.activeId) : -1
    ), o = ot(() => {
      switch (t.variant) {
        case "his":
          return "bg-blue-100 text-blue-700";
        case "fn":
          return "bg-green-100 text-green-700";
        case "card-1":
          return "bg-purple-100 text-purple-700";
        case "card-2":
          return "bg-yellow-100 text-yellow-700";
        default:
          return "";
      }
    });
    function s(l) {
      console.log("使用者切換到：", l), r("change", String(l));
    }
    const a = (l) => {
      r("close", l);
    };
    return (l, u) => {
      const c = R("Button");
      return w(), oe(Ae(pa), {
        value: t.activeId,
        scrollable: l.scrollable,
        "onUpdate:value": s
      }, {
        default: D(() => [
          T(Ae(ha), { pt: { tablist: { class: "gap-1 !border-white !border-0 !p-0" } } }, {
            default: D(() => [
              (w(!0), M(he, null, Ee(t.items, (d) => (w(), oe(Ae(ma), {
                key: d.id,
                value: d.id,
                class: "!rounded-tl-md !rounded-tr-md !border !border-b-0 !border-gray-400 !px-4",
                pt: {
                  headerAction: {
                    class: [
                      o.value,
                      l.activeId === d.id ? "font-bold bg-blue-500 " : "",
                      "flex items-center justify-between"
                    ]
                  }
                }
              }, {
                default: D(() => [
                  J(De(d.name) + " ", 1),
                  l.closable ? (w(), oe(c, {
                    key: 0,
                    icon: "pi pi-times",
                    severity: "danger",
                    text: "",
                    size: "small",
                    class: "absolute top-0 right-0",
                    onClick: (p) => a(d.id)
                  }, null, 8, ["onClick"])) : Hn("", !0)
                ]),
                _: 2
              }, 1032, ["value", "pt"]))), 128))
            ]),
            _: 1
          }),
          T(Ae(ga), { class: "border-1 border-gray-300" }, {
            default: D(() => [
              (w(!0), M(he, null, Ee(t.items, (d, p) => (w(), oe(Ae(va), {
                key: d.id,
                header: d.name,
                disabled: d.disabled,
                value: d.id
              }, {
                default: D(() => [
                  i.value === p && d.panel ? (w(), oe(pr(d.panel), { key: 0 })) : Lt(l.$slots, d.id, { key: 1 }, void 0, !0)
                ]),
                _: 2
              }, 1032, ["header", "disabled", "value"]))), 128))
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["value", "scrollable"]);
    };
  }
}), Op = /* @__PURE__ */ xn(AT, [["__scopeId", "data-v-bb25d29e"]]), $T = { class: "flex-grow" }, DT = { class: "flex flex-wrap justify-between" }, PT = { class: "flex flex-wrap gap-x-4 gap-y-2 divide-x-1 divide-solid divide-gray-300 mb-2" }, IT = { class: "pr-2" }, RT = { class: "flex items-center gap-3 pr-2" }, LT = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, VT = {
  class: "flex items-center gap-1",
  for: "ingredient2"
}, BT = { class: "flex items-center gap-3 pr-2" }, zT = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, jT = {
  class: "flex items-center gap-1",
  for: "ingredient2"
}, FT = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, HT = { class: "flex items-center gap-2" }, UT = {
  class: "flex items-center gap-1",
  for: "ingredient1"
}, WT = {
  class: "flex items-center gap-1",
  for: "ingredient2"
}, qT = /* @__PURE__ */ xe({
  __name: "TabPane1",
  setup(n) {
    const e = $("實體IC"), t = $(["實體IC", "虛擬IC"]), r = $(), i = $([
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" }
    ]), o = $([]);
    $([]);
    const s = (p, f) => {
      console.log("要儲存的資料", p), f();
    }, a = (p) => {
      console.log("要刪除的資料", p);
    }, l = $(), u = $([
      { field: "id", header: "診號" },
      { field: "check", header: "報到" },
      { field: "status", header: "狀態" },
      { field: "feeno", header: "病歷號" },
      { field: "name", header: "姓名" },
      { field: "sex", header: "性別" },
      { field: "birthday", header: "生日" },
      { field: "tag", header: "註記" },
      { field: "din", header: "身分" },
      { field: "page", header: "報告" }
    ]), c = $({
      global: { value: null, matchMode: V.CONTAINS }
    });
    return (() => {
      c.value = {
        global: { value: null, matchMode: V.CONTAINS },
        id: { operator: Q.AND, constraints: [{ value: null, matchMode: V.STARTS_WITH }] },
        check: { operator: Q.AND, constraints: [{ value: null, matchMode: V.STARTS_WITH }] },
        status: { value: null, matchMode: V.IN },
        feeno: { operator: Q.AND, constraints: [{ value: null, matchMode: V.DATE_IS }] },
        name: { operator: Q.AND, constraints: [{ value: null, matchMode: V.EQUALS }] },
        sex: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        birthday: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        tag: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        din: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] },
        page: { operator: Q.OR, constraints: [{ value: null, matchMode: V.EQUALS }] }
      };
    })(), (p, f) => {
      const h = R("Button"), m = R("SelectButton"), g = R("Checkbox"), y = R("Select");
      return w(), M("div", $T, [
        b("div", DT, [
          f[9] || (f[9] = b("div", { class: "flex gap-2 mb-3" }, [
            b("div", { class: "bg-primary h-[20px] w-2" }),
            b("p", { class: "text-primary text-lg" }, "病患等候清單")
          ], -1)),
          T(h, {
            label: "未確認清單(5)",
            severity: "secondary",
            size: "small"
          })
        ]),
        b("div", PT, [
          b("div", IT, [
            T(m, {
              modelValue: e.value,
              "onUpdate:modelValue": f[0] || (f[0] = (S) => e.value = S),
              options: t.value,
              size: "small"
            }, null, 8, ["modelValue", "options"])
          ]),
          b("div", RT, [
            b("label", LT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[1] || (f[1] = (S) => o.value = S),
                inputId: "ingredient1",
                name: "pizza",
                value: "自費",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[10] || (f[10] = J(" 自費 ", -1))
            ]),
            b("label", VT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[2] || (f[2] = (S) => o.value = S),
                inputId: "ingredient2",
                name: "pizza",
                value: "健保欠卡",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[11] || (f[11] = J(" 健保欠卡 ", -1))
            ]),
            T(y, {
              modelValue: r.value,
              "onUpdate:modelValue": f[3] || (f[3] = (S) => r.value = S),
              editable: "",
              options: i.value,
              showClear: "",
              optionLabel: "name",
              placeholder: "異常碼",
              size: "small"
            }, null, 8, ["modelValue", "options"]),
            f[12] || (f[12] = b("label", { class: "flex items-center" }, [
              J(" 看診號： "),
              b("p", null, "--")
            ], -1))
          ]),
          b("div", BT, [
            b("label", zT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[4] || (f[4] = (S) => o.value = S),
                inputId: "ingredient3",
                name: "pizza",
                value: "Cheese",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[13] || (f[13] = J(" 已完成(4) ", -1))
            ]),
            b("label", jT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[5] || (f[5] = (S) => o.value = S),
                inputId: "ingredient4",
                name: "pizza",
                value: "Mushroom",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[14] || (f[14] = J(" 暫存(2) ", -1))
            ]),
            b("label", FT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[6] || (f[6] = (S) => o.value = S),
                inputId: "ingredient5",
                name: "pizza",
                value: "Cheese1",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[15] || (f[15] = J(" 待看診(3) ", -1))
            ])
          ]),
          b("div", HT, [
            b("label", UT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[7] || (f[7] = (S) => o.value = S),
                inputId: "ingredient6",
                name: "pizza",
                value: "Cheese2",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[16] || (f[16] = J(" 已報到 ", -1))
            ]),
            b("label", WT, [
              T(g, {
                modelValue: o.value,
                "onUpdate:modelValue": f[8] || (f[8] = (S) => o.value = S),
                inputId: "ingredient7",
                name: "pizza",
                value: "Mushroom1",
                size: "small"
              }, null, 8, ["modelValue"]),
              f[17] || (f[17] = J(" 未報到 ", -1))
            ])
          ])
        ]),
        T(h, {
          label: "查詢",
          size: "small"
        }),
        T(Za, {
          items: l.value,
          columns: u.value,
          onSaveRow: s,
          onDeleteRow: a
        }, null, 8, ["items", "columns"])
      ]);
    };
  }
}), Ep = /* @__PURE__ */ xn(qT, [["__scopeId", "data-v-3f8e95e9"]]), KT = { class: "p-4" }, JT = /* @__PURE__ */ xe({
  __name: "TabPane2",
  props: {
    tabId: {}
  },
  setup(n) {
    return (e, t) => (w(), M("div", KT, [
      t[2] || (t[2] = b("h2", { class: "text-xl font-bold mb-2" }, "Tab 面板內容", -1)),
      b("p", null, [
        t[0] || (t[0] = J("這是 ", -1)),
        b("strong", null, De(e.tabId), 1),
        t[1] || (t[1] = J(" 的內容區塊。", -1))
      ])
    ]));
  }
}), _p = /* @__PURE__ */ xn(JT, [["__scopeId", "data-v-5daa1651"]]), GT = { class: "flex flex-col md:flex-row items-start gap-4" }, YT = { class: "flex-grow min-w-0" }, QT = { class: "w-full md:w-80 flex-shrink-0 mt-18 md:mt-18" }, XT = { key: 0 }, ZT = { class: "block truncate" }, eO = { key: 1 }, tO = { key: 0 }, nO = { key: 1 }, rO = { key: 2 }, iO = { key: 2 }, oO = { class: "block truncate" }, sO = /* @__PURE__ */ xe({
  __name: "CPOEDemo2",
  setup(n) {
    const e = $(), t = $("his"), r = $(!0), i = $(!0), o = Or([
      { id: "REGSFN01", name: "門診醫囑", panel: Ep, disabled: !0 },
      { id: "REGSFN02", name: "病患清單", panel: _p }
    ]), s = $(o.value[0].id), a = (c) => {
      const d = o.value.filter((p) => p.id !== c);
      o.value = d;
    }, l = (c) => {
      console.log("Parent received change:", c), s.value = c;
    }, u = $([
      { field: "id", header: "診號" },
      { field: "status", header: "狀態" },
      { field: "name", header: "姓名" }
    ]);
    return vt(() => {
      nn.getProductsMini().then((c) => e.value = c);
    }), (c, d) => {
      const p = R("Column"), f = R("DataTable"), h = R("Card");
      return w(), M("div", GT, [
        b("div", YT, [
          T(Op, {
            "active-id": s.value,
            variant: t.value,
            items: o.value,
            scrollable: i.value,
            closable: r.value,
            onChange: l,
            onClose: a
          }, null, 8, ["active-id", "variant", "items", "scrollable", "closable"])
        ]),
        b("div", QT, [
          T(h, { class: "h-full flex flex-col p-2" }, {
            header: D(() => [...d[0] || (d[0] = [
              b("div", { class: "flex gap-4" }, [
                b("div", { class: "flex gap-2 items-center flex-1" }, [
                  b("div", { class: "bg-primary h-[25px] w-2" }),
                  b("p", { class: "text-primary text-lg m-0" }, "當日急件報告")
                ]),
                b("div", { class: "flex flex-col justify-end flex-1" }, [
                  b("p", null, "3分鐘前更新"),
                  b("p", null, "總比數：3")
                ])
              ], -1)
            ])]),
            content: D(() => [
              T(f, {
                value: e.value,
                editMode: "row",
                dataKey: "id",
                size: "small",
                resizableColumns: "",
                columnResizeMode: "fit",
                selectionMode: "single",
                showGridlines: "",
                stripedRows: "",
                paginator: "",
                roweditoriniticon: "",
                rows: 10,
                pt: {
                  // table: { style: 'min-width: 50rem' },
                  // column: {
                  //     bodycell: ({ state }) => ({
                  //         style:  state['d_editing']&&'padding-top: 0.75rem; padding-bottom: 0.75rem'
                  //     })
                  // }
                }
              }, {
                default: D(() => [
                  (w(!0), M(he, null, Ee(u.value, (m) => (w(), oe(p, {
                    key: m.field,
                    field: m.field,
                    header: m.header,
                    class: "max-w-200 truncate",
                    size: "small"
                  }, {
                    body: D(({ data: g, field: y }) => [
                      y === "id" ? (w(), M("div", XT, [
                        b("span", ZT, "早診" + De(typeof y == "string" && y in g ? g[y] : ""), 1)
                      ])) : y === "status" ? (w(), M("div", eO, [
                        g[y] === "A" ? (w(), M("span", tO, [...d[1] || (d[1] = [
                          b("i", { class: "pi pi-times text-red-500" }, null, -1),
                          J("2/2", -1)
                        ])])) : g[y] === "C" ? (w(), M("span", nO, [...d[2] || (d[2] = [
                          b("i", { class: "pi pi-check text-green-500" }, null, -1),
                          J("0/1", -1)
                        ])])) : (w(), M("span", rO, "1/5"))
                      ])) : (w(), M("div", iO, [
                        b("span", oO, De(typeof y == "string" && y in g ? g[y] : ""), 1)
                      ]))
                    ]),
                    _: 1
                  }, 8, ["field", "header"]))), 128))
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            footer: D(() => [...d[3] || (d[3] = [])]),
            _: 1
          })
        ])
      ]);
    };
  }
}), aO = { class: "flex flex-col md:flex-row items-start gap-4" }, lO = { class: "flex-grow min-w-0" }, uO = { class: "w-full md:w-80 flex-shrink-0 mt-18 md:mt-18" }, cO = { key: 0 }, dO = { class: "block truncate" }, fO = { key: 1 }, pO = { key: 0 }, hO = { key: 1 }, mO = { key: 2 }, gO = { key: 2 }, vO = { class: "block truncate" }, yO = /* @__PURE__ */ xe({
  __name: "PatientList",
  setup(n) {
    const e = $(), t = $("his"), r = $(!0), i = $(!0), o = Or([
      { id: "REGSFN01", name: "病患清單", panel: Ep, disabled: !0 },
      { id: "REGSFN02", name: "門診醫囑", panel: _p }
    ]), s = $(o.value[0].id), a = (c) => {
      const d = o.value.filter((p) => p.id !== c);
      o.value = d;
    }, l = (c) => {
      console.log("Parent received change:", c), s.value = c;
    }, u = $([
      { field: "id", header: "診號" },
      { field: "status", header: "狀態" },
      { field: "name", header: "姓名" }
    ]);
    return vt(() => {
      nn.getProductsMini().then((c) => e.value = c);
    }), (c, d) => {
      const p = R("Column"), f = R("DataTable"), h = R("Card");
      return w(), M("div", aO, [
        b("div", lO, [
          T(Op, {
            "active-id": s.value,
            variant: t.value,
            items: o.value,
            scrollable: i.value,
            closable: r.value,
            onChange: l,
            onClose: a
          }, null, 8, ["active-id", "variant", "items", "scrollable", "closable"])
        ]),
        b("div", uO, [
          T(h, { class: "h-full flex flex-col p-2" }, {
            header: D(() => [...d[0] || (d[0] = [
              b("div", { class: "flex gap-4" }, [
                b("div", { class: "flex gap-2 items-center flex-1" }, [
                  b("div", { class: "bg-primary h-[25px] w-2" }),
                  b("p", { class: "text-primary text-lg m-0" }, "當日急件報告")
                ]),
                b("div", { class: "flex flex-col justify-end flex-1" }, [
                  b("p", null, "3分鐘前更新"),
                  b("p", null, "總比數：3")
                ])
              ], -1)
            ])]),
            content: D(() => [
              T(f, {
                value: e.value,
                editMode: "row",
                dataKey: "id",
                size: "small",
                resizableColumns: "",
                columnResizeMode: "fit",
                selectionMode: "single",
                showGridlines: "",
                stripedRows: "",
                paginator: "",
                roweditoriniticon: "",
                rows: 10,
                pt: {
                  // table: { style: 'min-width: 50rem' },
                  // column: {
                  //     bodycell: ({ state }) => ({
                  //         style:  state['d_editing']&&'padding-top: 0.75rem; padding-bottom: 0.75rem'
                  //     })
                  // }
                }
              }, {
                default: D(() => [
                  (w(!0), M(he, null, Ee(u.value, (m) => (w(), oe(p, {
                    key: m.field,
                    field: m.field,
                    header: m.header,
                    class: "max-w-200 truncate",
                    size: "small"
                  }, {
                    body: D(({ data: g, field: y }) => [
                      y === "id" ? (w(), M("div", cO, [
                        b("span", dO, "早診" + De(typeof y == "string" && y in g ? g[y] : ""), 1)
                      ])) : y === "status" ? (w(), M("div", fO, [
                        g[y] === "A" ? (w(), M("span", pO, [...d[1] || (d[1] = [
                          b("i", { class: "pi pi-times text-red-500" }, null, -1),
                          J("2/2", -1)
                        ])])) : g[y] === "C" ? (w(), M("span", hO, [...d[2] || (d[2] = [
                          b("i", { class: "pi pi-check text-green-500" }, null, -1),
                          J("0/1", -1)
                        ])])) : (w(), M("span", mO, "1/5"))
                      ])) : (w(), M("div", gO, [
                        b("span", vO, De(typeof y == "string" && y in g ? g[y] : ""), 1)
                      ]))
                    ]),
                    _: 1
                  }, 8, ["field", "header"]))), 128))
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), bO = { class: "card" }, SO = { class: "flex flex-wrap items-center justify-between gap-2" }, xO = { key: 0 }, wO = { key: 1 }, kO = {
  __name: "DatatableVirtualScroll",
  setup(n) {
    const e = To(), t = $(), r = $([]), i = $({}), o = $([
      { field: "code", header: "Code" },
      { field: "name", header: "Name" },
      { field: "quantity", header: "Quantity" },
      { field: "price", header: "Price" },
      { field: "category", header: "Category" },
      { field: "description", header: "Description" },
      { field: "rating", header: "Rating" }
    ]);
    vt(() => {
      nn.getProductsWithOrders().then((f) => {
        t.value = f, r.value = JSON.parse(JSON.stringify(f));
      });
    });
    const s = (f, h, m) => {
      var g;
      return ((g = i.value[f]) == null ? void 0 : g[h]) !== void 0 && String(m) !== String(i.value[f][h]) ? "bg-yellow-400" : "";
    }, a = $(null), l = (f) => {
      const { data: h, field: m } = f;
      a.value = h[m];
    }, u = (f) => {
      let { data: h, newValue: m, field: g } = f;
      const y = h.id, S = a.value;
      if (m === S) {
        console.log("資料沒有變動，不做任何事");
        return;
      }
      switch (g) {
        case "quantity":
        case "price":
          d(m) ? h[g] = m : f.preventDefault();
          break;
        default:
          m.trim().length > 0 ? h[g] = m : f.preventDefault();
          break;
      }
      h[g] = m, i.value[y] || (i.value[y] = {}), g in i.value[y] || (i.value[y][g] = S);
    }, c = () => {
      localStorage.setItem("savedProducts", JSON.stringify(t.value)), e.add({ severity: "success", summary: "成功", detail: "資料已儲存", life: 3e3 });
    }, d = (f) => {
      let h = String(f);
      if (h = h.trim(), !h)
        return !1;
      h = h.replace(/^0+/, "") || "0";
      var m = Math.floor(Number(h));
      return m !== 1 / 0 && String(m) === h && m >= 0;
    }, p = (f) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(f);
    return (f, h) => {
      const m = R("Button"), g = R("InputText"), y = R("InputNumber"), S = R("Column"), C = R("DataTable"), v = R("Toast");
      return w(), M(he, null, [
        b("div", bO, [
          T(C, {
            value: t.value,
            editMode: "cell",
            onCellEditComplete: u,
            onCellEditInit: l,
            size: "small",
            stripedRows: "",
            showGridlines: "",
            selectionMode: "single",
            scrollable: "",
            scrollHeight: "500px",
            virtualScrollerOptions: { itemSize: 30 },
            pt: {
              table: { style: "min-width: 50rem" },
              column: {
                bodycell: ({ state: k }) => ({
                  // class: [{ '!p-0': state['d_editing'] }]
                  class: "!p-0",
                  style: "white-space: normal; word-break: break-word; max-height: 60px; overflow: hidden;width: 50%;"
                })
              }
            }
          }, {
            header: D(() => [
              b("div", SO, [
                h[1] || (h[1] = b("span", { class: "text-xl font-bold" }, "測試", -1)),
                T(m, {
                  label: "存檔",
                  rounded: "",
                  raised: "",
                  onClick: h[0] || (h[0] = (k) => c())
                })
              ])
            ]),
            default: D(() => [
              (w(!0), M(he, null, Ee(o.value, (k) => (w(), oe(S, {
                key: k.field,
                field: k.field,
                header: k.header
              }, {
                body: D(({ data: x, field: O }) => [
                  O === "description" ? (w(), M("div", xO, [
                    b("div", {
                      class: en(s(x.id, O))
                    }, De(x[O]), 3)
                  ])) : (w(), M("div", wO, [
                    b("div", {
                      class: en(s(x.id, O))
                    }, De(O === "price" ? p(x[O]) : x[O]), 3)
                  ]))
                ]),
                editor: D(({ data: x, field: O }) => [
                  O !== "price" ? (w(), oe(g, {
                    key: 0,
                    modelValue: x[O],
                    "onUpdate:modelValue": (N) => x[O] = N,
                    autofocus: "",
                    fluid: "",
                    size: "small"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (w(), oe(y, {
                    key: 1,
                    modelValue: x[O],
                    "onUpdate:modelValue": (N) => x[O] = N,
                    mode: "currency",
                    currency: "USD",
                    locale: "en-US",
                    autofocus: "",
                    fluid: "",
                    size: "small"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                ]),
                _: 1
              }, 8, ["field", "header"]))), 128))
            ]),
            _: 1
          }, 8, ["value"])
        ]),
        T(v)
      ], 64);
    };
  }
}, CO = {
  __name: "DatatableReorder",
  setup(n) {
    const e = $([]), t = To();
    vt(() => {
      nn.getProductsWithOrders().then((l) => {
        e.value = l.map((u, c) => ({
          ...u,
          order: c
          // order 從0開始
        }));
      });
    });
    const r = () => {
      const l = /* @__PURE__ */ new Set();
      for (const u of e.value) {
        if (l.has(u.order)) return !0;
        l.add(u.order);
      }
      return !1;
    }, i = () => {
      const l = e.value.length;
      e.value.forEach((c) => {
        let d = Number(c.order);
        isNaN(d) || d < 0 ? c._tmpOrder = -1 / 0 : d >= l ? c._tmpOrder = 1 / 0 : c._tmpOrder = d;
      });
      const u = [...e.value].sort((c, d) => c._tmpOrder - d._tmpOrder);
      u.forEach((c, d) => {
        c.order = d, delete c._tmpOrder;
      }), e.value = u, r() ? t.add({ severity: "warn", summary: "有重複順序，已自動調整", life: 3e3 }) : t.add({ severity: "success", summary: "順序已更新", life: 2e3 });
    }, o = (l) => {
      e.value = l.value, e.value.forEach((u, c) => {
        u.order = c;
      }), t.add({ severity: "success", summary: "Rows Reordered", life: 3e3 });
    }, s = $([
      { field: "code", header: "Code" },
      { field: "name", header: "Name" },
      { field: "category", header: "Category" },
      { field: "quantity", header: "Quantity" }
    ]), a = () => {
      t.add({ severity: "success", summary: "Column Reordered", life: 3e3 });
    };
    return (l, u) => {
      const c = R("Column"), d = R("InputNumber"), p = R("DataTable"), f = R("Toast");
      return w(), M("div", null, [
        T(p, {
          value: e.value,
          reorderableColumns: !0,
          onColumnReorder: a,
          onRowReorder: o,
          tableStyle: "min-width: 50rem",
          sortField: "order",
          dataKey: "code",
          sortOrder: 1,
          onSort: l.onSort
        }, {
          default: D(() => [
            T(c, {
              rowReorder: "",
              headerStyle: "width: 3rem",
              reorderableColumn: !1
            }),
            T(c, {
              header: "#",
              headerStyle: "width: 3rem"
            }, {
              body: D((h) => [
                b("span", null, De(h.data.order), 1)
              ]),
              _: 1
            }),
            T(c, {
              header: "#",
              headerStyle: "width: 3rem"
            }, {
              body: D((h) => [
                T(d, {
                  modelValue: h.data.order,
                  "onUpdate:modelValue": (m) => h.data.order = m,
                  onBlur: i,
                  showButtons: "",
                  class: "w-full text-center"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            (w(!0), M(he, null, Ee(s.value, (h) => (w(), oe(c, {
              field: h.field,
              header: h.header,
              key: h.field
            }, null, 8, ["field", "header"]))), 128))
          ]),
          _: 1
        }, 8, ["value", "onSort"]),
        T(f)
      ]);
    };
  }
}, TO = [
  {
    path: "/his-primevue-app",
    name: "Home",
    component: $v
  },
  {
    path: "/his-primevue-app/Textcheck",
    name: "Textcheck",
    component: gk
  },
  {
    path: "/his-primevue-app/CPOEDemo",
    name: "CPOEDemo",
    component: NT
  },
  {
    path: "/his-primevue-app/Datatable",
    name: "Datatable",
    component: Gk
  },
  {
    path: "/his-primevue-app/PatientList",
    name: "PatientList",
    component: yO
  },
  {
    path: "/his-primevue-app/CPOEDemo2",
    name: "CPOEDemo2",
    component: sO
  },
  {
    path: "/his-primevue-app/DatatableSaveCell",
    name: "DatatableSaveCell",
    component: Zk
  },
  {
    path: "/his-primevue-app/DatatableVirtualScroll",
    name: "DatatableVirtualScroll",
    component: kO
  },
  {
    path: "/his-primevue-app/DatatableReorder",
    name: "DatatableReorder",
    component: CO
  }
];
Ig({
  history: Wm(),
  routes: TO
});
window.MyVueApp = { createMyApp };
