import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-14 sm:py-20 bg-gold-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-medium tracking-superwide uppercase text-gold-700 mb-3">
          Insider Perks
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-900">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-ink-600">
          Be the first to know about new drops, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="mt-8 inline-block bg-white border border-gold-200 rounded-sm px-6 py-3">
            <p className="text-sm font-medium text-gold-800">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full flex-1 rounded-sm border border-cream-300 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold-600 hover:bg-gold-700 text-white font-medium text-sm tracking-widest uppercase px-7 py-3 rounded-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-[11px] text-ink-400">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
