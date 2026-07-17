import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

const Bestsellers = () => {
  const { addToCart } = useCart();
  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <section className="py-20 lg:py-32 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl lg:text-5xl text-velmora-charcoal mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellerProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-velmora-cream">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover group-hover:opacity-0 transition-opacity duration-500"
                  />
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full aspect-[3/4] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </Link>

                {/* Quick Add Button */}
                <button
                  onClick={() => addToCart(product, 1, 'Gold')}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-velmora-ivory text-velmora-charcoal px-6 py-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-white"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-4 space-y-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-sm uppercase tracking-wider text-velmora-charcoal hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-velmora-mist">
                  ${product.price}
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-velmora-mist'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-velmora-mist ml-1">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block text-sm uppercase tracking-wider text-velmora-gold border-b border-velmora-gold pb-1 hover:text-velmora-gold-dark hover:border-velmora-gold-dark transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
