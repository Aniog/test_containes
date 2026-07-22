import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-border mb-3">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-opacity duration-500"
        />
        <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300`} />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-brand-ink py-2.5 rounded-full text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
      <div>
        <p className="product-name text-sm">{product.name}</p>
        <div className="flex items-center gap-1 mt-1">
          <Star className="h-3.5 w-3.5 text-brand-gold fill-current" />
          <span className="text-xs text-brand-muted">{product.rating} ({product.reviewCount})</span>
        </div>
        <p className="mt-1 text-sm font-medium text-brand-ink">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
