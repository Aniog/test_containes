import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white flex justify-center">
      <div className="w-full max-w-4xl bg-zinc-900 text-white py-16 px-8 md:px-16 text-center relative overflow-hidden">
        {/* Subtle accent texture */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-semibold mb-6 block">The Inner Circle</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Join for 10% off your first order</h2>
          <p className="text-white/60 text-sm mb-10 max-w-md mx-auto font-light">
            Stay updated with new arrivals, exclusive collections, and styling inspiration.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/20 px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors rounded-[1px]"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              Sign Up
            </button>
          </form>
          
          <p className="mt-8 text-[9px] text-white/30 uppercase tracking-widest font-sans">
            By signing up, you agree to receive marketing emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
