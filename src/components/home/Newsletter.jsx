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
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-ink text-white rounded-sm px-8 py-12 md:py-16 text-center">
          <p className="eyebrow text-white/70 mb-3">Stay in the loop</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-3">
            Join for 10% off your first order
          </h2>
          <p className="text-white/70 max-w-md mx-auto mb-8 text-sm leading-relaxed">
            Be the first to know about new releases, exclusive offers, and the stories behind our designs.
          </p>

          <form onSubmit={onSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60 transition-colors"
            />
            <button type="submit" className="btn-primary bg-white text-ink border-white hover:bg-accent hover:border-accent">
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-white/80">Welcome to the Velmora list. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
