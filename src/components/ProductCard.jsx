import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const fields = product.data || {};

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-velmora-dark/5 aspect-[3/4] relative">
        {/* Main Image */}
        <img
          src={fields.images?.[0] || 'https://via.placeholder.com/600x800'}
          alt={fields.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isHovered && fields.images?.[1] ? 'opacity-0 scale-105' : 'opacity-100'
          }`}
        />
        {/* Hover Image */}
        {fields.images?.[1] && (
          <img
            src={fields.images[1]}
            alt={fields.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
        )}

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart({ ...fields, id: product.id });
            }}
            className="w-full bg-white/90 backdrop-blur-sm text-velmora-dark py-3 uppercase tracking-widest text-[10px] font-sans font-semibold flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-white transition-all"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <h3 className="font-serif uppercase text-sm tracking-widest text-velmora-dark group-hover:text-velmora-gold transition-colors">
          <Link to={`/product/${product.id}`}>{fields.name}</Link>
        </h3>
        <p className="mt-1 text-xs font-sans text-velmora-muted">
          {formatPrice(fields.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
