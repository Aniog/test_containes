import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem, openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || 'gold', 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-4">
        {/* Primary image */}
        <img
          src={product.images?.[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered && product.images?.[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Secondary image on hover */}
        {product.images?.[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick add button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <Button
              variant="accent"
              size="sm"
              className="w-full shadow-lg"
              onClick={handleQuickAdd}
            >
              <ShoppingBag size={14} className="mr-2" />
              Add to Cart
            </Button>
          </div>
        )}

        {/* Bestseller badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-velmora-black text-white text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1.5">
            Bestseller
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-base md:text-lg font-medium text-velmora-black group-hover:text-velmora-gold-dark transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-velmora-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
