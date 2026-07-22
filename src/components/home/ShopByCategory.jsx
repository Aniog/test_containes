import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryImages = {
  earrings: { imgId: 'cat-earrings-a1b2c3', titleId: 'cat-earrings-title' },
  necklaces: { imgId: 'cat-necklaces-d4e5f6', titleId: 'cat-necklaces-title' },
  huggies: { imgId: 'cat-huggies-g7h8i9', titleId: 'cat-huggies-title' },
};

const ShopByCategory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-off-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-velmora-charcoal text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => {
            const imgData = categoryImages[cat.id];
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className="group relative aspect-[4/3] bg-velmora-cream overflow-hidden"
              >
                <img
                  data-strk-img-id={imgData.imgId}
                  data-strk-img={`[${imgData.titleId}] velmora fine jewelry`
                  }
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Label overlay */}
                <div className="absolute inset-0 bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                  <h3 id={imgData.titleId} className="product-name text-xl md:text-2xl font-medium text-velmora-white">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
