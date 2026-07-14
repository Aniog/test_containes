import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section
      className="bg-ivory py-20 md:py-28"
      aria-labelledby="newsletter-title"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <p className="eyebrow">The Inner Circle</p>
        <h2
          id="newsletter-title"
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mt-3"
        >
          Join for 10% off your first order.
        </h2>
        <p className="mt-5 text-sm md:text-base text-ash max-w-md mx-auto leading-relaxed">
          Early access to new collections, restocks, and the occasional
          behind-the-scenes from the atelier.
        </p>

        {submitted ? (
          <div className="mt-10 inline-flex items-center gap-3 text-espresso">
            <span className="h-9 w-9 rounded-full bg-gold/20 flex items-center justify-center">
              <Check size={16} strokeWidth={1.6} className="text-gold-deep" />
            </span>
            <span className="font-serif text-xl">
              Welcome — your code is on its way.
            </span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 mx-auto max-w-md flex items-stretch border-b border-espresso focus-within:border-gold transition"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent py-3 px-1 text-sm text-espresso placeholder:text-ash focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-4 text-[11px] tracking-widest2 uppercase text-espresso hover:text-gold transition"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] tracking-wide text-ash">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
