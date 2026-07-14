import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const { addItem, openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, selectedVariant);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#f5f5f0] rounded-lg overflow-hidden mb-3">
        {/* Primary image */}
        <img
          src={`https://placehold.co/600x800/f5f5f0/b8860b?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            isHovered ? 'opacity-0' : 'opacity-100'
          )}
        />
        {/* Secondary image on hover */}
        <img
          src={`https://placehold.co/600x800/e5e5e5/1a1a1a?text=${encodeURIComponent(product.name + ' Alt')}`}
          alt={`${product.name} alternate view`}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* Quick add overlay */}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 p-4 transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-center">
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedVariant('gold'); }}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-medium border transition-all',
                  selectedVariant === 'gold'
                    ? 'border-[#b8860b] bg-[#b8860b] text-white'
                    : 'border-[#e5e5e5] text-[#5c5c5c] hover:border-[#b8860b]'
                )}
              >
                Gold
              </button>
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedVariant('silver'); }}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-medium border transition-all',
                  selectedVariant === 'silver'
                    ? 'border-[#b8860b] bg-[#b8860b] text-white'
                    : 'border-[#e5e5e5] text-[#5c5c5c] hover:border-[#b8860b]'
                )}
              >
                Silver
              </button>
            </div>
            <Button
              onClick={handleQuickAdd}
              size="sm"
              className="w-full bg-white text-[#1a1a1a] hover:bg-[#f5f5f0] border border-[#e5e5e5]"
            >
              Add to Bag
            </Button>
          </div>
        </div>

        {/* Bestseller badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wider uppercase">
            Bestseller
          </span>
        )}
      </div>

      <div className="text-center">
        <h3 className="font-serif text-sm md:text-base text-[#1a1a1a] uppercase tracking-wider mb-1 group-hover:text-[#b8860b] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-[#5c5c5c]">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
