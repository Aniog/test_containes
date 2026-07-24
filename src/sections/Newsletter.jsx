import React, { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-velmora-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-8 md:mb-10">
          Subscribe for first access to new arrivals, styling notes, and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-white font-medium text-sm md:text-base">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-velmora-accent text-sm font-medium uppercase tracking-widest hover:bg-stone-100 transition-colors"
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
