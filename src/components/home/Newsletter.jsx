import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-cream-warm">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">The Velmora Letter</p>
          <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-ink leading-[1.05] text-balance">
            Join for 10% off your first order.
          </h2>
          <p className="mt-5 font-sans text-base text-mushroom-dark max-w-xl mx-auto leading-relaxed">
            Early access to new collections, behind-the-studio notes, and the occasional
            hand-written letter from our founder. No spam, ever.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0"
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
              placeholder="you@email.com"
              className="flex-1 bg-ivory border border-line px-5 py-3.5 font-sans text-sm text-ink placeholder:text-mushroom focus:outline-none focus:border-ink"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-ink text-ivory font-sans text-[11px] uppercase tracking-widest2 px-6 py-3.5 transition-all duration-500 ease-editorial hover:bg-gold hover:text-ink"
            >
              Subscribe
              <Send className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </form>
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 font-sans text-[11px] uppercase tracking-widest2 text-mushroom transition-opacity duration-500 ${
              submitted ? "opacity-100" : "opacity-0"
            }`}
          >
            Thank you — check your inbox for your code.
          </p>
        </div>
      </div>
    </section>
  );
}
