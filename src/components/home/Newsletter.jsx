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
    <section className="section-container py-16 md:py-24">
      <div className="rounded-2xl bg-ink px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Stay in the loop</p>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/70">Be the first to know about new releases, restocks, and exclusive offers.</p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-white/40"
            />
            <button type="submit" className="btn-primary bg-white text-ink hover:bg-white/90">
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-3 text-xs text-white/80">Welcome to the Velmara circle. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
