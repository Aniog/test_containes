import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#F5F3F0] overflow-hidden mb-4">
        {/* Main image */}
        <img
          data-strk-img-id={`shop-${product.images.main}-${product.id}`}
          data-strk-img={`[${product.images.main}] [${product.name}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Hover image */}
        <img
          data-strk-img-id={`shop-${product.images.hover}-${product.id}`}
          data-strk-img={`[${product.images.hover}] [${product.name}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-[#1A1A1A] text-[#FBF9F6] text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#B8860B] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>

        {/* Bestseller badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-[#B8860B] text-white text-[10px] font-medium tracking-[0.15em] uppercase">
            Bestseller
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="text-center">
        <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-[#1A1A1A] mb-1 group-hover:text-[#B8860B] transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-[#78716C] mb-2">${product.price}</p>
        <div className="flex items-center justify-center gap-1">
          <Star className="w-3.5 h-3.5 fill-[#B8860B] text-[#B8860B]" />
          <span className="text-xs text-[#78716C]">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
}
