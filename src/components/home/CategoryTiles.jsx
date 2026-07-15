import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categoryImages = {
    earrings: { id: 'cat-earrings-a1b2c3', query: 'gold earrings model portrait editorial' },
    necklaces: { id: 'cat-necklaces-d4e5f6', query: 'gold necklace layered model editorial' },
    huggies: { id: 'cat-huggies-g7h8i9', query: 'gold huggie earrings close up editorial' },
  };

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text mb-3">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-border-thin mx-auto mt-6" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.slice(0, 3).map(category => {
            const img = categoryImages[category.id];
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <div
                  data-strk-bg-id={img.id}
                  data-strk-bg={`[${category.id}-category-title] [shop-categories-title]`}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="800"
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-velmora-dark/30 group-hover:bg-velmora-dark/40 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 id={`${category.id}-category-title`} className="font-serif text-2xl md:text-3xl text-velmora-dark-text tracking-wider uppercase mb-2">
                    {category.name}
                  </h3>
                  <p className="text-velmora-dark-text/70 text-sm">{category.count} pieces</p>
                  <span className="mt-4 text-velmora-dark-text text-xs tracking-widest uppercase border-b border-velmora-dark-text/50 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </span>
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
