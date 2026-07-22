import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { id: 'cat-earrings', name: 'Earrings', path: '/shop?category=earrings', query: 'gold earrings editorial photography' },
    { id: 'cat-necklaces', name: 'Necklaces', path: '/shop?category=necklaces', query: 'gold necklace on model editorial' },
    { id: 'cat-huggies', name: 'Huggies', path: '/shop?category=huggies', query: 'gold huggie earrings closeup' },
  ];

  return (
    <section ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-10 md:mb-14">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div
                data-strk-bg-id={cat.id}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="product-name text-white text-xl md:text-2xl tracking-widest border-2 border-white/60 px-8 py-4 group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                  {cat.name}
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
