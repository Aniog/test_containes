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

  return (
    <section ref={containerRef} className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-accent)] mb-3">Explore</p>
          <h2 className="velmora-serif text-3xl sm:text-4xl text-[var(--velmora-dark)]">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] bg-[var(--velmora-bg-alt)] overflow-hidden"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={`[${category.id}-title] ${category.name} jewelry collection`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 id={`${category.id}-title`} className="velmora-product-name text-2xl sm:text-3xl mb-2 tracking-widest">
                  {category.name}
                </h3>
                <p className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {category.count} Pieces
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
