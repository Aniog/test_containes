import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-ink-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {submitted ? (
          <div className="animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-gold-400" />
            </div>
            <p className="font-serif text-2xl text-cream">
              You&rsquo;re on the list.
            </p>
            <p className="mt-3 text-sm text-ink-300 font-sans">
              Welcome to Velmora. Check your inbox for your 10% code.
            </p>
          </div>
        ) : (
          <>
            <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-400">
              Newsletter
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mt-3 tracking-wide">
              Join for 10% Off Your First Order
            </h2>
            <p className="mt-3 text-sm text-ink-300 font-sans max-w-sm mx-auto">
              Be the first to know about new collections, exclusive drops, and
              members-only pricing.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 bg-ink-800 border border-ink-700 text-cream placeholder-ink-500 
                         font-sans text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-ink-950
                         font-sans text-sm font-medium tracking-wider uppercase
                         hover:bg-gold-400 transition-colors duration-300"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}