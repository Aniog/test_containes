import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif">Join the Inner Circle</h2>
          <p className="text-sm md:text-base text-muted-foreground font-light max-w-lg mx-auto">
            Stay updated on new collections, exclusive previews, and enjoy 10% off your first order.
          </p>
        </div>

        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-grow bg-transparent border-b border-stone-300 py-3 px-2 text-sm focus:outline-none focus:border-stone-900 transition-colors"
            required
          />
          <button 
            type="submit"
            className="bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-stone-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
