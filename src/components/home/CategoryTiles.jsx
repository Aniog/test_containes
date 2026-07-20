import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/lib/data';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="serif-heading text-3xl md:text-4xl text-espresso mb-4">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/3] overflow-hidden bg-sand"
          >
            <img
              alt={cat.name}
              data-strk-img-id={`category-${cat.id}`}
              data-strk-img={`[cat-name-${cat.id}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="sr-only" id={`cat-name-${cat.id}`}>
              {cat.name} fine jewelry collection
            </span>
            {/* Overlay */}
            <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/50 transition-colors duration-500" />
            {/* Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="font-serif text-2xl md:text-3xl text-cream tracking-wide">
                {cat.name}
              </h3>
              <p className="text-cream/70 text-sm mt-2 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
