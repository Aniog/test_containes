import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categoryImages = {
    earrings: { imgId: 'cat-earrings-img-s9t0u1', query: '[cat-earrings-title] gold earrings jewelry' },
    necklaces: { imgId: 'cat-necklaces-img-v2w3x4', query: '[cat-necklaces-title] gold necklace jewelry' },
    huggies: { imgId: 'cat-huggies-img-y5z6a7', query: '[cat-huggies-title] gold huggie earrings jewelry' },
  };

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                data-strk-img-id={categoryImages[cat.id].imgId}
                data-strk-img={categoryImages[cat.id].query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-white font-medium tracking-wide"
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
