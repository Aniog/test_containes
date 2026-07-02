import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { useCart } from '../context/CartContext';

function ProductCard({ product, showQuickAdd = false }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [showVariants, setShowVariants] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card group block">
      <div className="relative aspect-[4/3.6] bg-base-100 rounded-lg overflow-hidden mb-3">
        {/* Primary image */}
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        {/* Secondary image on hover */}
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={product.name}
            className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Quick add button on hover */}
        {showQuickAdd && (
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleQuickAdd}
              className="btn-premium btn-premium-solid flex items-center gap-2 px-4 py-2 text-xs tracking-[0.08em] shadow-lg"
            >
              <ShoppingBag size={14} /> ADD
            </button>
          </div>
        )}

        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-base-50/95 px-2.5 py-0.5 text-xs tracking-wider font-medium rounded">
          {formatPrice(product.price)}
        </div>
      </div>

      <div>
        <div className="product-name text-sm tracking-[0.08em] leading-tight mb-1 pr-1">
          {product.name}
        </div>
        <div className="text-xs text-muted">{product.shortDescription}</div>
      </div>
    </Link>
  );
}

export default ProductCard;