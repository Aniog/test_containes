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
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-manrope text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-3">
            Explore
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-stone transition-transform duration-500 group-hover:scale-105"
                data-strk-bg-id={cat.bgId}
                data-strk-bg={`[${cat.titleId}] gold jewelry`}
                data-strk-bg-ratio="2x3"
                data-strk-bg-width="600"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/20 transition-colors duration-300" />

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <p
                  id={cat.titleId}
                  className="font-cormorant text-2xl md:text-3xl font-light tracking-[0.15em] uppercase text-cream"
                >
                  {cat.label}
                </p>
                <div className="mt-3 w-8 h-px bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                <p className="font-manrope text-[11px] tracking-[0.12em] uppercase text-cream/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
