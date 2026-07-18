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
    <section ref={containerRef} className="px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-taupe">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="relative group aspect-[4/5] md:aspect-[3/4] overflow-hidden no-underline"
          >
            <img
              data-strk-img-id={`cat-tile-${cat.id}-w1x2y3`}
              data-strk-img={`[${cat.titleId}] gold jewelry collection`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3
                id={cat.titleId}
                className="font-serif text-2xl md:text-3xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              >
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
