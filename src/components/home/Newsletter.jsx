import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for joining our community!');
      setEmail('');
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto bg-secondary p-12 md:p-20 text-center relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-primary/20 -translate-x-12 -translate-y-12" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-primary/20 translate-x-12 translate-y-12" />

        <div className="relative z-10 space-y-8">
          <p className="uppercase-spaced text-[10px] text-zinc-500">The Velmora Journal</p>
          <h2 className="text-3xl md:text-5xl font-serif">Join for 10% off your first order</h2>
          <p className="text-zinc-600 font-light max-w-lg mx-auto">
            Be the first to explore new collections, editorial styling tips, and exclusive community events.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 bg-white border border-zinc-200 px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-primary transition-soft"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-10 py-4 uppercase-spaced text-xs hover:bg-zinc-800 transition-soft"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-zinc-400 mt-6 uppercase tracking-widest">
            By subscribing you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
