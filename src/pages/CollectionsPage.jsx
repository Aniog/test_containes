import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CollectionsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-cream-100 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-20">
          <p className="section-subtitle mb-3">Discover</p>
          <h1 className="section-title">Our Collections</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <img
                  data-strk-img-id={`collection-${cat.id}-page`}
                  data-strk-img={`[collection-name-${cat.id}] luxury jewelry collection display`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-walnut-950/10 group-hover:bg-walnut-950/20 transition-colors duration-500" />
              </div>
              <h2
                id={`collection-name-${cat.id}`}
                className="font-serif text-2xl uppercase tracking-ultra-wide text-walnut-900 text-center"
              >
                {cat.name}
              </h2>
              <p className="font-sans text-sm text-walnut-400 text-center mt-1">
                Shop Now
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
