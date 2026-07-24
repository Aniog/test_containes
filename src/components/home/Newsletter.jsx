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
    <section className="section-padding bg-ink">
      <div className="container-editorial">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-white/70">Stay in touch</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-white">Join for 10% off your first order</h2>
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
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/60"
            />
            <button type="submit" className="btn-accent">
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
