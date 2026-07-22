import { useEffect, useRef } from 'react';
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
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] block"
            >
              {/* Category image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label} gold jewelry</span>
              <span id={cat.descId} className="sr-only">demi-fine {cat.label} gold jewelry on model</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <p className="font-inter text-xs uppercase tracking-widest text-cream/70 mb-2 transition-opacity duration-300">
                  Explore
                </p>
                <h3 className="font-cormorant text-3xl font-light text-cream uppercase tracking-widest">
                  {cat.label}
                </h3>
                <div className="w-8 h-px bg-gold mt-4 transition-all duration-300 group-hover:w-16" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
