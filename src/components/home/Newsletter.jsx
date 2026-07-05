import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 bg-[#1a1a1a] text-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">Join the Club</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">10% Off Your First Order</h2>
        <p className="text-white/60 mb-8">
          Subscribe for exclusive access to new collections, styling tips, and members-only offers.
        </p>
        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-2xl text-[#b8860b] mb-2">Welcome to Velmora</p>
            <p className="text-white/60 text-sm">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#b8860b] transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#b8860b] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#9a7209] transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
