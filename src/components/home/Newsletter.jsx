import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
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
    <section className="py-16 md:py-24 bg-gold">
      <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
        <p className="text-cream/80 text-xs tracking-[0.25em] uppercase mb-3">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-cream/80 text-sm mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling tips from the Velmora studio.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-cream">
            <Check size={18} />
            <span className="text-sm font-medium">
              Welcome to Velmora. Check your inbox for your code.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-cream/10 border border-cream/30 text-cream placeholder:text-cream/60 px-4 py-3 text-sm focus:outline-none focus:border-cream transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-cream text-dark px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-cream/90 transition-colors"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-cream/60 text-[10px] mt-4 tracking-wide">
          By subscribing, you agree to receive marketing emails from Velmora. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
