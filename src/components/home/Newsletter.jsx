import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 md:py-32 bg-white px-4">
      <div className="max-w-4xl mx-auto bg-brand-sand p-12 md:p-20 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-brand-gold/20 -translate-y-4 translate-x-4" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-brand-gold/20 translate-y-4 -translate-x-4" />

        <div className="relative z-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-semibold mb-6">The Velmora Journal</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-brand-charcoal">
            Join the inner circle <br className="hidden md:block" /> for 10% off your first order.
          </h2>
          <p className="text-neutral-500 mb-12 max-w-md mx-auto leading-relaxed">
            Be the first to know about new collections, exclusive events, and styling inspiration.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow bg-white border border-neutral-200 px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors text-sm"
              required
            />
            <button 
              type="submit" 
              className="bg-brand-charcoal text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-neutral-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-8 text-[10px] text-neutral-400 tracking-widest uppercase">
            Privately handled. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
