import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-charcoal-900">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">Join the Inner Circle</p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 tracking-wide">
          10% Off Your First Order
        </h2>
        <p className="mt-4 text-warm-400 text-sm leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-8 text-cream-50 text-sm">Thank you for subscribing. Check your inbox for your welcome gift.</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-charcoal-800 border border-charcoal-800 text-cream-50 text-sm placeholder:text-warm-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold-500 text-charcoal-950 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gold-400 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
