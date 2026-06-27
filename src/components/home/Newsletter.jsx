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
    <section className="py-16 md:py-20 bg-charcoal">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
          Stay in Touch
        </p>
        <h2 className="font-serif text-cream text-2xl sm:text-3xl md:text-4xl tracking-[0.02em] mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-cream/50 text-sm mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <p className="text-gold font-serif text-lg">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-cream/10 border border-cream/20 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button type="submit" className="btn-accent rounded-none whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
