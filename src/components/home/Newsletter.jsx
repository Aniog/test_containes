import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-400)] mb-4">Stay Connected</p>
        <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-4">Join for 10% Off</h2>
        <p className="text-sm text-[var(--color-velmora-400)] mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="heading-serif text-2xl text-[var(--color-gold-400)] mb-2">Welcome to Velmora</p>
            <p className="text-sm text-[var(--color-velmora-400)]">Check your inbox for your welcome discount.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-transparent border border-[var(--color-velmora-700)] text-white placeholder-[var(--color-velmora-500)] text-sm focus:outline-none focus:border-[var(--color-gold-500)] transition-colors"
              required
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
