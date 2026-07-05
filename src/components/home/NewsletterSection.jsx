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
    <section className="py-20 md:py-28 bg-[#1A1A1A] text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#B8860B] mb-4">Join the Family</p>
        <h2 className="serif-heading text-4xl md:text-5xl font-light mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-white/60 mb-8 text-sm">
          Subscribe for exclusive access to new collections, styling tips, and member-only offers.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#B8860B] transition-colors"
            required
          />
          <button type="submit" className="bg-[#B8860B] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#9A7209] transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
