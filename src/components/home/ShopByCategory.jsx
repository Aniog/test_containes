import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const categoryImages = {
  Earrings: { imgId: 'cat-earrings-d1e2f3', titleId: 'cat-earrings-title', descId: 'cat-earrings-desc' },
  Necklaces: { imgId: 'cat-necklaces-g4h5i6', titleId: 'cat-necklaces-title', descId: 'cat-necklaces-desc' },
  Huggies: { imgId: 'cat-huggies-j7k8l9', titleId: 'cat-huggies-title', descId: 'cat-huggies-desc' },
};

const categoryDescriptions = {
  Earrings: 'Statement drops and elegant studs',
  Necklaces: 'Layered chains and delicate pendants',
  Huggies: 'Chunky domes and sleek hoops',
};

export default function ShopByCategory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            Shop by Category
          </h2>
          <div className="reveal reveal-delay-1 w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => {
            const imgData = categoryImages[cat.slug];
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className={`reveal reveal-delay-${i + 1} group relative aspect-[4/5] overflow-hidden`}
              >
                <img
                  data-strk-img-id={imgData.imgId}
                  data-strk-img={`[${imgData.descId}] [${imgData.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-espresso/30 group-hover:bg-brand-espresso/50 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3
                    id={imgData.titleId}
                    className="font-serif text-2xl md:text-3xl text-brand-ivory tracking-super-wide uppercase"
                  >
                    {cat.name}
                  </h3>
                  <p
                    id={imgData.descId}
                    className="sr-only"
                  >
                    {categoryDescriptions[cat.slug]}
                  </p>
                  <div className="w-8 h-px bg-brand-gold mt-3 group-hover:w-12 transition-all duration-500" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
