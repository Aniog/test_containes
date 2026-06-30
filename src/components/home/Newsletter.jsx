import React from 'react';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  return (
    <section className="py-32 bg-[#F3EFE9] px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/70">Newsletter</p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">Join for 10% off your <br /><span className="italic">First Order</span></h2>
          <p className="text-sm text-neutral-500 font-light italic font-serif max-w-lg mx-auto">
            Be the first to receive updates on new collection drops, private atelier sales, and jewelry care guides.
          </p>
        </div>
        
        <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto border border-foreground/10 p-1 bg-white shadow-sm">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 h-16 px-8 bg-transparent outline-none text-sm font-light placeholder:text-muted-foreground/50 transition-all"
            required
          />
          <Button variant="premium" className="h-16 px-12 bg-foreground text-background hover:bg-neutral-800">
            Subscribe
          </Button>
        </form>
        
        <p className="text-[9px] uppercase tracking-widest text-muted-foreground/50">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
