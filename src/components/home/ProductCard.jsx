import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const getGradientStyle = (productId) => {
  const gradients = {
    'vivid-aura-jewels': 'linear-gradient(135deg, #3d2e1f 0%, #5a4530 30%, #7a6040 60%, #9a8060 100%)',
    'majestic-flora-nectar': 'linear-gradient(135deg, #2a3545 0%, #3d4a5a 30%, #5a6a7a 60%, #7a8a9a 100%)',
    'golden-sphere-huggies': 'linear-gradient(135deg, #3a2f20 0%, #5a4530 30%, #7a6040 60%, #9a8060 100%)',
    'amber-lace-earrings': 'linear-gradient(135deg, #2f3a2a 0%, #4a5a40 30%, #6a7a55 60%, #8a9a70 100%)',
    'royal-heirloom-set': 'linear-gradient(135deg, #3a2a3a 0%, #5a405a 30%, #7a557a 60%, #9a709a 100%)',
  };
  return gradients[productId] || gradients['vivid-aura-jewels'];
};

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden mb-4" style={{ background: getGradientStyle(product.id) }}>
        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-stone-900/90 backdrop-blur-sm text-stone-50 py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-amber-700 transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 className="product-name text-sm text-stone-900 group-hover:text-amber-700 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <Star size={12} className="text-amber-600 fill-amber-600" />
          <span className="text-xs text-stone-500">{product.rating}</span>
        </div>
        <p className="text-sm text-stone-700 mt-1">${product.price}</p>
      </div>
    </Link>
  );
}
