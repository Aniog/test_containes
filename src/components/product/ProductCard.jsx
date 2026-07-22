import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3x2] overflow-hidden bg-gray-100 rounded-lg">
        {/* Primary Image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Secondary Image on Hover */}
        {isHovered && (
          <img
            data-strk-img-id={`${product.imgId}-hover`}
            data-strk-img={`[${product.titleId}] [${product.descId}]`}
            data-strk-img-ratio="3x2"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
        )}

        {/* Quick Add Button */}
        {showQuickAdd && isHovered && (
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              onClick={handleQuickAdd}
              className="w-full bg-white/95 text-amber-900 hover:bg-white border border-gray-200 shadow-sm"
              size="sm"
            >
              Add to Bag
            </Button>
          </div>
        )}

        {/* Bestseller Badge */}
        {product.bestseller && (
          <div className="absolute top-3 left-3">
            <span className="bg-amber-900 text-white text-xs px-2 py-1 rounded-full">
              Bestseller
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-sm uppercase tracking-wide text-gray-900 group-hover:text-amber-900 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        <p className="text-sm font-semibold">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;