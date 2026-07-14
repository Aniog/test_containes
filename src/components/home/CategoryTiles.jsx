import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const categoryDescriptions = {
  earrings: 'Gold drop earrings and statement studs',
  necklaces: 'Delicate gold chain necklaces and pendants',
  huggies: 'Gold huggie hoop earrings jewelry',
};

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categoryImages = {
    earrings: 'cat-earrings-img-h3j6k9',
    necklaces: 'cat-necklaces-img-l2m5n8',
    huggies: 'cat-huggies-img-o1p4q7',
  };

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="category-section-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm no-underline"
            >
              <span id={`cat-${cat.id}-desc`} className="sr-only">
                {categoryDescriptions[cat.id]}
              </span>
              <img
                alt={cat.name}
                data-strk-img-id={categoryImages[cat.id]}
                data-strk-img={`[cat-${cat.id}-desc] [${cat.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-cream font-light"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
