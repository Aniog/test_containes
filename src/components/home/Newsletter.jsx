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
    <section className="py-20 md:py-28 bg-brand-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-sans text-base text-white/60">
          Subscribe to our newsletter for exclusive access, new arrivals, and 10% off your first order.
        </p>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="font-serif text-lg text-brand-gold">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-gold text-white font-sans text-xs uppercase tracking-super-wide px-8 py-3 hover:bg-brand-gold-dark transition-colors"
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
