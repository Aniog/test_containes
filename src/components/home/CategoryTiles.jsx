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
    { id: 'cat-earrings', name: 'Earrings', query: 'gold earrings jewelry', link: '/shop?category=earrings' },
    { id: 'cat-necklaces', name: 'Necklaces', query: 'gold necklace jewelry', link: '/shop?category=necklaces' },
    { id: 'cat-huggies', name: 'Huggies', query: 'gold huggie earrings', link: '/shop?category=huggies' },
  ];

  return (
    <section ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-3">Shop by Category</h2>
          <p className="text-muted-foreground text-sm tracking-wide">Find your signature piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div
                data-strk-bg-id={cat.id}
                data-strk-bg={`[${cat.id}-label] [category-section]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <span
                    id={`${cat.id}-label`}
                    className="product-name text-2xl md:text-3xl tracking-widest block mb-3"
                  >
                    {cat.name}
                  </span>
                  <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white pb-1">
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
};

export default CategoryTiles;
