import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="group animate-fadeIn">
      <div
        className="relative overflow-hidden bg-cream mb-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/product/${product.id}`}>
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.images[0]}
            alt={product.name}
            className="w-full aspect-[3/4] object-cover transition-all duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal/80 text-white text-[10px] tracking-[0.1em] uppercase px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={() => addItem(product, 'Gold', 1)}
          className="absolute bottom-0 left-0 right-0 py-3 bg-charcoal/90 text-white text-xs tracking-[0.1em] uppercase opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      <Link to={`/product/${product.id}`} className="block">
        <h3 className="font-serif text-sm tracking-[0.15em] text-charcoal uppercase">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          {stars.map((star) => (
            <Star
              key={star}
              className={`w-3 h-3 ${
                star <= Math.floor(product.rating)
                  ? 'text-gold fill-gold'
                  : 'text-warm-gray/30'
              }`}
            />
          ))}
          <span className="text-[11px] text-warm-gray ml-1">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-sm text-charcoal mt-1.5 font-medium">
          ${product.price}
        </p>
      </Link>
    </div>
  );
}