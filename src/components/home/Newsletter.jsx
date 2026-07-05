import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-white/70">Newsletter</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/75">
            Be the first to know about new releases, styling stories, and exclusive offers.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-warm transition-colors"
            >
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-3 text-sm text-white/80">Welcome to the list. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
