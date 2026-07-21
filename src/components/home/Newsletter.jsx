import React from 'react';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  return (
    <section className="py-24 bg-background px-6">
      <div className="container mx-auto max-w-5xl bg-velmora-charcoal text-white p-12 md:p-20 text-center relative overflow-hidden">
        <div 
          data-strk-bg-id="newsletter-bg"
          data-strk-bg="abstract gold silk texture background"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1200"
          className="absolute inset-0 opacity-10 pointer-events-none"
        />
        
        <div className="relative z-10 space-y-8">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-70">The Exclusive Club</p>
          <h2 className="text-3xl md:text-5xl font-serif">Join for 10% off your first order</h2>
          <p className="font-sans text-muted-foreground max-w-md mx-auto tracking-wide text-sm md:text-base">
            Be the first to know about new collection drops, limited editions, and private sales.
          </p>
          
          <form className="flex flex-col md:flex-row max-w-lg mx-auto gap-4 pt-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-transparent border-b border-white/30 py-4 px-2 text-[13px] tracking-widest focus:outline-none focus:border-velmora-gold transition-colors text-white placeholder:text-white/40"
              required
            />
            <Button className="rounded-none bg-white text-velmora-charcoal hover:bg-velmora-gold hover:text-white h-14 px-12 uppercase tracking-[0.2em] text-[11px] transition-luxury font-bold">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
