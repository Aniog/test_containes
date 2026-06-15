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
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-velvet font-light">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Background image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Base overlay */}
              <div className="absolute inset-0 bg-velvet/30 transition-opacity duration-300 group-hover:bg-velvet/50" />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-velvet/80 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p
                  id={cat.titleId}
                  className="font-serif text-2xl lg:text-3xl text-cream tracking-wide mb-1"
                >
                  {cat.label}
                </p>
                <p
                  id={cat.descId}
                  className="font-sans text-xs text-champagne/70 mb-4"
                >
                  {cat.description}
                </p>
                <span className="font-sans text-xs tracking-widest2 uppercase text-sand border-b border-sand/50 pb-0.5 group-hover:text-champagne group-hover:border-champagne/50 transition-colors duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
