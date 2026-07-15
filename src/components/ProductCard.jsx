import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, 'gold');
  };

  return (
    <Link
      to={product.href}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-warm-cream overflow-hidden mb-3">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-warm-black/10 flex items-end justify-center pb-4 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="bg-warm-white text-warm-black text-xs tracking-wider uppercase font-sans font-medium px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-gold hover:text-white transition-all duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="product-name text-warm-black truncate">{product.name}</h3>
          <p className="text-xs text-taupe mt-0.5">{product.categoryLabel}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <span className="font-sans text-sm font-medium text-gold">${product.price}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-1.5">
        <Star className="w-3 h-3 fill-gold text-gold" />
        <span className="text-xs text-taupe">{product.rating} ({product.reviewCount})</span>
      </div>
    </Link>
  );
}