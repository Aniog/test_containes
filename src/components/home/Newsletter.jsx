import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto bg-base p-12 md:p-20 text-center space-y-8">
        <h2 className="font-serif text-xs uppercase tracking-[0.4em] text-accent">Private Circle</h2>
        <h3 className="font-serif text-3xl md:text-4xl leading-tight">Join for 10% off your <br /> first order</h3>
        <p className="font-sans text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
          Be the first to see new collections and receiver exclusive editorial content.
        </p>
        
        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4 pt-4">
          <input 
            type="email" 
            placeholder="YOUR@EMAIL.COM" 
            className="flex-1 bg-white border border-base-dark py-4 px-6 font-sans text-xs tracking-widest outline-none focus:border-primary transition-colors"
            required
          />
          <button 
            type="submit"
            className="bg-primary text-white py-4 px-10 font-sans text-xs uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
