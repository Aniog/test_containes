import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-charcoal text-white p-12 md:p-20 text-center relative overflow-hidden">
        {/* Background Texture/Pattern Placeholder */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif">Join the Velmora Collective</h2>
            <p className="text-white/60 text-sm uppercase tracking-[0.2em]">Become an insider and enjoy 10% off your first order</p>
          </div>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow bg-white/5 border border-white/20 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors text-white"
              required
            />
            <button 
              type="submit"
              className="bg-white text-charcoal px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-white transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
          
          <p className="text-[10px] text-white/40 uppercase tracking-widest pt-4">
            By signing up, you agree to receive marketing emails from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
