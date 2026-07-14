import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Plus, Star } from 'lucide-react';
import products from '../../data/products';

const BestsellersSection = () => {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-20 md:py-32 bg-velmora-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Bestsellers
          </h2>
          <div className="w-16 h-0.5 bg-velmora-gold mx-auto" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream mb-4">
                <img
                  src={hoveredProduct === product.id ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick Add Button - Shows on Hover */}
                <button
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-velmora-charcoal text-velmora-warm-white px-6 py-2.5 
                           opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                           hover:bg-velmora-gold hover:text-velmora-warm-black text-sm tracking-wide"
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <Link to={`/product/${product.id}`} className="block">
                <h3 className="font-serif text-sm uppercase tracking-[0.2em] mb-2 hover:text-velmora-gold transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-velmora-gold font-medium">${product.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                    <span className="text-xs text-velmora-medium-gray">{product.rating}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 text-sm tracking-wide border-b-2 border-velmora-gold text-velmora-charcoal hover:text-velmora-gold transition-colors pb-1"
          >
            <span>View All Collection</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
