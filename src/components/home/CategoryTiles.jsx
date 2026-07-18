import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to="/shop"
            className="group relative aspect-[4/5] bg-warm-100 rounded-sm overflow-hidden"
          >
            <img
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
            <h3 className="absolute inset-0 flex items-center justify-center font-serif text-2xl md:text-3xl tracking-wider text-white">
              {cat.name}
            </h3>
            <span id={cat.titleId} className="hidden">{cat.name}</span>
            <span id={cat.descId} className="hidden">Gold {cat.name.toLowerCase()} jewelry</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
