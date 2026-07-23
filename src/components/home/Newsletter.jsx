import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-20 md:py-28 bg-cream-50">
      <div className="container-editorial">
        <div className="bg-ink-900 text-cream-50 px-8 py-16 md:px-16 md:py-20 text-center max-w-3xl mx-auto relative overflow-hidden">
          {/* Decorative gold hairlines */}
          <span className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-px bg-gold-500" />
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-px bg-gold-500" />

          <p className="eyebrow-light text-gold-300">Join the list</p>
          <h2
            id="newsletter-title"
            className="mt-4 font-serif font-light text-cream-50 text-[36px] md:text-[52px] leading-[1.04]"
          >
            <span className="italic text-gold-300">10% off</span> your first order
          </h2>
          <p
            id="newsletter-subtitle"
            className="mt-5 text-cream-100/80 text-base max-w-md mx-auto font-light"
          >
            New drops, journal entries, and an early invitation to our seasonal
            sales. No noise — only the good things.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-9 max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-3"
          >
            {submitted ? (
              <div className="flex-1 flex items-center justify-center gap-2 text-gold-300 text-sm py-3">
                <Check className="w-4 h-4" strokeWidth={1.5} />
                Welcome — check your inbox for your code.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border border-cream-200/40 text-cream-50 placeholder:text-cream-200/50 px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors duration-300"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-gold-500 text-ink-900 px-6 py-3 text-[11px] font-medium uppercase tracking-btn rounded-sm transition-all duration-300 hover:bg-gold-600"
                >
                  Get 10% off
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </>
            )}
          </form>
          <p className="mt-5 text-[10px] uppercase tracking-btn text-cream-200/60">
            By subscribing you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
