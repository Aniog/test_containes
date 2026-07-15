import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-primary text-white p-12 md:p-20 text-center relative overflow-hidden">
        {/* Subtle accent decoration */}
        <div className="absolute -top-24 -right-24 w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-white/5 rounded-full"></div>
        
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-widestest text-accent font-bold mb-4 block">Newsletter</span>
          <h2 className="text-3xl md:text-5xl mb-6">Join for 10% off your first order</h2>
          <p className="text-zinc-400 mb-10 max-w-lg mx-auto font-light">
            Stay inspired with our latest collections, styling tips, and exclusive offers.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 bg-transparent border-b border-zinc-700 py-3 text-sm focus:outline-none focus:border-white transition-colors"
              required
            />
            <button type="submit" className="bg-white text-primary px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-accent hover:text-white transition-all duration-300">
              Subscribe
            </button>
          </form>
          
          <p className="mt-8 text-[10px] text-zinc-500 uppercase tracking-widest">
            By signing up, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
