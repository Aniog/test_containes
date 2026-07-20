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
    <section className="py-16 md:py-24 bg-brand-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light">
          Join the Inner Circle
        </h2>
        <p className="mt-4 font-sans text-sm text-brand-sand/80">
          Be the first to know about new collections, exclusive offers, and styling inspiration. Get 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-serif text-lg text-brand-gold">
              Welcome to Velmora. Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3.5 bg-transparent border border-brand-sand/40 text-brand-cream font-sans text-sm placeholder:text-brand-sand/50 focus:outline-none focus:border-brand-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-brand-gold text-white font-sans text-xs uppercase tracking-wide-xl hover:bg-brand-gold-light transition-colors border-none cursor-pointer"
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
