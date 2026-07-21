import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';

export default function Bestsellers({ products }) {
  const { addToCart } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <section className="py-20 bg-white">
      <div className="container-luxury">
        <h2 className="font-serif text-4xl text-center mb-4">Bestsellers</h2>
        <p className="text-center text-gray-600 mb-12 tracking-wide">
          Our most loved pieces
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden bg-[#FAF7F2] aspect-square">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Quick Add Button */}
                  {hoveredId === product.id && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#2C2C2C] px-6 py-2 text-sm uppercase tracking-wider font-medium hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
                    >
                      <ShoppingBag size={16} className="inline mr-2" />
                      Add to Cart
                    </button>
                  )}
                </div>
              </Link>

              <div className="mt-4 text-center">
                <h3 className="font-serif uppercase tracking-[0.2em] text-sm">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Star size={14} className="text-[#C9A96E] fill-[#C9A96E]" />
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <p className="font-serif text-lg mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
