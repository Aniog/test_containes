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
    <section ref={containerRef} className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-obsidian font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Default overlay */}
              <div className="absolute inset-0 bg-velmora-obsidian/30 group-hover:bg-velmora-obsidian/50 transition-all duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-velmora-warm-white font-light"
                >
                  {cat.label}
                </h3>
                <p
                  id={cat.descId}
                  className="font-sans text-xs text-velmora-warm-white/70 mt-2 tracking-wide text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.description}
                </p>
                <div className="mt-4 w-8 h-px bg-velmora-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
