import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useImageLoader } from '@/hooks/useImageLoader';

const CategoryTiles = () => {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-gold-600 mb-2">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900">Find Your Finish</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => {
            const labelId = `category-${category.id}-label`;
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden bg-stone-200"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`category-bg-${category.id}`}
                  data-strk-bg={`[${labelId}]`}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={labelId}
                    className="font-serif text-2xl md:text-3xl text-white uppercase tracking-widest border-b border-white/0 group-hover:border-white/80 pb-1 transition-all"
                  >
                    {category.label}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
