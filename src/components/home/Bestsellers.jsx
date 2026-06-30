import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/products';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.featured).slice(0, 5);

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 lg:mb-20">
        <h2 className="heading-lg mb-4">Bestsellers</h2>
        <div className="divider-gold w-24 mx-auto mb-6" />
        <p className="font-sans text-velmora-text-secondary max-w-2xl mx-auto">
          Our most loved pieces, chosen by those who appreciate quiet luxury and timeless design.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
        {bestsellers.map((product, index) => (
          <div
            key={product.id}
            className="product-card group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Link to={`/product/${product.id}`}>
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-velmora-sand">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover Image */}
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
                />

                {/* Quick Add Button */}
                <button
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 
                           bg-velmora-charcoal text-velmora-cream 
                           px-6 py-2 font-sans text-xs tracking-wider uppercase
                           opacity-0 translate-y-2
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-300
                           hover:bg-velmora-gold hover:text-velmora-charcoal"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart logic here
                  }}
                >
                  Quick Add
                </button>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm 
                              px-2 py-1 rounded-full flex items-center space-x-1">
                  <svg className="w-3 h-3 text-velmora-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-sans text-xs font-medium">{product.rating}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-2">
                <h3 className="product-name text-base">{product.name}</h3>
                <p className="font-sans text-sm text-velmora-text-secondary">
                  {product.description}
                </p>
                <p className="font-sans text-lg font-medium">
                  ${product.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="btn-secondary inline-block"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
