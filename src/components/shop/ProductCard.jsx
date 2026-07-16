import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CURRENCY } from '@/config';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <div className="relative aspect-[3/4] mb-5 bg-muted overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            data-strk-img-id={`pc-main-${product.id}`}
            data-strk-img={`[pc-name-${product.id}] jewelry premium lux`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <img
            data-strk-img-id={`pc-hover-${product.id}`}
            data-strk-img={`[pc-name-${product.id}] jewelry worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={product.images[1] || product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        </Link>

        {/* Action Button */}
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-md py-3.5 flex items-center justify-center space-x-2 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 z-10 shadow-lg"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Quick add</span>
        </button>
      </div>

      <div className="text-center space-y-1">
        <Link to={`/product/${product.id}`}>
          <h3 id={`pc-name-${product.id}`} className="text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-serif italic text-muted-foreground">{CURRENCY}{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
