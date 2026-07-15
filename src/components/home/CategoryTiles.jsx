import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const categoryImageQueries = {
  earrings: 'gold drop earrings on model ear closeup jewelry',
  necklaces: 'gold pendant necklace on woman collarbone jewelry',
  huggies: 'gold huggie hoop earrings on ear closeup jewelry',
};

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        <h2
          id="shop-category-title"
          className="section-title text-center mb-12 md:mb-16"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] bg-[#E8E2DA] overflow-hidden cursor-pointer"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={categoryImageQueries[category.id]}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`${category.id}-category-name`}
                  className="text-2xl md:text-3xl text-white tracking-[0.2em] uppercase transition-transform duration-500 group-hover:-translate-y-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {category.name}
                </h3>
                <span className="text-white/80 text-xs uppercase tracking-[0.2em] mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Explore
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
