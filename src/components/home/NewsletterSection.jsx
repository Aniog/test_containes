import React, { useState } from 'react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#1A1714] text-white">
      <div className="container-padding text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">
          Join for 10% Off
        </h2>
        <p className="text-white/60 mb-8 font-light">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm rounded-sm focus:outline-none focus:border-primary transition-colors"
            required
          />
          <button type="submit" className="btn-primary bg-primary text-white hover:bg-[#9A7209] whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-white/40 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
