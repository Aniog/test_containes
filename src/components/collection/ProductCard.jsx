import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-alt)] mb-4">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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
  );
}
