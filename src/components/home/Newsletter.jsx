import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sectionRef, revealed] = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-velmora-charcoal transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-content mx-auto px-5 md:px-8 text-center">
        <h2 id="newsletter-heading" className="font-serif text-3xl md:text-4xl text-velmora-cream font-light tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-serif text-base text-velmora-warm-gray italic">
          Subscribe to receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm text-velmora-gold" role="status">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-white/20 text-velmora-cream placeholder:text-velmora-warm-gray text-sm font-sans focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-velmora-gold text-white text-xs font-sans font-semibold tracking-product uppercase hover:bg-velmora-gold-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
