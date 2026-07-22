import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 1,
    title: 'How to Style Gold Jewelry for Every Occasion',
    excerpt: 'From boardroom to brunch, here is how to make your gold pieces work harder.',
    date: 'July 15, 2026',
    category: 'Style',
  },
  {
    id: 2,
    title: 'The Art of the Ear Stack',
    excerpt: 'A guide to curating the perfect ear stack — mixing metals, sizes, and styles.',
    date: 'July 8, 2026',
    category: 'Guides',
  },
  {
    id: 3,
    title: 'Caring for Your Demi-Fine Jewelry',
    excerpt: 'Simple daily habits to keep your gold-plated pieces looking their best for years.',
    date: 'June 28, 2026',
    category: 'Care',
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
      <div className="bg-velvet-50 border-b border-velvet-200">
        <div className="container-site py-10 md:py-14 text-center">
          <h1 className="section-heading text-3xl md:text-5xl text-velvet-950">
            The Journal
          </h1>
          <p className="text-sm text-velvet-500 font-sans font-light mt-3 max-w-md mx-auto">
            Stories of style, craftsmanship, and the women who wear Velmora
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {articles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-velvet-100 rounded-sm overflow-hidden mb-5">
                  <img
                    alt={article.title}
                    data-strk-img-id={`journal-${article.id}-a9d4`}
                    data-strk-img={`[journal-title-${article.id}] gold jewelry lifestyle`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[11px] tracking-widest uppercase text-gold-600 font-sans font-medium mb-2">
                  {article.category}
                </p>
                <h3
                  id={`journal-title-${article.id}`}
                  className="section-heading text-xl text-velvet-950 leading-snug mb-2 group-hover:text-velvet-700 transition-colors"
                >
                  {article.title}
                </h3>
                <p className="text-sm text-velvet-500 font-sans font-light leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <p className="text-xs text-velvet-400 font-sans">{article.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
