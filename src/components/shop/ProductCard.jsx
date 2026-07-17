import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden mb-3 bg-muted">
          <img
            src={isHovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="absolute bottom-3 left-3 right-3 bg-primary/90 text-primary-foreground py-2 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground"
          >
            <ShoppingBag className="w-3 h-3" />
            Add to Cart
          </button>
        </div>
      </Link>

      <Link to={`/product/${product.id}`} className="block">
        <h3 className="product-name text-xs md:text-sm mb-1">{product.name}</h3>
      </Link>
      <div className="flex items-center gap-1 mb-1">
        <Star className="w-3 h-3 fill-accent text-accent" />
        <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </div>
  );
}
