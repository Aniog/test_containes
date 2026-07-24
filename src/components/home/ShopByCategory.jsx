import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings elegant jewelry collection editorial',
    imgId: 'category-earrings-tile',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklace elegant jewelry collection editorial',
    imgId: 'category-necklaces-tile',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie hoop earrings elegant jewelry collection',
    imgId: 'category-huggies-tile',
  },
];

export default function ShopByCategory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-100">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="hairline mx-auto mb-6" />
          <h2 className="heading-section text-charcoal-800" id="category-title">
            Shop by Category
          </h2>
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] bg-cream-300"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`${cat.name} gold jewelry elegant editorial collection`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/40 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-cream-50 tracking-wider">
                    {cat.name}
                  </h3>
                  <span className="inline-block mt-2 text-[11px] font-medium tracking-widest-xl uppercase text-cream-200 border-b border-cream-200 pb-0.5 group-hover:border-gold-400 group-hover:text-gold-300 transition-colors">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
