import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import products from '../../data/products';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.featured).slice(0, 5);

  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl mb-4">Bestsellers</h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-secondary inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
