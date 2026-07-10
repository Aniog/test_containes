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
    desc: 'Gold drop earrings, studs, ear cuffs',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-d4e5f6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Delicate gold chain necklaces with pendants',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-huggies-img-g7h8i9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Huggie hoop earrings in gold',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: '3/4' }}
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-velmora-obsidian/10 to-transparent transition-opacity duration-300 group-hover:from-velmora-obsidian/80" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p
                  id={cat.descId}
                  className="sr-only"
                >
                  {cat.desc}
                </p>
                <h3
                  id={cat.titleId}
                  className="font-cormorant text-2xl md:text-3xl font-light text-velmora-text-light uppercase tracking-widest-sm mb-2"
                >
                  {cat.label}
                </h3>
                <span className="font-manrope text-xs tracking-widest-md uppercase text-velmora-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                  Shop Now
                  <span className="inline-block w-6 h-px bg-velmora-gold" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
