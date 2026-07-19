import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-ink">Bestsellers</h2>
          <p className="mt-2 text-sm text-brand-muted">The pieces our community wears most.</p>
        </div>
        <Link to="/shop" className="hidden md:inline-flex text-xs font-semibold uppercase tracking-widest text-brand-accent hover:text-brand-warm transition-colors">
          View all
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map(product => {
          const isHovered = hoveredId === product.id;
          return (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-brand-bg">
                  <img
                    src={isHovered ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-opacity duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product, product.variants[0]);
                      }}
                      className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-brand-ink backdrop-blur hover:bg-white transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="font-serif text-base font-semibold text-brand-ink uppercase tracking-wide">{product.name}</h3>
                  <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <Link to="/shop" className="mt-8 md:hidden inline-flex text-xs font-semibold uppercase tracking-widest text-brand-accent">
        View all
      </Link>
    </section>
  );
};

export default Bestsellers;
