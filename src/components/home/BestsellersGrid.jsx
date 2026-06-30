import React from 'react';
import { Link } from 'react-router-dom';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function BestsellersGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="text-center mb-14">
          <p className="text-stone text-xs tracking-widest uppercase mb-3">The Edit</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-medium">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/shop" className="btn-outline">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
