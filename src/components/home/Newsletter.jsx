import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 bg-accent border-y">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif">Join the Velmora Journal</h2>
        <p className="text-sm uppercase letter-spacing-wide text-primary/60">Receive early access to new collections and 10% off your first order.</p>
        
        <form className="flex flex-col md:flex-row gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="flex-grow bg-white border border-transparent px-6 py-4 text-[10px] uppercase letter-spacing-wide outline-none focus:border-primary transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-10 py-4 text-[10px] uppercase letter-spacing-wide hover:bg-black transition-colors"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-[10px] text-primary/40 uppercase tracking-tighter">
          By subscribing you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
