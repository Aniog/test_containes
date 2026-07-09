import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const tiles = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    slug: 'earrings',
    query: 'gold earrings collection display dark background jewelry',
    description: 'Studs, drops & cuffs',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    query: 'gold necklaces collection chain pendant dark background jewelry',
    description: 'Pendants & chains',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    slug: 'huggies',
    query: 'gold huggie earrings collection hoop dark background jewelry',
    description: 'Chunky & sleek',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-surface-warm" ref={containerRef}>
      <div className="section-padding">
        <div className="text-center mb-14">
          <p className="font-sans text-overline uppercase tracking-mega-wide text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-heading-1 md:text-display text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                alt={tile.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                data-strk-img-id={tile.id}
                data-strk-img={tile.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="font-serif text-heading-2 text-white mb-1">
                  {tile.name}
                </h3>
                <p className="font-sans text-body text-white/70 mb-3">
                  {tile.description}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-overline uppercase tracking-ultra-wide text-gold group-hover:text-gold-light transition-colors duration-300">
                  Shop Now
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
