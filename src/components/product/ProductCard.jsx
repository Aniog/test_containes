import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="group flex flex-col" ref={containerRef}>
      <div className="relative aspect-[3/4] bg-velmora-stone mb-4 overflow-hidden">
        <Link to={`/product/${product.slug}`}>
          {/* Primary Image */}
          <img 
            src={product.image_url} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Hover Image */}
          {product.hover_image_url && (
            <img 
              src={product.hover_image_url} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
            />
          )}
        </Link>

        {/* Quick Add */}
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-4 left-4 right-4 bg-white text-velmora-charcoal py-3 font-sans text-xs uppercase tracking-widest-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-3 h-3" />
          Quick Add
        </button>
      </div>

      <div className="flex flex-col items-center text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 
            id={`prod-${product.id}-title`}
            className="font-serif text-lg tracking-widest-lg uppercase mb-1 hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-sm opacity-60 mb-2">{product.category}</p>
        <p className="font-serif text-base">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
