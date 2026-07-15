import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoriesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.16em] text-gold font-medium mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base">
            Find Your Finish
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              aria-label={`Shop ${category.label}`}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <span id={`category-query-${category.id}`} className="sr-only" aria-hidden="true">
                {category.imageQuery}
              </span>
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-query-${category.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-base/20 group-hover:bg-base/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {category.label}
                  </h3>
                  <span className="inline-block text-ivory text-xs uppercase tracking-[0.16em] font-medium border-b border-ivory/0 group-hover:border-ivory pb-1 transition-all duration-300">
                    Shop Now
                  </span>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 md:hidden">
                <h3 className="font-serif text-xl text-ivory">{category.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
