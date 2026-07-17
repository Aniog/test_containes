import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the circle! Check your inbox for your 10% discount.");
      setEmail('');
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-velmora-accent/10 border border-velmora-accent/20 p-12 md:p-24 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-velmora-accent/30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-velmora-accent/30 pointer-events-none" />
        
        <div className="space-y-4 max-w-2xl relative z-10">
          <span className="text-velmora-accent uppercase tracking-widest text-[10px] font-bold">Exclusive Access</span>
          <h2 className="text-4xl md:text-5xl font-serif italic">Join the Velmora Circle</h2>
          <p className="text-velmora-muted font-light leading-relaxed">
            Subscribe to receive styling guides, exclusive collection previews, and 10% off your first order.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col md:flex-row gap-4 relative z-10">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white border border-velmora-surface px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-velmora-accent transition-colors"
          />
          <button 
            type="submit"
            className="bg-velmora-primary text-white px-10 py-4 uppercase-spacing text-xs font-bold hover:bg-velmora-accent transition-all duration-300"
          >
            Join Now
          </button>
        </form>
        
        <p className="text-[10px] text-velmora-muted uppercase tracking-[0.2em] relative z-10">
          Unsubscribe at any time. View our Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
