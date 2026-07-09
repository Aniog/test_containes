import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-medium text-gold mb-3 font-sans">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
      className="group relative overflow-hidden aspect-[4/5] block"
    >
      {/* Hidden text for image queries */}
      <p id={category.descId} className="sr-only">{category.description}</p>
      <p id={category.titleId} className="sr-only">{category.label} jewelry</p>

      {/* Image */}
      <img
        data-strk-img-id={category.imgId}
        data-strk-img={`[${category.descId}] [${category.titleId}]`}
        data-strk-img-ratio="4x5"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h3 className="font-serif text-3xl md:text-4xl font-light text-cream uppercase tracking-widest">
          {category.label}
        </h3>
        <div className="w-8 h-px bg-gold mt-3 group-hover:w-16 transition-all duration-300" />
        <span className="mt-4 text-[10px] uppercase tracking-widest font-medium text-cream/80 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Shop Now
        </span>
      </div>
    </Link>
  );
}
