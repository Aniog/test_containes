import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Button from './ui/Button';

export default function ProductCard({ product, showQuickAdd = true }) {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  const primaryImage = product.images?.[0] || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80';
  const secondaryImage = product.images?.[1] || primaryImage;

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="product-card bg-white overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[4/3.5] bg-[#E5DFD3] overflow-hidden">
          <img
            src={primaryImage}
            alt={product.name}
            className="primary-image absolute inset-0 w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
          />
          <img
            src={secondaryImage}
            alt={`${product.name} alternate view`}
            className="secondary-image absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Quick Add Overlay */}
          {showQuickAdd && (
            <div className="quick-add absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <Button 
                onClick={handleQuickAdd}
                size="sm"
                className="shadow-lg text-xs tracking-[1px] px-5"
              >
                ADD TO CART
              </Button>
            </div>
          )}

          {/* Price Tag */}
          <div className="absolute top-3 right-3 bg-white/95 px-3 py-1 text-xs tracking-[1px] text-[#1C1B19]">
            ${product.price}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-4 pb-5 px-1">
          <h3 className="product-name text-sm tracking-[1.5px] text-[#1C1B19] mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-[#6B6259] mb-2">{product.category}</p>
          
          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star text-[10px]">★</span>
              ))}
            </div>
            <span className="text-[10px] text-[#6B6259] tabular-nums">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}