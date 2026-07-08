import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryData = [
  { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings-w1x2y3', titleId: 'cat-earrings-title' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces-z4a5b6', titleId: 'cat-necklaces-title' },
  { id: 'huggies', name: 'Huggies', imgId: 'cat-huggies-c7d8e9', titleId: 'cat-huggies-title' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 id="categories-section-title" className="font-serif text-3xl md:text-4xl text-charcoal">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categoryData.map(cat => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="relative aspect-[4/5] overflow-hidden group no-underline"
          >
            <img
              alt={cat.name}
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.titleId}] [categories-section-title] gold jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3
                id={cat.titleId}
                className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
              >
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
