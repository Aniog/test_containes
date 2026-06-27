import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useImageLoader } from '@/hooks/useImageLoader';

const categoryImages = {
  earrings: 'gold earrings editorial dark background luxury close-up',
  necklaces: 'gold necklace layered on model warm editorial',
  huggies: 'gold huggie earrings worn editorial close-up',
};

const CategoryTiles = () => {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.slug}`}
              className="relative aspect-[3/4] group overflow-hidden bg-velmora-charcoal"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-bg-${category.id}`}
                data-strk-bg={`[category-title-${category.id}] ${categoryImages[category.id]}`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-title-${category.id}`}
                  className="font-serif text-3xl text-white tracking-[0.1em] border-b border-transparent group-hover:border-white pb-2 transition-all"
                >
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
