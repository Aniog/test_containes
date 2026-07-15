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
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-inter text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
            Explore
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-cream block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label} jewelry</span>
              <span id={cat.descId} className="sr-only">gold {cat.label} fine jewelry collection</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <p className="font-cormorant text-2xl md:text-3xl font-light text-white tracking-[0.1em] uppercase">
                  {cat.label}
                </p>
                <div className="mt-3 overflow-hidden h-5">
                  <p className="font-inter text-xs tracking-[0.15em] uppercase text-white/80 translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                    Shop Now →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
