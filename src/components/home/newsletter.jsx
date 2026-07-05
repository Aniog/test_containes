import React, { useState } from 'react';
import Button from '@/components/ui/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-white">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-brand-subtle">Be the first to know about new releases, stories, and exclusive offers.</p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 rounded-sm border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <Button type="submit" size="lg" className="bg-brand-accent hover:bg-brand-accentHover">Subscribe</Button>
          </form>
          {status === 'success' && <p className="mt-3 text-xs text-brand-goldLight">Welcome to Velmora. Check your inbox for your code.</p>}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
