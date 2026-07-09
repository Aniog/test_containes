import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for your 10% code.');
      setEmail('');
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-[#F9F8F6]">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-sans uppercase tracking-[0.4em] text-[#9D8C70] mb-6 block">The Inner Circle</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-8">Join for 10% off your first order</h2>
        <p className="text-sm text-muted-foreground mb-12 uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
          Be the first to see new arrivals, exclusive collections, and styling tips.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 bg-transparent border-b border-[#1A1A1A] py-4 px-2 text-sm font-sans focus:outline-none focus:border-[#9D8C70] transition-colors placeholder:text-muted-foreground"
            required
          />
          <button
            type="submit"
            className="bg-[#1A1A1A] text-white px-12 py-4 uppercase text-xs tracking-luxury hover:opacity-90 active:scale-95 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
