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
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-3">
            Join the Inner Circle
          </h2>
          <p className="text-white/80 text-sm mb-8">
            Subscribe for exclusive early access to new collections, styling
            inspiration, and 10% off your first order.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-white">
              <Check size={18} />
              <span className="text-sm font-medium">
                Thank you! Check your inbox for your welcome gift.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3.5 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-accent text-xs font-medium uppercase tracking-wider px-8 py-3.5 flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
