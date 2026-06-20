import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-brand-gold">Most Loved</p>
          <h2 className="section-heading mt-2">Bestsellers</h2>
        </div>
        <Link to="/shop" className="btn-outline hidden md:inline-flex">
          View All
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-gradient-to-t from-brand-black/60 to-transparent p-4 transition-transform duration-500 ease-velmora group-hover:translate-y-0">
                  <span className="btn-primary w-full text-center text-xs">Quick Add</span>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="product-name text-sm">{product.name}</h3>
                <p className="text-sm text-brand-muted">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Link to="/shop" className="btn-outline w-full">View All</Link>
      </div>
    </section>
  );
};

export default Bestsellers;
