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
    <section className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase font-medium text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-ink tracking-wide">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-velmora-cream block"
            >
              {/* Image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-velmora-obsidian/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl font-light text-velmora-ivory tracking-wide mb-2"
                >
                  {cat.label}
                </h3>
                <p
                  id={cat.descId}
                  className="text-xs text-velmora-sand/80 font-light tracking-wide mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.description}
                </p>
                <span className="text-[10px] tracking-widest uppercase font-medium text-velmora-gold border-b border-velmora-gold/50 pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
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
