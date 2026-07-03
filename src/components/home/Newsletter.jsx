import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 border-t border-brand-line">
      <div className="container-narrow">
        <div className="rounded-2xl bg-brand-ink px-8 py-12 md:px-16 md:py-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-3">Newsletter</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Join for 10% off your first order</h2>
          <p className="text-sm text-white/70 max-w-md mx-auto mb-8">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <p className="text-sm text-white/90">Thank you! Check your inbox for your welcome code.</p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button type="submit" className="w-full sm:w-auto rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-warm transition-colors">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
