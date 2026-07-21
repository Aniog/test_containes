import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const categoryItems = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    query: 'gold earrings collection elegant display',
    path: '/shop?category=earrings',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    query: 'gold necklaces chain pendant elegant',
    path: '/shop?category=necklaces',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    query: 'gold huggie hoop earrings close-up',
    path: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding section-padding-y">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
          Explore
        </p>
        <h2 className="section-title">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categoryItems.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
          >
            {/* Image */}
            <img
              data-strk-img-id={category.id}
              data-strk-img={`${category.name} gold jewelry elegant fashion product`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-transparent" />

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-1">
                {category.name}
              </h3>
              <span className="font-sans text-xs tracking-ultra-wide uppercase text-cream-200/70 group-hover:text-gold-300 transition-colors">
                Shop Now &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
