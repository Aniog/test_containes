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
    <section className="py-16 md:py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-white mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-white/60 mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="font-serif text-lg text-brand-gold">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-sans text-xs uppercase tracking-wide px-8 py-3 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
