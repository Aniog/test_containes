import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 bg-velmora-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase font-sans text-velmora-gold mb-4">
          Stay in Touch
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm text-white/60 mb-10 max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new
          collections, and styling inspiration.
        </p>

        {subscribed ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-velmora-gold mb-2">
              Thank you!
            </p>
            <p className="text-sm text-white/60">
              Check your inbox for your exclusive discount code.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-3.5 text-sm font-sans focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3.5 text-xs tracking-[0.15em] uppercase font-sans font-medium hover:bg-velmora-gold-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
