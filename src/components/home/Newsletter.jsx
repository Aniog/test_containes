import React from 'react';
const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto bg-[#faf9f6] p-12 md:p-20 text-center flex flex-col items-center gap-8">
        <div>
          <h2 id="newsletter-title" className="text-3xl md:text-5xl font-serif mb-4">Join the Collective</h2>
          <p className="text-gray-500 font-sans uppercase tracking-[0.2em] text-xs">Sign up for 10% off your first order & exclusive early access</p>
        </div>
        <form className="w-full max-w-sm flex flex-col gap-4">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="w-full bg-white border border-gray-100 py-4 px-6 text-center font-sans tracking-widest text-xs focus:outline-none focus:border-black transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-black text-white font-sans uppercase tracking-widest text-xs py-5 hover:bg-black/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
export default Newsletter;
