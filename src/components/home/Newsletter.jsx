import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto bg-secondary p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-primary/20 -translate-x-4 -translate-y-4" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-primary/20 translate-x-4 translate-y-4" />

        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif italic">Join the Collective</h2>
          <p className="text-xs uppercase tracking-widestest text-muted-foreground font-medium">Subscribe for 10% off your first order & exclusive access.</p>
        </div>

        <form className="relative z-10 flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            placeholder="YOUR EMAIL"
            className="rounded-none border-primary/30 h-12 bg-white/50 focus-visible:ring-primary uppercase text-[10px] tracking-widest"
          />
          <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 uppercase tracking-widestest text-[10px] font-bold">
            Subscribe
          </Button>
        </form>

        <p className="relative z-10 text-[9px] uppercase tracking-widestest text-muted-foreground/60">
          By signing up, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
