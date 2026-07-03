// Bestsellers Section Component
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Star } from 'lucide-react';

const Bestsellers = ({ products }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'Gold');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Best Sellers</h2>
          <div className="divider-hairline w-24 mx-auto my-6" />
          <p className="text-velmora-text-secondary max-w-2xl mx-auto">
            Our most loved pieces, cherished by customers around the world
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                {/* Product Image */}
                <div className="relative overflow-hidden bg-velmora-cream aspect-square mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />

                  {/* Quick Add Button - Appears on Hover */}
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-2 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-white"
                  >
                    <ShoppingBag size={16} className="inline-block mr-2" />
                    Add to Cart
                  </button>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="product-name text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-velmora-text-secondary mb-2">{product.description}</p>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star size={14} className="text-velmora-gold fill-current" />
                    <span className="text-sm text-velmora-text-secondary">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <p className="font-serif text-lg">${product.price}.00</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-premium btn-premium-outline"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
