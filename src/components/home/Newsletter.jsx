import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Inner Circle</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Your email address" 
            className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground rounded-none h-12"
            required
          />
          <Button 
            type="submit" 
            className="bg-background text-foreground hover:bg-background/90 rounded-none h-12 px-8 uppercase tracking-widest text-xs font-medium"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
