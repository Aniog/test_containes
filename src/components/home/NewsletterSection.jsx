import React, { useState } from 'react';

export default function NewsletterSection() {
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
    <section className="py-16 md:py-24 bg-gold">
      <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-white/80 text-sm md:text-base font-sans">
          Be the first to discover new collections, exclusive edits, and early access — plus 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-white font-sans text-sm">
            Thank you! Check your inbox for your welcome code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/40 
                         text-sm font-sans focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-white text-warm-black font-sans text-sm font-medium uppercase tracking-widest
                         transition-all duration-300 hover:bg-warm-black hover:text-white"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}