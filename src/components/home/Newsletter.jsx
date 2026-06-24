import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-ink text-bone relative overflow-hidden">
      {/* Subtle gold flourish */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold-soft mb-4">
          The List
        </p>
        <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.05]">
          Join for <em className="italic text-gold-soft">10% off</em>
          <br className="hidden md:block" /> your first order.
        </h2>
        <p className="mt-5 text-bone/75 max-w-md mx-auto text-sm leading-relaxed">
          Early access to new pieces, atelier stories, and the occasional
          private sale. No spam — promise.
        </p>

        {submitted ? (
          <p
            role="status"
            className="mt-10 text-gold-soft text-sm tracking-[0.2em] uppercase"
          >
            Welcome to the list — check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
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
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-bone/30 hover:border-bone/60 focus:border-gold transition-colors px-5 py-4 text-sm text-bone placeholder:text-bone/50 outline-none"
            />
            <button
              type="submit"
              className="bg-gold text-bone hover:bg-gold-deep transition-colors px-8 py-4 text-[11px] tracking-[0.3em] uppercase font-medium"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
