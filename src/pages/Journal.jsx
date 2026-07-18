import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 1,
    title: 'How to Style Gold Jewelry for Every Occasion',
    excerpt: 'From boardroom to bar, learn the art of effortless gold styling.',
    imgId: 'journal-1-s4t5u6',
    titleId: 'journal-1-title',
    descId: 'journal-1-desc',
  },
  {
    id: 2,
    title: 'The Complete Guide to Jewelry Care',
    excerpt: 'Keep your pieces looking brand new with our expert care tips.',
    imgId: 'journal-2-v7w8x9',
    titleId: 'journal-2-title',
    descId: 'journal-2-desc',
  },
  {
    id: 3,
    title: 'Behind the Craft: Meet Our Artisans',
    excerpt: 'Discover the hands and hearts behind every Velmora piece.',
    imgId: 'journal-3-y1z2a3',
    titleId: 'journal-3-title',
    descId: 'journal-3-desc',
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="reveal font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            Journal
          </h1>
          <div className="reveal reveal-delay-1 w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article key={article.id} className={`reveal reveal-delay-${i + 1} group`}>
              <div className="aspect-[4/3] overflow-hidden bg-brand-warm">
                <img
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.descId}] [${article.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2
                id={article.titleId}
                className="font-serif text-lg tracking-wide text-brand-charcoal mt-4 group-hover:text-brand-gold transition-colors"
              >
                {article.title}
              </h2>
              <p id={article.descId} className="font-sans text-sm text-brand-muted mt-2 leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-block mt-3 font-sans text-xs tracking-super-wide uppercase text-brand-gold">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
