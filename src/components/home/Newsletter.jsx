import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for joining our inner circle.');
      setEmail('');
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-stone-900 text-stone-50 p-12 md:p-24 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Join the Velmora Collective</h2>
        <p className="text-stone-400 text-sm md:text-base mb-12 max-w-lg mx-auto leading-relaxed">
          Be the first to explore new collections, private sales, and seasonal journal entries. Plus, enjoy 10% off your first order.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow bg-transparent border-stone-700 focus-visible:ring-offset-0 focus-visible:ring-accent rounded-none h-14"
            required
          />
          <Button 
            type="submit"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none h-14 px-8 uppercase tracking-widest text-[10px] font-bold"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
