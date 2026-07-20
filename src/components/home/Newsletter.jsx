import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-bronze">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
            Join the Velmora Circle
          </h2>
          <p className="text-white/80 font-sans text-sm md:text-base mb-8">
            Subscribe for 10% off your first order, early access to new drops, and styling inspiration.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm px-8 py-6">
              <p className="font-serif text-xl text-white">Welcome to the circle.</p>
              <p className="text-white/70 text-sm mt-2 font-sans">
                Check your inbox for your exclusive 10% off code.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/10 border border-white/30 text-white placeholder-white/60 px-5 py-3.5 text-sm font-sans outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-velmora-bronze text-[13px] font-sans uppercase tracking-[0.1em] px-8 py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-cream transition-colors duration-300"
              >
                Subscribe
                <Send className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </form>
          )}
          <p className="text-white/50 text-xs mt-4 font-sans">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
