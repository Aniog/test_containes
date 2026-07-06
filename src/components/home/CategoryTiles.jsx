import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    desc: 'gold drop earrings jewelry',
    imgId: 'cat-earrings-tile-x1y2z3',
    titleId: 'cat-tile-earrings-title',
    descId: 'cat-tile-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    desc: 'gold chain necklace jewelry',
    imgId: 'cat-necklaces-tile-a4b5c6',
    titleId: 'cat-tile-necklaces-title',
    descId: 'cat-tile-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    desc: 'gold huggie hoop earrings jewelry',
    imgId: 'cat-huggies-tile-d7e8f9',
    titleId: 'cat-tile-huggies-title',
    descId: 'cat-tile-huggies-desc',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted-bg"
            >
              <span id={cat.descId} className="sr-only">{cat.desc}</span>
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-white font-medium tracking-section opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100"
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
