import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  return (
    <section className="section-padding py-20 md:py-28 max-w-[1440px] mx-auto">
      <div className="text-center mb-12">
        <p className="section-subtitle mb-3">Curated for You</p>
        <h2 className="section-title">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/collection" className="btn-gold-outline text-xs">
          View All Jewelry
        </Link>
      </div>
    </section>
  );
}
