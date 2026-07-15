import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    to: '/shop?category=earrings',
    search: 'gold earrings collection jewelry display dark background',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    to: '/shop?category=necklaces',
    search: 'gold necklace collection jewelry flatlay warm light',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    to: '/shop?category=huggies',
    search: 'gold huggie earrings collection close up jewelry',
  },
];

export default function Categories() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-section-sm md:py-section bg-ivory" ref={containerRef}>
      <div className="section-container">
        <p className="font-sans text-xs uppercase tracking-widest-2xl text-gold text-center mb-2">
          Explore
        </p>
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-subtitle">
          Find the perfect piece for every occasion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative block aspect-[4/5] rounded-sm overflow-hidden"
            >
              <img
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={cat.search}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
                    {cat.name}
                  </h3>
                  <span className="font-sans text-xs uppercase tracking-widest-xl text-ivory/80 border-b border-ivory/40 pb-0.5 group-hover:border-gold group-hover:text-gold transition-colors">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
