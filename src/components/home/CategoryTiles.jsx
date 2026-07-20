import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { categories } from '@/data/products';
import strkImgConfig from '@/strk-img-config.json';

const categoryDescriptions = {
  earrings: 'Statement studs, drops & cuffs',
  necklaces: 'Layer-worthy chains & pendants',
  huggies: 'Everyday hoops that hug just right',
};

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-[0.1em] text-text-primary">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Tiles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] block"
            >
              <img
                data-strk-img-id={`cat-${cat.id}-tile`}
                data-strk-img={`[cat-name-${cat.id}] [cat-desc-${cat.id}] gold jewelry`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-bg-deep/30 group-hover:bg-bg-deep/50 transition-all duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span id={`cat-name-${cat.id}`} className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-text-primary mb-2">
                  {cat.name}
                </span>
                <span
                  id={`cat-desc-${cat.id}`}
                  className="text-[11px] uppercase tracking-[0.2em] text-text-secondary font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {categoryDescriptions[cat.id]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
