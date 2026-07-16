import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categoryTiles } from '@/data/products';

export default function ShopCategories() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-xs font-medium tracking-widest uppercase text-velmora-stone mb-3">Shop by Category</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">Find Your Piece</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {categoryTiles.map((cat, i) => (
          <Link
            key={cat.slug}
            to={`/shop?category=${cat.name}`}
            className={`group relative aspect-[4/5] bg-velmora-sand overflow-hidden ${
              i === 2 ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            <img
              data-strk-img-id={cat.imgId}
              data-strk-img={`[cat-label-${cat.slug}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-label-${cat.slug}`}
                className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {cat.name}
              </span>
            </div>
            <p className="absolute bottom-4 left-4 font-serif text-xl text-white tracking-wide md:group-hover:opacity-0 transition-opacity duration-300">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}