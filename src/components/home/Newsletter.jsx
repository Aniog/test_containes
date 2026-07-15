import React, { useState } from 'react';
import { Send } from 'lucide-react';

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
    <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-page relative z-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-muted font-sans mb-4">
          Stay Connected
        </p>
        <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
          Join the Velmora Family
        </h2>
        <p className="text-stone-400 text-sm md:text-base max-w-md mx-auto mb-8">
          Subscribe for 10% off your first order, plus exclusive access to new arrivals and styling tips.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="text-gold-light text-lg font-serif">Welcome to Velmora!</p>
            <p className="text-stone-400 text-sm mt-2">Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-stone-800 border border-stone-700 rounded text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2 rounded whitespace-nowrap"
            >
              <Send size={14} />
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-stone-600 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
