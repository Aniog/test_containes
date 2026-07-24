import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Bestsellers({ products = [] }) {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide mb-4">
          BestSellers
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Link to={`/product/${product.slug}`} className="block">
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Image */}
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Quick Add Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product, 1, product.variants[0]);
                  }}
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-black px-6 py-3 text-sm tracking-[0.2em] 
                    transition-all duration-300 ${
                      hoveredProduct === product.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    } hover:bg-velmora-gold hover:text-white`}
                >
                  ADD TO CART
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-sm tracking-[0.15em] font-medium">
                  {product.name}
                </h3>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-velmora-gold fill-velmora-gold'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                <p className="text-lg font-light">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
