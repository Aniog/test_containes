import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    slug: 'earrings',
    description: 'Studs, drops & cuffs',
    query: 'gold earrings collection jewelry display elegant',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    description: 'Pendants & chains',
    query: 'gold necklaces collection jewelry display elegant',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    slug: 'huggies',
    description: 'Everyday essentials',
    query: 'gold huggie hoop earrings collection jewelry display',
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
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-brand-charcoal">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[${category.id}-name] [${category.id}-desc] jewelry elegant gold`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-near-black/20 group-hover:bg-brand-near-black/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3
                  id={`${category.id}-name`}
                  className="font-serif text-3xl md:text-4xl font-medium text-white mb-2"
                >
                  {category.name}
                </h3>
                <p
                  id={`${category.id}-desc`}
                  className="text-white/70 text-sm font-medium uppercase tracking-widest-plus"
                >
                  {category.description}
                </p>
                <div className="w-12 h-px bg-brand-gold mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
