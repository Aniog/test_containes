import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'layering-guide',
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the delicate balance of lengths, textures, and pendants to create a curated neckline that feels effortlessly you.',
    date: 'July 2026',
  },
  {
    id: 'gold-care',
    title: 'How to Care for Gold-Plated Jewelry',
    excerpt: 'Simple daily rituals to keep your pieces luminous for years. From storage to cleaning, our complete care guide.',
    date: 'June 2026',
  },
  {
    id: 'styling-huggies',
    title: '5 Ways to Style Your Huggies',
    excerpt: 'From minimalist single pairs to curated ear stacks, discover how to make the most of your favorite everyday earrings.',
    date: 'May 2026',
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="journal-hero-bg"
          data-strk-bg="[journal-hero-text] [journal-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-warm-950/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 id="journal-hero-title" className="font-serif text-4xl md:text-6xl tracking-wide">
            The Journal
          </h1>
          <p id="journal-hero-text" className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Stories, guides, and inspiration from the world of Velmora.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding py-20 md:py-28">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {articles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-warm-100 rounded-sm overflow-hidden mb-5">
                  <img
                    alt={article.title}
                    data-strk-img-id={`journal-${article.id}`}
                    data-strk-img={`[journal-title-${article.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-warm-500 tracking-wider uppercase mb-2">{article.date}</p>
                <h3
                  id={`journal-title-${article.id}`}
                  className="font-serif text-lg md:text-xl text-warm-900 leading-snug group-hover:text-accent transition-colors"
                >
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-warm-600 leading-relaxed">
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