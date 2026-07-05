import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import StarRating from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    openDrawer();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-4">
        {/* Gradient placeholder simulating jewelry */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="w-full h-full bg-gradient-to-br from-velmora-cream via-velmora-sand/40 to-velmora-cream flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-velmora-gold/25 to-velmora-gold/5 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-velmora-gold/15" />
            </div>
          </div>
        </div>

        {/* Hover image (alternate gradient) */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-full h-full bg-gradient-to-br from-velmora-sand/40 via-velmora-cream to-velmora-sand/30 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-velmora-gold/35 to-velmora-gold/10 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-velmora-gold/20" />
            </div>
          </div>
        </div>

        {/* Quick add button on hover */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-velmora-espresso text-xs tracking-[0.12em] uppercase font-sans font-medium hover:bg-velmora-gold hover:text-white transition-colors duration-200"
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              Quick Add
            </span>
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <p className="font-serif text-xs tracking-[0.15em] uppercase text-velmora-espresso mb-1">
          {product.name}
        </p>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <p className="font-sans text-sm text-velmora-stone mt-1.5">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
