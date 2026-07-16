import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings', query: 'gold earrings jewelry editorial' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces', query: 'gold necklace pendant editorial' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies', query: 'gold huggie hoop earrings' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-[#faf8f5]">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#1a1a1a] mb-3">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] bg-[#e8e4df] overflow-hidden cursor-pointer"
            >
              <div
                data-strk-bg-id={`category-${cat.id}-bg`}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="serif-heading text-2xl md:text-3xl text-[#faf8f5] tracking-wider mb-2">
                    {cat.name}
                  </h3>
                  <span className="text-xs tracking-widest uppercase text-[#faf8f5]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
