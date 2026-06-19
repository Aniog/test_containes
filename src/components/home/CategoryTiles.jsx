import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="serif-heading text-3xl md:text-4xl mb-4">Shop by Category</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] bg-velvet-100 rounded-sm overflow-hidden"
          >
            {/* Image */}
            <div
              data-strk-img-id={`cat-${cat.id}`}
              data-strk-img={`[cat-label-${cat.id}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-velvet-950/30 group-hover:bg-velvet-950/40 transition-colors duration-300" />
            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-label-${cat.id}`}
                className="font-serif text-2xl md:text-3xl tracking-wide text-white"
              >
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
