import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-warm aspect-[3/4]">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-brand-ink">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full bg-white/95 py-2.5 text-xs font-semibold text-brand-ink opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-base text-brand-ink uppercase tracking-wide">{product.name}</h3>
        <p className="text-sm font-medium text-brand-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
