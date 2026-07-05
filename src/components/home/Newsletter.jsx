import React, { useState } from 'react';

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
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="bg-velmora-charcoal px-8 md:px-16 py-16 md:py-20 text-center">
        {submitted ? (
          <div className="animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-cream mb-4">
              Thank You
            </h2>
            <p className="font-sans text-sm text-velmora-cream/60">
              Your 10% off code has been sent to your inbox.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-cream mb-4">
              Join for 10% off your first order
            </h2>
            <p className="font-sans text-sm text-velmora-cream/50 mb-8 max-w-md mx-auto">
              Sign up for early access to new collections, exclusive offers, and styling inspiration.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3 bg-transparent border border-velmora-cream/20 text-velmora-cream font-sans text-sm placeholder:text-velmora-cream/30 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}