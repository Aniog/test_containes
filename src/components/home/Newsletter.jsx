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
    <section className="py-16 md:py-24 bg-brand-espresso">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-cream">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-brand-muted-light font-sans">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-lg text-brand-gold">
              Welcome to Velmora
            </p>
            <p className="text-sm text-brand-muted-light font-sans mt-2">
              Check your inbox for your 10% discount code
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-brand-espresso-light text-brand-cream placeholder:text-brand-muted font-sans text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-gold hover:bg-brand-gold-dark text-white font-sans text-xs tracking-super-wide uppercase px-8 py-3 transition-colors duration-300"
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
