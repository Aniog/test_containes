import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-4">
        <Link to={`/product/${product.slug}`}>
          <img
            data-strk-img-id={`product-img-${product.id}`}
            data-strk-img={`[product-card-title-${product.id}] gold jewelry editorial close-up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
          />
        </Link>
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-x-4 bottom-4 flex translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 space-x-2">
          <button
            onClick={() => addToCart(product, 1, product.variants[0])}
            className="flex-grow bg-white text-black py-3 px-4 text-[10px] uppercase font-bold tracking-widest hover:bg-[#C5A059] hover:text-white transition-all flex items-center justify-center space-x-2 shadow-sm"
          >
            <ShoppingBag size={14} />
            <span>Add to Bag</span>
          </button>
          <Link
            to={`/product/${product.slug}`}
            className="bg-white text-black p-3 hover:bg-black hover:text-white transition-all shadow-sm flex items-center justify-center"
          >
            <Eye size={14} />
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col text-center mt-2 px-2">
        <h3 id={`product-card-title-${product.id}`} className="font-serif text-sm uppercase tracking-[0.1em] text-gray-900 group-hover:text-[#C5A059] transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-gray-500 mt-1">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
