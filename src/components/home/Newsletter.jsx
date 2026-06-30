import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto bg-velmora-cream p-12 md:p-24 border border-neutral-100 flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-[0.3rem] text-velmora-gold mb-6 font-bold">The Inner Circle</span>
        <h2 className="text-3xl md:text-5xl font-serif text-velmora-obsidian mb-6">Join for 10% off your first order</h2>
        <p className="text-neutral-500 font-sans mb-10 max-w-md">
          Sign up for early access to new collections, exclusive offers, and jewelry care tips.
        </p>
        
        <form className="w-full max-w-md flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address"
            className="flex-1 bg-white border border-neutral-200 px-6 py-4 text-sm font-sans focus:outline-none focus:border-velmora-obsidian transition-colors"
            required
          />
          <button 
            type="submit"
            className="bg-velmora-obsidian text-white px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors"
          >
            Join Now
          </button>
        </form>
        <p className="mt-8 text-[10px] text-neutral-400 font-sans uppercase tracking-widest">
          By joining, you agree to our privacy policy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
