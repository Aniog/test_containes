import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    query: 'gold earrings collection elegant jewelry',
    path: '/shop?category=earrings',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    query: 'gold necklaces collection elegant chain pendant',
    path: '/shop?category=necklaces',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    query: 'gold huggie earrings collection hoop',
    path: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-cream">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold-accent mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-base">
            Shop by Category
          </h2>
        </div>

        {/* Tiles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden"
            >
              <img
                data-strk-img-id={cat.id}
                data-strk-img={cat.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-deep-base/30 group-hover:bg-deep-base/50 transition-all duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2">
                    {cat.name}
                  </h3>
                  <span className="font-sans text-xs uppercase tracking-wider text-cream/70 group-hover:text-gold-accent transition-colors duration-300">
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
