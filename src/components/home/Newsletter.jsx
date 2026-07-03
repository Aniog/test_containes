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
    <section className="section-container py-16 md:py-24">
      <div className="rounded-2xl bg-[#1c1917] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-ultra text-white/70">Stay in touch</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-white">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/70">
            Be the first to know about new releases, gift guides, and private sales.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40"
            />
            <button type="submit" className="btn-primary w-full sm:w-auto">
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
