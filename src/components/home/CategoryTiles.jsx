import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { placeholderSrc } from '@/lib/images';

const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings close up model' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace layered neck' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings ear' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="caption-label mb-3">Explore</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-sand"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-label-${category.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={placeholderSrc}
                alt={category.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-espresso/20 group-hover:bg-velmora-espresso/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`category-label-${category.id}`}
                    className="font-serif text-3xl md:text-4xl text-velmora-cream mb-3"
                  >
                    {category.label}
                  </h3>
                  <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-velmora-cream border-b border-velmora-cream pb-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
