import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="section-padding bg-ink-950 text-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-3">Join for 10% off your first order</h2>
          <p className="text-sm text-ink-300 mb-8">Be the first to know about new drops, stories, and exclusive offers.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-ink-300"
            />
            <Button type="submit" className="bg-brand-500 hover:bg-brand-600 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
