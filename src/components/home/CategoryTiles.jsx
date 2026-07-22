import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const categoryTiles = [
  { id: 'cat-earrings', name: 'Earrings', href: '/shop?category=earrings', query: 'gold earrings jewelry collection' },
  { id: 'cat-necklaces', name: 'Necklaces', href: '/shop?category=necklaces', query: 'gold necklace jewelry collection' },
  { id: 'cat-huggies', name: 'Huggies', href: '/shop?category=huggies', query: 'gold huggie earrings collection' },
];

export function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden cursor-pointer"
            >
              <div
                data-strk-bg-id={cat.id}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="600"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="serif-heading text-white text-2xl md:text-3xl tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
