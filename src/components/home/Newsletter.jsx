import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section className="bg-gold-light py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-gold">Insider Perks</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-stone">
          Be the first to see new arrivals, styling notes, and subscriber-only
          offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 border border-warm-gray bg-white px-4 py-3 text-sm text-ink placeholder:text-stone-light focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="bg-ink px-8 py-3 text-xs uppercase tracking-widest text-cream transition hover:bg-ink/90"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-ink">
            Thank you — your code is on its way.
          </p>
        )}
      </div>
    </section>
  );
}
