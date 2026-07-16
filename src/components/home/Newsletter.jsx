import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-primary p-12 md:p-28 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Subtle texture/decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-[0.03] rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="max-w-2xl mx-auto relative z-10 space-y-10">
            <div className="space-y-4">
               <p className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-70">The Newsletter</p>
               <h2 className="text-4xl md:text-6xl font-serif leading-tight">Join the Inner Circle</h2>
            </div>
            
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-light opacity-80 italic">
              Subscribe for exclusive previews and 15% off your first order.
            </p>
            
            <form className="flex flex-col md:flex-row gap-0 max-w-lg mx-auto border border-white/20 group focus-within:border-white/50 transition-all">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-grow bg-transparent px-8 py-5 text-[10px] uppercase tracking-widest focus:outline-none placeholder:text-white/40"
                required
              />
              <button
                type="submit"
                className="bg-accent text-white px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-primary transition-all duration-500"
              >
                Join
              </button>
            </form>
            
            <p className="pt-4 text-[9px] uppercase tracking-[0.1em] opacity-40 font-light">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
