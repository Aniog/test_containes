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
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-gold-light">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-warm-gray mb-8">
          Subscribe for 10% off your first order, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-sans text-sm text-gold font-medium">
              Welcome to Velmora. Check your inbox for your exclusive offer.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white border border-hairline font-sans text-sm text-charcoal placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-white font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-dark transition-colors border-none whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
