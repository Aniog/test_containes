import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <article
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-cream-200 aspect-[4/5]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] jewelry product elegant`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.secondImgId}
          data-strk-img={`[${product.titleId}] jewelry worn model elegant close up`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} - alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product);
          }}
          className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 py-2.5 bg-cream-50/95 backdrop-blur-sm text-charcoal-800 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Bag
        </button>
      </Link>

      {/* Product info */}
      <div className="pt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-product-name text-sm text-charcoal-800 hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.round(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-charcoal-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-charcoal-400">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-charcoal-700 mt-2">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
