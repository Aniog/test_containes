import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
    });
    openDrawer();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[#E8E2D9] rounded-lg overflow-hidden mb-4">
        {/* Placeholder image with gold gradient */}
        <div className="w-full h-full bg-gradient-to-br from-[#D4B87A]/30 via-[#E8E2D9] to-[#D4B87A]/20 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
          <div className="text-center px-4">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold-deep font-serif text-2xl">V</span>
            </div>
            <p className="text-taupe text-xs uppercase tracking-wider">{product.category}</p>
          </div>
        </div>

        {/* Hover overlay with quick add */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent flex items-end justify-center pb-4 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="bg-white text-espresso text-xs font-medium tracking-wider uppercase px-6 py-2.5 rounded hover:bg-gold hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        {/* Badge */}
        {product.new && (
          <span className="absolute top-3 left-3 bg-espresso text-white text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded">
            New
          </span>
        )}
        {product.bestseller && !product.new && (
          <span className="absolute top-3 left-3 bg-gold text-white text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded">
            Bestseller
          </span>
        )}
      </div>

      {/* Info */}
      <div>
        <h3 className="font-serif text-xs sm:text-sm tracking-wider text-espresso uppercase mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-1">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-taupe">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="text-sm font-medium text-espresso">${product.price}</p>
      </div>
    </Link>
  );
}