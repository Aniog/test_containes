import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-stone-900 text-white border-t-4 border-gold-500">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-gold-50">An Invitation</h2>
        <p className="text-stone-300 font-light text-lg mb-10">
          Join the Velmora inner circle to receive 10% off your first order, plus early access to new collections and exclusive events.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            required
            className="flex-grow bg-transparent border border-stone-600 px-6 py-4 text-white placeholder-stone-500 focus:outline-none focus:border-gold-500 transition-colors"
          />
          <button type="submit" className="btn-primary bg-gold-600 text-white hover:bg-gold-500 border-2 border-transparent">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;