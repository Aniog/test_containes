import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title">Bestsellers</h2>
            <p className="mt-2 text-sm text-brand-muted">Our most-loved pieces, chosen by you.</p>
          </div>
          <Link to="/shop" className="hidden md:inline-flex text-xs font-semibold uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-warm">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {hoveredId === product.id && product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product, product.variants[0]);
                      }}
                      className="w-full rounded-full bg-white/90 backdrop-blur-sm py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink hover:bg-white transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
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
          <Link to="/shop" className="btn-outline">View All</Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
