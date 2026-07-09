import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="bg-velmora-charcoal text-white p-12 md:p-24 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-velmora-gold opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-velmora-gold opacity-10 blur-3xl" />

        <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-velmora-gold">Exclusive Access</span>
        <h2 className="text-4xl md:text-6xl font-serif max-w-2xl">Join the Inner Circle</h2>
        <p className="text-white/60 max-w-lg leading-relaxed font-light">
          Sign up for early access to new collections, editorial journal entries, and 10% off your first order.
        </p>

        <form className="w-full max-w-md flex flex-col md:flex-row gap-4 pt-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="flex-1 bg-transparent border-b border-white/20 py-4 px-2 uppercase tracking-widest text-xs focus:border-white transition-colors outline-none"
          />
          <button className="bg-white text-velmora-charcoal px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-velmora-gold hover:text-white transition-all duration-300">
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
