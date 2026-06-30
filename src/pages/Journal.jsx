import React from 'react';

const ARTICLES = [
  {
    title: 'How to Layer Necklaces Like a Stylist',
    excerpt: 'The art of the chain stack — our guide to mixing lengths, textures, and pendants for an effortless curated look.',
    date: 'June 2026',
  },
  {
    title: 'The Return of the Statement Earring',
    excerpt: 'From sculptural cuffs to crystal drops, bold earrings are back. Here\'s how to wear them with confidence.',
    date: 'May 2026',
  },
  {
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Simple daily habits that keep your demi-fine pieces luminous for years — from storage to cleaning.',
    date: 'April 2026',
  },
  {
    title: 'A Guide to Gifting Jewelry',
    excerpt: 'How to choose the perfect piece for every woman in your life — from subtle studs to showstopping sets.',
    date: 'March 2026',
  },
];

export default function Journal() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-espresso mb-4">The Journal</h1>
        <p className="text-velmora-warm-gray text-sm mb-12 max-w-md">
          Styling inspiration, care guides, and stories from the world of Velmora.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {ARTICLES.map((article) => (
            <article key={article.title} className="group cursor-pointer border-b border-velmora-stone/50 pb-8">
              <div className="aspect-[16/9] bg-velmora-stone mb-6 overflow-hidden">
                <img
                  alt={article.title}
                  data-strk-img-id={`journal-${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  data-strk-img={`gold jewelry editorial lifestyle`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] font-sans tracking-widest uppercase text-velmora-muted mb-3">{article.date}</p>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-velmora-espresso group-hover:text-velmora-gold transition-colors mb-3">
                {article.title}
              </h3>
              <p className="text-sm text-velmora-warm-gray leading-relaxed">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
