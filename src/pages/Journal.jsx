import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'journal-1',
    title: 'The Art of Demi-Fine: Why 18K Gold Plating Matters',
    excerpt: 'Discover what sets demi-fine jewelry apart and why our 18K gold plating process creates pieces that last for years, not weeks.',
    date: 'June 28, 2026',
    imageId: 'journal-1',
  },
  {
    id: 'journal-2',
    title: 'How to Layer Your Gold Jewelry Like a Stylist',
    excerpt: 'Master the art of the curated stack with our guide to layering necklaces, earrings, and bracelets for a look that is uniquely yours.',
    date: 'June 15, 2026',
    imageId: 'journal-2',
  },
  {
    id: 'journal-3',
    title: 'The Velmora Gift Guide: For Every Occasion',
    excerpt: 'From birthdays to anniversaries, find the perfect piece for every milestone moment in our curated gift guide.',
    date: 'May 30, 2026',
    imageId: 'journal-3',
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-cream-50 pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="container-page text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-3">
            The Journal
          </h1>
          <p className="text-charcoal-500 text-sm max-w-md mx-auto">
            Stories, style guides, and behind-the-scenes glimpses into the world of Velmora.
          </p>
        </div>
      </div>

      {/* Articles */}
      <section className="section-padding bg-cream-50">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {articles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="aspect-[3/2] bg-velvet-100 overflow-hidden mb-5">
                  <img
                    className="w-full h-full object-cover"
                    data-strk-img-id={article.imageId}
                    data-strk-img={`[article-title-${article.id}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={article.title}
                  />
                </div>
                <p className="text-[11px] tracking-wider uppercase text-velvet-600 font-medium mb-2">
                  {article.date}
                </p>
                <h2
                  id={`article-title-${article.id}`}
                  className="font-serif text-lg md:text-xl text-charcoal-900 mb-2 group-hover:text-velvet-600 transition-colors"
                >
                  {article.title}
                </h2>
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
