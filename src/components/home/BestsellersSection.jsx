import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function BestsellersSection() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-wide-premium uppercase text-velmora-500 mb-3">Curated for you</p>
          <h2 className="section-title">Bestsellers</h2>
          <div className="hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-sm aspect-[3/4] bg-velmora-100">
                <img
                  src={hoveredId === product.id ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-charcoal text-white text-[10px] tracking-wide-premium uppercase px-2 py-1">
                    {product.badge}
                  </span>
                )}
                {/* Quick add overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, product.variants[0]);
                    }}
                    className="w-full bg-white/95 backdrop-blur-sm text-charcoal text-xs tracking-wide-premium uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-charcoal hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </Link>

              {/* Info */}
              <div className="mt-3 sm:mt-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name text-xs sm:text-sm">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                  <span className="text-xs text-velmora-500">{product.rating}</span>
                </div>
                <p className="text-sm font-medium mt-1">${product.price}</p>
              </div>
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
