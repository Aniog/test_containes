import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    imageId: 'cat-earrings',
    description: 'Studs, drops, and statement pieces',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imageId: 'cat-necklaces',
    description: 'Pendants, chains, and layered looks',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imageId: 'cat-huggies',
    description: 'Everyday hoops that hug the ear',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 lg:py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-widest-2xl uppercase text-gold mb-3">Explore</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] rounded overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imageId}
                data-strk-img={`[${cat.id}-cat-desc] ${cat.name} gold jewelry collection`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/20 to-transparent group-hover:from-base/90 transition-all duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-text-primary font-light mb-1">
                  {cat.name}
                </h3>
                <p id={`${cat.id}-cat-desc`} className="text-xs text-text-primary/60 tracking-wider uppercase">
                  {cat.description}
                </p>
                <span className="inline-block mt-3 text-xs tracking-wider uppercase text-gold border-b border-gold/40 pb-0.5 group-hover:border-gold transition-colors duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
