import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { id: 'earrings', name: 'Earrings', desc: 'Gold drop earrings jewelry' },
  { id: 'necklaces', name: 'Necklaces', desc: 'Gold chain necklace pendant jewelry' },
  { id: 'huggies', name: 'Huggies', desc: 'Small gold hoop earrings jewelry' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="category-section-title" className="font-serif text-3xl md:text-4xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-charcoal"
            >
              <span id={`category-${tile.id}-desc`} className="sr-only">{tile.desc}</span>
              <img
                alt={tile.name}
                data-strk-img-id={`category-${tile.id}-img-c3`}
                data-strk-img={`[category-${tile.id}-desc] [category-section-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <h3
                  id={`category-${tile.id}-label`}
                  className="font-serif text-2xl md:text-3xl text-white"
                >
                  {tile.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
