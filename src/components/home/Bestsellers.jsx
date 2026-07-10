import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-serif text-3xl text-brand-ink">Bestsellers</h2>
          <p className="mt-2 text-sm text-brand-muted">The pieces our community wears most.</p>
        </div>
        <Link to="/shop" className="text-xs font-semibold tracking-widest uppercase text-brand-accent hover:text-brand-accentHover transition-colors">
          View all
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-xl border border-brand-line bg-brand-surface overflow-hidden"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
                <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {hoveredId === product.id && product.images[1] && (
                  <img src={product.images[1]} alt={product.name} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-widest uppercase text-brand-ink backdrop-blur">
                    <ShoppingBag className="h-3.5 w-3.5" />
                    Quick add
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[11px] font-medium tracking-widest uppercase text-brand-subtle">{product.category}</p>
                <h3 className="mt-1 font-serif text-base text-brand-ink">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-ink">${product.price}</p>
              </div>
            </Link>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addItem(product, 'Gold');
              }}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-brand-ink opacity-0 transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
              aria-label="Add to cart"
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
