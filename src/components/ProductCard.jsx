import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addItem(product, 'gold', 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden bg-subtle aspect-[3/4] cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-premium ${hovered ? 'scale-105' : 'scale-100'}`}
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 z-10 bg-surface text-base uppercase text-xs tracking-widest font-medium py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-accent hover:text-white ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
          Quick Add
        </button>
      </div>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm uppercase tracking-widest hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-muted">${product.price}</p>
      </div>
    </div>
  );
}