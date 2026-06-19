import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

export default function BestsellersGrid() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">Curated for You</p>
          <h2 className="section-title">Bestsellers</h2>
          <div className="w-16 h-px bg-[var(--color-gold)] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-[var(--color-warm-white)] overflow-hidden mb-4">
                  <img
                    src={hoveredId === product.id ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, product.variants[0]);
                    }}
                    className={`absolute bottom-4 left-4 right-4 bg-white text-[var(--color-charcoal)] py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                      hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </Link>
              <Link to={`/product/${product.id}`} className="block">
                <h3 className="product-name text-sm text-center">{product.name}</h3>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Star className="w-3 h-3 fill-[var(--color-star)] text-[var(--color-star)]" />
                  <span className="text-xs text-[var(--color-soft-gray)]">{product.rating}</span>
                </div>
                <p className="text-center text-sm font-medium mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
