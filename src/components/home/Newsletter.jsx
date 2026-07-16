import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="bg-primary text-white p-12 md:p-24 text-center max-w-6xl mx-auto shadow-2xl relative overflow-hidden">
        {/* Subtle Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] mb-6 font-bold opacity-80">The Velmora Circle</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8">Join for 10% off your first order</h3>
          <p className="text-white/60 mb-10 text-lg font-light leading-relaxed">
            Be the first to explore new collections, styling guides, and exclusive private sales.
          </p>

          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border-b border-white/30 py-4 px-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
            />
            <button className="bg-white text-primary px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-accent hover:text-white transition-all duration-300">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] uppercase tracking-widest text-white/30 mt-6">
            By signing up, you agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
