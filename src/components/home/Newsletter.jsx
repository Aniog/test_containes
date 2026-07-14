import React, { useState } from 'react';
import Button from '@/components/ui/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3">Newsletter</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-cream/70">
            Be the first to know about new releases, styling stories, and exclusive offers.
          </p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <Button variant="accent" type="submit" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
          {status === 'success' && (
            <p className="mt-3 text-xs text-gold">Welcome to the Velmora list. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
