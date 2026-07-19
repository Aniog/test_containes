import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-accent text-accent-foreground text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif">Join the Velmora Collective</h2>
        <p className="font-light tracking-wide opacity-90">
          Subscribe to receive exclusive access to new launches, styling tips, and 10% off your first order.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-b border-accent-foreground/50 py-3 px-2 outline-none placeholder:text-accent-foreground/50 focus:border-accent-foreground transition-colors"
          />
          <button className="bg-white text-accent px-8 py-3 brand-title text-xs hover:bg-opacity-90 transition-opacity">
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
