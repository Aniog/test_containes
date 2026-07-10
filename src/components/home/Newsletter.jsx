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
      <div className="rounded-2xl bg-brand-ink px-6 py-10 sm:px-10 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl text-white">Join for 10% off your first order</h2>
          <p className="mt-2 text-sm text-white/75">Be the first to know about new releases, gift guides, and quiet luxury edits.</p>
          <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white"
            />
            <button type="submit" className="rounded-full bg-white px-6 py-3 text-xs font-semibold tracking-widest uppercase text-brand-ink hover:bg-brand-warm transition-colors">
              Subscribe
            </button>
          </form>
          {status === 'success' && <p className="mt-3 text-xs text-white/80">Welcome to the Velmora list. Check your inbox for your code.</p>}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
