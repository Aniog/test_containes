import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    to: '/shop?category=earrings',
    imgId: 'cat-earrings-img-a1b2',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-c3d4',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    to: '/shop?category=huggies',
    imgId: 'cat-huggies-img-e5f6',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">
            Browse by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
            Shop the Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-cream block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <p
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl font-light text-ivory tracking-wide"
                >
                  {cat.label}
                </p>
                <div className="mt-3 overflow-hidden h-5">
                  <p className="text-[11px] uppercase tracking-widest font-sans text-ivory/80 translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                    Shop Now →
                  </p>
                </div>
              </div>

              {/* Hidden desc for image query */}
              <span id={cat.descId} className="sr-only">
                {cat.label} fine gold jewelry collection
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
