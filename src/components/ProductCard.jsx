import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#EDE9E3] aspect-[4/3] mb-4">
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button onClick={handleAddToCart} className="w-full" size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="space-y-1">
        <div className="font-serif text-sm tracking-[2px] text-[#2C2522]">{product.name}</div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#5C5248]">{product.category}</span>
          <span className="font-medium">{formatPrice(product.price)}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;