import React from 'react';
import { Button } from '@/components/ui/Button';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto bg-[#E5E0D8]/30 px-6 py-16 md:py-24 md:px-20 text-center">
        <h2 id="newsletter-title" className="text-3xl md:text-4xl font-serif mb-4">Join for 10% off your first order</h2>
        <p id="newsletter-subtitle" className="text-muted-foreground uppercase tracking-widest text-[10px] mb-10">Sign up for exclusive access, new arrivals & more.</p>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="flex-1 bg-transparent border-b border-foreground/20 py-3 text-xs tracking-widest focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-muted-foreground/60"
            required
          />
          <Button type="submit" variant="primary" className="md:w-32">Join</Button>
        </form>
      </div>
    </section>
  );
};
export default Newsletter;
