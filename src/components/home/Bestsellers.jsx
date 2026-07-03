import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2
              className="text-3xl md:text-4xl mb-3"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Our Bestsellers
            </h2>
            <p className="text-velmora-warm-gray">
              Loved by thousands, these pieces define the Velmora aesthetic
            </p>
          </div>
          <Link
            to="/collection"
            className="mt-4 md:mt-0 text-sm text-velmora-espresso link-underline hover:text-velmora-gold transition-colors"
          >
            View All Products
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
