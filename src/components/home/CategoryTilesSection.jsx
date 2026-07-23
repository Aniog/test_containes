import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CATEGORIES } from '@/data/products';

export default function CategoryTilesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-3">Browse by Style</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-ink font-light">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Tiles */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Background image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent transition-opacity duration-300 group-hover:from-obsidian/90" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p
                  id={cat.titleId}
                  className="font-cormorant text-2xl md:text-3xl text-ivory uppercase tracking-widest font-medium"
                >
                  {cat.label}
                </p>
                <p
                  id={cat.descId}
                  className="font-manrope text-xs text-ivory/60 mt-1 tracking-wide"
                >
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-manrope text-xs tracking-widest uppercase text-gold">Shop Now</span>
                  <div className="w-6 h-px bg-gold" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
