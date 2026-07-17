import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';

const Bestsellers = () => {
  const { addToCart } = useCart();
  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
        <div className="elegant-divider w-24 mx-auto my-6" />
        <p className="text-velmora-charcoal-light max-w-2xl mx-auto">
          Our most loved pieces, cherished by customers worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellerProducts.map((product) => (
          <div key={product.id} className="group relative product-card">
            <Link to={`/product/${product.id}`}>
              <div className="relative overflow-hidden bg-velmora-warm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                {/* Hover image */}
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="w-full aspect-square object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Quick add button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-2 text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-charcoal hover:text-white"
                >
                  <ShoppingBag size={16} className="inline mr-2" />
                  ADD TO CART
                </button>
              </div>
            </Link>

            <div className="mt-4 space-y-2">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-serif text-sm tracking-widest hover:text-velmora-gold transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-velmora-charcoal-light">{product.description}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-velmora-charcoal-light">({product.reviews})</span>
              </div>
              <p className="font-serif text-lg">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;