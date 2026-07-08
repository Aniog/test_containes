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
    <section className="py-20 md:py-28 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-accent mb-3">Stay Connected</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Join for 10% off your first order</h2>
          <p className="text-white/60 mb-8">Be the first to know about new arrivals, exclusive offers, and journal stories.</p>
          {submitted ? (
            <p className="text-white text-sm">Thank you. Your welcome code is on its way.</p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3.5 rounded-sm text-sm focus:outline-none focus:border-brand-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-brand-accent hover:bg-brand-accentHover text-white text-sm tracking-widest uppercase px-6 py-3.5 rounded-sm transition-colors"
              >
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
