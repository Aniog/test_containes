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
    desc: 'Gold drop earrings, studs, ear cuffs',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-d4e5f6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Delicate gold chain necklaces with pendants',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    to: '/shop?category=huggies',
    imgId: 'cat-huggies-img-g7h8i9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Huggie hoop earrings in gold',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[3/4] md:aspect-[2/3] overflow-hidden block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <p id={cat.descId} className="sr-only">{cat.desc}</p>
                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 id={cat.titleId} className="font-serif text-2xl md:text-3xl text-ivory tracking-wide">
                    {cat.label}
                  </h3>
                  <div className="w-8 h-px bg-gold mx-auto mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />
                  <p className="font-sans text-xs uppercase tracking-widest text-ivory/70 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
