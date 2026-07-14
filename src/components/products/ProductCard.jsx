import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative aspect-[3/4] bg-warm-light rounded overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
        />
        <img
          src={product.images[1]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product, 'Gold Tone', 1);
          }}
          className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm hover:bg-gold hover:text-white"
          aria-label="Quick add to cart"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3 md:mt-4">
        <h3 className="product-name group-hover:text-gold transition-colors">{product.name}</h3>
        <p className="text-sm text-warm-black font-medium mt-1">${product.price}</p>
      </div>
    </Link>
  );
}