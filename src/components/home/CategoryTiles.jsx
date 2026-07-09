import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const categoryImages = [
  { slug: 'earrings', query: 'gold drop earrings elegant dark background' },
  { slug: 'necklaces', query: 'gold chain necklace pendant dark background' },
  { slug: 'huggies', query: 'gold huggie hoop earrings dark background' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <h2 id="categories-title" className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                alt={cat.name}
                data-strk-img-id={`category-${cat.slug}-img-e5f6`}
                data-strk-img={`[category-${cat.slug}-label] [categories-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${cat.slug}-label`}
                  className="font-serif text-2xl md:text-3xl text-cream tracking-wide opacity-90 group-hover:opacity-100 transition-opacity"
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
