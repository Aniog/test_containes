import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { name: 'Earrings', imgId: 'cat-earrings-tile', titleId: 'cat-title-earrings', descId: 'cat-desc-earrings', desc: 'Studs, drops & cuffs' },
  { name: 'Necklaces', imgId: 'cat-necklaces-tile', titleId: 'cat-title-necklaces', descId: 'cat-desc-necklaces', desc: 'Pendants & chains' },
  { name: 'Huggies', imgId: 'cat-huggies-tile', titleId: 'cat-title-huggies', descId: 'cat-desc-huggies', desc: 'Everyday gold hoops' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding pb-20 md:pb-28">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-velmora-gold mb-4 font-medium">
            Discover
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-ink tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop`}
              className="group relative aspect-[4/5] bg-velmora-blush overflow-hidden cursor-pointer"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center">
                <h3 id={cat.titleId} className="font-serif text-2xl md:text-3xl text-white tracking-wide mb-2">
                  {cat.name}
                </h3>
                <p id={cat.descId} className="text-sm text-white/70 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
