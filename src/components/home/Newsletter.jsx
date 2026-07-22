import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Welcome! Check your inbox for 10% off.');
    setEmail('');
  };

  return (
    <section className="bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="section-subtitle text-white/70">Stay in the loop</p>
        <h2 className="section-title mt-2 text-white">Join for 10% off your first order</h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/70">
          Be the first to know about new arrivals, exclusive offers, and the stories behind our pieces.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-brand-gold"
          />
          <button type="submit" className="btn-primary bg-brand-gold text-brand-charcoal hover:bg-brand-gold-light">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
