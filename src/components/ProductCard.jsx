import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product, className }) => {
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div 
      className={cn("group cursor-pointer", className)}
      ref={containerRef}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id={`product-${product.id}`}
            data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] jewelry gold luxury`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 w-full bg-primary/90 text-white py-3 uppercase text-[10px] tracking-widest font-sans translate-y-full transition-transform duration-300 group-hover:translate-y-0"
          >
            Add to Cart
          </button>
        </div>
        
        <div className="text-center">
          <h3 id={`product-name-${product.id}`} className="font-serif uppercase text-xs tracking-[0.2em] mb-1 group-hover:opacity-60 transition-opacity">
            {product.name}
          </h3>
          <p className="font-sans text-sm font-medium">${product.price}</p>
          {/* Hidden description for image prompt helper */}
          <p id={`product-desc-${product.id}`} className="hidden">{product.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
