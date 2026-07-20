import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thanks for subscribing! Check your inbox for 10% off.');
  };

  return (
    <section className="section-container py-20">
      <div className="rounded-2xl bg-[#1c1917] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl text-white md:text-3xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/80">Be the first to know about new releases, styling stories, and exclusive offers.</p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 md:flex-row md:justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-12 w-full rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 md:w-96"
            />
            <Button type="submit" className="h-12 rounded-full bg-[#b8860b] px-8 text-sm hover:bg-[#d4af37]">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
