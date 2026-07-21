import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-3xl mx-auto bg-muted p-12 md:p-20 text-center relative overflow-hidden">
        {/* Subtle Decorative elements */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-accent/20" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-accent/20" />
        
        <div className="relative z-10 space-y-8">
          <div className="space-y-4">
            <h2 id="newsletter-title" className="text-3xl md:text-4xl font-serif tracking-tight">Join the Inner Circle</h2>
            <p id="newsletter-subtitle" className="text-sm text-muted-foreground tracking-widest uppercase">Sign up for 10% off your first order & early access</p>
          </div>
          
          <form className="flex flex-col sm:row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="bg-background border-border rounded-none h-12 text-xs tracking-widest focus-visible:ring-accent"
              required
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 px-8 text-xs font-bold tracking-[0.2em] shadow-lg">
              JOIN
            </Button>
          </form>
          
          <p className="text-[10px] text-muted-foreground tracking-widest">
            By signing up, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
