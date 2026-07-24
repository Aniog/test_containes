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
    addItem(product, product.variants?.[0] || 'Gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-slide-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-espresso border border-divider overflow-hidden">
        {/* Primary image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 border border-gold/20 rounded-full flex items-center justify-center">
              <span className="font-serif text-gold/40 text-lg">
                {product.name.charAt(0)}
              </span>
            </div>
            <span className="text-muted/60 text-xs tracking-wider uppercase">
              {product.category}
            </span>
          </div>
        </div>

        {/* Hover overlay with second image effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-velvet/90 via-velvet/30 to-transparent transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-400 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-gold hover:bg-gold-light text-velvet text-xs font-sans font-medium tracking-wider uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {/* Stock badge */}
        {product.price >= 90 && (
          <span className="absolute top-3 left-3 bg-gold/90 text-velvet text-[10px] tracking-wider uppercase font-sans font-medium px-2.5 py-1">
            Gift Set
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1.5">
        <h3 className="font-product-name text-sm md:text-base text-champagne group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={
                  i < Math.floor(product.rating)
                    ? 'text-gold fill-gold'
                    : 'text-divider'
                }
              />
            ))}
          </div>
          <span className="text-[10px] text-muted">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <p className="text-sm font-sans text-champagne/80">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
