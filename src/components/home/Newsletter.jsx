import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/70">
            Be the first to know about new releases, exclusive offers, and styling inspiration.
          </p>
          {submitted ? (
            <p className="mt-6 text-sm text-brand-gold">Thank you! Check your inbox for your welcome code.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-brand-gold"
              />
              <Button type="submit" className="rounded-full bg-brand-gold text-brand-ink hover:bg-brand-goldLight">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
