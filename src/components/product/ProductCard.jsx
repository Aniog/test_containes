import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-brand-warm mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className={cn(
            'h-full w-full object-cover transition-all duration-700 ease-out',
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-brand-ink text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            Bestseller
          </span>
        )}

        <div
          className={cn(
            'absolute inset-x-0 bottom-0 p-4 transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-brand-ink py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Bag
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="product-name">{product.name}</h3>
        <p className="text-sm text-brand-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
