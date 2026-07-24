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
    <section className="py-16 md:py-24 section-padding bg-brand-charcoal">
      <div className="mx-auto max-w-[600px] text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-white">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-white/50 text-sm mt-3 mb-8">
          Be the first to know about new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-brand-gold font-serif text-lg italic tracking-wide">
            Thank you — check your email for your code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/30 text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
