import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    href: '/shop?category=earrings',
    imgId: 'cat-earrings-h1i2',
    titleId: 'cat-earrings-title',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-necklaces-j3k4',
    titleId: 'cat-necklaces-title',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-huggies-l5m6',
    titleId: 'cat-huggies-title',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-cream-200 block"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="text-white font-serif text-2xl md:text-3xl tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}