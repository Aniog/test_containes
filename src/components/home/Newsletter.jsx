import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <section className="relative bg-champagne text-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-10 md:py-24">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-ink/60">
            The List
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light leading-[1.1] text-ink md:text-5xl lg:text-6xl">
            Join for <em className="italic">10% off</em><br />
            your first order.
          </h2>
        </div>

        <div>
          <p className="max-w-md text-base leading-relaxed text-ink/75 md:text-lg">
            Early access to new arrivals, private editorials, and the occasional
            letter from the atelier. No noise — just the pieces.
          </p>

          {done ? (
            <p className="mt-10 font-serif text-2xl italic text-ink">
              Welcome to Velmora. Your code is on its way.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 flex max-w-md items-center border-b border-ink/40 pb-2 focus-within:border-ink"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@beautifulinbox.com"
                className="w-full bg-transparent py-2 text-base text-ink placeholder:text-ink/40 focus:outline-none"
              />
              <button
                type="submit"
                className="ml-4 whitespace-nowrap bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-cream transition-colors hover:bg-ink-soft"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-ink/50">
            By subscribing you agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
