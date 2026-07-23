import { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, onQuickAdd }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    onQuickAdd?.(product);
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-[#E8E4DF] overflow-hidden mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[${product.id}-title] [product-card-image]`}
          data-strk-img-ratio={product.images[0].ratio}
          data-strk-img-width={product.images[0].width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Secondary image on hover */}
        <img
          data-strk-img-id={`${product.images[1].id}-hover`}
          data-strk-img={`[${product.id}-title] [product-card-hover]`}
          data-strk-img-ratio={product.images[1].ratio}
          data-strk-img-width={product.images[1].width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1A1A1A] text-[#FAF9F7] text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 bg-[#1A1A1A] text-[#FAF9F7] py-3 text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div className="text-center">
        <h3 className="product-name text-[#1A1A1A] mb-1.5">{product.name}</h3>
        <p className="text-xs text-[#6B6560] mb-2">{product.description}</p>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'fill-accent text-[#C9A96E]' : 'text-[#E8E4DF]'
              }`}
            />
          ))}
          <span className="text-[10px] text-[#9B9590] ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
