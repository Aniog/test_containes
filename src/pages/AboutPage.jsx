import React from 'react';

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-14 sm:pb-20 bg-cream-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-900">Our Story</h1>
        <p className="mt-6 text-base sm:text-lg text-ink-600 leading-relaxed">
          Velmora Fine Jewelry was founded on a simple idea: beautiful, well-made jewelry should not be out of reach.
          We design demi-fine collections in small batches, using 18K gold-plated finishes and nickel-free materials
          so you can wear your favorites every single day.
        </p>
        <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed">
          Every piece is designed in-house and crafted with care. We believe in slow production,
          thoughtful design, and the kind of quality that gets better with time.
        </p>
      </div>
    </div>
  );
}
