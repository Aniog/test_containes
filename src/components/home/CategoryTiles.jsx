import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryTiles = [
  { id: 'earrings', name: 'Earrings', path: '/shop?category=earrings' },
  { id: 'necklaces', name: 'Necklaces', path: '/shop?category=necklaces' },
  { id: 'huggies', name: 'Huggies', path: '/shop?category=huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 id="shop-by-title" className="serif-heading text-3xl md:text-4xl text-stone-800 mb-3">Shop by Category</h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(tile => (
            <Link
              key={tile.id}
              to={tile.path}
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded overflow-hidden bg-stone-300"
            >
              <div
                className="absolute inset-0"
                data-strk-bg-id={`category-${tile.id}`}
                data-strk-bg={`[${tile.id}-label] [shop-by-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`${tile.id}-label`}
                  className="product-name text-white text-xl md:text-2xl tracking-widest opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {tile.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
