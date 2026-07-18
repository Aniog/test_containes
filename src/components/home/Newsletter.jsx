import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-stone-900 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-50">
        <h2 className="text-3xl font-serif tracking-wide mb-4">
          Join the Velmora Collective
        </h2>
        <p className="text-stone-300 font-light mb-10">
          Subscribe to receive 10% off your first order, early access to new collections, and styling inspiration.
        </p>
        
        <form className="flex flex-col sm:flex-row max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow bg-transparent border-b border-stone-600 px-4 py-3 placeholder:text-stone-500 focus:outline-none focus:border-stone-50 transition-colors rounded-none mb-4 sm:mb-0"
            required
          />
          <button 
            type="submit"
            className="sm:ml-4 bg-stone-50 text-stone-900 px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-stone-200 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
