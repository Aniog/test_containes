import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, openCart } = useCart();
  const primaryImage = product.images?.gold?.[0] || product.images?.silver?.[0];
  const secondaryImage = product.images?.gold?.[1] || product.images?.silver?.[1];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      material: product.material,
      image: primaryImage,
    });
    openCart();
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-warm">
        <img
          src={hovered && secondaryImage ? secondaryImage : primaryImage}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-surface/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-ink">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="rounded-full bg-brand-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-brand-accent"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-base font-semibold text-brand-ink uppercase tracking-wide">{product.name}</h3>
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
          <span className="text-xs font-semibold text-brand-ink">{product.rating}</span>
          <span className="text-xs text-brand-muted">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-semibold text-brand-ink">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
