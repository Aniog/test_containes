import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-brand-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-brand-gold-light">Stay in the loop</p>
            <h2 className="section-heading text-white">Join for 10% off your first order</h2>
            <p className="text-sm leading-relaxed text-white/70">
              Be the first to know about new releases, exclusive offers, and journal stories.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-brand-gold"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </div>
            {submitted && (
              <p className="text-xs text-brand-gold-light">Welcome to the Velmora circle. Check your inbox for your code.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
