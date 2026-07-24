import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section className="bg-ivory-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-ink-500">The Velmora Circle</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-ink-800 text-balance">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Early access to new collections, studio notes, and a quiet note from
            us each month. No noise, no spam.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 mx-auto flex max-w-md items-stretch gap-2"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-none border border-ink-800/30 bg-transparent px-4 py-3 text-sm text-ink-800 placeholder:text-ink-500/70 focus:border-gold-400 focus:outline-none"
            />
            <button
              type="submit"
              className="btn-accent px-5 sm:px-7"
              disabled={status === "submitting"}
            >
              {status === "success" ? (
                <>
                  <Check className="h-4 w-4" /> Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
