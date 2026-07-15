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
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: '3/4' }}
            >
              {/* Background image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Default overlay */}
              <div className="absolute inset-0 bg-velmora-obsidian/30 group-hover:bg-velmora-obsidian/50 transition-colors duration-300" />

              {/* Label — always visible */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
                <h3
                  id={cat.titleId}
                  className="font-cormorant text-2xl lg:text-3xl uppercase tracking-[0.15em] font-medium"
                  style={{ color: '#FAF7F2' }}
                >
                  {cat.label}
                </h3>
                <p
                  id={cat.descId}
                  className="font-manrope text-xs mt-1 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: 'rgba(250,247,242,0.75)' }}
                >
                  {cat.description}
                </p>
                <div className="w-8 h-px mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: '#C9A96E' }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
