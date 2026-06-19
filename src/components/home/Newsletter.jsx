import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for joining Velmora!');
    setEmail('');
  };

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-muted p-12 md:p-20 text-center border border-border">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Join the Collective</h2>
        <p className="text-muted-foreground font-light mb-10 max-w-lg mx-auto">
          Subscribe for early access to new collections, exclusive invitations, and 10% off your first order.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="flex-grow bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors text-sm"
            required
          />
          <button 
            type="submit"
            className="bg-foreground text-background px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
