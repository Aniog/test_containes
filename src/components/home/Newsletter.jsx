import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-brand-gold-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-brand-charcoal mb-4">
          Join for 10% off your first order
        </h2>
        <p className="text-brand-warm-gray mb-8 max-w-md mx-auto">
          Be the first to discover new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-brand-gold">Welcome to Velmora!</p>
            <p className="text-brand-warm-gray text-sm mt-2">
              Check your inbox for your exclusive discount code.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className={cn(
                'flex-1 px-5 py-3.5 bg-white border border-brand-light-gray',
                'text-brand-charcoal placeholder:text-brand-medium-gray text-sm',
                'focus:outline-none focus:border-brand-gold transition-colors duration-300'
              )}
            />
            <Button type="submit" size="md">
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-xs text-brand-warm-gray/70 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
