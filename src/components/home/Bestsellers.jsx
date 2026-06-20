import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="section-title">Bestsellers</h2>
          <p className="section-subtitle">Our most-loved pieces, chosen by you.</p>
        </div>
        <Link to="/shop" className="btn-outline">
          View All
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
