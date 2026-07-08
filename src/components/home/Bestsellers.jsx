import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Heart } from 'lucide-react';
import { products } from '../../data/products';

export default function Bestsellers() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          className="font-serif text-4xl md:text-5xl mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Bestsellers
        </h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 stagger-animation">
        {bestsellerProducts.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {/* Product Image Container */}
            <div className="relative overflow-hidden bg-velmora-soft-beige mb-4 img-zoom">
              <Link to={`/product/${product.id}`}>
                <img
                  src={hoveredProduct === product.id && product.images[1]
                    ? product.images[1]
                    : product.images[0]
                  }
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover"
                />
              </Link>

              {/* Quick Add Button - Appears on Hover */}
              <button
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-3 font-sans text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  // Add to cart logic here
                }}
              >
                <Plus className="w-4 h-4 inline-block mr-2" />
                Add to Cart
              </button>

              {/* Wishlist Button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5 text-velmora-charcoal" />
              </button>
            </div>

            {/* Product Info */}
            <div className="text-center">
              <Link to={`/product/${product.id}`}>
                <h3
                  className="product-name text-sm mb-2 hover:text-velmora-gold transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {product.name}
                </h3>
              </Link>
              <p className="font-sans text-sm text-velmora-warm-gray mb-1">
                ${product.price}
              </p>
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="font-sans text-xs text-velmora-warm-gray ml-1">
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
          className="btn-premium-outline inline-block"
        >
          View All Collections
        </Link>
      </div>
    </section>
  );
}
