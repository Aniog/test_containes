import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  const handleImageClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image container — clickable div for navigation, button for quick-add */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-sand mb-4 cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
        />
        {hovered && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-500"
          />
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm text-charcoal text-[10px] tracking-widest uppercase font-medium px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add — stops propagation so parent click doesn't navigate */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 w-10 h-10 bg-cream/90 backdrop-blur-sm flex items-center justify-center hover:bg-charcoal hover:text-cream transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          aria-label="Add to cart"
        >
          <ShoppingBag size={16} />
        </button>
      </div>

      {/* Info */}
      <Link to={`/product/${product.id}`} className="block text-center">
        <h3 className="font-serif text-sm tracking-widest uppercase font-medium text-charcoal group-hover:text-umber transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <span className="text-sm font-medium text-charcoal">${product.price}</span>
          <div className="flex items-center gap-0.5">
            <Star size={11} className="fill-gold text-gold" />
            <span className="text-xs text-warmgray">{product.rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}