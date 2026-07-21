import React from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const ProductGrid = () => {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Our Bestsellers
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
