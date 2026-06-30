import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.material, 1);
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-brand-sand">
        <img
          src={`https://placehold.co/600x800/F3EDE4/C9A96E?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className="h-full w-full object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 0 : 1 }}
        />
        <img
          src={`https://placehold.co/600x800/2C2C2C/C9A96E?text=${encodeURIComponent(product.name)}+detail`}
          alt={`${product.name} alternate`}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-brand-ink/80 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-brand-cream">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full bg-white/95 py-2.5 text-xs font-semibold tracking-widest uppercase text-brand-ink opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-gold hover:text-white"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
      <div className="mt-3 sm:mt-4 space-y-1">
        <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-ink truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5 text-brand-gold">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-[11px] font-medium">{product.rating}</span>
          </div>
          <span className="text-[11px] text-brand-muted">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium text-brand-charcoal">${product.price}</p>
      </div>
    </Link>
  );
}
