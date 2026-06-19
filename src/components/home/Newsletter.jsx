import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-velmora-gold">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-sm text-white/90">
          Subscribe for 10% off your first order, early access to new collections, and
          styling inspiration.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/60 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-white text-velmora-ink px-6 py-3 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-velmora-cream transition-colors"
          >
            {submitted ? (
              <>
                <Check size={14} strokeWidth={2} />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </>
            )}
          </button>
        </form>

        {submitted && (
          <p className="mt-3 text-xs text-white/90">Welcome — check your inbox for your code.</p>
        )}
      </div>
    </section>
  );
}
