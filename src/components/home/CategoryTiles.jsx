import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    query: 'gold earrings demi-fine jewelry warm tone',
    ratio: '4x3',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    query: 'gold necklace layered fine jewelry',
    ratio: '4x3',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    query: 'gold huggie earrings chunky dome',
    ratio: '4x3',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="container-site py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="heading-lg">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/3] overflow-hidden bg-velmora-muted"
          >
            <img
              alt={cat.label}
              data-strk-img-id={`category-${cat.id}`}
              data-strk-img={`[cat-label-${cat.id}]`}
              data-strk-img-ratio={cat.ratio}
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
              <span
                id={`cat-label-${cat.id}`}
                className="font-serif text-white text-2xl md:text-3xl tracking-[0.15em] uppercase opacity-90 group-hover:opacity-100 transition-opacity"
              >
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
