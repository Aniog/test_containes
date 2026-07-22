import React, { useState } from 'react';
import Button from '@/components/ui/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="bg-accent-soft rounded-sm p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-accent mb-3">Stay in touch</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">Join for 10% off your first order</h2>
          <p className="text-sm text-ink-secondary mb-8">
            Be the first to know about new drops, exclusive offers, and styling inspiration.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-sm border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-secondary focus:outline-none focus:border-accent"
            />
            <Button type="submit" variant="accent" size="md">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
