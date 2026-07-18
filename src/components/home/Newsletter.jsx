import React, { useState } from 'react';

export function Newsletter() {
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
    <section className="bg-gold-soft py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">
            Insider Perks
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-sm text-ink-muted">
            Be the first to know about new arrivals, limited editions, and styling tips.
          </p>

          {submitted ? (
            <p className="mt-8 font-serif text-2xl text-ink">
              Welcome to Velmora — check your inbox.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-hairline bg-paper px-5 py-3 text-sm text-ink placeholder-ink-subtle outline-none transition focus:border-gold sm:w-80"
              />
              <button
                type="submit"
                className="bg-ink px-8 py-3 font-sans text-xs font-medium uppercase tracking-widest text-cream transition hover:bg-ink/90"
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
