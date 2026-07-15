import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products.js';
import { useCart } from '@/context/CartContext.jsx';
import { Plus } from 'lucide-react';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, setCartOpen } = useCart();
  const bestsellers = products.filter(p => p.bestseller);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setCartOpen(true);
  };

  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">Bestsellers</h2>
          <p className="mt-4 text-brand-muted max-w-xl mx-auto">Our most-loved pieces, chosen by you. Each design is crafted with care and finished in radiant gold.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-brand-warm">
                <img
                  src={hoveredId === product.id ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="absolute bottom-4 left-4 right-4 btn-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="product-name">{product.name}</h3>
                <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
