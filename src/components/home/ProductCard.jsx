import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();
  const primaryImage = product.images?.gold?.[0] || product.images?.silver?.[0];
  const secondaryImage = product.images?.gold?.[1] || product.images?.silver?.[1];

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.material || 'gold',
      image: primaryImage,
    });
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm bg-brand-warm">
        <img
          src={hovered && secondaryImage ? secondaryImage : primaryImage}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-gradient-to-t from-black/50 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="w-full rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink backdrop-blur transition hover:bg-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="product-name text-xs text-brand-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
        <div className="mt-2 flex items-center gap-1 text-brand-accent">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-xs text-brand-subtle">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
