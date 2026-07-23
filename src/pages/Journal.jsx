import React from 'react';

export default function Journal() {
  return (
    <div className="min-h-screen bg-cream pb-20 pt-32 text-center">
      <div className="mx-auto max-w-2xl px-4">
        <p className="text-xs uppercase tracking-widest text-gold">Journal</p>
        <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
          Stories & Styling Notes
        </h1>
        <p className="mt-6 leading-relaxed text-stone">
          Coming soon — guides on layering necklaces, building your ear stack,
          and caring for your gold-plated pieces.
        </p>
      </div>
    </div>
  );
}
