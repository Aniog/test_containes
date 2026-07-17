import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCartDispatch } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const dispatch = useCartDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        variant: product.variants[0],
        quantity: 1,
        category: product.category,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-stone-lighter overflow-hidden mb-5">
        <div
          className={`absolute inset-0 transition-all duration-600 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-100 scale-100'
          }`}
          style={{
            background: `linear-gradient(135deg, ${hovered ? '#F2EDE6' : '#E8E2D9'} 0%, ${hovered ? '#E8E2D9' : '#D5CDC1'} 100%)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="product-name text-lg text-taupe/60 tracking-[0.3em]">{product.category}</span>
        </div>

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg transition-all duration-400 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } ${added ? 'bg-gold text-espresso' : 'bg-cream text-espresso hover:bg-espresso hover:text-cream'}`}
          aria-label="Add to cart"
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
        </button>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="product-name text-[13px] lg:text-sm mb-2 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              fill={i < Math.floor(product.rating) ? '#C7A55B' : 'none'}
              stroke={i < Math.floor(product.rating) ? '#C7A55B' : '#D5CDC1'}
              strokeWidth={1}
            />
          ))}
          <span className="text-[10px] text-taupe ml-1 tracking-wider">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-espresso">${product.price}</p>
      </div>
    </Link>
  );
}
