import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-brand-charcoal text-white p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        
        <div className="relative z-10">
          <h2 id="newsletter-title" className="font-serif text-3xl md:text-5xl uppercase tracking-[0.2em] mb-6">Join the Circle</h2>
          <p id="newsletter-text" className="text-brand-stone text-xs md:text-sm uppercase tracking-widest mb-10 max-w-md mx-auto">
            Subscribe for 10% off your first order and exclusive early access to new collections.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-transparent border-b border-brand-stone py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-stone/50 uppercase tracking-widest"
            />
            <button className="bg-white text-brand-charcoal px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-gold hover:text-white transition-all duration-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
