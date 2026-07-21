import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { formatPrice } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const fields = product.data || product;

  useEffect(() => {
    // Only scan if not already scanned by parent (safe fallback)
    const rid = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(rid);
  }, [product]);

  return (
    <div 
      ref={containerRef}
      className="group opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards"
    >
      <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] overflow-hidden bg-muted mb-4">
        <img
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          data-strk-img={`[prod-${product.id}-title] jewelry gold editorial white background`}
          data-strk-img-id={`prod-img-primary-${product.id}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={fields.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1, 'Gold');
          }}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-widest font-medium translate-y-12 group-hover:translate-y-0 transition-transform duration-500 hover:bg-primary hover:text-white"
        >
          Quick Add
        </button>
      </Link>
      
      <div className="flex flex-col items-center text-center">
        <h3 id={`prod-${product.id}-title`} className="font-serif text-sm uppercase tracking-wider mb-2">
          <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
            {fields.name}
          </Link>
        </h3>
        <span className="text-sm font-sans text-muted-foreground">
          {formatPrice(fields.price)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
