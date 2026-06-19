import React from 'react';

export const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#B08D57]/5 border border-[#B08D57]/10 p-12 md:p-20 text-center rounded-sm">
          <div className="max-w-xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#B08D57] mb-6 font-bold">The Journal</p>
            <h2 className="text-4xl font-serif mb-6 text-[#1A1A1A]">Join the Circle</h2>
            <p className="text-stone-500 font-light mb-10 text-sm">
              Sign up for early access to new collections, exclusive offers, and jewelry care tips. Enjoy 10% off your first order.
            </p>
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white border border-stone-200 px-6 py-4 text-xs uppercase tracking-widest outline-none focus:border-[#B08D57] transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-[#1A1A1A] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#333333] transition-colors"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
