import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Our Story</p>
        <h1 className="font-serif text-4xl font-light md:text-5xl">About Velmora</h1>
        <p className="mt-8 text-base leading-relaxed text-muted">
          Velmora is a demi-fine jewelry studio founded on the idea that everyday elegance should feel
          effortless. We design small-batch collections in warm 18k gold plate, combining editorial
          silhouettes with wearable comfort. Every piece is made to be treasured — by you, or someone
          you love.
        </p>
      </div>
    </main>
  );
}
