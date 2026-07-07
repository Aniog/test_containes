import React, { useState } from 'react';

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
    <section className="py-16 md:py-20 bg-velmora-gold-pale">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold-dark mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-heading-lg md:text-heading-xl text-velmora-deep mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-velmora-muted mb-8">
            Be the first to know about new arrivals, exclusive offers, and styling tips.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-xl text-velmora-deep mb-1">Welcome to Velmora</p>
              <p className="font-sans text-sm text-velmora-muted">Check your inbox for your exclusive code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-white border border-velmora-border text-velmora-deep placeholder:text-velmora-muted/60 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-velmora-muted mt-4">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
