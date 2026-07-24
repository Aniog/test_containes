import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="bg-[#F5F2ED] py-20 px-6 md:px-20 text-center relative overflow-hidden">
        {/* Soft Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 mb-6 block">Stay Connected</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-8">
            Join the Velmora Journal
          </h2>
          <p className="text-zinc-600 mb-10 text-sm md:text-base leading-relaxed">
            Get 10% off your first order, plus early access to new collections and styling tips from our curators.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email address"
              className="flex-grow bg-white border border-zinc-200 px-6 py-4 text-sm focus:outline-none focus:border-[#1C1C1C] transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-[#1C1C1C] text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-zinc-800 transition-colors whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-[10px] text-zinc-400 uppercase tracking-widest">
            By signing up, you agree to receive marketing emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
