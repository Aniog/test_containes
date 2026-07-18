import React from 'react';

export default function Journal() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
          Journal
        </p>
        <h1 className="mt-4 font-serif text-4xl text-ink md:text-6xl">
          Stories & Style Notes
        </h1>
        <p className="mt-6 text-ink-muted">
          Coming soon — styling guides, gifting ideas, and behind-the-scenes looks at the studio.
        </p>
      </div>
    </main>
  );
}
