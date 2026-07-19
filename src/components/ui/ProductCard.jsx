import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { StarRating } from '@/components/ui/StarRating';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard({ product }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <div
      ref={containerRef}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
          <img
            alt={product.name}
            data-strk-img-id={`product-${product.images[0].id}`}
            data-strk-img={`[${product.nameId}] [product-section-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Quick add overlay */}
          <div
            className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              variant="dark"
              size="sm"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </Button>
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 id={`${product.nameId}`} className="product-name text-sm mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mb-1">
            <StarRating rating={product.rating} size="sm" />
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          <p className="text-sm font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
