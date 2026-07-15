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
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velvet font-light">Shop by Category</h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] block"
            >
              {/* Hidden text for image query */}
              <span id={cat.titleId} className="hidden">{cat.label}</span>
              <span id={cat.descId} className="hidden">{cat.desc}</span>

              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velvet/30 group-hover:bg-velvet/50 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory tracking-widest uppercase font-light">
                  {cat.label}
                </h3>
                <div className="w-8 h-px bg-champagne mt-3 group-hover:w-16 transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
