import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, quickAdd = true }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-background">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
            {product.badge}
          </span>
        )}
        {quickAdd && (
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 left-3 right-3 rounded-full bg-white/95 py-2.5 text-xs font-semibold text-ink opacity-0 transition-all duration-300 hover:bg-white md:group-hover:opacity-100"
            style={{ opacity: hovered ? 1 : 0 }}
            aria-label={`Quick add ${product.name}`}
          >
            Add to Cart
          </button>
        )}
      </div>
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">{product.category}</p>
        <h3 className="mt-1 font-serif text-base font-medium tracking-product text-ink">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-medium text-ink">${product.price}</p>
          <div className="flex items-center gap-1 text-accent">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
