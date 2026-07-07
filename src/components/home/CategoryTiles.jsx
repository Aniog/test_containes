import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings', imgId: 'cat-earrings-d4e5f6' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace', imgId: 'cat-necklaces-g7h8i9' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings', imgId: 'cat-huggies-j1k2l3' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Shop by Category</h2>
          <p className="section-subtitle">Find your perfect piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] bg-charcoal-100 overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-label-${cat.id}] gold jewelry`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-serif text-2xl md:text-3xl text-cream tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  id={`cat-label-${cat.id}`}
                >
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;