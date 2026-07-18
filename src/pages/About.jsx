import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
          Our Story
        </p>
        <h1 className="mt-4 font-serif text-4xl text-ink md:text-6xl">
          Velmora
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-ink-muted">
          Velmora Fine Jewelry is a demi-fine jewelry studio dedicated to creating
          pieces that feel precious, personal, and made for everyday life. We believe
          that quiet luxury speaks louder than trends — and that every woman deserves
          jewelry she can treasure for years.
        </p>
        <p className="mt-6 leading-relaxed text-ink-muted">
          From sketch to finish, each design is refined for comfort, durability, and
          timeless appeal. Our 18k gold-plated collections are nickel-free,
          hypoallergenic, and crafted to accompany you from morning coffee to evening
          celebrations.
        </p>
      </div>
    </main>
  );
}
