import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings jewelry' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace jewelry' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie earrings' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="section-padding">
      <div className="container-padding">
        <h2 className="serif-heading text-2xl md:text-3xl font-light text-center mb-10">
          Shop by Category
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0"
                data-strk-bg-id={`cat-bg-${category.id}`}
                data-strk-bg={`[${category.id}-label] [categories-title]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <img
                data-strk-img-id={`cat-img-${category.id}`}
                data-strk-img={`[${category.id}-label] [categories-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`${category.id}-label`}
                    className="serif-heading text-white text-2xl md:text-3xl font-light tracking-wider mb-2 transition-transform duration-300 group-hover:-translate-y-2"
                  >
                    {category.name}
                  </h3>
                  <span className="text-white/80 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
