import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-stone-50 border border-stone-100 p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-serif text-stone-200/30 whitespace-nowrap -z-0 pointer-events-none select-none italic">
            Velmora Fine
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-serif mb-6">Join the Journal</h3>
            <p className="text-stone-500 mb-10 text-lg font-light">Sign up to receive our latest collections and 10% off your first order.</p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-grow bg-transparent border-b border-primary py-4 px-2 text-[10px] uppercase tracking-widest focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button type="submit" className="bg-primary text-white text-[10px] uppercase tracking-[0.3em] px-10 py-4 hover:bg-gold transition-colors">
                Subscribe
              </button>
            </form>
            
            <p className="mt-8 text-[9px] text-stone-400 uppercase tracking-widest">By subscribing you agree to our Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
