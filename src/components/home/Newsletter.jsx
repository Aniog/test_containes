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
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-cream">
          Join the Velmora World
        </h2>
        <p className="mt-3 text-sm text-brand-sand/70 font-sans">
          Subscribe for 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <div className="mt-8 animate-fade-in">
            <p className="text-brand-gold text-sm font-sans">
              Welcome to Velmora. Check your inbox for your exclusive offer.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-transparent border border-brand-sand/40 text-brand-cream text-sm font-sans placeholder:text-brand-sand/50 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-gold text-white px-8 py-3 text-xs tracking-widest uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors"
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
