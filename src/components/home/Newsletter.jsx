import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-gold-700">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-extra-wide text-gold-200 mb-3">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-light">
          Get 10% Off Your First Order
        </h2>
        <p className="mt-4 text-gold-100/80 text-sm">
          Be the first to know about new drops, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="mt-8 p-4 bg-gold-800/50 border border-gold-500/30">
            <p className="text-cream-50 text-sm">
              Welcome to Velmora. Check your inbox for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-cream-50 text-charcoal-900 text-sm placeholder:text-charcoal-400 border-0 outline-none focus:ring-2 focus:ring-gold-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-charcoal-950 text-cream-50 text-xs uppercase tracking-extra-wide font-medium hover:bg-charcoal-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-[11px] text-gold-200/60">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
