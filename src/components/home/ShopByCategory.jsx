import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'earrings', name: 'Earrings', desc: 'From delicate studs to statement drops' },
  { id: 'necklaces', name: 'Necklaces', desc: 'Chains, pendants, and layered looks' },
  { id: 'huggies', name: 'Huggies', desc: 'Everyday hoops with a refined finish' },
];

export default function ShopByCategory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="section-heading">Shop by Category</h2>
        <p className="section-sub">Find your perfect piece.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden block"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[cat-name-${cat.id}] [cat-desc-${cat.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 id={`cat-name-${cat.id}`} className="font-serif text-2xl md:text-3xl uppercase tracking-widest mb-2">
                  {cat.name}
                </h3>
                <p id={`cat-desc-${cat.id}`} className="text-sm text-white/80 text-center font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
