import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
          Join for 10% Off
        </h2>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        <p className="mt-4 text-sm text-brand-muted-light font-sans max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-serif text-lg text-brand-gold">Welcome to Velmora</p>
            <p className="mt-2 text-sm text-brand-muted-light font-sans">
              Check your inbox for your exclusive discount.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-brand-espresso-light border border-brand-espresso-light text-white placeholder-brand-muted font-sans text-sm px-5 py-3 focus:outline-none focus:border-brand-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto text-xs tracking-extra-wide uppercase font-sans font-medium bg-brand-gold text-white px-8 py-3 hover:bg-brand-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
