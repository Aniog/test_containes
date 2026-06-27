import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto bg-primary-bg border border-stone p-12 md:p-20 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight">Join the Inner Circle</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-muted font-light">
            Stay inspired by new drops and exclusive offers. Enjoy 10% off your first order.
          </p>
        </div>
        
        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="flex-1 bg-white border border-stone px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors font-light"
            required
          />
          <button 
            type="submit" 
            className="bg-accent text-white px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-black transition-all"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-[10px] text-muted uppercase tracking-widest font-light">
          By subscribing, you agree to our Terms of Service.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
