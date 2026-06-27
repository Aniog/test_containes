import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sectionRef, sectionVisible] = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-charcoal">
      <div
        ref={sectionRef}
        className={`reveal ${sectionVisible ? 'visible' : ''} max-w-2xl mx-auto px-4 sm:px-6 text-center`}
      >
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-white/60 tracking-wide">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="text-sm text-velmora-gold tracking-wide">
            Welcome to Velmora. Check your inbox for your 10% discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm tracking-wide focus:outline-none focus:border-velmora-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-gold text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-velmora-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-velmora-gold/20"
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
