import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, selectedVariant);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < fullStars
                ? 'fill-velmora-accent text-velmora-accent'
                : i === fullStars && hasHalfStar
                ? 'fill-velmora-accent/50 text-velmora-accent'
                : 'text-velmora-border-dark'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-velmora-bg-secondary overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-velmora-bg-dark text-white text-xs px-3 py-1 tracking-wider">
            {product.badge}
          </div>
        )}

        {/* Sale Badge */}
        {product.comparePrice && (
          <div className="absolute top-3 left-3 bg-velmora-accent text-white text-xs px-3 py-1 tracking-wider">
            Sale
          </div>
        )}

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white text-velmora-bg-dark py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-accent hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <div className="flex items-center gap-2">
          {renderStars(product.rating)}
          <span className="text-xs text-velmora-text-muted">({product.reviewCount})</span>
        </div>

        {/* Title */}
        <h3 className="product-title text-velmora-text-primary">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg">${product.price}</span>
          {product.comparePrice && (
            <span className="text-sm text-velmora-text-muted line-through">
              ${product.comparePrice}
            </span>
          )}
        </div>

        {/* Variant Colors */}
        <div className="flex items-center gap-2 pt-1">
          {product.variants.map((variant) => (
            <button
              key={variant.name}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedVariant(variant);
              }}
              className={`w-5 h-5 rounded-full border-2 transition-all ${
                selectedVariant.name === variant.name
                  ? 'border-velmora-text-primary scale-110'
                  : 'border-transparent hover:border-velmora-text-muted'
              }`}
              style={{ backgroundColor: variant.color }}
              title={variant.name}
              aria-label={`Select ${variant.name} color`}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
