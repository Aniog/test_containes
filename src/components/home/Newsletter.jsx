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
    <section className="py-20 md:py-28 bg-accent">
      <div className="max-w-container mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-white/80 text-sm md:text-base max-w-md mx-auto">
          Subscribe for early access to new collections, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-white">
            <Check className="w-5 h-5" />
            <span className="text-sm font-medium">Thank you for subscribing!</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 bg-white/10 border border-white/30 text-white placeholder-white/60 px-5 py-3.5 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-accent px-8 py-3.5 text-xs font-medium tracking-ultra-wide uppercase flex items-center justify-center gap-2 hover:bg-cream transition-colors duration-300"
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
