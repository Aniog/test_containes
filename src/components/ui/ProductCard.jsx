import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';
import { StarRating } from './StarRating';
import { Button } from './Button';
import { formatPrice } from '@/data/products';

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function ProductCard({ product, className }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <article
      className={cn('group cursor-pointer', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-sand mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={placeholder}
          alt={product.name}
          id={product.imgId}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        <img
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={placeholder}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out-expo">
          <Button
            variant="primary"
            size="sm"
            className="w-full gap-2"
            onClick={handleAdd}
          >
            <ShoppingBag size={14} />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        <h3
          id={product.titleId}
          className="font-serif text-base md:text-lg uppercase tracking-brand text-ink"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="text-xs text-taupe font-sans line-clamp-1"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="font-sans text-sm font-medium text-ink">
            {formatPrice(product.price)}
          </span>
          <StarRating rating={product.rating} reviews={product.reviews} size={12} />
        </div>
      </div>
    </article>
  );
}
