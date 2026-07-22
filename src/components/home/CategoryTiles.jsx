import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings elegant' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace pendant elegant' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings hoop' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-3">Browse</p>
          <h2 className="font-serif text-3xl md:text-4xl text-dark">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => {
            const titleId = `cat-title-${cat.id}`;
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[4/5] overflow-hidden bg-cream-dark border border-border"
              >
                <img
                  data-strk-img-id={`cat-${cat.id}`}
                  data-strk-img={`[${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    id={titleId}
                    className="font-serif text-xl md:text-2xl text-cream tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                  >
                    {cat.label}
                  </span>
                </div>
                {/* Always visible label on mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden bg-gradient-to-t from-dark/60 to-transparent">
                  <span className="font-serif text-lg text-cream tracking-widest uppercase">
                    {cat.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
