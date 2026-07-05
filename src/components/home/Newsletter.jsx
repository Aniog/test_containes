import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for joining our community!");
  };

  return (
    <section className="bg-accent/10 py-24 px-6 border-y border-accent/20">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif">Join the Inner Circle</h2>
        <p className="text-muted-foreground font-light tracking-wide italic">
          Sign up to receive exclusive offers, early access to new collections, and 10% off your first order.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-stretch">
          <Input 
            type="email" 
            placeholder="your@email.com" 
            required 
            className="flex-1 bg-white border-accent/20 rounded-none h-14 font-light focus-visible:ring-accent"
          />
          <Button 
            type="submit"
            className="rounded-none bg-primary hover:bg-black text-white px-10 h-14 text-xs tracking-widest uppercase transition-all"
          >
            Join Now
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
