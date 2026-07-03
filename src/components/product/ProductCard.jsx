import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, size = 'default' }) {
  const { addToCart, isLoading } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants?.[0] || null);
  };

  const isLarge = size === 'large';

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      {/* Image Container */}
      <div className={`relative bg-[#F5F1EB] overflow-hidden mb-4 ${isLarge ? 'aspect-[3/4]' : 'aspect-[3/4]'}`}>
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
        />
        
        {/* Secondary Image (Hover) */}
        <img
          src={product.images[1] || product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-[#3D3833] text-white text-xs font-sans font-medium tracking-wide">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          disabled={isLoading}
          className="absolute bottom-0 left-0 right-0 py-4 bg-[#3D3833]/95 text-white text-sm font-sans font-medium tracking-wide opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 disabled:opacity-50"
          aria-label="Quick add to bag"
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </span>
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Product Name */}
        <h3 className={`product-name text-[#3D3833] group-hover:text-[#C9A66B] transition-colors ${isLarge ? 'text-base' : 'text-sm'}`}>
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'text-[#C9A66B] fill-[#C9A66B]'
                  : 'text-[#E8E2D9]'
              }`}
            />
          ))}
          <span className="text-xs text-[#9A8E82] ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <p className="font-sans text-[#3D3833]">${product.price}</p>
      </div>
    </Link>
  );
}
