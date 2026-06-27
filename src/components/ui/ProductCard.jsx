import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from './Button';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  const displayImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#F5F2ED] aspect-[4/3.5] mb-4">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        
        {/* Quick Add overlay on hover */}
        <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div onClick={handleAddToCart}>
            <Button 
              variant="solid" 
              size="sm" 
              className="w-full text-xs tracking-[2px] py-2.5"
            >
              QUICK ADD
            </Button>
          </div>
        </div>

        {/* Variant indicator */}
        <div className="absolute top-3 right-3 flex gap-1">
          {product.variants.map((v, idx) => (
            <span 
              key={idx} 
              className={`w-1.5 h-1.5 rounded-full ${v.id === 'gold' ? 'bg-[#C5A46E]' : 'bg-[#A8A8A8]'}`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-1 px-1">
        <h3 className="font-serif text-sm tracking-[2px] text-[#2C2823] group-hover:text-[#C5A46E] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[#6B665F] tracking-wide">{product.shortDescription}</p>
        <p className="font-medium text-[#2C2823] pt-1">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;