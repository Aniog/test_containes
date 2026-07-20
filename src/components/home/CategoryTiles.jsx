import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    query: 'gold earrings jewelry collection flatlay',
    imgId: 'cat-earrings-d4e5f6',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    query: 'gold necklaces jewelry collection flatlay',
    imgId: 'cat-necklaces-g7h8i9',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    query: 'gold huggie earrings jewelry collection',
    imgId: 'cat-huggies-j1k2l3',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-text-primary text-center mb-3">
          Shop by Category
        </h2>
        <div className="w-12 h-px bg-accent mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-background overflow-hidden"
            >
              <div
                data-strk-bg-id={cat.imgId}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-dark-text tracking-wider mb-3">
                    {cat.label}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-dark-text/80 text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Explore <ArrowRight className="w-4 h-4" />
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
