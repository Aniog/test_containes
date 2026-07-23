import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group cursor-pointer">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-white mb-4 aspect-[4/5]">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#2C2C2C] 
                       px-6 py-2 text-sm tracking-wider uppercase
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       hover:bg-[#C9A96E] hover:text-white"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="space-y-2">
        <h3 className="font-serif text-lg uppercase tracking-[0.15em] font-medium text-[#2C2C2C]">
          {product.name}
        </h3>
        <p className="text-sm text-[#9A8F87]">{product.description}</p>
        <div className="flex items-center space-x-2">
          <div className="flex text-[#C9A96E] text-sm">
            {'★'.repeat(Math.floor(product.rating))}
          </div>
          <span className="text-sm text-[#9A8F87]">({product.reviews})</span>
        </div>
        <p className="font-serif text-xl font-light">${product.price}</p>
      </div>
    </div>
  );
}
