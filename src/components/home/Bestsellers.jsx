import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products, getBestsellers } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Rating from '@/components/ui/Rating';
import Button from '@/components/ui/Button';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs tracking-ultra-wide text-gold uppercase mb-3">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Our Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group product-card"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.slug}`}>
                {/* Image Container */}
                <div className="relative aspect-square bg-parchment rounded overflow-hidden mb-4">
                  {/* Primary Image */}
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: hoveredId === product.id ? 0 : 1 }}
                  />
                  {/* Secondary Image */}
                  <img
                    src={product.images[1]}
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 product-image-secondary"
                    style={{ opacity: hoveredId === product.id ? 1 : 0 }}
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-gold text-white font-sans text-xs px-2 py-1 uppercase tracking-wide">
                      {product.badge}
                    </span>
                  )}

                  {/* Quick Add Button */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, 1, product.variants[0]);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 text-white font-sans text-sm"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </Link>

              {/* Product Info */}
              <div className="text-center">
                <Link to={`/product/${product.slug}`}>
                  <h3 className="product-name text-charcoal mb-1 hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <Rating rating={product.rating} reviews={product.reviews} size="sm" />
                <p className="font-serif text-gold mt-2">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link to="/collection">
            <Button variant="secondary">
              View All Jewelry
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
