import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const idSuffix = React.useMemo(() => Math.random().toString(36).substr(2, 6), []);
  const nameId = `prod-name-${product.id}-${idSuffix}`;

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <Link to={`/product/${product.slug}`}>
          <img
            data-strk-img-id={`prod-main-${product.id}-${idSuffix}`}
            data-strk-img={`[${nameId}] gold jewelry editorial close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-700",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          />
          <img
            data-strk-img-id={`prod-alt-${product.id}-${idSuffix}`}
            data-strk-img={`[${nameId}] on model lifestyle jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        </Link>

        {/* Quick Add To Cart */}
        <div className={cn(
          "absolute bottom-0 left-0 w-full p-4 transition-transform duration-300 translate-y-full group-hover:translate-y-0",
          "bg-white/10 backdrop-blur-md"
        )}>
          <Button
            onClick={() => addToCart(product)}
            className="w-full bg-white text-stone-900 hover:bg-stone-100"
            size="sm"
          >
            Add To Cart
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center space-y-1">
        <h3 id={nameId} className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-stone-900">
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="text-sm font-sans font-light text-stone-500">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
