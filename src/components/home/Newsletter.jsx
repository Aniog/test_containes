import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-brand-text text-brand-base p-12 md:p-20 text-center space-y-8 animate-in zoom-in-95 duration-700">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif">Join the Velmora Journal</h2>
            <p className="text-sm uppercase tracking-widest opacity-80 font-light">Join for 10% off your first order & early access to new collections</p>
          </div>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 pt-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 bg-transparent border-b border-brand-base/30 py-4 text-xs tracking-widest placeholder:text-brand-base/40 focus:border-brand-accent outline-none transition-all uppercase"
            />
            <button className="bg-brand-base text-brand-text px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all">
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
