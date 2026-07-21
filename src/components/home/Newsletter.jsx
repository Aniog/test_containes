import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for your code.');
      setEmail('');
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-accent text-accent-foreground p-12 md:p-20 text-center relative overflow-hidden">
        {/* Subtle Decorative Background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 border border-accent-foreground/10 rounded-full" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 border border-accent-foreground/10 rounded-full" />
        
        <div className="relative z-10 space-y-8 max-w-xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
            <p className="text-accent-foreground/80 uppercase tracking-widest text-xs">
              Subscribe for early access, styles tips, and 10% off your first order.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow bg-transparent border-b border-accent-foreground/30 py-3 px-2 text-accent-foreground placeholder:text-accent-foreground/50 focus:outline-none focus:border-accent-foreground transition-colors"
            />
            <button
              type="submit"
              className="bg-accent-foreground text-accent px-10 py-3 text-xs uppercase tracking-widest font-bold hover:bg-accent-foreground/90 transition-colors"
            >
              Sign Up
            </button>
          </form>
          
          <p className="text-[10px] uppercase tracking-widest opacity-60">
            By signing up, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
