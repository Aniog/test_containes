import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <article
      className="group animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-surface aspect-[3/4]">
        <img
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[${product.id}-name] jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Overlay with Add to Cart */}
        <div
          className={`absolute inset-0 bg-velmora-bg/30 flex items-end justify-center pb-6 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="px-6 py-2.5 bg-velmora-text text-velmora-bg text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-velmora-gold-light transition-colors duration-300"
          >
            Add to Bag
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <h3 id={`${product.id}-name`} className="text-[11px] font-medium tracking-[0.18em] uppercase text-velmora-text">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
              />
            ))}
          </div>
          <span className="text-[10px] text-velmora-text-muted ml-1">({product.reviewCount})</span>
        </div>

        <p className="text-sm text-velmora-gold font-sans">${product.price}</p>
        
        <p className="text-xs text-velmora-text-muted leading-relaxed line-clamp-2 mt-1">
          {product.description}
        </p>
      </div>
    </article>
  );
}
