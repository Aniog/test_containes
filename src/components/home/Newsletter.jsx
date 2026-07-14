import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto bg-muted p-12 md:p-20 text-center space-y-8">
        <div className="space-y-4">
          <h2 id="newsletter-title" className="text-3xl md:text-4xl font-light italic">Join the Inner Circle</h2>
          <p id="newsletter-subtitle" className="text-xs uppercase tracking-[0.2em] text-gray-500 max-w-sm mx-auto">
            Stay updated with new arrivals and exclusive offers. Join for 10% off your first order.
          </p>
        </div>

        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white border border-transparent px-6 py-4 text-sm focus:outline-none focus:border-accent transition-all font-light"
            required
          />
          <button
            type="submit"
            className="bg-[#1A1A1A] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#2A2A2A] transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
