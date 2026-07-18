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
    <section className="py-16 md:py-24 bg-dark-bg text-dark-fg">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Join the Inner Circle
          </h2>
          <p className="mt-4 text-dark-fg/70 text-sm md:text-base">
            Subscribe for early access to new collections, styling tips, and 10% off your first order.
          </p>

          {submitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-accent">
              <Check className="w-5 h-5" />
              <span className="text-sm font-medium">Thank you! Check your inbox for your code.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent border border-dark-fg/20 px-4 py-3.5 text-sm text-dark-fg placeholder:text-dark-fg/40 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-accent text-white px-6 py-3.5 text-sm font-medium uppercase tracking-wide hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-dark-fg/40">
            By subscribing, you agree to receive marketing emails from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
