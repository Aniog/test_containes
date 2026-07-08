import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Bestsellers = () => {
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-2">Most Loved</p>
            <h2 className="section-title">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex text-sm font-medium text-brand-ink hover:text-brand-accent transition-colors">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative rounded-2xl bg-brand-surface border border-brand-line overflow-hidden">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
                  <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-sm uppercase tracking-widest text-brand-ink leading-snug">{product.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-brand-ink">${product.price}</p>
                </div>
              </Link>
              <button
                onClick={() => addItem(product, product.variants[0])}
                className="absolute bottom-4 right-4 rounded-full bg-brand-ink p-2 text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-brand-accent"
                aria-label="Add to cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm font-medium text-brand-ink hover:text-brand-accent transition-colors">View all</Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
