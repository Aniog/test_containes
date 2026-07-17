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
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="rounded-2xl bg-brand-ink px-8 py-14 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Newsletter</p>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/75">
            Be the first to know about new releases, styling stories, and exclusive offers.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-brand-gold focus:outline-none"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-brand-gold">Welcome to Velmora. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
