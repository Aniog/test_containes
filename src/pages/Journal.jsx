import React from 'react';

export default function Journal() {
  return (
    <main className="min-h-screen bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Editorial</p>
        <h1 className="font-serif text-4xl font-light md:text-5xl">Journal</h1>
        <p className="mt-8 text-base leading-relaxed text-muted">
          Coming soon — styling guides, behind-the-scenes looks, and the stories behind our collections.
        </p>
      </div>
    </main>
  );
}
