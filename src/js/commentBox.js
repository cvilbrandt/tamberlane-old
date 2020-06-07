!(function (e, t) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.commentBox = t()) : (e.commentBox = t());
})("undefined" != typeof self ? self : this, function () {
    return (function (e) {
        var t = {};
        function r(o) {
            if (t[o]) return t[o].exports;
            var n = (t[o] = { i: o, l: !1, exports: {} });
            return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
        }
        return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, o) {
                r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
            }),
            (r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if ((r.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var n in e)
                        r.d(
                            o,
                            n,
                            function (t) {
                                return e[t];
                            }.bind(null, n)
                        );
                return o;
            }),
            (r.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 3))
        );
    })([
        function (e, t, r) {
            "use strict";
            var o = r(4),
                n = r(5),
                a = r(2);
            e.exports = { formats: a, parse: n, stringify: o };
        },
        function (e, t, r) {
            "use strict";
            var o = Object.prototype.hasOwnProperty,
                n = (function () {
                    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                    return e;
                })(),
                a = function (e, t) {
                    for (var r = t && t.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o) void 0 !== e[o] && (r[o] = e[o]);
                    return r;
                };
            e.exports = {
                arrayToObject: a,
                assign: function (e, t) {
                    return Object.keys(t).reduce(function (e, r) {
                        return (e[r] = t[r]), e;
                    }, e);
                },
                compact: function (e) {
                    for (var t = [{ obj: { o: e }, prop: "o" }], r = [], o = 0; o < t.length; ++o)
                        for (var n = t[o], a = n.obj[n.prop], i = Object.keys(a), l = 0; l < i.length; ++l) {
                            var c = i[l],
                                s = a[c];
                            "object" == typeof s && null !== s && -1 === r.indexOf(s) && (t.push({ obj: a, prop: c }), r.push(s));
                        }
                    return (function (e) {
                        for (var t; e.length; ) {
                            var r = e.pop();
                            if (((t = r.obj[r.prop]), Array.isArray(t))) {
                                for (var o = [], n = 0; n < t.length; ++n) void 0 !== t[n] && o.push(t[n]);
                                r.obj[r.prop] = o;
                            }
                        }
                        return t;
                    })(t);
                },
                decode: function (e) {
                    try {
                        return decodeURIComponent(e.replace(/\+/g, " "));
                    } catch (t) {
                        return e;
                    }
                },
                encode: function (e) {
                    if (0 === e.length) return e;
                    for (var t = "string" == typeof e ? e : String(e), r = "", o = 0; o < t.length; ++o) {
                        var a = t.charCodeAt(o);
                        45 === a || 46 === a || 95 === a || 126 === a || (a >= 48 && a <= 57) || (a >= 65 && a <= 90) || (a >= 97 && a <= 122)
                            ? (r += t.charAt(o))
                            : a < 128
                            ? (r += n[a])
                            : a < 2048
                            ? (r += n[192 | (a >> 6)] + n[128 | (63 & a)])
                            : a < 55296 || a >= 57344
                            ? (r += n[224 | (a >> 12)] + n[128 | ((a >> 6) & 63)] + n[128 | (63 & a)])
                            : ((o += 1), (a = 65536 + (((1023 & a) << 10) | (1023 & t.charCodeAt(o)))), (r += n[240 | (a >> 18)] + n[128 | ((a >> 12) & 63)] + n[128 | ((a >> 6) & 63)] + n[128 | (63 & a)]));
                    }
                    return r;
                },
                isBuffer: function (e) {
                    return null !== e && void 0 !== e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
                },
                isRegExp: function (e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e);
                },
                merge: function e(t, r, n) {
                    if (!r) return t;
                    if ("object" != typeof r) {
                        if (Array.isArray(t)) t.push(r);
                        else {
                            if ("object" != typeof t) return [t, r];
                            (n.plainObjects || n.allowPrototypes || !o.call(Object.prototype, r)) && (t[r] = !0);
                        }
                        return t;
                    }
                    if ("object" != typeof t) return [t].concat(r);
                    var i = t;
                    return (
                        Array.isArray(t) && !Array.isArray(r) && (i = a(t, n)),
                        Array.isArray(t) && Array.isArray(r)
                            ? (r.forEach(function (r, a) {
                                  o.call(t, a) ? (t[a] && "object" == typeof t[a] ? (t[a] = e(t[a], r, n)) : t.push(r)) : (t[a] = r);
                              }),
                              t)
                            : Object.keys(r).reduce(function (t, a) {
                                  var i = r[a];
                                  return o.call(t, a) ? (t[a] = e(t[a], i, n)) : (t[a] = i), t;
                              }, i)
                    );
                },
            };
        },
        function (e, t, r) {
            "use strict";
            var o = String.prototype.replace,
                n = /%20/g;
            e.exports = {
                default: "RFC3986",
                formatters: {
                    RFC1738: function (e) {
                        return o.call(e, n, "+");
                    },
                    RFC3986: function (e) {
                        return e;
                    },
                },
                RFC1738: "RFC1738",
                RFC3986: "RFC3986",
            };
        },
        function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, "default", function () {
                    return i;
                });
            var o = r(0);
            const n = {
                    className: "commentbox",
                    defaultBoxId: "commentbox",
                    tlcParam: "tlc",
                    backgroundColor: null,
                    textColor: null,
                    subtextColor: null,
                    singleSignOn: null,
                    createBoxUrl: (e, t) => ((t.search = ""), (t.hash = e), t.href),
                    onCommentCount(e) {},
                    testMode: !1,
                },
                a = { buttonText: "Single Sign-On", buttonIcon: "", buttonColor: "", autoSignOn: !1, onSignOn(e, t) {}, onSignOut() {} };
            function i(e, t = n) {
                if (!e) throw new Error("Please supply a valid projectId.");
                const { className: r, defaultBoxId: i, tlcParam: l, backgroundColor: c, textColor: s, subtextColor: u, createBoxUrl: d, onCommentCount: f, testMode: p } = Object.keys(n).reduce(
                    (e, r) => ((e[r] = t && t[r] ? t[r] : n[r]), e),
                    {}
                );
                let y = t.singleSignOn || null;
                y && (y = Object.keys(a).reduce((e, t) => ((e[t] = y[t] || a[t]), e), {}));
                const b = document.createElement("a");
                b.href = window.location.href;
                const m = document.getElementsByClassName(r),
                    g = m.length,
                    h = {},
                    v = p ? "localhost:8000" : "app.commentbox.io",
                    O = p ? "http:" : "https:",
                    j = `${O}//${v}`;
                for (let t = 0; t < g; t++) {
                    const r = m[t];
                    if (r.getAttribute("data-loaded")) continue;
                    const n = r.id || i,
                        a = Object(o.parse)(b.search.replace("?", ""))[l],
                        f = document.createElement("a");
                    if (h[n]) throw new Error("Each box must have a unique ID");
                    (h[n] = !0), (r.id = n), (f.href = d(n, b));
                    const p = Object(o.parse)(f.search.replace("?", "")),
                        g = Object.keys(p).reduce((e, t) => (t.toLowerCase() !== l.toLowerCase() && (e[t] = p[t]), e), {});
                    f.search = Object.keys(g).length > 0 ? `?${Object(o.stringify)(g)}` : "";
                    const v = document.createElement("iframe"),
                        O = document.createElement("a"),
                        w = { id: n, url: f.href, tlc_param: l, tlc: a, background_color: c, text_color: s, subtext_color: u },
                        x = () => {
                            (O.href = j),
                                (O.pathname = e),
                                (O.search = Object(o.stringify)(w)),
                                v.setAttribute("src", O.href),
                                v.setAttribute("frameborder", "0"),
                                v.setAttribute("scrolling", "no"),
                                v.setAttribute("style", "width: 100%"),
                                r.appendChild(v),
                                r.setAttribute("data-loaded", "true");
                        };
                    if (y)
                        if ((Object.assign(w, { sso: "1", sso_text: y.buttonText, sso_icon: y.buttonIcon, sso_color: y.buttonColor }), y.autoSignOn)) {
                            let e = !1;
                            y.onSignOn(
                                (t) => {
                                    if (e) throw new Error("Callback already called.");
                                    (e = !0), t && (w.sso_user_payload = t), x();
                                },
                                (t) => {
                                    if (e) throw new Error("Callback already called.");
                                    (e = !0), x();
                                }
                            );
                        } else x();
                    else x();
                }
                const w = function (e) {
                    const t = document.createElement("a");
                    if (((t.href = e.origin), (e.data && t.hostname === v) || t.protocol === O))
                        try {
                            const t = JSON.parse(e.data),
                                { event: r, id: o, payload: n } = t,
                                a = document.getElementById(o).firstChild;
                            if (!h[o]) return;
                            switch (r) {
                                case "count":
                                    a.setAttribute("data-comments-loaded", "true"), f(n);
                                    break;
                                case "resize":
                                    a.height = `${n}px`;
                                    break;
                                case "tlc":
                                    a.setAttribute("data-tlc", n);
                                    break;
                                case "sso-user-payload":
                                    if (y) {
                                        let t = !1;
                                        y.onSignOn(
                                            (r) => {
                                                if (t) throw new Error("Callback already called.");
                                                t = !0;
                                                const o = JSON.stringify(r ? { event: "sso-user-payload", payload: r } : { event: "sso-user-payload-error", payload: "Could not sign in." });
                                                e.source.postMessage(o, e.origin);
                                            },
                                            (r) => {
                                                if (t) throw new Error("Callback already called.");
                                                t = !0;
                                                const o = JSON.stringify({ event: "sso-user-payload-error", payload: r.message });
                                                e.source.postMessage(o, e.origin);
                                            }
                                        );
                                    }
                                    break;
                                case "sso-logout":
                                    y && y.onSignOut();
                            }
                            if (a.getAttribute("data-comments-loaded") && a.getAttribute("data-tlc") && !a.getAttribute("data-tlc-scrolled")) {
                                const e = a.getBoundingClientRect();
                                window.scrollTo(0, window.scrollY + e.top + parseInt(a.getAttribute("data-tlc"))), a.setAttribute("data-tlc-scrolled", "true");
                            }
                        } catch (e) {}
                };
                return (
                    window.addEventListener("message", w),
                    function () {
                        window.removeEventListener("message", w);
                    }
                );
            }
        },
        function (e, t, r) {
            "use strict";
            var o = r(1),
                n = r(2),
                a = {
                    brackets: function (e) {
                        return e + "[]";
                    },
                    indices: function (e, t) {
                        return e + "[" + t + "]";
                    },
                    repeat: function (e) {
                        return e;
                    },
                },
                i = Date.prototype.toISOString,
                l = {
                    delimiter: "&",
                    encode: !0,
                    encoder: o.encode,
                    encodeValuesOnly: !1,
                    serializeDate: function (e) {
                        return i.call(e);
                    },
                    skipNulls: !1,
                    strictNullHandling: !1,
                },
                c = function e(t, r, n, a, i, c, s, u, d, f, p, y) {
                    var b = t;
                    if ("function" == typeof s) b = s(r, b);
                    else if (b instanceof Date) b = f(b);
                    else if (null === b) {
                        if (a) return c && !y ? c(r, l.encoder) : r;
                        b = "";
                    }
                    if ("string" == typeof b || "number" == typeof b || "boolean" == typeof b || o.isBuffer(b)) return c ? [p(y ? r : c(r, l.encoder)) + "=" + p(c(b, l.encoder))] : [p(r) + "=" + p(String(b))];
                    var m,
                        g = [];
                    if (void 0 === b) return g;
                    if (Array.isArray(s)) m = s;
                    else {
                        var h = Object.keys(b);
                        m = u ? h.sort(u) : h;
                    }
                    for (var v = 0; v < m.length; ++v) {
                        var O = m[v];
                        (i && null === b[O]) || (g = Array.isArray(b) ? g.concat(e(b[O], n(r, O), n, a, i, c, s, u, d, f, p, y)) : g.concat(e(b[O], r + (d ? "." + O : "[" + O + "]"), n, a, i, c, s, u, d, f, p, y)));
                    }
                    return g;
                };
            e.exports = function (e, t) {
                var r = e,
                    i = t ? o.assign({}, t) : {};
                if (null !== i.encoder && void 0 !== i.encoder && "function" != typeof i.encoder) throw new TypeError("Encoder has to be a function.");
                var s = void 0 === i.delimiter ? l.delimiter : i.delimiter,
                    u = "boolean" == typeof i.strictNullHandling ? i.strictNullHandling : l.strictNullHandling,
                    d = "boolean" == typeof i.skipNulls ? i.skipNulls : l.skipNulls,
                    f = "boolean" == typeof i.encode ? i.encode : l.encode,
                    p = "function" == typeof i.encoder ? i.encoder : l.encoder,
                    y = "function" == typeof i.sort ? i.sort : null,
                    b = void 0 !== i.allowDots && i.allowDots,
                    m = "function" == typeof i.serializeDate ? i.serializeDate : l.serializeDate,
                    g = "boolean" == typeof i.encodeValuesOnly ? i.encodeValuesOnly : l.encodeValuesOnly;
                if (void 0 === i.format) i.format = n.default;
                else if (!Object.prototype.hasOwnProperty.call(n.formatters, i.format)) throw new TypeError("Unknown format option provided.");
                var h,
                    v,
                    O = n.formatters[i.format];
                "function" == typeof i.filter ? (r = (v = i.filter)("", r)) : Array.isArray(i.filter) && (h = v = i.filter);
                var j,
                    w = [];
                if ("object" != typeof r || null === r) return "";
                j = i.arrayFormat in a ? i.arrayFormat : "indices" in i ? (i.indices ? "indices" : "repeat") : "indices";
                var x = a[j];
                h || (h = Object.keys(r)), y && h.sort(y);
                for (var A = 0; A < h.length; ++A) {
                    var C = h[A];
                    (d && null === r[C]) || (w = w.concat(c(r[C], C, x, u, d, f ? p : null, v, y, b, m, O, g)));
                }
                var k = w.join(s),
                    S = !0 === i.addQueryPrefix ? "?" : "";
                return k.length > 0 ? S + k : "";
            };
        },
        function (e, t, r) {
            "use strict";
            var o = r(1),
                n = Object.prototype.hasOwnProperty,
                a = { allowDots: !1, allowPrototypes: !1, arrayLimit: 20, decoder: o.decode, delimiter: "&", depth: 5, parameterLimit: 1e3, plainObjects: !1, strictNullHandling: !1 },
                i = function (e, t, r) {
                    if (e) {
                        var o = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                            a = /(\[[^[\]]*])/g,
                            i = /(\[[^[\]]*])/.exec(o),
                            l = i ? o.slice(0, i.index) : o,
                            c = [];
                        if (l) {
                            if (!r.plainObjects && n.call(Object.prototype, l) && !r.allowPrototypes) return;
                            c.push(l);
                        }
                        for (var s = 0; null !== (i = a.exec(o)) && s < r.depth; ) {
                            if (((s += 1), !r.plainObjects && n.call(Object.prototype, i[1].slice(1, -1)) && !r.allowPrototypes)) return;
                            c.push(i[1]);
                        }
                        return (
                            i && c.push("[" + o.slice(i.index) + "]"),
                            (function (e, t, r) {
                                for (var o = t, n = e.length - 1; n >= 0; --n) {
                                    var a,
                                        i = e[n];
                                    if ("[]" === i) a = (a = []).concat(o);
                                    else {
                                        a = r.plainObjects ? Object.create(null) : {};
                                        var l = "[" === i.charAt(0) && "]" === i.charAt(i.length - 1) ? i.slice(1, -1) : i,
                                            c = parseInt(l, 10);
                                        !isNaN(c) && i !== l && String(c) === l && c >= 0 && r.parseArrays && c <= r.arrayLimit ? ((a = [])[c] = o) : (a[l] = o);
                                    }
                                    o = a;
                                }
                                return o;
                            })(c, t, r)
                        );
                    }
                };
            e.exports = function (e, t) {
                var r = t ? o.assign({}, t) : {};
                if (null !== r.decoder && void 0 !== r.decoder && "function" != typeof r.decoder) throw new TypeError("Decoder has to be a function.");
                if (
                    ((r.ignoreQueryPrefix = !0 === r.ignoreQueryPrefix),
                    (r.delimiter = "string" == typeof r.delimiter || o.isRegExp(r.delimiter) ? r.delimiter : a.delimiter),
                    (r.depth = "number" == typeof r.depth ? r.depth : a.depth),
                    (r.arrayLimit = "number" == typeof r.arrayLimit ? r.arrayLimit : a.arrayLimit),
                    (r.parseArrays = !1 !== r.parseArrays),
                    (r.decoder = "function" == typeof r.decoder ? r.decoder : a.decoder),
                    (r.allowDots = "boolean" == typeof r.allowDots ? r.allowDots : a.allowDots),
                    (r.plainObjects = "boolean" == typeof r.plainObjects ? r.plainObjects : a.plainObjects),
                    (r.allowPrototypes = "boolean" == typeof r.allowPrototypes ? r.allowPrototypes : a.allowPrototypes),
                    (r.parameterLimit = "number" == typeof r.parameterLimit ? r.parameterLimit : a.parameterLimit),
                    (r.strictNullHandling = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : a.strictNullHandling),
                    "" === e || null === e || void 0 === e)
                )
                    return r.plainObjects ? Object.create(null) : {};
                for (
                    var l =
                            "string" == typeof e
                                ? (function (e, t) {
                                      for (var r = {}, o = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, l = o.split(t.delimiter, i), c = 0; c < l.length; ++c) {
                                          var s,
                                              u,
                                              d = l[c],
                                              f = d.indexOf("]="),
                                              p = -1 === f ? d.indexOf("=") : f + 1;
                                          -1 === p ? ((s = t.decoder(d, a.decoder)), (u = t.strictNullHandling ? null : "")) : ((s = t.decoder(d.slice(0, p), a.decoder)), (u = t.decoder(d.slice(p + 1), a.decoder))),
                                              n.call(r, s) ? (r[s] = [].concat(r[s]).concat(u)) : (r[s] = u);
                                      }
                                      return r;
                                  })(e, r)
                                : e,
                        c = r.plainObjects ? Object.create(null) : {},
                        s = Object.keys(l),
                        u = 0;
                    u < s.length;
                    ++u
                ) {
                    var d = s[u],
                        f = i(d, l[d], r);
                    c = o.merge(c, f, r);
                }
                return o.compact(c);
            };
        },
    ]).default;
});