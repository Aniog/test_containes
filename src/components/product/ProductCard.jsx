import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

const ProductCard = ({ product, onQuickAdd }) => {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    if (onQuickAdd) onQuickAdd(product);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden mb-4">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal-900 text-cream-50 text-xs tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 bg-cream-50/95 backdrop-blur-sm text-charcoal-900 py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered || added ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={14} />
          {added ? 'Added' : 'Quick Add'}
        </button>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm tracking-widest uppercase text-charcoal-900 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-gold-500 text-gold-500" />
            <span className="text-xs text-charcoal-600">{product.rating}</span>
          </div>
          <span className="text-xs text-warm-gray">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium text-charcoal-900">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
