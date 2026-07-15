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
    <section className="py-16 md:py-20 bg-charcoal relative overflow-hidden">
      {/* Subtle gold gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold mb-4">
          Join the Velmora Family
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-3">
          Get 10% Off Your First Order
        </h2>
        <p className="font-sans text-white/50 text-sm mb-8 max-w-md mx-auto">
          Subscribe to receive exclusive offers, styling tips, and early access to new collections.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-gold mb-2">Welcome to Velmora</p>
            <p className="font-sans text-white/60 text-sm">Check your inbox for your exclusive discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/30 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button type="submit" className="btn-primary px-8 py-3.5 flex-shrink-0">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
