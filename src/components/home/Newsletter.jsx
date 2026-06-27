import React, { useState } from 'react';
import { Check } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-4 block">
          Join the List
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          Join for 10% off your first order
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-md mx-auto mb-10">
          Be the first to know about new arrivals, exclusive offers, and the stories behind our pieces.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-gold">
            <Check className="w-5 h-5" />
            <span className="text-sm tracking-wider">Welcome to the Velmora family</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gold text-white text-xs tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-white/30 text-[11px] mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
}
