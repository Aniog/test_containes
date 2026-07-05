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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-obsidian via-charcoal/20 to-obsidian">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-3">
          Stay in Touch
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl text-ivory tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-muted/70 mb-8 max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 py-4">
            <Check size={18} className="text-gold" />
            <span className="font-sans text-sm text-gold tracking-wider">Welcome to the Velmora family</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-charcoal/30 border border-charcoal/50 text-ivory text-sm placeholder:text-muted/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-gold text-obsidian text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              SUBSCRIBE <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
