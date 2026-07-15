import React, { useState } from 'react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-24 bg-foreground text-background">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="serif-heading text-3xl md:text-4xl mb-4">Join for 10% Off</h2>
        <p className="text-muted-foreground/80 mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-opacity-90 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-muted-foreground/50 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
