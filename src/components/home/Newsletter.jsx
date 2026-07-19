import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for subscribing! Use code WELCOME10 for 10% off your first order.');
    setEmail('');
  };

  return (
    <section className="py-16 bg-[#1f1a15]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide">Join for 10% off your first order</h2>
        <p className="mt-3 text-sm text-white/70">Be the first to know about new arrivals, exclusive offers, and styling inspiration.</p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-5 py-3 rounded-full text-sm focus:outline-none focus:border-[#b08d57]"
          />
          <button type="submit" className="bg-[#b08d57] text-white px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-[#9a7a48] transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
