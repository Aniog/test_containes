import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4] bg-cream-200 mb-4">
        <img
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={`product-card-${product.id}-c1`}
          data-strk-img={`[product-card-name-${product.id}] bestseller jewelry product photo`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="w-full bg-cream-50/95 backdrop-blur-sm text-charcoal-400 py-3 text-[10px] uppercase tracking-widest-xl font-sans font-medium hover:bg-gold-500 hover:text-cream-50 transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="text-center">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`product-card-name-${product.id}`}
            className="product-name text-[11px] mb-1.5 hover:text-gold-600 transition-colors"
          >
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.round(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-cream-300'
              }`}
            />
          ))}
          <span className="text-[10px] text-charcoal-50 ml-1">({product.reviewCount})</span>
        </div>

        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
}
