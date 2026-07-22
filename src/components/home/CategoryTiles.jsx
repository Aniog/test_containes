import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    to: '/shop?category=earrings',
    imgId: 'cat-earrings-img-s1t2u3',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'Gold drop earrings, studs, ear cuffs',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-v4w5x6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Delicate gold pendant necklaces',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    to: '/shop?category=huggies',
    imgId: 'cat-huggies-img-y7z8a9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Chunky gold huggie hoop earrings',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        {/* Tiles */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
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

              {/* Base overlay */}
              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <h3
                    id={cat.titleId}
                    className="font-cormorant text-2xl md:text-3xl font-light text-ivory uppercase tracking-[0.15em]"
                  >
                    {cat.label}
                  </h3>
                  <p
                    id={cat.descId}
                    className="font-inter text-[11px] text-ivory/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  >
                    {cat.desc}
                  </p>
                  <div className="w-8 h-px bg-champagne mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
