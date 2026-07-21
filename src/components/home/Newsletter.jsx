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
    <section className="section-padding bg-ink text-surface">
      <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-surface/80">
            Be the first to know about new releases, styling stories, and exclusive offers.
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="h-12 w-full rounded-full border border-surface/30 bg-transparent px-5 text-sm text-surface placeholder:text-surface/60 focus:outline-none focus:border-accent"
          />
          <button type="submit" className="btn-primary bg-accent text-surface hover:bg-accent/90">
            Subscribe
          </button>
        </form>
        {status === 'success' && (
          <p className="sm:col-span-2 text-xs text-accent-soft">Welcome to the Velmora world. Check your inbox.</p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
