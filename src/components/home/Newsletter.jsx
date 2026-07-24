import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-charcoal text-velmora-cream">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">Join the Inner Circle</h2>
        <p className="font-sans text-sm md:text-base opacity-60 uppercase tracking-widest-lg mb-12">
          Sign up for 10% off your first order and exclusive early access.
        </p>
        
        <form className="flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your Email Address"
            className="flex-1 bg-transparent border-b border-white/20 py-4 px-2 font-sans focus:outline-none focus:border-velmora-gold transition-colors"
            required
          />
          <button className="btn-premium whitespace-nowrap">
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
