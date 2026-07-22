import React from 'react';

export default function Journal() {
  return (
    <div className="pt-20 bg-velmora-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-4 text-center">
          Journal
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal font-light mb-12 text-center">
          Stories & Inspiration
        </h1>
        <div className="grid gap-12">
          {[
            {
              title: 'The Art of Layering Necklaces',
              date: 'July 15, 2026',
              excerpt: 'Discover how to create the perfect layered necklace look for every occasion. From delicate chains to statement pendants, we guide you through building a jewelry wardrobe that works together.',
            },
            {
              title: 'Why Demi-Fine is the Future of Jewelry',
              date: 'June 28, 2026',
              excerpt: 'Demi-fine jewelry bridges the gap between costume and fine jewelry. Learn why more women are choosing quality-plated pieces over fast fashion alternatives.',
            },
            {
              title: 'Gift Guide: Pieces That Say Everything',
              date: 'June 10, 2026',
              excerpt: 'Finding the perfect jewelry gift can feel overwhelming. Our curated guide helps you choose meaningful pieces for birthdays, anniversaries, and just-because moments.',
            },
          ].map((post, idx) => (
            <article key={idx} className="border-b border-velmora-linen pb-12 last:border-0">
              <p className="font-sans text-xs text-velmora-taupe mb-2">{post.date}</p>
              <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal font-light mb-3">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-velmora-stone leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}