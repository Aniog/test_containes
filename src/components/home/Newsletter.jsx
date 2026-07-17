import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-2 via-surface to-surface-2" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08),transparent_70%)]" />

      <div className="relative section-padding max-w-[1440px] mx-auto text-center">
        <p className="section-subtitle mb-4">Stay in Touch</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-cream-muted text-sm md:text-base max-w-md mx-auto mb-10">
          Be the first to discover new collections, exclusive offers, and styling inspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-5 py-3.5 bg-surface border border-divider rounded-sm text-sm text-cream placeholder:text-cream-dim focus:outline-none focus:border-gold/50 transition-colors"
          />
          <button type="submit" className="btn-gold whitespace-nowrap text-xs">
            {submitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>

        <p className="text-[11px] text-cream-dim mt-4">
          No spam, ever. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
