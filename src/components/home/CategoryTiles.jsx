import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryTiles = [
  { name: 'Earrings', slug: 'earrings', id: 'cat-earrings', imgQuery: 'gold earrings jewelry' },
  { name: 'Necklaces', slug: 'necklaces', id: 'cat-necklaces', imgQuery: 'gold necklace jewelry' },
  { name: 'Huggies', slug: 'huggies', id: 'cat-huggies', imgQuery: 'gold huggie hoop earrings jewelry' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-linen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(cat => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group no-underline"
            >
              <span id={`${cat.id}-desc`} className="sr-only">{cat.imgQuery}</span>
              <div
                className="absolute inset-0 bg-espresso group-hover:scale-105 transition-transform duration-500"
                data-strk-bg-id={`category-${cat.id}-bg-8d2f`}
                data-strk-bg={`[${cat.id}-desc]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <h3
                  id={`${cat.id}-label`}
                  className="font-serif text-2xl md:text-3xl text-cream font-medium"
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
