import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for joining our inner circle!");
    setEmail('');
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="bg-stone-50 py-20 px-8 md:px-20 text-center space-y-8 flex flex-col items-center">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
          <p className="text-muted-foreground tracking-widest uppercase text-xs">
            Subscribe for exclusive early access and 10% off your first order.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL ADDRESS"
            className="flex-1 bg-transparent border-b border-border py-4 px-2 text-sm focus:outline-none focus:border-primary transition-colors tracking-widest placeholder:text-muted-foreground/50"
            required
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
