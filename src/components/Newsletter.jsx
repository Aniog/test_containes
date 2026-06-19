import React, { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Welcome to Velmora! Your 10% discount code is VELMORA10.');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 bg-[var(--ink)] text-white">
      <div className="max-w-xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3">
          Join the Inner Circle
        </h2>
        <p className="text-white/70 text-sm md:text-base font-light mb-8">
          Subscribe for early access to new collections, styling tips, and 10% off your first order.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-white/10 border border-white/20 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--gold)] transition-colors"
          />
          <button
            type="submit"
            className="bg-[var(--gold)] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[var(--gold-dark)] transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-white/30 text-[11px] mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
