import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart, openCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
    openCart();
  };

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-ultra-wide text-taupe mb-3 block">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Bestsellers
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-product bg-cream overflow-hidden mb-4">
                {/* Primary Image */}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* Secondary Image (hover) */}
                {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Quick Actions */}
                <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-espresso/80 to-transparent transition-opacity duration-300 ${
                  hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-ivory text-espresso py-3 text-xs uppercase tracking-wider hover:bg-gold-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Bag
                  </button>
                </div>

                {/* View Icon */}
                <div className={`absolute top-3 right-3 w-9 h-9 bg-ivory/90 rounded-full flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Eye className="w-4 h-4 text-espresso" />
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="product-title text-espresso text-xs mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-serif text-lg text-espresso">
                    ${product.price}
                  </span>
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                    <span className="text-xs text-taupe">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-taupe capitalize">
                  {product.category}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/collection"
            className="inline-flex items-center text-xs uppercase tracking-ultra-wide text-espresso hover:text-gold-600 transition-colors group"
          >
            View All Jewelry
            <span className="ml-2 w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
