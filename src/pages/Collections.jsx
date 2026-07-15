import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const collections = [
  {
    id: 'col-earrings',
    name: 'Earrings',
    description: 'From subtle studs to statement drops — find your perfect pair.',
    href: '/shop?category=earrings',
    imgId: 'col-earrings-img',
    titleId: 'col-earrings-title',
    query: 'gold earrings collection elegant warm display',
  },
  {
    id: 'col-necklaces',
    name: 'Necklaces',
    description: 'Layer-worthy chains and pendants in warm 18K gold.',
    href: '/shop?category=necklaces',
    imgId: 'col-necklaces-img',
    titleId: 'col-necklaces-title',
    query: 'gold necklaces collection elegant warm display',
  },
  {
    id: 'col-huggies',
    name: 'Huggies',
    description: 'Sculptural huggie earrings that hug your earlobe in style.',
    href: '/shop?category=huggies',
    imgId: 'col-huggies-img',
    titleId: 'col-huggies-title',
    query: 'gold huggie earrings collection elegant warm display',
  },
  {
    id: 'col-sets',
    name: 'Gift Sets',
    description: 'Beautifully boxed earring and necklace sets for gifting.',
    href: '/shop?tag=gift-set',
    imgId: 'col-sets-img',
    titleId: 'col-sets-title',
    query: 'gold jewelry gift set box elegant warm',
  },
];

export default function Collections() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-warm-white border-b border-stone">
        <div className="container-main py-8 md:py-12 text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">
            Discover
          </p>
          <h1 className="section-title text-3xl md:text-5xl">Collections</h1>
        </div>
      </div>

      <section className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((col, i) => (
            <Link
              key={col.id}
              to={col.href}
              className={`group relative overflow-hidden rounded-sm ${
                i === 0 ? 'md:col-span-2 aspect-[16/7]' : 'aspect-[4/3]'
              }`}
            >
              <img
                data-strk-img-id={col.imgId}
                data-strk-img={`[${col.titleId}] ${col.query}`}
                data-strk-img-ratio={i === 0 ? '16x9' : '4x3'}
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-8 md:p-12">
                <div>
                  <h2 id={col.titleId} className="font-serif text-3xl md:text-4xl text-white font-light mb-2">
                    {col.name}
                  </h2>
                  <p className="text-white/80 text-sm mb-4 max-w-sm">{col.description}</p>
                  <span className="inline-block text-white text-xs tracking-widest uppercase border-b border-white/60 pb-0.5 group-hover:border-white transition-colors">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
