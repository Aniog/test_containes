import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[10px] uppercase-extra tracking-[0.4em] mb-6 block opacity-60">Stay Connected</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Join the Inner Circle</h2>
        <p className="text-sm md:text-base opacity-60 mb-10 max-w-sm mx-auto leading-relaxed">
          Sign up to receive early access to new collections and a gift of 10% off your first order.
        </p>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="flex-1 bg-transparent border-b border-white/30 py-4 text-sm outline-none focus:border-white transition-colors"
          />
          <button 
            type="submit" 
            className="bg-white text-primary px-10 py-4 text-[11px] uppercase-widest hover:bg-accent hover:text-white transition-all font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
