import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-primary text-white p-12 md:p-24 text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-6">Join the Inner Circle</h2>
        <p className="font-sans text-sm md:text-base mb-12 opacity-80 uppercase tracking-widest">
          Receive 10% off your first order & early access to new collections.
        </p>
        
        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="flex-grow bg-white/10 border border-white/20 px-6 py-4 font-sans text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-all"
            required
          />
          <button 
            type="submit"
            className="bg-accent text-white px-10 py-4 font-serif uppercase tracking-widest text-xs hover:bg-accent/90 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
