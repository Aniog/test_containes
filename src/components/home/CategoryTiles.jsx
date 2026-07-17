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
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Browse by Style</p>
          <h2 className="section-heading">Shop by Category</h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[3/4] block"
            >
              {/* Image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velvet/30 group-hover:bg-velvet/50 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <span
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl font-light text-cream tracking-widest2 mb-1"
                >
                  {cat.label}
                </span>
                <span
                  id={cat.descId}
                  className="font-sans text-xs text-cream/70 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.description}
                </span>
                <div className="w-8 h-px bg-champagne mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
