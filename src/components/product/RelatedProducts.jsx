import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

export default function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-dark font-light">
            You May Also Like
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-[3/4] bg-brand-light overflow-hidden rounded-sm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-brand-dark truncate">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-brand-gold font-medium mt-1">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}