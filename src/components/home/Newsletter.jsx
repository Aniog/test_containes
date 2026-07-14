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
    <section className="bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-widest text-white/70">Stay in touch</p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-white sm:text-4xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Be the first to know about new releases, stories, and exclusive offers.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-brand-accent"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-accent px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-brand-accentHover"
            >
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-3 text-xs text-white/80">Welcome to Velmora. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
