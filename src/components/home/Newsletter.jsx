import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-velmora-dark text-velmora-light text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Inner Circle</h2>
        <p className="text-velmora-light/80 mb-8 max-w-md mx-auto">
          Sign up to receive 10% off your first order, plus exclusive access to new arrivals and secret sales.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-none border-velmora-light/30 bg-transparent text-velmora-light placeholder:text-velmora-light/50 focus-visible:ring-velmora-gold h-12"
          />
          <Button 
            type="submit" 
            className="rounded-none bg-velmora-gold text-velmora-dark hover:bg-velmora-light transition-colors font-serif uppercase tracking-widest h-12 px-8"
          >
            {status === 'success' ? 'Subscribed' : 'Subscribe'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;