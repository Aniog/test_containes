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
    <section className="py-16 md:py-24 bg-brand-warm-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-sans text-sm text-brand-warm-muted">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
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
              className="flex-1 bg-transparent border border-white/20 text-white placeholder-brand-warm-muted font-sans text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="font-sans text-xs tracking-wide uppercase bg-brand-gold text-white px-8 py-3 hover:bg-brand-gold-dark transition-colors duration-300"
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
