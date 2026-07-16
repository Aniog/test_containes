import React from 'react';

export default function Journal() {
  return (
    <main className="pt-20 lg:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <p className="text-xs tracking-widest-2xl uppercase text-gold mb-3">The Velmora Edit</p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary font-light mb-6">
          Journal
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mb-10" />
        <p className="text-text-muted max-w-md mx-auto">
          Stories, styling guides, and inspiration from the world of Velmora. Coming soon.
        </p>
      </div>
    </main>
  );
}
