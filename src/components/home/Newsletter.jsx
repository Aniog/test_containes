import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto bg-primary text-white p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        {/* Background Texture Placeholder */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" />
        
        <div className="relative z-10 space-y-8">
          <span className="text-[10px] uppercase tracking-[0.5em] block text-accent">The Newsletter</span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide">Join for 10% off your <br /> <span className="italic">first order</span></h2>
          <p className="text-white/60 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Be the first to know about new collection launches, exclusive events, and styling inspiration.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mt-10">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-xs uppercase tracking-widest focus:border-accent outline-none transition-colors placeholder:text-white/30"
            />
            <button className="bg-white text-primary px-10 py-4 text-[10px] uppercase tracking-extrawide hover:bg-accent hover:text-white transition-all duration-300">
              Subscribe
            </button>
          </form>
          
          <p className="text-[9px] uppercase tracking-widest text-white/30 pt-4">
            By subscribing, you agree to our terms & privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
