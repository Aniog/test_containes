import React from 'react';
import { useParams } from 'react-router-dom';

const pageContent = {
  about: {
    title: 'Our Story',
    content: `Velmora was founded with a simple yet powerful vision: to make beautiful, high-quality jewelry accessible to every woman.

Our journey began in a small studio where our founder, inspired by the timeless elegance of vintage jewelry, set out to create pieces that could be worn every day without compromise.

Each Velmora piece is crafted with meticulous attention to detail. We use 18K gold plating over sterling silver bases, ensuring that our jewelry not only looks luxurious but stands the test of time.

We believe that jewelry is more than an accessory — it's an expression of who you are. That's why every piece in our collection is designed to be versatile, elegant, and effortlessly beautiful.

From our studio to your jewelry box, every Velmora piece carries a promise: to be crafted with care, designed with purpose, and treasured always.`,
  },
  journal: {
    title: 'The Journal',
    content: `Welcome to the Velmora Journal — your source for styling tips, behind-the-scenes stories, and the latest in demi-fine jewelry trends.

Our editorial team curates content that celebrates the art of accessorizing, from how to layer necklaces like a pro to the history behind our most beloved designs.

Check back regularly for new stories, styling guides, and exclusive previews of upcoming collections.`,
  },
};

export default function SimplePage() {
  const { page } = useParams();
  const content = pageContent[page];

  if (!content) {
    return (
      <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-4xl mb-4">Page Not Found</h1>
          <a href="/" className="btn-primary inline-block">Return Home</a>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-light)] mb-4">Velmora</p>
        <h1 className="serif-heading text-4xl md:text-5xl tracking-wide mb-8">{content.title}</h1>
        <div className="w-12 h-px bg-[var(--velmora-gold)] mb-8" />
        {content.content.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-sm text-[var(--velmora-text-muted)] leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
}
