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
    <section className="py-16 sm:py-20 bg-charcoal">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-gold-400 text-xs tracking-wide-premium uppercase mb-4">Exclusive Offer</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-4">
          Join for 10% Off<br />Your First Order
        </h2>
        <p className="text-white/70 text-sm mb-8">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold-400 transition-colors"
            required
          />
          <button type="submit" className="btn-gold whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-white/40 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
