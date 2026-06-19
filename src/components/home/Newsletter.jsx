import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gold-400">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal-900 mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-charcoal-800/70 text-sm md:text-base mb-8 max-w-md mx-auto">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-charcoal-900 font-serif text-lg">
            Welcome to Velmora! Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3.5 bg-charcoal-900/10 border border-charcoal-900/20 text-charcoal-900 placeholder-charcoal-800/40 text-sm focus:outline-none focus:border-charcoal-900/40 transition-colors rounded-sm"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-charcoal-800 text-cream-50 text-sm font-medium tracking-wider uppercase hover:bg-charcoal-700 transition-colors rounded-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
