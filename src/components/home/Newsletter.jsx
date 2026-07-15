import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-terracotta py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-medium text-cream md:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-cream/90">
          Be the first to hear about new collections, restocks, and subscriber-only
          moments.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm font-medium uppercase tracking-widest text-cream">
            Welcome to Velmora — check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 border-b-2 border-cream/40 bg-transparent px-1 py-3 font-sans text-sm text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none sm:max-w-sm"
            />
            <button
              type="submit"
              className="bg-cream px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-ivory"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
