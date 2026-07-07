import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function BestsellersSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">
            Most Loved
          </p>
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl">
            Bestsellers
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-alt)] mb-4">
                <img
                  src={hoveredId === product.id ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick add overlay */}
                <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={() => addItem(product, product.variants[0])}
                    className="w-full btn-dark text-xs py-3 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={14} />
                    Add to Bag
                  </button>
                </div>
              </div>

              {/* Product info */}
              <Link to={`/product/${product.id}`}>
                <h3 className="product-name text-xs md:text-sm mb-1 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-1">
                  <Star size={12} className="fill-[var(--velmora-gold)] text-[var(--velmora-gold)]" />
                  <span className="text-xs text-[var(--velmora-text-muted)]">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <p className="text-sm font-medium">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
