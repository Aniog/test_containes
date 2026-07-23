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
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">Explore</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

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
      className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block bg-linen"
    >
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.label}
        data-strk-img-id={category.imgId}
        data-strk-img={`[${category.descId}] [${category.titleId}]`}
        data-strk-img-ratio="2x3"
        data-strk-img-width="600"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Hidden text for image query */}
      <span id={category.titleId} className="sr-only">{category.label} jewelry</span>
      <span id={category.descId} className="sr-only">gold {category.label} fine jewelry editorial</span>

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
        <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-cormorant text-3xl font-light text-ivory uppercase tracking-widest mb-3">
            {category.label}
          </h3>
          <span className="font-inter text-xs tracking-widest uppercase text-ivory/80 border-b border-ivory/60 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
}
