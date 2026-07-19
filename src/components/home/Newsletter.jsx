import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-surface px-6 py-14 text-center md:px-16 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Insider Perks</p>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light md:text-4xl lg:text-5xl">
            Join for 10% Off Your First Order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Be the first to know about new drops, styling tips, and members-only offers.
          </p>

          {submitted ? (
            <p className="mt-8 font-serif text-xl text-foreground">Welcome to Velmora — check your inbox.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 border-b border-hairline bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-accent px-8 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent-hover"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
