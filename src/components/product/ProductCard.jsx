import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-warm-100 mb-3">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-cream-50/95 text-charcoal-800 text-xs tracking-ultra-wide uppercase font-medium backdrop-blur-sm hover:bg-white transition-colors rounded-none border-none"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1">
        <h3 className="font-serif text-sm md:text-base tracking-ultra-wide uppercase font-semibold text-charcoal-800 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.round(product.rating)
                    ? 'fill-gold-500 text-gold-500'
                    : 'fill-cream-300 text-cream-300'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-charcoal-700/50">({product.reviews})</span>
        </div>

        <p className="text-sm font-medium text-charcoal-800">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
