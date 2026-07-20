import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    to: '/shop?category=earrings',
    imgId: 'cat-earrings-img-a1b2c3',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'Gold drop earrings filigree stud editorial',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-d4e5f6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Delicate gold pendant necklace chain editorial',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    to: '/shop?category=huggies',
    imgId: 'cat-huggies-img-g7h8i9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Gold huggie hoop earrings dome chunky',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">Browse by Category</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">Shop the Edit</h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hidden text */}
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-ivory tracking-wide text-center">
                    {cat.label}
                  </h3>
                  <div className="mt-2 flex justify-center">
                    <span className="font-sans text-xs tracking-widest uppercase text-ivory/70 border-b border-ivory/40 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
