import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">Browse</p>
          <h2 className="font-cormorant font-light text-4xl md:text-5xl text-charcoal">
            Shop by Category
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] block"
            >
              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label} jewelry</span>
              <span id={cat.descId} className="sr-only">{cat.description}</span>

              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-cormorant font-light text-3xl text-ivory uppercase tracking-widest mb-2">
                    {cat.label}
                  </h3>
                  <div className="w-8 h-px bg-gold mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="font-inter text-xs tracking-widest uppercase text-ivory/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
}
