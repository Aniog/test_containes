import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const value = email.trim();
    if (!value) {
      setError("Please enter your email.");
      setStatus("error");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      setError("That doesn't look like a valid email.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // Simulate a request; in production this would POST to a marketing endpoint.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    setEmail("");
  };

  return (
    <section
      className="py-20 sm:py-28 lg:py-32 bg-espresso text-ivory-50"
      aria-labelledby="newsletter-title"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <p className="eyebrow text-gold-300/90">Be the first to know</p>
        <h2
          id="newsletter-title"
          className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory-50 text-balance"
        >
          Join for 10% off your first order.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-ivory-100/70 max-w-md mx-auto">
          New drops, restocks, and the occasional story from the studio.
          Unsubscribe whenever you like.
        </p>

        {status === "success" ? (
          <div
            className="mt-8 inline-flex items-center gap-3 text-ivory-50 border border-ivory-50/30 px-6 py-4 animate-fade-in"
            role="status"
          >
            <Check className="w-4 h-4 text-gold-300" strokeWidth={1.5} />
            <span className="font-sans text-sm">
              Thanks — your code is on its way.
            </span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-end gap-3 max-w-md mx-auto"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border-b border-ivory-50/40 text-ivory-50 placeholder:text-ivory-100/40 font-sans text-sm py-3 px-0 focus:outline-none focus:border-ivory-50 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 bg-ivory-50 text-espresso font-sans text-[11px] uppercase tracking-widest2 px-7 py-3.5 transition-all duration-300 hover:bg-ivory-100 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Subscribe"}
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </form>
        )}

        {status === "error" && (
          <p
            className="mt-3 text-xs text-gold-300"
            role="alert"
          >
            {error}
          </p>
        )}

        <p className="mt-5 text-[10px] uppercase tracking-widest2 text-ivory-100/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
