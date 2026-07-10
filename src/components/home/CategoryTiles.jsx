import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryTiles = [
  { id: 'earrings', name: 'Earrings', descId: 'cat-earrings-desc', titleId: 'cat-earrings-title', imgId: 'cat-earrings-img-e5f6' },
  { id: 'necklaces', name: 'Necklaces', descId: 'cat-necklaces-desc', titleId: 'cat-necklaces-title', imgId: 'cat-necklaces-img-g7h8' },
  { id: 'huggies', name: 'Huggies', descId: 'cat-huggies-desc', titleId: 'cat-huggies-title', imgId: 'cat-huggies-img-i9j0' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="categories-section-title" className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12 md:mb-16">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-charcoal"
            >
              <span id={cat.descId} className="sr-only">gold jewelry {cat.name}</span>
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <h3
                  id={cat.titleId}
                  className="text-xs uppercase tracking-ultra-wide font-sans font-medium text-white bg-charcoal/60 backdrop-blur-sm px-6 py-3 group-hover:bg-gold transition-colors duration-300"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
