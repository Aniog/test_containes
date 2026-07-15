import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      name: 'Earrings',
      slug: 'earrings',
      image: 'category-earrings',
      description: 'From studs to statement drops',
    },
    {
      name: 'Necklaces',
      slug: 'necklaces',
      image: 'category-necklaces',
      description: 'Layered or standalone elegance',
    },
    {
      name: 'Huggies',
      slug: 'huggies',
      image: 'category-huggies',
      description: 'Everyday luxury, effortless style',
    },
  ];

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-neutral-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Find the perfect piece for every occasion and style.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop?category=${category.slug}`}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${category.slug}`}
                data-strk-img="[category-desc] [category-name]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/60 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p
                  id="category-desc"
                  className="text-neutral-200 text-sm mb-4"
                >
                  {category.description}
                </p>
                <span className="inline-block border-2 border-white text-white font-medium px-6 py-2 rounded-lg group-hover:bg-white group-hover:text-neutral-900 transition-all duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}