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
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">Browse</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-charcoal font-light tracking-wide">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ category }) {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] block"
    >
      {/* Background image */}
      <img
        data-strk-img-id={category.imgId}
        data-strk-img={`[${category.descId}] [${category.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Hidden text for image query */}
      <span id={category.titleId} className="sr-only">{category.label} jewelry</span>
      <span id={category.descId} className="sr-only">{category.description}</span>

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-500" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
        <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-cormorant text-3xl md:text-4xl text-ivory font-light tracking-wide">
            {category.label}
          </h3>
          <div className="mt-3 overflow-hidden h-5">
            <p className="font-inter text-[10px] uppercase tracking-widest text-ivory/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              Shop Now →
            </p>
          </div>
        </div>
      </div>

      {/* Gold border on hover */}
      <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  );
}
