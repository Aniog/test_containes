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
    <section ref={containerRef} className="py-16 md:py-24 bg-parchment border-t border-blush">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-manrope uppercase tracking-widest text-gold mb-3">Browse</p>
          <h2 className="font-cormorant font-light text-4xl md:text-5xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
              />

              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label} jewelry</span>
              <span id={cat.descId} className="sr-only">{cat.description} gold jewelry editorial</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-cormorant text-3xl md:text-4xl font-light text-white tracking-wide mb-2">
                  {cat.label}
                </h3>
                <p className="text-xs font-manrope text-white/70 uppercase tracking-widest">
                  {cat.description}
                </p>
                <div className="mt-4 w-0 group-hover:w-12 h-px bg-gold transition-all duration-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
