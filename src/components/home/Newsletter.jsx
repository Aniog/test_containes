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
    <section className="py-16 md:py-24 bg-brand-onyx">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-extra-wide text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm font-sans font-light text-brand-muted">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="font-serif text-lg text-brand-gold italic">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 text-white placeholder:text-brand-muted font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-gold text-white font-sans text-xs font-semibold tracking-super-wide uppercase px-8 py-3.5 hover:bg-brand-gold-dark transition-colors duration-300"
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
