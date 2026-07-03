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
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="rounded-2xl bg-ink px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center text-white">
          <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">Stay in touch</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/80">Be the first to know about new releases, stories, and exclusive offers.</p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-accent-soft"
            />
            <button type="submit" className="btn-primary bg-accent hover:bg-accent-soft text-ink">
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-3 text-xs text-accent-soft">Welcome to the Velmora world. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
