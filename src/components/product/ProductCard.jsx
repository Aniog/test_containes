import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants?.[0] || 'Gold',
      quantity: 1,
      image: product.images[product.variants?.[0] || 'Gold']?.[0],
    });
  };

  const defaultVariant = product.variants?.[0] || 'Gold';
  const primaryImage = product.images[defaultVariant]?.[0];
  const secondaryImage = product.images[defaultVariant]?.[1] || primaryImage;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-cream-200 rounded-sm overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={primaryImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        
        {/* Secondary Image */}
        {secondaryImage !== primaryImage && (
          <img
            src={secondaryImage}
            alt={`${product.name} - alternate view`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm py-3 text-sm font-medium tracking-wide text-espresso hover:bg-gold hover:text-white transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Quick Add
        </button>

        {/* Bestseller Badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-gold text-white text-xs px-2 py-1 tracking-wide">
            Bestseller
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-serif text-sm tracking-[0.12em] text-espresso uppercase group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-taupe">
            {formatPrice(product.price)}
          </span>
          
          {product.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <span className="text-xs text-taupe">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
