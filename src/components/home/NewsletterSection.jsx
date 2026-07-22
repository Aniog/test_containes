import React, { useState } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className="py-16 md:py-24 bg-accent text-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-white/80 mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-espresso text-white text-xs uppercase tracking-label hover:bg-dark-feature transition-colors"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-white/90">Thank you. Use code WELCOME10 at checkout.</p>
        )}
      </div>
    </section>
  );
}
