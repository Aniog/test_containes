import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus, Star } from 'lucide-react';

export default function Bestsellers({ products }) {
  const { addToCart } = useCart();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-4">BestSellers</h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card group cursor-pointer">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden bg-warm aspect-square mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover overlay with second image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quick add button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-cream text-charcoal px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-cream"
                >
                  <Plus size={16} className="inline-block mr-2" />
                  Add to Cart
                </button>
              </div>

              <div className="text-center">
                <h3 className="font-sans text-sm tracking-widest uppercase mb-2">{product.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <div className="flex items-center">
                    <Star size={14} className="text-gold fill-gold" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                </div>
                <p className="font-serif text-lg">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
