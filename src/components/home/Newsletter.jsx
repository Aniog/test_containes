import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div 
          className="bg-accent text-white p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <p className="font-sans text-[10px] uppercase tracking-[0.4em] mb-6 relative z-10">Experience Velmora</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 relative z-10">Join for 10% off your first order</h2>
          <p className="font-sans text-sm text-white/70 max-w-md mx-auto mb-10 leading-relaxed relative z-10">
            Be the first to discover new collections, limited series, and curated jewelry journals.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-lg relative z-10">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/10 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 focus:bg-white/20 focus:outline-none transition-all font-sans text-sm"
              required
            />
            <button className="bg-white text-accent px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-white/90 transition-colors font-sans shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
