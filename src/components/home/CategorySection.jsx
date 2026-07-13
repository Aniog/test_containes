import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '../../data/products';

export default function CategorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase font-sans font-medium text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            Shop by Category
          </h2>
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] block"
            >
              {/* Background image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
              />

              {/* Default overlay */}
              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <p
                  id={cat.descId}
                  className="sr-only"
                >
                  {cat.label} jewelry collection
                </p>
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-cream tracking-widest uppercase font-light"
                >
                  {cat.label}
                </h3>
                <div className="w-8 h-px bg-gold mt-3 group-hover:w-16 transition-all duration-400" />
                <span className="mt-3 text-[10px] tracking-widest uppercase font-sans font-medium text-cream/0 group-hover:text-cream/90 transition-colors duration-300">
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
