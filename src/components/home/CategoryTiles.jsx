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
    <section ref={containerRef} className="bg-parchment py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-gold mb-3 font-sans">Browse</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">Shop by Category</h2>
          <div className="w-10 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] block"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <p
                  id={cat.titleId}
                  className="font-serif text-3xl md:text-4xl font-light text-white tracking-wide"
                >
                  {cat.label}
                </p>
                <p
                  id={cat.descId}
                  className="text-xs tracking-widest uppercase text-white/70 mt-2 transition-all duration-300 group-hover:text-gold"
                >
                  {cat.description}
                </p>
                <div className="mt-4 w-8 h-px bg-white/50 group-hover:w-16 group-hover:bg-gold transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
