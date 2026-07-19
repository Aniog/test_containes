import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Welcome! Check your inbox for 10% off.');
    setEmail('');
  };

  return (
    <section className="bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-bg">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-brand-bg/70">Be the first to know about new releases, styling tips, and exclusive offers.</p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-full border border-brand-bg/20 bg-brand-bg/10 px-5 py-3 text-sm text-brand-bg placeholder:text-brand-bg/50 focus:outline-none focus:border-brand-warm"
            />
            <button type="submit" className="rounded-full bg-brand-warm px-6 py-3 text-sm font-semibold text-white hover:bg-brand-accent transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
