import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const categoryImages = {
    earrings: 'gold drop earrings elegant jewelry closeup warm',
    necklaces: 'gold necklace chain pendant elegant warm lighting',
    huggies: 'gold huggie hoop earrings chunky dome warm',
  };

  return (
    <section className="py-16 md:py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Shop by Category</h2>
          <p className="section-subtitle">Find your perfect piece.</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${cat.id}-tile`}
                data-strk-img={categoryImages[cat.id]}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-sand-50">
                <h3 className="font-serif text-2xl md:text-3xl tracking-wide mb-1">
                  {cat.label}
                </h3>
                <p className="font-sans text-xs tracking-wider uppercase text-sand-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
