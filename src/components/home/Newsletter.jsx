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
    <section className="bg-[var(--velmora-dark)] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="serif-heading text-3xl md:text-4xl tracking-wide mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>

        {submitted ? (
          <div className="fade-in">
            <p className="serif-heading text-xl text-[var(--velmora-gold)] mb-2">
              Welcome to Velmora
            </p>
            <p className="text-sm text-white/60">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-[var(--velmora-accent)] text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-[var(--velmora-accent-hover)] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
