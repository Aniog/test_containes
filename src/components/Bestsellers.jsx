import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Bestsellers = () => {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Bestsellers</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
        {bestsellerProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <Link to={`/product/${product.id}`}>
              <div className="relative overflow-hidden mb-4 bg-velmora-cream aspect-square">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay with quick add */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-velmora-charcoal px-6 py-3 text-sm tracking-wider uppercase flex items-center space-x-2">
                    <ShoppingBag size={16} />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm tracking-widest uppercase font-medium">
                  {product.name}
                </h3>
                <p className="text-sm text-velmora-gray-500">{product.description}</p>
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
                  <span className="text-sm text-velmora-gray-500">({product.reviews})</span>
                </div>
                <p className="text-lg font-medium">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block border border-velmora-charcoal text-velmora-charcoal px-10 py-4 text-sm tracking-widest uppercase hover:bg-velmora-charcoal hover:text-white transition-all duration-300"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
