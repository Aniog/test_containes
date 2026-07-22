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
    desc: 'gold drop earrings filigree crystal',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-d4e5f6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'gold necklace floral crystal pendant',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    to: '/shop?category=huggies',
    imgId: 'cat-huggies-img-g7h8i9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'gold huggie hoop earrings dome',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-ivory" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
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
              {/* Hidden text for image query */}
              <span id={cat.titleId} className="hidden">{cat.label}</span>
              <span id={cat.descId} className="hidden">{cat.desc}</span>

              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent transition-opacity duration-300 group-hover:from-charcoal/70" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-cormorant text-2xl md:text-3xl font-light text-ivory tracking-wide">
                  {cat.label}
                </h3>
                <div className="flex items-center gap-2 mt-2 overflow-hidden">
                  <span className="font-inter text-xs uppercase tracking-[0.12em] text-ivory/70 transition-all duration-300 group-hover:text-gold-light">
                    Shop Now
                  </span>
                  <div className="w-0 group-hover:w-6 h-px bg-gold-light transition-all duration-300" />
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
