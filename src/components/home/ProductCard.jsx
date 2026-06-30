import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].value);
    setAdded(true);
    openDrawer();
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-stone overflow-hidden mb-4">
        <img
          alt={product.name}
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[product-name-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick add */}
        <div className={`absolute bottom-3 right-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={handleAddToCart}
            className="bg-white text-velmora-espresso p-2.5 rounded-full shadow-lg hover:bg-velmora-gold hover:text-white transition-colors duration-300"
            aria-label="Add to cart"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {added && (
          <div className="absolute inset-0 bg-velmora-espresso/70 flex items-center justify-center animate-fade-in">
            <p className="text-white text-xs font-sans tracking-widest uppercase">Added to Bag</p>
          </div>
        )}

        {/* Bestseller badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] font-sans tracking-widest uppercase px-2.5 py-1">
            Bestseller
          </span>
        )}
      </div>

      {/* Info */}
      <div>
        <p id={`product-name-${product.id}`} className="product-name text-[11px] md:text-xs text-velmora-espresso tracking-[0.12em]">{product.name}</p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            ))}
          </div>
          <span className="text-[11px] text-velmora-muted">({product.reviewCount})</span>
        </div>
        <p className="text-sm text-velmora-charcoal font-medium mt-1.5">${product.price}</p>
      </div>
    </Link>
  );
}
