import React, { useState } from 'react';
import RevealSection from '@/components/RevealSection';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-brand-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealSection>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-cream tracking-wide">
            Join for 10% Off
          </h2>
          <p className="mt-3 font-sans text-sm text-brand-muted-light max-w-md mx-auto">
            Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
          </p>

          {submitted ? (
            <div className="mt-8 animate-fade-in">
              <p className="font-serif text-lg text-brand-gold">
                Welcome to Velmora
              </p>
              <p className="font-sans text-sm text-brand-muted-light mt-2">
                Check your inbox for your exclusive discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full sm:flex-1 px-5 py-3.5 bg-brand-espresso-light border border-brand-espresso-light text-brand-cream placeholder-brand-muted-light font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto font-sans text-xs tracking-extra-wide uppercase px-8 py-3.5 bg-brand-gold text-white hover:bg-brand-gold-dark transition-colors duration-200 btn-lift"
              >
                Subscribe
              </button>
            </form>
          )}
        </RevealSection>
      </div>
    </section>
  );
}
