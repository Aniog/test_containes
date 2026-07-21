import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    imgId: 'cat-earrings-img-a1b2c3',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    imgId: 'cat-necklaces-img-d4e5f6',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    imgId: 'cat-huggies-img-g7h8i9',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-velmora-parchment" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold mb-2">
            Explore
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden block"
            >
              {/* Hidden context text */}
              <span id={cat.titleId} className="sr-only">{cat.label} fine gold jewelry</span>
              <span id={cat.descId} className="sr-only">
                {cat.label === 'Earrings' && 'gold earrings drop stud hoop jewelry close-up'}
                {cat.label === 'Necklaces' && 'gold necklace pendant chain jewelry worn on neck'}
                {cat.label === 'Huggies' && 'gold huggie hoop earrings close-up ear jewelry'}
              </span>

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-velmora-obsidian/20 group-hover:bg-velmora-obsidian/40 transition-colors duration-300" />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-cormorant text-2xl md:text-3xl font-light text-velmora-cream tracking-widest uppercase text-center">
                      {cat.label}
                    </h3>
                    <div className="flex justify-center mt-2">
                      <span className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        Shop Now →
                      </span>
                    </div>
                  </div>
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
