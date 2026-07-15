import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductImage from './ProductImage';
import StarRating from './StarRating';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0];
  const displayImage = product.images[0];
  const hoverImage = product.images[1] || product.images[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (defaultVariant?.inStock) {
      addItem(product, defaultVariant.id, 1);
    }
  };

  return (
    <Link
      to={`/products/${product.id}`}
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream mb-4">
        <ProductImage
          image={displayImage}
          alt={product.name}
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          containerClassName="w-full h-full"
        />
        {product.images[1] && (
          <ProductImage
            image={hoverImage}
            alt={product.name}
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            containerClassName="w-full h-full"
          />
        )}

        {product.badge && (
          <span className="absolute top-3 left-3 bg-ivory/90 backdrop-blur-sm text-base text-[10px] uppercase tracking-widest px-2.5 py-1 font-sans font-medium">
            {product.badge}
          </span>
        )}

        {showQuickAdd && defaultVariant?.inStock && (
          <button
            type="button"
            onClick={handleQuickAdd}
            className={`absolute bottom-0 left-0 right-0 bg-base text-ivory py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-medium transition-transform duration-300 ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        )}
      </div>

      <div className="space-y-1.5">
        <StarRating rating={product.rating} size={12} />
        <h3 className="product-name text-sm text-base group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm font-sans font-medium text-base">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
