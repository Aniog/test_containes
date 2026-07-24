import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', label: 'Earrings', query: 'elegant gold earrings editorial warm lighting jewelry photography' },
  { id: 'necklaces', label: 'Necklaces', query: 'elegant gold necklace editorial warm background jewelry' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie hoop earrings editorial warm tone jewelry' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-ink font-light tracking-wide">
            Shop by Category
          </h2>
          <div className="hairline w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-velmora-sand overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-${cat.id}-label]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-ink/20 group-hover:bg-velmora-ink/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-${cat.id}-label`}
                  className="font-serif text-2xl lg:text-3xl text-white tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}