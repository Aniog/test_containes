import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Bestsellers = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();

  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 5);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'Gold');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Best sellers</h2>
        <div className="hairline w-24 mx-auto mb-4" />
        <p className="text-velmora-gray-500 max-w-2xl mx-auto">
          Our most loved pieces, chosen by the Velmora community.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellerProducts.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Link to={`/product/${product.id}`} className="block">
              {/* Image Container */}
              <div className="relative overflow-hidden bg-velmora-gray-100 mb-4 aspect-square">
                {/* Primary Image */}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />

                {/* Hover Image */}
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 btn-premium btn-premium-gold text-sm py-3 px-6 transition-all duration-300 ${
                    hoveredProduct === product.id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 inline-block mr-2" />
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="product-name text-sm mb-2">{product.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                  <span className="text-sm text-velmora-gray-500">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <p className="font-serif text-lg">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="btn-premium btn-premium-outline inline-block"
        >
          View All Collections
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
