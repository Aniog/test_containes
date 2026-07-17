import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    path: '/shop?category=earrings',
    imgId: 'cat-earrings-img',
    descId: 'cat-earrings-desc',
    description: 'Studs, drops & ear cuffs',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    path: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img',
    descId: 'cat-necklaces-desc',
    description: 'Chains, pendants & layering',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    path: '/shop?category=huggies',
    imgId: 'cat-huggies-img',
    descId: 'cat-huggies-desc',
    description: 'Chunky, dome & mini huggies',
  },
];

export default function Categories() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subtitle mb-3">Browse by type</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              {/* Background image */}
              <div
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] ${cat.name} gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="absolute inset-0 bg-ink-700 transition-transform duration-700 group-hover:scale-105"
              >
                <div className="absolute inset-0 bg-ink-900/30 group-hover:bg-ink-900/20 transition-colors duration-500" />
              </div>

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8">
                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory-50 tracking-wide mb-1">
                    {cat.name}
                  </h3>
                  <p
                    id={cat.descId}
                    className="font-sans text-xs tracking-wider uppercase text-ivory-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold-400/20 transition-colors duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
