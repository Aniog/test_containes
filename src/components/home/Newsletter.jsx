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
    <section className="bg-[var(--velmora-bg-dark)] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-accent)] mb-4">
          Stay Connected
        </p>
        <h2 className="velmora-heading text-3xl sm:text-4xl text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips. Plus, get 10% off your first order.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="velmora-heading text-xl text-[var(--velmora-accent)]">
              Welcome to Velmora!
            </p>
            <p className="text-white/60 text-sm mt-2">
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
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[var(--velmora-accent)] transition-colors"
              required
            />
            <button type="submit" className="velmora-btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
