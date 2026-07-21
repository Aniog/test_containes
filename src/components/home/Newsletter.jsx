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
    <section className="bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-widest text-white/70">Stay close</p>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/75">Early access to new drops, styling notes, and quiet luxury delivered to your inbox.</p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 md:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/50"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-3 text-xs text-white/80">Welcome to the Velmora world. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
