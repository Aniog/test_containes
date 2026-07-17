import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const collections = [
  { ...categories[0], query: 'gold earrings collection editorial dark background', description: 'Studs, drops, and statement earrings for every mood.' },
  { ...categories[1], query: 'gold necklace collection editorial dark background', description: 'Layered chains, pendants, and statement pieces.' },
  { ...categories[2], query: 'gold huggie earrings collection close-up dark background', description: 'Everyday huggie hoops in chunky and delicate styles.' },
  { id: 'sets', name: 'Gift Sets', query: 'luxury jewelry gift set gold editorial box', description: 'Curated collections, beautifully boxed and ready to gift.' },
];

export default function CollectionsPage() {
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
            Collections
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="text-taupe text-sm font-sans">
            Explore our curated collections, each designed for a different moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              to={`/shop?category=${col.id}`}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden"
            >
              <div
                data-strk-bg-id={`collection-${col.id}`}
                data-strk-bg={col.query}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent transition-transform duration-700 group-hover:scale-105"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-xl text-ivory/15 tracking-mega-wide uppercase">{col.name}</span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center px-8">
                <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-2">{col.name}</h2>
                <p className="text-ivory/60 text-sm mb-4 max-w-xs">{col.description}</p>
                <span className="inline-flex items-center gap-2 text-xs tracking-ultra-wide uppercase text-gold-light font-sans font-medium group-hover:gap-3 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/20 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
