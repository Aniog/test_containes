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
    <section id="newsletter" className="py-16 md:py-24 bg-ink">
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Join the List</p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-white mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-warm-white/70 text-sm mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration from Velmora.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-gold">
            <Check className="w-5 h-5" />
            <span className="text-sm tracking-wide">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border-b border-warm-white/30 text-warm-white placeholder:text-warm-white/40 text-sm py-3 px-1 outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ink py-3 px-6 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-hover transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
