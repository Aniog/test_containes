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
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary font-light">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
                <h3 id={cat.titleId} className="font-serif text-2xl md:text-3xl text-ivory uppercase tracking-widest mb-2">
                  {cat.label}
                </h3>
                <p id={cat.descId} className="font-sans text-xs text-ivory/70 tracking-wide text-center mb-4">
                  {cat.description}
                </p>
                <span className="font-sans text-[10px] tracking-widest uppercase text-gold border-b border-gold pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
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
