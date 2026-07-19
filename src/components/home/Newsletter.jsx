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
    <section className="py-16 md:py-24 bg-bronze">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
          Join the Inner Circle
        </h2>
        <p className="text-white/80 text-sm mt-3">
          Subscribe for 10% off your first order, early access to new arrivals, and insider styling tips.
        </p>
        {submitted ? (
          <p className="mt-8 text-white text-sm font-medium">
            Thank you for subscribing! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/50 text-sm px-4 py-3.5 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-bronze text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-cream transition-colors duration-300 font-medium"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
