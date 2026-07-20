import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'gold earrings collection editorial display warm lighting',
    link: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'gold necklaces draped on marble editorial jewelry photography',
    link: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'gold huggie earrings closeup minimal luxury styling',
    link: '/shop?category=huggies',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-500 mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Image */}
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={category.image}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src=""
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-800/30 group-hover:bg-charcoal-800/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wider mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-block font-sans text-xs tracking-widest uppercase text-white/80 border-b border-white/50 pb-1 group-hover:border-white transition-colors">
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
