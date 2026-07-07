import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="title-uppercase mb-4 opacity-90">Stay Inspired</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight italic">
            Join for 10% off your first order
          </h3>
          <p className="font-sans font-light text-primary-foreground/80 mb-12 text-lg tracking-wide">
            Be the first to discover new collections, editorial styling tips, and exclusive offers.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-grow bg-white/10 border border-white/30 px-6 py-4 text-sm font-sans placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-primary px-10 py-4 title-uppercase text-xs font-bold hover:bg-neutral-100 transition-colors"
            >
              Sign Up
            </button>
          </form>
          
          <p className="mt-8 text-[10px] uppercase tracking-[0.2em] opacity-60">
            By signing up, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
