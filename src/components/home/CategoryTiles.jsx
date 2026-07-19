import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function CategoryCard({ category }) {
  const titleId = `cat-title-${category.id}`;
  const imgId = `cat-img-${category.id}`;

  return (
    <Link to={`/shop?category=${category.id}`} className="group relative block aspect-[4/5] overflow-hidden rounded-sm">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        data-strk-bg-id={imgId}
        data-strk-bg={`[${titleId}] jewelry`}
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="600"
        style={{ backgroundColor: '#2A2420' }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3
          id={titleId}
          className="font-serif text-white text-2xl md:text-3xl uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
        >
          {category.name}
        </h3>
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-base">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-muted mb-3">Explore</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
