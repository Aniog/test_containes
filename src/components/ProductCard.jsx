import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../cart/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[var(--cream-dark)] overflow-hidden mb-4">
        <img
          src={`https://image.pollinations.ai/prompt/${encodeURIComponent(product.image)}?width=600&height=800&nologo=true`}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          loading="lazy"
        />
        <img
          src={`https://image.pollinations.ai/prompt/${encodeURIComponent(product.hoverImage || product.image)}?width=600&height=800&nologo=true`}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white/95 backdrop-blur-sm text-[var(--ink)] py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-[var(--ink)] hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-center">
        <h3 className="font-serif-upper text-xs md:text-sm tracking-widest-xl text-[var(--ink)] mb-1.5">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-[var(--gold)] text-[var(--gold)]' : 'text-[var(--divider)]'}`}
              />
            ))}
          </div>
          <span className="text-[10px] text-[var(--warm-gray)]">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-[var(--stone)]">${product.price}</p>
      </div>
    </Link>
  );
}
