import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categoryImages = {
    earrings: { imgId: 'cat-earrings-w3x4y5', desc: 'Gold earrings elegant jewelry' },
    necklaces: { imgId: 'cat-necklaces-z6a7b8', desc: 'Gold necklace pendant jewelry' },
    huggies: { imgId: 'cat-huggies-c9d1e2', desc: 'Gold huggie hoop earrings jewelry' },
  };

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="categories-title" className="font-serif text-3xl md:text-4xl font-normal text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[4/3] overflow-hidden no-underline"
            >
              <img
                data-strk-img-id={categoryImages[cat.slug].imgId}
                data-strk-img={`[cat-label-${cat.id}] [categories-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-label-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-cream font-normal tracking-wide"
                >
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
