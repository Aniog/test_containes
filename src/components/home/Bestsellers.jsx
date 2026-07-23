import React from 'react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellerProducts = products.filter(p => p.featured).slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-serif text-4xl text-center mb-4">Bestsellers</h2>
      <p className="text-center text-velmora-warm-gray mb-12 tracking-wide">
        Our most loved pieces
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellerProducts.map(product => (
          <div key={product.id} className="group relative">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden bg-velmora-light-gray aspect-square">
                <img 
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                {/* Quick Add Button - appears on hover */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product, 1, product.variants[0]);
                  }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-black 
                           px-6 py-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300 hover:bg-velmora-black hover:text-white"
                >
                  <ShoppingBag size={16} className="inline mr-2" />
                  Add to Cart
                </button>
              </div>
            </Link>

            <div className="mt-4 text-center">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-1">{product.name}</h3>
              </Link>
              <p className="text-sm text-velmora-warm-gray">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
