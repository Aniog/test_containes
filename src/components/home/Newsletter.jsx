import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 lg:py-28 bg-velmora-charcoal">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl lg:text-3xl tracking-[0.06em] text-white">
          Join for 10% off your first order
        </h2>
        <p className="mt-4 text-velmora-stone-light text-sm leading-relaxed">
          Be the first to know about new collections, exclusive offers, and the stories behind our pieces.
        </p>

        {submitted ? (
          <div className="mt-10 py-4 px-6 bg-velmora-gold/10 border border-velmora-gold/20">
            <p className="text-velmora-gold-light text-sm tracking-wide">
              Thank you — your discount code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border-b border-velmora-stone/50 text-white placeholder:text-velmora-stone-light/50 text-sm py-3 px-1 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-velmora-gold text-white px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-gold-dark transition-velmora"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}