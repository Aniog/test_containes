import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, setCartOpen } = useCart();
  const primaryTone = product.tones?.[0] || 'gold';
  const secondaryTone = product.tones?.[1] || 'silver';
  const images = product.images?.[primaryTone] || product.images?.gold || [];
  const mainImage = hovered && images[1] ? images[1] : images[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, primaryTone, 1);
    setAdded(true);
    setCartOpen(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-background">
        <img
          src={mainImage}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 left-3 right-3 rounded-full bg-white/95 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-sm transition-all duration-200 hover:bg-white ${
            added ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
          }`}
        >
          {added ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <p className="product-name">{product.name}</p>
        <div className="flex items-center gap-2 text-xs text-ink-secondary">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            {product.rating}
          </span>
          <span>({product.reviewCount})</span>
        </div>
        <p className="text-sm font-semibold text-ink">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
