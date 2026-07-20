import React from "react";

const Newsletter = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="bg-[#121212] py-20 px-8 text-center relative overflow-hidden">
        <div 
          data-strk-bg-id="newsletter-bg"
          data-strk-bg="abstract gold texture silk luxury"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 opacity-20"
        />
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Exclusive Access</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">Join the Inner Circle</h2>
          <p className="text-slate-400 text-lg">Receive early access to new collections, editorial styling tips, and 10% off your first order.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto pt-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-white/5 border border-white/20 text-white px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
            <button className="premium-button bg-accent text-white hover:bg-accent/80 transition-all px-8 py-4 uppercase tracking-widest text-xs font-bold">
              Join Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
