import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();
  const bestsellerProducts = products.slice(0, 5);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-champagne-500 text-champagne-500' : 'text-charcoal-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 lg:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-champagne-600 mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900">
            Our Bestsellers
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-champagne-50 rounded overflow-hidden mb-4">
                {/* Primary Image */}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* Secondary Image */}
                <img
                  src={product.images[1]}
                  alt={`${product.name} alternate view`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-charcoal-900 text-ivory-100 px-2 py-1 text-xs font-sans uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}
                {/* Quick Add Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className={`absolute bottom-0 left-0 right-0 bg-charcoal-900/90 backdrop-blur-sm text-ivory-100 py-3 font-sans text-xs uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-300 hover:bg-charcoal-800 ${
                    hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Quick Add
                </button>
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {renderStars(product.rating)}
                  <span className="text-xs text-charcoal-500 ml-1">({product.reviews})</span>
                </div>
                <h3 className="product-name text-sm mb-1">
                  {product.name}
                </h3>
                <p className="product-price">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/collection"
            className="btn-outline inline-block"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
