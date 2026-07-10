import React, { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="text-white/60 font-sans text-sm mb-8 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-brand-gold font-sans text-sm tracking-wide">
            Welcome to Velmora! Check your inbox for your 10% code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm tracking-wide focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-gold text-white px-8 py-3 font-sans text-sm tracking-super-wide uppercase transition-all duration-300 hover:bg-brand-gold-dark"
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
