import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    imgId: 'cat-earrings-img-a1b2c3',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'Gold drop earrings filigree stud editorial jewelry',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-d4e5f6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Delicate gold necklace pendant collarbone woman',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-huggies-img-g7h8i9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Gold huggie hoop earrings close up ear jewelry',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-ivory-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-900">Shop by Category</h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden aspect-[4/3] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Hidden text */}
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-velvet-900/30 group-hover:bg-velvet-900/50 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-ivory-100 tracking-widest uppercase mb-3">
                  {cat.label}
                </h3>
                <span className="font-sans text-[10px] tracking-widest2 uppercase text-ivory-200 border-b border-ivory-200/60 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
