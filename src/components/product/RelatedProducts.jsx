import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

export default function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal-900 mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-[3/4] bg-taupe-100 overflow-hidden mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="product-name text-charcoal-800 group-hover:text-gold transition-colors">
                {product.name}
              </h3>
              <p className="font-sans text-sm font-semibold text-charcoal-800 mt-1">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}