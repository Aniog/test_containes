import React from 'react';

export default function Journal() {
  return (
    <main className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-4">
            Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-base mb-8">
            Coming Soon
          </h1>
          <p className="text-muted font-sans leading-relaxed">
            Our editorial journal is launching soon. Expect styling guides, behind-the-scenes looks, and stories from the Velmora community.
          </p>
        </div>
      </div>
    </main>
  );
}
