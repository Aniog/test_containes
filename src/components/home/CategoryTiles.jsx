import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const CategoryTile = ({ cat }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="relative overflow-hidden group block aspect-[3/4]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className={`w-full h-full object-cover transition-transform duration-700 ${
          hovered ? 'scale-110' : 'scale-100'
        }`}
      />

      {/* Hidden text for image query */}
      <span id={cat.titleId} className="sr-only">{cat.label} gold jewelry</span>
      <span id={cat.descId} className="sr-only">fine gold {cat.label} jewelry editorial</span>

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          hovered ? 'bg-espresso/50' : 'bg-espresso/20'
        }`}
      />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <div
          className={`transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
          }`}
        >
          <p className="font-cormorant text-2xl md:text-3xl font-light text-cream tracking-widest uppercase text-center">
            {cat.label}
          </p>
          <div
            className={`flex justify-center mt-2 transition-all duration-300 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="font-inter text-[9px] tracking-widest uppercase text-cream/80 border-b border-cream/60 pb-0.5">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
