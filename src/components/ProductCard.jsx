import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import ProductImage from './ProductImage';
import Stars from './ui/Stars';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, titleId, containerId }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const tone = product.tone[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, tone, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
        <ProductImage
          product={product}
          tone={tone}
          index={0}
          ratio="3x4"
          width="600"
          titleId={titleId || `${product.id}-title`}
          imgId={`${product.id}-card-primary-${containerId}`}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.images[tone]?.[1] && (
          <ProductImage
            product={product}
            tone={tone}
            index={1}
            ratio="3x4"
            width="600"
            titleId={titleId || `${product.id}-title`}
            imgId={`${product.id}-card-hover-${containerId}`}
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-0 left-0 right-0 bg-velmora-accent text-white text-xs font-medium tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>

      <div className="text-center">
        <h3
          id={titleId || `${product.id}-title`}
          className="font-serif text-sm uppercase tracking-widest-xl text-velmora-dark mb-1"
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mb-1">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-stone-400">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm text-velmora-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
