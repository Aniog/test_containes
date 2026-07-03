import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="section-padding bg-surface">
      <div className="container-editorial">
        <div className="rounded-sm bg-surface-warm px-8 py-12 md:px-16 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Stay in touch</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-text">Join for 10% off your first order</h2>
            <p className="mt-3 text-sm text-text-secondary">Be the first to know about new releases, styling stories, and exclusive offers.</p>
            <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-12 w-full rounded-full border border-border bg-white px-5 text-sm text-text placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
              <button type="submit" className="btn-primary w-full sm:w-auto">Subscribe</button>
            </form>
            <p className="mt-3 text-xs text-text-secondary">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
