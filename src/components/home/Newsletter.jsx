import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-sm border border-border bg-accent-soft p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-ink-secondary">Stay in touch</p>
          <h2 className="section-heading mt-3">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-ink-secondary">New styles, restocks, and stories from the workshop. No spam, ever.</p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="h-12 flex-1 rounded-sm border border-border bg-surface px-4 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-ink"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-3 text-xs text-ink-secondary">Welcome to the list. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
