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
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">Explore</p>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-espresso tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Background image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label} gold jewelry</span>
              <span id={cat.descId} className="sr-only">{cat.description}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/50 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-10">
                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-cormorant text-2xl md:text-3xl font-light text-ivory tracking-[0.1em] uppercase">
                    {cat.label}
                  </h3>
                  <div className="w-8 h-px bg-gold mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="font-inter text-[10px] uppercase tracking-[0.15em] text-ivory/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
