import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { NEWSLETTER } from '@/data/products';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="newsletter" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">
        <div className="bg-ink text-cream px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24 relative overflow-hidden">
          {/* Subtle decorative gold ring */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-gold/20"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full border border-gold/15"
            aria-hidden="true"
          />

          <div className="relative max-w-xl mx-auto text-center">
            <p className="label-light text-cream/70 mb-5">A Quiet Welcome</p>
            <h2
              id="newsletter-title"
              className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl leading-[1.1]"
            >
              {NEWSLETTER.title}
            </h2>
            <p
              id="newsletter-body"
              className="text-cream/75 mt-5 text-sm md:text-base leading-relaxed"
            >
              {NEWSLETTER.body}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-9 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-cream/30 px-4 py-3.5 text-sm text-cream placeholder:text-cream/50 focus:border-cream focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink px-6 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase font-medium transition-colors whitespace-nowrap"
              >
                {submitted ? (
                  <>
                    <Check className="w-3.5 h-3.5" strokeWidth={1.5} /> Subscribed
                  </>
                ) : (
                  <>
                    {NEWSLETTER.cta} <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>

            {submitted && (
              <p className="mt-5 text-sm text-gold-light">
                Thank you — your 10% code is on its way.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}