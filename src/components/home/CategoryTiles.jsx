import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const categoryImages = {
  earrings: { imgId: 'cat-earrings-img-s1t2u3', query: 'gold earrings jewelry elegant' },
  necklaces: { imgId: 'cat-necklaces-img-v4w5x6', query: 'gold necklace jewelry elegant' },
  huggies: { imgId: 'cat-huggies-img-y7z8a9', query: 'gold huggie earrings jewelry' },
};

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="categories-section-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-charcoal"
            >
              <img
                alt={cat.name}
                data-strk-img-id={categoryImages[cat.id].imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl text-white group-hover:text-warm-gold-light transition-colors duration-300"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="sr-only">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
