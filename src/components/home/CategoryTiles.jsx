import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { categories } from '../../data/products';

const categoryImages = {
  earrings: { query: 'gold earrings collection elegant dark background jewelry', id: 'cat-earrings' },
  necklaces: { query: 'gold necklaces collection elegant warm light jewelry', id: 'cat-necklaces' },
  huggies: { query: 'gold huggie earrings collection minimal jewelry dark', id: 'cat-huggies' },
};

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="velmora-section bg-cream">
      <div className="velmora-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="velmora-overline mb-3">Explore</p>
          <h2 className="font-serif text-heading-2 md:text-heading-1 text-velvet-900">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => {
            const imgData = categoryImages[category.id];
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden"
              >
                <img
                  data-strk-img-id={imgData.id}
                  data-strk-img={`[cat-label-${category.id}] [cat-desc-${category.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${category.name} collection`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/60 via-velvet-950/10 to-transparent group-hover:from-velvet-950/70 transition-all duration-500" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3
                    id={`cat-label-${category.id}`}
                    className="font-serif text-heading-3 text-cream mb-1"
                  >
                    {category.name}
                  </h3>
                  <p
                    id={`cat-desc-${category.id}`}
                    className="text-sm text-velvet-200"
                  >
                    {category.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-gold group-hover:gap-3 transition-all duration-300">
                    Explore
                    <span className="w-4 h-px bg-gold" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
