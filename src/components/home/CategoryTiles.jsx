import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    sub: 'Studs, drops & cuffs',
    to: '/shop?category=earrings',
    imgId: 'cat-tile-earrings-a1b2c3',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    sub: 'Pendants & chains',
    to: '/shop?category=necklaces',
    imgId: 'cat-tile-necklaces-d4e5f6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    sub: 'Dome & hoop huggies',
    to: '/shop?category=huggies',
    imgId: 'cat-tile-huggies-g7h8i9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-warm-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-widest2 text-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/50 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
                <div className="w-8 h-px bg-gold mb-4 transition-all duration-300 group-hover:w-14" />
                <h3
                  id={cat.titleId}
                  className="font-cormorant text-3xl font-light text-ivory uppercase tracking-widest2"
                >
                  {cat.label}
                </h3>
                <p
                  id={cat.descId}
                  className="font-inter text-xs text-ivory/70 mt-2 uppercase tracking-widest2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.sub}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
