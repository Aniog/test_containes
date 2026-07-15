import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-3">
        {/* Primary image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
            isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          }`}
          data-strk-bg-id={`product-${product.id}-primary`}
          data-strk-bg={`[${product.id}-name] gold jewelry elegant`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
        />

        {/* Secondary image (hover) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
            isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
          }`}
          data-strk-bg-id={`product-${product.id}-hover`}
          data-strk-bg={`[${product.id}-name] jewelry detail model`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-sans text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div
          className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-background/95 backdrop-blur-sm text-foreground font-sans text-xs tracking-widest uppercase py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="product-name text-sm text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          <Star size={12} className="fill-star text-star" />
          <span className="font-sans text-xs text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="font-sans text-sm font-medium text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
