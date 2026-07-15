import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
        <img
          data-strk-img-id={`card-${product.id}-1`}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`card-${product.id}-2`}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick Add */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, product.variants[0]);
            }}
            className="w-full bg-foreground text-background py-3 text-xs tracking-widest uppercase hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <Link to={`/product/${product.id}`}>
        <h3 id={`${product.id}-title`} className="product-name text-sm mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p id={`${product.id}-desc`} className="text-xs text-muted-foreground mb-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium">${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
