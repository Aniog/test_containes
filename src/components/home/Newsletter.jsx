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
    <section className="py-20 md:py-28 bg-brand-ink">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-3">Stay in touch</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Join for 10% off your first order</h2>
          <p className="text-white/70 mb-8">Be the first to know about new releases, stories, and exclusive offers.</p>

          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40"
            />
            <button type="submit" className="btn-primary">
              {status === 'success' ? 'Subscribed' : 'Subscribe'}
            </button>
          </form>
          {status === 'success' && <p className="mt-4 text-sm text-white/80">Welcome to the Velmara circle.</p>}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
