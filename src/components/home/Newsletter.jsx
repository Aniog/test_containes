import React, { useState } from 'react';
import { Send } from 'lucide-react';

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
    <section className="py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="bg-charcoal-800 rounded-lg px-6 py-12 md:px-16 md:py-16 text-center">
          <p className="text-caption uppercase tracking-[0.25em] text-gold-400 mb-3 font-sans">
            Join the Velmora Family
          </p>
          <h2 className="text-heading-2 md:text-heading-1 text-cream-100 mb-3">
            Get 10% Off Your First Order
          </h2>
          <p className="text-body-lg text-cream-400 mb-8 max-w-md mx-auto">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2">
              <p className="text-body-lg text-gold-400">Welcome to Velmora! Check your inbox for your code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 w-full sm:w-auto px-5 py-3.5 bg-charcoal-700 border border-charcoal-600 text-cream-100 placeholder-charcoal-400 text-body focus:outline-none focus:border-gold-500 transition-colors rounded"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto btn-gold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          )}

          <p className="text-body-sm text-charcoal-400 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
