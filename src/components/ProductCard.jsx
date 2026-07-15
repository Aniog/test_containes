import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showAddToCart = true }) {
  // Quick Add fix: image uses onClick navigation, button is sibling
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(product.imageQuery)}?width=600&height=750&nologo=true`;
  const hoverUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(product.hoverQuery)}?width=600&height=750&nologo=true`;

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addItem(product, 'gold', 1);
  };

  const handleImageClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-stone-100 aspect-[4/5]">
        {/* Image area is clickable but NOT wrapped in a Link */}
        <div
          role="button"
          tabIndex={0}
          onClick={handleImageClick}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick(); }}
          className="block w-full h-full cursor-pointer"
        >
          <img
            src={hovered ? hoverUrl : imageUrl}
            alt={product.shortName}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        {showAddToCart && (
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-4 right-4 py-3 bg-white/90 backdrop-blur-sm text-velmora-dark text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white z-10"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        )}
      </div>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm uppercase tracking-widest hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-stone-500">{product.rating}</span>
          <span className="text-xs text-stone-400">({product.reviewCount})</span>
        </div>
        <p className="mt-1.5 text-sm font-medium">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
