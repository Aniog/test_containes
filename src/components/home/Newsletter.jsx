import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

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
    <section className="py-16 sm:py-24 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cream">
            Join for 10% off your first order
          </h2>
          <p className="mt-3 text-sm text-cream/70">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full border border-cream/20 bg-cream/10 px-5 py-3 text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <Button type="submit" size="lg" className="rounded-full">
              Subscribe
            </Button>
          </form>
          {submitted && (
            <p className="mt-4 text-sm text-gold-300">
              Welcome to the Velmora family. Check your inbox for your code.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
