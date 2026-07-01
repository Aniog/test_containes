import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

export default function BestsellersSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);

  const handleAddToCart = (product) => {
    addItem({ ...product, variant: product.variants[0] });
  };

  return (
    <section className="py-16 sm:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-base font-light tracking-wide mb-3">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mb-4" />
          <p className="text-velmora-stone text-sm max-w-md mx-auto">
            Our most loved pieces, chosen by women who know what matters.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <Link to={`/product/${product.slug}`} className="relative block aspect-[3/4] overflow-hidden bg-velmora-warm mb-3">
                <img
                  src={product.images[hoveredId === product.id ? 1 : 0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick add button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product);
                  }}
                  className="absolute bottom-3 left-3 right-3 bg-velmora-base/90 text-white py-3 text-xs tracking-ultra-wide uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-base"
                >
                  Add to Bag
                </button>
              </Link>

              {/* Product info */}
              <Link to={`/product/${product.slug}`}>
                <h3 className="font-serif text-sm tracking-wide text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={12} className="text-velmora-gold fill-velmora-gold" />
                  <span className="text-xs text-velmora-stone">{product.rating}</span>
                </div>
                <p className="text-velmora-base font-medium mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-base text-velmora-base px-8 py-3 text-xs tracking-ultra-wide uppercase hover:bg-velmora-base hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
