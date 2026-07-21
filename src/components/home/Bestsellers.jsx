import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-brand-muted">Most loved</p>
          <h2 className="section-title mt-2">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden text-sm font-medium text-brand-ink underline underline-offset-4 md:inline-block">
          View all
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-brand-warm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={product.images[1]}
                  alt={`${product.name} alternate`}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, 'gold');
                    }}
                    className="btn-primary w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <p className="product-name">{product.name}</p>
                <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop" className="text-sm font-medium text-brand-ink underline underline-offset-4">
          View all
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
