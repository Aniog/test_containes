import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import useCartStore from '../../store/cartStore';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory-200 mb-4">
        {/* Primary Image */}
        <img
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[${product.id}-subtitle] [${product.id}-title] velmora gold jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src=""
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Hover Image (second image) */}
        <img
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`${product.name} worn on model gold jewelry closeup`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src=""
          alt={`${product.name} - alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-gold-500 text-white text-[10px] tracking-wider uppercase font-medium">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="px-3 py-1 bg-charcoal-800 text-white text-[10px] tracking-wider uppercase font-medium">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 p-2.5 rounded-full transition-all duration-300 ${
            isWishlisted
              ? 'bg-gold-500 text-white'
              : 'bg-white/80 text-charcoal-600 opacity-0 group-hover:opacity-100'
          }`}
          aria-label="Add to wishlist"
        >
          <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-charcoal-800 text-white font-sans text-xs tracking-wider uppercase hover:bg-charcoal-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.floor(product.rating)
                  ? 'text-gold-500 fill-gold-500'
                  : 'text-charcoal-300'
              }
            />
          ))}
          <span className="text-xs text-charcoal-400 ml-1">
            ({product.reviewCount})
          </span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-base md:text-lg uppercase tracking-wider text-charcoal-800 mb-1 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-charcoal-400 mb-2">
          {product.subtitle}
        </p>

        {/* Price */}
        <div className="flex items-center justify-center gap-2">
          <span className="font-sans text-base font-medium text-charcoal-800">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="font-sans text-sm text-charcoal-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Hidden text elements for image interpolation */}
      <span id={`${product.id}-title`} className="sr-only">
        {product.name}
      </span>
      <span id={`${product.id}-subtitle`} className="sr-only">
        {product.subtitle}
      </span>
    </Link>
  );
};

export default ProductCard;
