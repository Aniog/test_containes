import React from 'react';
import { useCart } from '../../context/CartContext';
import { Star, ShoppingBag } from 'lucide-react';

export default function Bestsellers({ products }) {
  const { addToCart } = useCart();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            {/* Product Image */}
            <div className="relative overflow-hidden bg-velmora-cream aspect-square">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Quick Add Button */}
              <button
                onClick={() => addToCart(product)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-white"
              >
                <ShoppingBag size={16} className="inline mr-2" />
                Add to Cart
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-4 text-center">
              <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
                {product.name}
              </h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star size={14} className="fill-velmora-gold text-velmora-gold" />
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
              <p className="font-serif text-lg">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
