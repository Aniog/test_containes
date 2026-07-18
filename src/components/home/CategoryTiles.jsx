import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { id: 'earrings', name: 'Earrings', query: 'gold earrings jewelry collection' },
    { id: 'necklaces', name: 'Necklaces', query: 'gold necklace jewelry collection' },
    { id: 'huggies', name: 'Huggies', query: 'gold huggie earrings collection' },
  ];

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">Shop by Category</h2>
          <div className="w-16 h-px bg-[#B8860B] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden bg-[#E8E2DA]"
            >
              <div
                data-strk-bg-id={`category-${category.id}-bg`}
                data-strk-bg={`[${category.id}-category-title] [shop-categories-title]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`${category.id}-category-title`}
                  className="serif-heading text-white text-2xl md:text-3xl lg:text-4xl tracking-wider md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                >
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
