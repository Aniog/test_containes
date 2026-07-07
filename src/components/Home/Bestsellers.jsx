import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import products from '../../data/products';

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="group relative bg-velmora-cream overflow-hidden"
          >
            {/* Product Image */}
            <Link to={`/product/${product.id}`} className="block aspect-square overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Hover overlay with quick add */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                <button
                  className="px-6 py-2 bg-white text-velmora-charcoal text-sm font-medium tracking-wider uppercase hover:bg-velmora-gold hover:text-white transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart logic here
                  }}
                >
                  <ShoppingBag size={16} className="inline-block mr-2" />
                  Quick Add
                </button>
              </div>
            </Link>

            {/* Product Info */}
            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-2 hover:text-velmora-gold transition-colors">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-mist'}
                    />
                  ))}
                </div>
                <span className="text-xs text-velmora-mist">({product.reviews})</span>
              </div>
              <p className="font-medium text-velmora-charcoal">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block px-8 py-3 border-2 border-velmora-gold text-velmora-gold font-medium tracking-wider uppercase text-sm hover:bg-velmora-gold hover:text-white transition-all duration-300"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
