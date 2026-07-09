import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { resolveStrkImgUrl } from '@/lib/utils';

function CategoryImage({ cat }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const url = resolveStrkImgUrl(cat.imgId);
    if (url) setSrc(url);
  }, [cat.imgId]);

  if (!src) {
    return <div className="absolute inset-0 bg-warm-600 animate-pulse" />;
  }

  return (
    <img
      src={src}
      alt={cat.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}

export default function Categories() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase text-warm-800">
            Shop by Category
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden"
            >
              <CategoryImage cat={cat} />
              {/* Overlay */}
              <div className="absolute inset-0 bg-warm-800/30 group-hover:bg-warm-800/50 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-white">
                  {cat.name}
                </span>
                <span className="font-sans text-xs text-white/60 mt-2 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
