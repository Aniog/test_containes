import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryData = [
  { id: 'cat-earrings', name: 'Earrings', slug: 'earrings', imgId: 'cat-earrings-img-a1b2c3' },
  { id: 'cat-necklaces', name: 'Necklaces', slug: 'necklaces', imgId: 'cat-necklaces-img-d4e5f6' },
  { id: 'cat-huggies', name: 'Huggies', slug: 'huggies', imgId: 'cat-huggies-img-g7h8i9' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="categories-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryData.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ivory no-underline"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.id}-name] [categories-title] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-all duration-300" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <h3
                  id={`${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-cream group-hover:translate-y-0 translate-y-1 transition-transform duration-300"
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
