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
    <section className="py-16 lg:py-24 bg-gold">
      <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-white/80 mt-3 max-w-md mx-auto">
          Subscribe for early access to new collections, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-sans text-sm text-white font-medium">
              Thank you for subscribing. Check your inbox for your welcome gift.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:flex-1 bg-white/15 border border-white/30 text-white placeholder:text-white/60 px-4 py-3 font-sans text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-gold font-sans text-xs uppercase tracking-widest px-8 py-3 hover:bg-white/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
