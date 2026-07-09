import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-velmora-gold">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl tracking-wide text-white mb-3">
          Join for 10% off your first order
        </h2>
        <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">
          Subscribe to receive early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-white font-serif text-xl tracking-wider animate-fade-in">
            Thank you — check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-white/20 text-white placeholder-white/50 border border-white/30 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button type="submit" className="btn-primary bg-white text-velmora-gold hover:bg-white/90">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
