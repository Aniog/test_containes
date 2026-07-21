import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/data/cartContext';
import Button from '@/components/ui/Button';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#EDE8E0] aspect-[4/3] mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        
        {/* Quick Add Overlay */}
        {showQuickAdd && (
          <div
            className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center gap-2" onClick={(e) => e.preventDefault()}>
              <select
                value={selectedVariant}
                onChange={(e) => {
                  e.preventDefault();
                  setSelectedVariant(e.target.value);
                }}
                onClick={(e) => e.preventDefault()}
                className="text-xs bg-white/90 text-[#1C1917] px-3 py-1.5 rounded-none border-0 focus:outline-none cursor-pointer"
              >
                {product.variants.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
              <Button
                size="sm"
                onClick={handleQuickAdd}
                className="flex-1 text-xs py-1.5"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-sm tracking-[2px] text-[#1C1917] group-hover:text-[#A67C52] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[#8A8178]">{product.shortDescription}</p>
        <p className="font-medium text-[#1C1917] pt-1">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
