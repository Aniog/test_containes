import React from 'react';
import { Button } from '@/components/ui/button';

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for newsletter signup
  };

  return (
    <section className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans font-medium mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-white font-light mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-brand-muted font-sans text-sm md:text-base mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and jewelry care tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 h-12 px-4 bg-brand-charcoal/40 border border-brand-border/30 text-brand-white text-sm font-sans placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-gold transition-colors rounded-sm"
          />
          <Button type="submit" variant="default" size="default">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-brand-muted/60 mt-4 font-sans">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}