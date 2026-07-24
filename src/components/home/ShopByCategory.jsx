import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { cn } from '../../lib/utils';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops, and cuffs',
    to: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layers',
    to: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Chunky, minimal, and bold',
    to: '/shop?category=huggies',
  },
];

export default function ShopByCategory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-headline md:text-display text-charcoal mb-2">
            Shop by Category
          </h2>
          <p className="font-sans text-body text-taupe">
            Find the perfect piece for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[3/4] md:aspect-[4/5] rounded-lg overflow-hidden"
            >
              {/* Background image */}
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[cat-${cat.id}-name] gold jewelry close-up editorial warm light`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${cat.name} collection`}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent transition-colors duration-300 group-hover:from-charcoal/70" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-headline text-cream-100 mb-1">
                  {cat.name}
                </h3>
                <p className="font-sans text-body text-cream-200/80 mb-3">
                  {cat.description}
                </p>
                <span className="inline-block font-sans text-caption uppercase tracking-ultra-wide text-gold group-hover:text-gold-light transition-colors duration-300 border-b border-gold/50 pb-0.5">
                  Explore
                </span>
              </div>

              {/* Hidden name for image context */}
              <span id={`cat-${cat.id}-name`} className="hidden">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
