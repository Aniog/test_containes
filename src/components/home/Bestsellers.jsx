import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviewCount > 100).slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">Bestsellers</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-ink-muted max-w-2xl mx-auto">
            Our most-loved pieces, chosen by women around the world for their timeless elegance and everyday wearability.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-gold/40 text-cream font-medium tracking-widest uppercase text-sm hover:bg-gold hover:text-base transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
