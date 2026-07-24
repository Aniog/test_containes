import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-8">
      <div className="container mx-auto">
        <div className="bg-charcoal rounded-sm overflow-hidden relative">
          <div 
            data-strk-bg-id="newsletter-bg"
            data-strk-bg="[newsletter-title] luxury gold jewelry shimmer"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            className="absolute inset-0 opacity-20"
          />
          
          <div className="relative py-20 px-8 text-center text-white flex flex-col items-center">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold font-bold mb-6 block">Join the Circle</span>
            <h2 id="newsletter-title" className="font-serif text-3xl md:text-5xl mb-6 max-w-2xl leading-tight">
              Get <span className="italic">10% Off</span> Your First Order
            </h2>
            <p className="font-sans text-white/60 text-sm md:text-md mb-10 max-w-lg mx-auto">
              Be the first to hear about new collection launches, styling tips, and exclusive offers.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="flex-grow bg-white/10 border border-white/20 px-6 py-4 text-xs font-sans tracking-widest outline-none focus:border-gold transition-colors text-white placeholder:text-white/40"
              />
              <button className="bg-gold text-white px-10 py-4 font-sans text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-charcoal transition-all duration-500">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
