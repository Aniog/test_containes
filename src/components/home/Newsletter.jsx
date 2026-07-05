import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for joining Velmora!');
    setEmail('');
  };

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-primary text-secondary p-12 md:p-24 text-center overflow-hidden relative">
        {/* Decorative background image */}
        <div 
          data-strk-bg-id="newsletter-bg"
          data-strk-bg="jewelry close up aesthetic blur"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1200"
          className="absolute inset-0 opacity-10"
        />
        
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif">Join the Inner Circle</h2>
          <p className="text-sm md:text-lg text-secondary/70 uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed">
            BE THE FIRST TO ACCESS NEW COLLECTIONS AND ENJOY 10% OFF YOUR FIRST ORDER.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 max-w-lg mx-auto mt-12">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:flex-1 bg-transparent border-b border-secondary/30 py-4 text-xs tracking-widest placeholder:text-secondary/30 focus:outline-none focus:border-secondary transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-secondary text-primary px-12 py-4 text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
          
          <p className="text-[10px] text-secondary/40 tracking-[0.2em] mt-8">
            BY SIGNING UP, YOU AGREE TO OUR PRIVACY POLICY. UNROLL AT ANY TIME.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
