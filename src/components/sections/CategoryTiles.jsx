import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From subtle studs to statement drops',
    imgId: 'cat-earrings-tile',
    query: 'gold earrings jewelry product elegant',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains, and layered looks',
    imgId: 'cat-necklaces-tile',
    query: 'gold necklace jewelry product elegant pendant',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Close-fitting hoops for every day',
    imgId: 'cat-huggies-tile',
    query: 'gold huggie hoop earrings jewelry product',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-heading-1 md:text-heading-1 text-velmora-black">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden bg-velmora-cream"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}] ${cat.query}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/50 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-heading-2 text-white mb-1"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className="text-body-sm text-white/70"
                >
                  {cat.description}
                </p>
                <span className="inline-block mt-3 text-caption uppercase tracking-[0.12em] text-velmora-gold-light border-b border-velmora-gold-light pb-0.5 group-hover:border-velmora-gold group-hover:text-velmora-gold transition-colors">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
