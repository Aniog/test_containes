import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import StarRating from './ui/StarRating';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants.find(v => v.inStock)?.id || product.variants[0].id;
    addItem(product, variant, 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            data-strk-img-id={`product-card-${product.id}`}
            data-strk-img={`[product-title-${product.id}] gold jewelry ${product.category}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={product.imageUrl}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              hovered ? 'scale-105' : 'scale-100'
            }`}
          />
        </div>

        {/* Hover overlay with add to cart */}
        <div
          className={`absolute inset-0 bg-black/10 flex items-end justify-center pb-5 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className="bg-white text-velmora-dark px-5 py-2.5 font-sans text-xs font-medium tracking-widest uppercase flex items-center gap-2 hover:bg-velmora-dark hover:text-white transition-colors shadow-sm"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>

        {/* Sale badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-velmora-dark text-white text-[10px] font-sans font-medium tracking-wider uppercase px-2 py-1">
            Sale
          </div>
        )}
      </div>

      {/* Info */}
      <div className="text-center">
        <h3
          id={`product-title-${product.id}`}
          className="font-serif text-sm tracking-widest uppercase text-velmora-dark mb-1"
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="font-sans text-sm font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="font-sans text-sm text-velmora-muted line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-muted">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
