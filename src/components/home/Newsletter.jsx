import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-brand-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-subtitle mb-3">Stay Connected</p>
          <h2 className="section-title mb-4">Join for 10% off your first order</h2>
          <p className="text-sm text-brand-muted mb-8">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>
          {submitted ? (
            <p className="text-sm text-brand-gold font-medium">Welcome to the Velmora family. Check your inbox for your code.</p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 rounded-full border border-brand-border bg-brand-surface px-5 py-3 text-sm text-brand-text placeholder:text-brand-subtle focus:outline-none focus:border-brand-gold"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
