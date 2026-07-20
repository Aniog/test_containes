import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || 'Gold');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-surface-alt mb-4">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
        <img
          src={product.imageHover || product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        />

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm text-text-primary py-3 rounded-md text-xs font-medium tracking-nav uppercase hover:bg-white transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>

        {/* Badge */}
        {product.new && (
          <span className="absolute top-3 left-3 bg-accent text-base text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
            New
          </span>
        )}
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-product-name text-text-primary mb-1.5 group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-border'}
              />
            ))}
          </div>
          <span className="text-[10px] text-text-secondary">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <p className="text-sm font-medium text-text-primary">${product.price}</p>
      </div>
    </Link>
  );
}
