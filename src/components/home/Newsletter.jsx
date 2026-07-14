import React from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for joining our community!");
    e.target.reset();
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-brand-dark p-12 md:p-24 text-center text-white relative overflow-hidden">
        {/* Subtle Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        
        <div className="relative z-10 space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl">Join the Journal</h2>
          <p className="text-white/60 font-light tracking-wide">
            Subscribe to receive styling notes, early access to collections, <br className="hidden md:block" /> and 10% off your first order.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 pt-4">
            <input 
              type="email" 
              placeholder="Your email address"
              required
              className="flex-grow bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button type="submit" className="btn-premium px-8 py-3 text-xs bg-white text-brand-dark hover:bg-accent hover:text-white border-none">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
