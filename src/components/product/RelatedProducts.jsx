import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import products from '@/data/products';

export default function RelatedProducts({ currentProductId }) {
  const related = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="container-page py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-serif text-charcoal font-light tracking-wide text-center mb-10">
        You May Also Like
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
        {related.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group block"
          >
            <div className="aspect-[3/4] bg-sand overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`related-${product.id}`}
                data-strk-img={`[related-title-${product.id}] related products`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <h3
                id={`related-title-${product.id}`}
                className="product-name text-[11px] md:text-xs text-charcoal"
              >
                {product.name}
              </h3>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2.5 h-2.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'fill-clay text-clay'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-1.5 text-sm font-sans font-medium text-charcoal">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
