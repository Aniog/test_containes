import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-gold">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-cream/90">
              The Velmora List
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-cream md:text-5xl">
              Join for <span className="italic">10% off</span> your first order
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/85">
              Early access to new drops, styling notes, and quiet little treats —
              straight to your inbox. No noise, ever.
            </p>

            {submitted ? (
              <div className="mt-8 flex items-center gap-3 border border-cream/40 px-6 py-4">
                <Check className="h-5 w-5 text-cream" strokeWidth={1.5} />
                <p className="text-sm text-cream">
                  Welcome to the list — your code is on its way to {email}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="flex-1 border border-cream/40 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-espresso px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:bg-cocoa"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
