import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryData = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    imgId: 'cat-earrings-s9t0u1',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'Gold drop earrings and ear cuffs',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    imgId: 'cat-necklaces-v2w3x4',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Layered gold chain necklaces and pendants',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
    imgId: 'cat-huggies-y5z6a7',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Gold huggie hoop earrings',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-linen/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="categories-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryData.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] [categories-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-cream uppercase tracking-product"
                >
                  {cat.name}
                </h3>
              </div>
              <p id={cat.descId} className="sr-only">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
