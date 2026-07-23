import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for joining Velmora!");
    setEmail('');
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto bg-charcoal text-white p-12 lg:p-24 text-center relative overflow-hidden">
        {/* Subtle texture background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-velmora-gold via-transparent to-transparent opacity-30" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-velmora-gold mb-4 block">Newsletter</span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight">Join for 10% off your first order</h2>
          </div>
          <p className="text-white/60 text-sm tracking-wide font-light">
            Stay updated on new collections, exclusive events, and styling tips from our founders.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto pt-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-b border-white/30 py-4 text-sm focus:border-velmora-gold outline-none transition-all placeholder:text-white/30"
              required
            />
            <button 
              type="submit"
              className="bg-white text-charcoal px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-velmora-gold hover:text-white transition-all duration-500 whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
