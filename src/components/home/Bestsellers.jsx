import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart, isLoading } = useCart();

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <section className="section bg-[var(--color-primary)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Customer Favorites
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)' }}>Bestsellers</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.slice(0, 5).map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[var(--color-cream)]">
                {/* Primary Image */}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                
                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  disabled={isLoading}
                  className={`absolute bottom-4 left-4 right-4 bg-[var(--color-charcoal)] text-white py-3 flex items-center justify-center gap-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                    hoveredId === product.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <ShoppingBag size={16} strokeWidth={1.5} />
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'none'}
                      stroke="var(--color-gold)"
                    />
                  ))}
                  <span className="text-xs text-[var(--color-text-secondary)] ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Name */}
                <h3 
                  className="product-name mb-1"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {product.name}
                </h3>

                {/* Price */}
                <p className="text-[var(--color-text-primary)] font-medium">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors group"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            View All Products
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
