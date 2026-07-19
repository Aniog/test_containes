import React, { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Welcome to Velmora! Your 10% off code is VELMORA10.');
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-28 bg-accent">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl text-white uppercase tracking-widest">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-white/80 max-w-md mx-auto">
          Subscribe to receive exclusive early access to new collections, styling tips, and your first-order discount.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-5 py-3.5 bg-white text-base placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-base text-white uppercase text-xs tracking-widest font-medium hover:bg-base/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-[11px] text-white/60">By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}