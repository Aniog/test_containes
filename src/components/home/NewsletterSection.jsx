import React, { useState } from 'react';
import { toast } from 'sonner';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Welcome to Velmora! Check your inbox for 10% off.');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container-padding text-center max-w-2xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl mb-3">Join for 10% Off</h2>
        <p className="text-muted-foreground text-sm mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-accent transition-colors"
            required
          />
          <button type="submit" className="btn-accent whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
