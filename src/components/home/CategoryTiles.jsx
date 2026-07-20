import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const categoryImages = {
  earrings: { imgId: 'cat-earrings-img-h1g2f3', desc: 'Elegant gold drop earrings on dark background' },
  necklaces: { imgId: 'cat-necklaces-img-e4d5c6', desc: 'Delicate gold chain necklace on model neck' },
  huggies: { imgId: 'cat-huggies-img-b7a8z9', desc: 'Gold huggie hoop earrings close-up' },
};

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-pearl"
            >
              <img
                data-strk-img-id={categoryImages[cat.id].imgId}
                data-strk-img={`[${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  id={cat.titleId}
                  className="font-serif text-xl md:text-2xl text-white drop-shadow-lg"
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
};

export default CategoryTiles;
