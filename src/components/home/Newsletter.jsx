import React, { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Welcome to Velmora!', {
      description: 'Your 10% discount code is WELCOME10',
    });
    setEmail('');
  };

  return (
    <section className="py-20 md:py-24 bg-velmora-gold">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-white/80 mb-3">
          Insider Access
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-white/80 mb-8">
          Be the first to discover new collections, exclusive offers, and styling inspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3.5 bg-white text-velmora-charcoal text-sm placeholder:text-velmora-muted outline-none border-0"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-velmora-base text-white text-xs font-semibold tracking-widest uppercase hover:bg-velmora-charcoal transition-colors"
          >
            Subscribe
          </button>
        </form>

        <p className="text-[10px] text-white/60 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
