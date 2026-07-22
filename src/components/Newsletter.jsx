import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-8 h-8 text-white/80 mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-3">
          Join the Velmora Circle
        </h2>
        <p className="font-sans text-sm text-white/80 mb-8">
          Subscribe for 10% off your first order, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-white">
            <Check className="w-5 h-5" />
            <span className="font-sans text-sm font-medium">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/50 font-sans text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-velmora-gold font-sans text-sm font-medium tracking-widest-lg uppercase hover:bg-velmora-cream transition-colors"
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