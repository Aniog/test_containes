import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    subtitle: 'Statement pieces',
    query: 'gold earrings elegant dark background jewelry',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    subtitle: 'Elegant chains',
    query: 'gold necklace elegant dark background jewelry',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    subtitle: 'Everyday hoops',
    query: 'gold huggie hoop earrings dark background jewelry',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-widest-2xl uppercase text-gold-400 font-sans font-medium mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-label-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-12">
                <span
                  id={`category-label-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-cream-50 mb-1"
                >
                  {cat.name}
                </span>
                <span className="text-xs tracking-widest uppercase text-cream-200/70 font-sans opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {cat.subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
