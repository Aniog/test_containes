import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & statement pieces',
    query: 'gold earrings jewelry on dark background',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layering',
    query: 'gold necklace jewelry on dark background',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Close-fitting hoops for everyday',
    query: 'gold huggie hoop earrings on dark background',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-light mb-3">
            Browse By
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-champagne">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-espresso border border-divider overflow-hidden"
            >
              {/* Image */}
              <img
                data-strk-img-id={`category-tile-${cat.id}`}
                data-strk-img={`[category-desc-${cat.id}] [category-name-${cat.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velvet/80 via-velvet/20 to-transparent transition-all duration-500 group-hover:from-velvet/90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3
                  id={`category-name-${cat.id}`}
                  className="font-product-name text-xl md:text-2xl text-champagne mb-1"
                >
                  {cat.name}
                </h3>
                <p
                  id={`category-desc-${cat.id}`}
                  className="text-xs text-champagne/60 font-sans font-light"
                >
                  {cat.description}
                </p>
                <div className="mt-4 inline-block">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans border-b border-gold/40 pb-0.5 group-hover:border-gold transition-colors duration-300">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
