import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div
          className="relative aspect-[3/4] bg-charcoal-100 overflow-hidden mb-4"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100'
            }`}
          />
          <img
            src={product.hoverImageUrl}
            alt={`${product.name} lifestyle`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Quick add button */}
          <button
            onClick={handleAdd}
            className={`absolute bottom-3 left-3 right-3 py-2.5 text-[10px] tracking-widest uppercase font-medium text-center transition-all duration-300 ${
              added
                ? 'bg-gold-500 text-cream'
                : 'bg-cream/90 text-charcoal-800 hover:bg-gold-500 hover:text-cream'
            } ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <span className="flex items-center justify-center gap-1.5">
              <ShoppingBag size={12} />
              {added ? 'Added to Bag' : 'Quick Add'}
            </span>
          </button>
        </div>

        {/* Info */}
        <div className="px-0.5">
          <p className="product-name text-[11px] md:text-xs mb-1.5">
            {product.name}
          </p>
          <div className="flex items-center gap-3">
            <span className="product-price text-sm">${product.price}</span>
            <div className="flex items-center gap-0.5">
              <Star size={10} className="text-gold-500 fill-gold-500" />
              <span className="text-[10px] text-charcoal-400">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;