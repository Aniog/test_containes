import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Rating from '@/components/ui/Rating';

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    addItem(product, product.variants[0]?.name || 'Gold', 1);

    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-velmora-sand/50 rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
        />

        {/* Secondary Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-velmora-charcoal text-white text-xs tracking-wide">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick Add Button */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/30 to-transparent transition-all duration-300"
          style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          <button
            onClick={handleQuickAdd}
            disabled={isAdding}
            className="w-full py-3 bg-white/95 hover:bg-white text-velmora-espresso text-sm font-medium tracking-wide transition-all duration-200 hover:shadow-gold disabled:opacity-70"
          >
            {isAdding ? 'Added!' : (
              <span className="flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Quick Add
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3
          className="text-product text-xs text-velmora-espresso"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-velmora-espresso">
            {formatPrice(product.price)}
          </p>
          <Rating rating={product.rating} size="sm" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
