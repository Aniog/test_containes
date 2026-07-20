import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 id="categories-title" className="font-serif text-3xl md:text-4xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-surface"
            >
              <img
                data-strk-img-id={`cat-${cat.id}-tile-b4c5d6`}
                data-strk-img={`[cat-${cat.id}-name] [categories-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wide"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
