import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';

const RelatedProducts = ({ currentProductId }) => {
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    }
  }, [currentProductId]);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 border-t border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-xl md:text-2xl font-medium text-velmora-espresso text-center mb-8 md:mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-[3/4] bg-velmora-muted overflow-hidden mb-3">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`related-${product.id}`}
                  data-strk-img={`[related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                />
              </div>
              <h3
                id={`related-title-${product.id}`}
                className="font-serif text-sm tracking-[0.15em] uppercase font-medium group-hover:text-velmora-gold transition-colors"
              >
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                <span className="text-[11px] text-velmora-warmgray">
                  {product.rating}
                </span>
              </div>
              <p className="font-sans text-sm font-medium mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
