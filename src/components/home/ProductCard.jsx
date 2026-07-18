import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <Link
        to={`/product/${product.slug}`}
        className="block relative aspect-[3/4] bg-velvet-100 overflow-hidden rounded-sm"
      >
        {/* Primary image */}
        <img
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          data-strk-img-id={`${product.id}-thumb-1`}
          data-strk-img={`[${product.id}-name] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
        />
        {/* Secondary image (hover) */}
        <img
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          data-strk-img-id={`${product.id}-thumb-2`}
          data-strk-img={`[${product.id}-name] jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
        />

        {/* Quick add to cart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className={`absolute bottom-3 left-3 right-3 btn-accent text-xs py-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5 mr-2" />
          Add to Cart
        </button>

        {/* Badges */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-velvet-900/80 backdrop-blur-sm text-velvet-50 text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-sm">
            Bestseller
          </span>
        )}
        {product.new && (
          <span className="absolute top-3 left-3 bg-gold-500 text-white text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-sm">
            New
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="mt-4 text-center">
        <p
          id={`${product.id}-name`}
          className="product-name text-velvet-800"
        >
          {product.name}
        </p>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-xs text-velvet-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <p className="mt-1.5 text-sm font-medium text-velvet-700">
          ${product.price}
        </p>
      </div>
    </div>
  );
}