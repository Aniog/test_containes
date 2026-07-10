import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-button uppercase text-gold mb-3">Browse</p>
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hidden text for image query */}
              <span id={cat.titleId} className="hidden">{cat.label} gold jewelry</span>
              <span id={cat.descId} className="hidden">{cat.description}</span>

              {/* Default overlay */}
              <div className="absolute inset-0 bg-obsidian/30 transition-opacity duration-300 group-hover:opacity-0" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-obsidian/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6">
                <h3 className="font-serif text-2xl md:text-3xl text-parchment font-light tracking-wide mb-2">
                  {cat.label}
                </h3>
                <p className="font-sans text-xs text-parchment/70 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3">
                  {cat.description}
                </p>
                <span className="font-sans text-[10px] tracking-button uppercase text-gold border-b border-gold/60 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
