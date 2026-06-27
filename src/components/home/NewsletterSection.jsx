import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      addToast('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">Join the Family</p>
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-velmora-300 mb-8">
          Subscribe for exclusive offers, styling tips, and early access to new collections.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm placeholder:text-velmora-400 focus:outline-none focus:border-gold-400 transition-colors"
            required
          />
          <button type="submit" className="btn-gold whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-velmora-400 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
