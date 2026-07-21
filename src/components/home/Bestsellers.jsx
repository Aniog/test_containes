import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, toggleDrawer } = useCart();
  const bestsellers = products.slice(0, 5);

  const handleAdd = (product, variant = 'Gold') => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant,
      image: product.images[0],
    });
    toggleDrawer();
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
            <p className="mt-2 text-sm text-muted">Our most-loved pieces, chosen again and again.</p>
          </div>
          <Link to="/shop" className="hidden md:inline-flex text-sm font-medium text-ink underline underline-offset-4 decoration-border hover:decoration-accent">
            View all
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => {
            const isHovered = hoveredId === product.id;
            return (
              <div
                key={product.id}
                className="group relative rounded-2xl bg-surface border border-border overflow-hidden"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-background">
                    <img
                      src={isHovered ? product.images[1] : product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAdd(product, product.variants[0]);
                        }}
                        className="w-full rounded-full bg-ink py-2 text-xs font-semibold text-surface hover:bg-accent"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="p-3 md:p-4">
                    <p className="product-name text-xs md:text-sm">{product.name}</p>
                    <p className="mt-1 text-sm font-medium">${product.price}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <Link to="/shop" className="md:hidden mt-8 block text-center text-sm font-medium text-ink underline underline-offset-4 decoration-border">
          View all
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
