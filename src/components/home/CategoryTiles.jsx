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
    { id: 'earrings', label: 'Earrings', bgId: 'cat-earrings-bg', titleId: 'cat-earrings-title' },
    { id: 'necklaces', label: 'Necklaces', bgId: 'cat-necklaces-bg', titleId: 'cat-necklaces-title' },
    { id: 'huggies', label: 'Huggies', bgId: 'cat-huggies-bg', titleId: 'cat-huggies-title' },
  ];

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl tracking-wide">Shop by Category</h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-[#E8E2DA] rounded-sm overflow-hidden"
            >
              <div
                data-strk-bg-id={cat.bgId}
                data-strk-bg={`[${cat.titleId}] ${cat.label} jewelry`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 id={cat.titleId} className="serif-heading text-2xl md:text-3xl text-white tracking-wider uppercase">
                    {cat.label}
                  </h3>
                  <span className="mt-3 inline-block text-white/80 text-xs uppercase tracking-widest border-b border-white/50 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
