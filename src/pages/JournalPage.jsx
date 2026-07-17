import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const articles = [
  {
    id: 'journal-1',
    title: 'How to Style Gold Huggies for Every Occasion',
    excerpt: 'From casual coffee runs to evening events, discover how to style your huggie earrings for maximum impact with minimal effort.',
    category: 'Style Guide',
    date: 'July 12, 2026',
    query: 'gold huggie earrings styling flatlay on marble background',
  },
  {
    id: 'journal-2',
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the layered necklace look with our expert tips on combining lengths, textures, and pendants for a curated neckline.',
    category: 'Trends',
    date: 'July 5, 2026',
    query: 'layered gold necklaces styling on woman neck close-up editorial',
  },
  {
    id: 'journal-3',
    title: 'Why 18K Gold Plated Is the Smart Choice',
    excerpt: 'Learn why demi-fine 18K gold-plated jewelry offers the perfect balance of beauty, durability, and value.',
    category: 'Education',
    date: 'June 28, 2026',
    query: '18K gold jewelry pieces close-up warm lighting macro',
  },
];

export default function JournalPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pageRef.current) {
      return ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }
  }, []);

  return (
    <main className="pt-20 md:pt-24 pb-16" ref={pageRef}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center py-12 md:py-16">
          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-espresso mb-3">
            The Journal
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="text-taupe text-sm font-sans">
            Style tips, trends, and stories from the Velmora world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-cream rounded-sm overflow-hidden mb-4 relative">
                <div
                  data-strk-bg-id={article.id}
                  data-strk-bg={article.query}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-sand/20">
                    <span className="font-serif text-sm text-gold-muted/40 tracking-mega-wide uppercase">Velmora</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] tracking-mega-wide uppercase text-gold font-sans font-medium mb-2">
                {article.category} · {article.date}
              </p>
              <h2 className="font-serif text-xl text-espresso mb-2 group-hover:text-gold transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-taupe leading-relaxed">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
