import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for joining the Velmora list.');
      setEmail('');
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="bg-velmora-bg border border-velmora-border py-20 px-6 md:px-12 text-center max-w-5xl mx-auto">
        <h2 id="newsletter-title" className="text-3xl md:text-5xl font-serif mb-6 tracking-wide leading-tight">
          Join the Circle
        </h2>
        <p id="newsletter-subtitle" className="text-xs md:text-sm text-velmora-muted mb-12 uppercase tracking-[0.2em] max-w-sm mx-auto leading-loose">
          Sign up to receive our journal, exclusive previews, and 10% off your first order.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-none border-velmora-border bg-transparent text-[10px] tracking-[0.2em] uppercase h-12 px-6 focus:ring-velmora-gold focus:border-velmora-gold"
            required
          />
          <Button 
            type="submit"
            className="bg-velmora-fg text-white hover:bg-velmora-gold rounded-none uppercase tracking-[0.3em] text-[10px] h-12 px-10 transition-colors duration-500"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
