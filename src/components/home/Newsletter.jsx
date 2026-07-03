import React, { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail('');
      toast.success('Welcome! Check your inbox for your 10% off code.');
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 text-center">
        <p className="text-white/70 text-xs tracking-[0.2em] uppercase mb-3">Join the Inner Circle</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-3">
          Get 10% Off Your First Order
        </h2>
        <p className="text-white/60 text-sm max-w-md mx-auto mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-5 py-3.5 text-sm focus:outline-none focus:border-white/50 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-accent px-8 py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white/90 transition-colors disabled:opacity-60"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}
