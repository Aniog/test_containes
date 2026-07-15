import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-brand-espresso">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
          Join the Velmora World
        </h2>
        <p className="mt-3 text-sm text-white/60">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-brand-gold-light font-serif text-lg">Thank you for subscribing ✓</p>
            <p className="text-sm text-white/50 mt-2">Check your inbox for your welcome discount.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm rounded-sm focus:outline-none focus:border-brand-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-brand-gold text-white px-6 py-3 text-sm tracking-wide-xl uppercase font-medium hover:bg-brand-gold-dark transition-colors rounded-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
