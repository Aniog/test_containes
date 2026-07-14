import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] md:aspect-[3/4] bg-linen relative overflow-hidden">
                <img
                  data-strk-img-id={`category-${cat.id}-tile`}
                  data-strk-img={`[category-${cat.id}-label]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 533'%3E%3Crect fill='%23F0EDE6' width='400' height='533'/%3E%3Ctext x='200' y='267' text-anchor='middle' fill='%23C9A84C' font-size='16' font-family='serif'%3EVelmora%3C/text%3E%3C/svg%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Label overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-12">
                  <span
                    id={`category-${cat.id}-label`}
                    className="font-serif text-3xl md:text-4xl text-ivory group-hover:tracking-wider transition-all duration-500"
                  >
                    {cat.name}
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-ivory/70 mt-2 group-hover:text-gold transition-colors duration-500">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
