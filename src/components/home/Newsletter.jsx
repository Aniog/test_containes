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
    <section className="bg-velmora-charcoal py-16 md:py-20">
      <div className="max-w-xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-cream mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-velmora-muted mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <p className="text-velmora-gold font-serif text-lg">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-velmora-charcoal-light border border-velmora-divider-dark text-velmora-cream placeholder:text-velmora-muted/60 px-5 py-3.5 text-sm font-sans focus:outline-none focus:border-velmora-gold transition-colors rounded-sm"
            />
            <button
              type="submit"
              className="bg-velmora-gold hover:bg-velmora-gold-light text-velmora-charcoal px-8 py-3.5 text-xs font-sans font-semibold uppercase tracking-[0.2em] transition-colors duration-300 rounded-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
