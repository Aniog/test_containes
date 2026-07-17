import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, toggleCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const handleAdd = (e, product) => {
    e.preventDefault();
    addItem(product, product.tone);
    toggleCart();
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Most Loved</p>
          <h2 className="section-title mt-2">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:inline-block text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors">
          View All
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group relative overflow-hidden rounded-2xl bg-brand-warm"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={hoveredId === product.id ? product.images[1] : product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <p className="product-name text-white">{product.name}</p>
              <p className="mt-1 text-sm font-semibold text-white/90">${product.price}</p>
            </div>
            <button
              type="button"
              onClick={(e) => handleAdd(e, product)}
              className="absolute inset-x-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-brand-ink opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white"
            >
              Add to Cart
            </button>
          </Link>
        ))}
      </div>

      <Link to="/shop" className="mt-8 block text-center md:hidden text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors">
        View All
      </Link>
    </section>
  );
};

export default Bestsellers;
