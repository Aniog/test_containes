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
    <section className="py-20 md:py-28 bg-warm-charcoal">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-cream tracking-wide">
            Join for 10% Off
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4 mb-4" />
          <p className="text-sm text-warm-tan mb-8">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>
          {submitted ? (
            <p className="text-sm text-gold font-sans">Welcome to Velmora. Check your inbox for your code.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-warm-dark border border-warm-brown/30 px-4 py-3 text-sm text-warm-cream placeholder-warm-brown font-sans focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-warm-black text-xs font-sans font-semibold uppercase tracking-[0.12em] px-8 py-3 hover:bg-gold-light transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
