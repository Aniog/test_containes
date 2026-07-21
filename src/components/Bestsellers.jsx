import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Curated for You</p>
          <h2 className="section-title mt-2">Bestsellers</h2>
          <div className="w-12 h-0.5 bg-brand-500/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-pearl-100 rounded-sm">
                  <img
                    src={
                      hoveredId === product.id && product.images[1]
                        ? product.images[1]
                        : product.images[0]
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-midnight-950/0 group-hover:bg-midnight-950/10 transition-all duration-500" />
                </div>
              </Link>

              {/* Quick Add to Cart */}
              <button
                onClick={() => addItem(product, 'gold', 1)}
                className="absolute bottom-3 right-3 w-9 h-9 bg-cream-50/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-cream-50 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                aria-label="Quick add to cart"
              >
                <ShoppingBag className="w-4 h-4 text-midnight-900" />
              </button>

              <div className="mt-3 text-center">
                <h3 className="product-name text-xs md:text-sm">{product.name}</h3>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-brand-500 text-brand-500" />
                  <span className="text-[10px] text-pearl-600">{product.rating}</span>
                </div>
                <p className="text-sm font-medium text-midnight-900 mt-1">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop" className="btn-outline inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}