import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="rounded-3xl bg-accent px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">Join the list</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-white">10% off your first order</h2>
            <p className="mt-3 text-sm text-white/85">
              Be the first to know about new releases, styling stories, and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:border-white"
              />
              <button type="submit" className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/90 sm:w-auto">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-white/70">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
