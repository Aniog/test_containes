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
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join the Velmora Family
        </h2>
        <p className="text-white/90 mb-8">
          Subscribe for 10% off your first order, exclusive access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <p className="text-white font-medium">
              Welcome to the family! Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 rounded bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-velmora-gold font-medium tracking-wider uppercase rounded hover:bg-velmora-cream transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-white/70 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
