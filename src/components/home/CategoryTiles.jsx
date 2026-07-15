import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const categoryImages = {
  earrings: { id: 'cat-earrings-a1b2', desc: 'gold earrings on model' },
  necklaces: { id: 'cat-necklaces-c3d4', desc: 'layered gold necklaces' },
  huggies: { id: 'cat-huggies-e5f6', desc: 'gold huggie earrings close up' },
};

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-16 lg:py-24">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 id="shop-categories-title" className="serif-heading text-3xl sm:text-4xl lg:text-5xl mb-3">Shop by Category</h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.slice(0, 3).map((category) => {
            const imgData = categoryImages[category.id];
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              >
                <div
                  data-strk-bg-id={imgData.id}
                  data-strk-bg={`[${category.id}-category-label] [shop-categories-title]`}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="800"
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 id={`${category.id}-category-label`} className="product-name text-xl sm:text-2xl lg:text-3xl mb-2">
                    {category.name}
                  </h3>
                  <span className="text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Explore →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
