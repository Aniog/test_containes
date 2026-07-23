import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const imgId = product.images[0]?.imgId || '';

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-ivory-alt aspect-[3/4] mb-4">
        <img
          alt={product.name}
          data-strk-img-id={`product-card-${imgId}`}
          data-strk-img={`[card-desc-${product.id}] [card-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add on hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white text-[#1A1A1A] text-xs uppercase tracking-[0.12em] font-medium py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
          >
            <ShoppingBag className="w-3 h-3" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-0.5">
        <p id={`card-name-${product.id}`} className="text-xs uppercase tracking-[0.15em] font-medium text-[#1A1A1A] leading-snug">
          {product.name}
        </p>
        <p id={`card-desc-${product.id}`} className="text-xs text-[#6B6560] mt-1 line-clamp-1">
          {product.subcategory} · {product.material}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-medium">${product.price}</span>
          <div className="flex items-center gap-1 text-[10px] text-[#6B6560]">
            <Star className="w-2.5 h-2.5 fill-gold text-gold" />
            {product.rating} ({product.reviewCount})
          </div>
        </div>
      </div>
    </Link>
  );
}
