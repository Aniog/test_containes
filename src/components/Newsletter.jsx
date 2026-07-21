import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-16 md:py-20 bg-midnight-950">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-cream-200/70 text-xs tracking-widest uppercase font-sans mb-3">
          Join Our Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-light tracking-wide">
          Get 10% Off Your First Order
        </h2>
        <p className="text-pearl-400 text-sm mt-3 max-w-md mx-auto font-sans">
          Be the first to know about new collections, exclusive previews, and jewelry care tips.
        </p>

        {submitted ? (
          <p className="text-brand-400 text-sm mt-6 font-sans">
            Thank you! Check your inbox for your welcome offer.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-midnight-800/50 border border-midnight-700 text-cream-50 placeholder:text-pearl-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors rounded-sm"
            />
            <button
              type="submit"
              className="btn-primary bg-brand-600 hover:bg-brand-700 flex items-center gap-2 px-6"
            >
              <span className="hidden md:inline">Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}