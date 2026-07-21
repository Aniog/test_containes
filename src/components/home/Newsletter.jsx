import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className="bg-velmora-accent py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-white/80 font-light">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-white/10 border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
            required
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-white px-6 py-3 text-sm font-medium tracking-widest uppercase text-velmora-dark hover:bg-velmora-bg transition-colors disabled:opacity-70"
          >
            {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-sm text-white">Welcome! Check your inbox for your code.</p>
        )}
      </div>
    </section>
  );
}
