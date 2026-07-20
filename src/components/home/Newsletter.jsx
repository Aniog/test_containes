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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream font-medium mb-4">
            Join the Inner Circle
          </h2>
          <p className="text-cream/70 mb-8">
            Subscribe for 10% off your first order, early access to new collections, and styling inspiration.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-gold">
              <Check className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">Welcome — check your inbox</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent border-b border-cream/30 text-cream placeholder:text-cream/40 px-0 py-3 text-sm outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-gold-hover transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
