import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Bestsellers({ products }) {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light tracking-[0.1em] text-gray-900 font-['Cormorant_Garamond']">
          Bestsellers
        </h2>
        <div className="mt-4 w-16 h-px bg-amber-700 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link to={`/product/${product.id}`}>
              <div className="relative overflow-hidden bg-gray-100 aspect-square">
                <img
                  src={hoveredId === product.id && product.images[1]
                    ? product.images[1]
                    : product.images[0]
                  }
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick Add Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-900 hover:text-white"
                >
                  <ShoppingBag className="w-4 h-4 inline-block mr-2" />
                  ADD TO CART
                </button>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
                  <Heart className="w-4 h-4 text-gray-700" />
                </button>
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="text-sm tracking-[0.15em] text-gray-900 font-['Cormorant_Garamond']">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">${product.price}</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-700'
                          : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
