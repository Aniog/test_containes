import React from 'react';

const Newsletter = () => {
  return (
    <section className="px-6 py-24 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-serif">Join the Inner Circle</h2>
        <p className="text-sm uppercase tracking-[0.2em] font-light max-w-sm mx-auto">
          Sign up to receive our latest updates and enjoy 10% off your first order.
        </p>
        <form 
          className="flex flex-col md:flex-row gap-4 mt-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow bg-white/10 border border-white/20 px-6 py-4 text-sm focus:outline-none focus:bg-white/20 transition-all placeholder:text-white/50"
            required
          />
          <button 
            type="submit"
            className="bg-white text-black px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Join Now
          </button>
        </form>
        <p className="text-[10px] uppercase tracking-widest opacity-60">
          By subscribing, you agree to our Privacy Policy
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
