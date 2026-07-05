import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/store';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group space-y-4">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary/10 overflow-hidden">
        {/* Main Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white text-primary py-4 text-[10px] uppercase tracking-extrawide shadow-xl hover:bg-primary hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="text-center space-y-1">
        <Link to={`/shop?category=${product.category}`} className="text-[10px] uppercase tracking-widest text-muted hover:text-accent transition-colors">
          {product.category}
        </Link>
        <h3 className="font-serif text-sm uppercase tracking-extrawide block hover:opacity-60 transition-opacity">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm font-medium mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
