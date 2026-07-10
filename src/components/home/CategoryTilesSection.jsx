import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTilesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-manrope text-xs tracking-[0.2em] uppercase text-champagne mb-3">Explore</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">Shop by Category</h2>
        </div>

        {/* Tiles */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] sm:aspect-[2/3] lg:aspect-[3/4] block"
            >
              {/* Image */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
              />

              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.description}</span>

              {/* Default overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-obsidian/10 to-transparent transition-opacity duration-300" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-obsidian/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-cormorant text-2xl lg:text-3xl font-light text-ivory uppercase tracking-product">
                  {cat.label}
                </h3>
                <p className="font-manrope text-xs text-ivory/70 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                  {cat.description}
                </p>
                <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-manrope text-xs tracking-wider uppercase text-champagne-light">Shop Now</span>
                  <div className="h-px w-6 bg-champagne-light" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
