import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
    link: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
    link: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&h=800&fit=crop',
    link: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-[1440px] mx-auto section-pad">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="heading-section text-3xl md:text-4xl">Shop by Category</h2>
          <div className="gold-divider mt-5" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group relative aspect-[3/4] overflow-hidden rounded"
            >
              <img
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={`[cat-name-${cat.id}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-[0.1em] mb-3"
                >
                  {cat.name}
                </h3>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/70 border-b border-white/40 pb-1 group-hover:text-velmora-gold-light group-hover:border-velmora-gold-light transition-colors">
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
