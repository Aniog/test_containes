import React, { useState } from "react";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="journal" className="bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-[1100px] px-5 text-center md:px-10">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold-light">
          The List
        </p>
        <h2 className="mt-4 font-serif text-4xl font-light leading-tight md:text-6xl">
          Join for <span className="italic text-gold-light">10% off</span> your first order.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/70 md:text-base">
          Early access to drops, editorial notes, and the occasional letter
          from our atelier. No noise, ever.
        </p>

        {submitted ? (
          <div className="mx-auto mt-10 inline-flex items-center gap-3 border border-gold/50 bg-ink-soft px-6 py-4 text-sm text-gold-light">
            <Check className="h-4 w-4" strokeWidth={1.5} />
            <span>You're on the list. Check your inbox.</span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:gap-0"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-cream/30 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none sm:border-r-0"
            />
            <button
              type="submit"
              className="bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream transition-colors duration-300 hover:bg-gold-deep"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-5 text-xs text-cream/45">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
