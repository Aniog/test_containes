import p from "axios";
import { PostgrestClient as h } from "@supabase/postgrest-js";
var m = Object.defineProperty, g = (t, e, o) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, w = (t, e, o) => g(t, typeof e != "symbol" ? e + "" : e, o);
class _ extends Error {
  constructor(e, o, r) {
    super(e), w(this, "code"), w(this, "statusCode"), w(this, "response"), this.name = "VibeCoderError", this.statusCode = o, this.response = r;
  }
}
function y(t) {
  const {
    baseURL: e,
    headers: o = {},
    token: r,
    interceptResponses: n = !0,
    onError: a
  } = t, s = p.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json",
      ...o
    }
  });
  return s.interceptors.request.use(
    (i) => (r && (i.headers.Authorization = `Bearer ${r}`), i),
    (i) => Promise.reject(i)
  ), n && s.interceptors.response.use(
    (i) => i.data,
    (i) => {
      const c = new _(
        i.message,
        i.response?.status,
        i.response?.data
      );
      return a && a(c), Promise.reject(c);
    }
  ), s;
}
var S = Object.defineProperty, v = (t, e, o) => e in t ? S(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, k = (t, e, o) => v(t, e + "", o);
class x {
  constructor(e, o) {
    k(this, "postgrest"), this.postgrest = new h(e, {
      headers: {
        apikey: o,
        Authorization: `Bearer ${o}`
      }
    });
  }
  from(e) {
    return this.postgrest.from(e);
  }
}
function f(t) {
  return typeof t == "object" && t !== null;
}
function b(t, e, o) {
  return {
    async user() {
      return t.get(`/v1/sites/${e}/form_entities/user`);
    },
    async updateUser(r) {
      return t.put(`/v1/sites/${e}/form_entities/user`, r);
    },
    redirectToLogin(r) {
      if (typeof window > "u")
        throw new Error(
          "Login method can only be used in a browser environment"
        );
      const n = r ? new URL(r, window.location.origin).toString() : window.location.href, a = `${o.appBaseUrl || ""}/login?from_url=${encodeURIComponent(n)}`;
      window.location.href = a;
    },
    logout(r) {
      if (delete t.defaults.headers.common.Authorization, typeof window < "u" && window.localStorage)
        try {
          window.localStorage.removeItem("vibe_coder_access_token"), window.localStorage.removeItem("token");
        } catch {
        }
      typeof window < "u" && (r ? window.location.href = r : window.location.reload());
    },
    setToken(r, n = !0) {
      if (r && (t.defaults.headers.common.Authorization = `Bearer ${r}`, n && typeof window < "u" && window.localStorage))
        try {
          window.localStorage.setItem("vibe_coder_access_token", r), window.localStorage.setItem("token", r);
        } catch {
        }
    },
    async loginViaEmailPassword(r, n, a) {
      try {
        const s = await t.post(`/apps/${e}/auth/login`, {
          email: r,
          password: n,
          ...a && { turnstile_token: a }
        }), i = f(s) ? {
          access_token: typeof s.access_token == "string" ? s.access_token : void 0,
          user: s.user
        } : f(s?.data) ? {
          access_token: typeof s.data.access_token == "string" ? s.data.access_token : void 0,
          user: s.data.user
        } : {}, { access_token: c, user: l } = i;
        return c && this.setToken(c), { access_token: c, user: l };
      } catch (s) {
        throw p.isAxiosError(s) && s.response?.status === 401 && await this.logout(), s;
      }
    },
    async isAuthenticated() {
      try {
        return await this.user(), !0;
      } catch {
        return !1;
      }
    },
    async inviteUser(r, n) {
      return t.post(`/apps/${e}/users/invite-user`, {
        user_email: r,
        role: n
      });
    },
    async register(r) {
      return t.post(`/apps/${e}/auth/register`, r);
    },
    async verifyOtp({ email: r, otpCode: n }) {
      return t.post(`/apps/${e}/auth/verify-otp`, {
        email: r,
        otp_code: n
      });
    },
    async resendOtp(r) {
      return t.post(`/apps/${e}/auth/resend-otp`, { email: r });
    },
    async resetPasswordRequest(r) {
      return t.post(`/apps/${e}/auth/reset-password-request`, { email: r });
    },
    async resetPassword({
      resetToken: r,
      newPassword: n
    }) {
      return t.post(`/apps/${e}/auth/reset-password`, {
        reset_token: r,
        new_password: n
      });
    },
    async changePassword({
      userId: r,
      currentPassword: n,
      newPassword: a
    }) {
      return t.post(`/apps/${e}/auth/change-password`, {
        user_id: r,
        current_password: n,
        new_password: a
      });
    }
  };
}
function $(t = {}) {
  const {
    storageKey: e = "vibe_coder_access_token",
    paramName: o = "access_token",
    saveToStorage: r = !0,
    removeFromUrl: n = !0
  } = t;
  let a = null;
  if (typeof window < "u" && window.location)
    try {
      const s = new URLSearchParams(window.location.search);
      if (a = s.get(o), a) {
        if (r && C(a, { storageKey: e }), n) {
          s.delete(o);
          const i = `${window.location.pathname}${s.toString() ? `?${s.toString()}` : ""}${window.location.hash}`;
          window.history.replaceState({}, document.title, i);
        }
        return a;
      }
    } catch {
    }
  if (typeof window < "u" && window.localStorage)
    try {
      return a = window.localStorage.getItem(e), a;
    } catch {
    }
  return null;
}
function C(t, e = {}) {
  const { storageKey: o = "vibe_coder_access_token" } = e;
  if (typeof window > "u" || !window.localStorage || !t)
    return !1;
  try {
    return window.localStorage.setItem(o, t), window.localStorage.setItem("token", t), !0;
  } catch {
    return !1;
  }
}
function R(t = {}) {
  const { storageKey: e = "vibe_coder_access_token" } = t;
  if (typeof window > "u" || !window.localStorage)
    return !1;
  try {
    return window.localStorage.removeItem(e), !0;
  } catch {
    return !1;
  }
}
function T(t, e, o = {}) {
  let r = "";
  if (o.expires != null) {
    let n;
    typeof o.expires == "number" ? (n = /* @__PURE__ */ new Date(), n.setTime(n.getTime() + o.expires * 864e5)) : n = o.expires, r = "; expires=" + n.toUTCString();
  }
  return document.cookie = [
    encodeURIComponent(t) + "=" + encodeURIComponent(String(e)),
    r,
    o.path ? "; path=" + o.path : "",
    o.domain ? "; domain=" + o.domain : "",
    o.secure ? "; secure" : "",
    o.sameSite ? "; SameSite=" + o.sameSite : ""
  ].join("");
}
function U(t) {
  const e = encodeURIComponent(t) + "=", o = document.cookie.split(";");
  for (const r of o) {
    const n = r.trim();
    if (n.startsWith(e))
      return decodeURIComponent(n.substring(e.length));
  }
  return null;
}
const E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCookieItem: U,
  setCookieItem: T
}, Symbol.toStringTag, { value: "Module" }));
function I(t) {
  const {
    serverUrl: e = "https://openhands.strikingly.com",
    appId: o,
    token: r,
    requiresAuth: n = !1,
    appBaseUrl: a,
    headers: s = {},
    options: i
  } = t, c = {
    ...s,
    "X-App-Id": String(o)
  }, l = y({
    baseURL: `${e}/api`,
    headers: c,
    token: r,
    onError: i?.onError
  }), u = {
    auth: b(l, o, {
      appBaseUrl: a
    })
  };
  if (typeof window < "u") {
    const d = r || $();
    d && u.auth.setToken(d);
  }
  return n && typeof window < "u" && setTimeout(async () => {
    try {
      await u.auth.isAuthenticated() || u.auth.redirectToLogin(window.location.href);
    } catch {
      u.auth.redirectToLogin(window.location.href);
    }
  }, 0), {
    ...u,
    setToken(d) {
      u.auth.setToken(d);
    },
    getConfig() {
      return { serverUrl: e, appId: o, requiresAuth: n };
    }
  };
}
export {
  x as DataClient,
  E as Utils,
  _ as VibeCoderError,
  I as createClient,
  $ as getAccessToken,
  R as removeAccessToken,
  C as saveAccessToken
};
//# sourceMappingURL=index.mjs.map
