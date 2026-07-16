import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for joining our circle!');
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-stone-900 overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        data-strk-bg-id="newsletter-bg"
        data-strk-bg="abstract warm gold light luxury texture"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1200"
      />
      
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-stone-300 serif-caps text-sm tracking-[0.3em] mb-6">Stay in touch</h2>
        <h3 className="text-white text-3xl md:text-5xl font-serif mb-8 leading-tight">
          Join for 10% off your first order
        </h3>
        <p className="text-stone-400 font-sans mb-12 max-w-md mx-auto">
          Be the first to hear about new arrivals, private sales, and limited edition releases.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-white/5 border border-white/20 px-6 py-4 text-white placeholder:text-stone-500 font-sans focus:outline-none focus:border-white transition-colors"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="bg-white text-stone-900 px-8 py-4 serif-caps text-xs tracking-widest font-bold hover:bg-stone-200 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
