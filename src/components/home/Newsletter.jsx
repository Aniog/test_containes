import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section className="border-t border-umber bg-gradient-to-b from-onyx to-noir">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
        <p className="reveal text-[11px] font-sans font-medium uppercase tracking-[0.28em] text-gold">
          The Velmora Circle
        </p>
        <h2 className="reveal mt-3 font-serif text-4xl font-medium leading-tight text-ivory md:text-5xl">
          Join for <span className="italic text-goldlight">10% off</span> your first order
        </h2>
        <p className="reveal mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-sand">
          New pieces, private previews, and atelier notes — once a week, never more.
        </p>

        {subscribed ? (
          <div className="reveal is-visible mx-auto mt-9 flex max-w-md items-center justify-center gap-2.5 border border-gold/40 bg-onyx px-6 py-4">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold">
              <Check className="h-3 w-3 text-noir" strokeWidth={3} />
            </span>
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-ivory">
              Welcome to the circle — your code is on its way
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="h-13 flex-1 border border-umber bg-transparent px-5 py-3.5 font-sans text-sm text-ivory placeholder:text-sand/60 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gold px-8 py-3.5 text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-noir transition-colors duration-300 hover:bg-goldlight"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
