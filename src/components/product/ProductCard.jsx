import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem, toggleDrawer } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    toggleDrawer();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#f5f0eb] overflow-hidden mb-4">
        <img
          data-strk-img-id={`card-${product.id}-1`}
          data-strk-img={`[${product.id}-name] [${product.id}-desc] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`card-${product.id}-2`}
          data-strk-img={`[${product.id}-name] detail gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-wider px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-[#1a1a1a] py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      <div className="text-center">
        <h3 className="velmora-product-name text-sm text-[#1a1a1a] group-hover:text-[#c9a96e] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-[#c9a96e] text-[#c9a96e]" />
          <span className="text-xs text-[#6b6560]">{product.rating}</span>
        </div>
        <p className="text-sm font-medium text-[#1a1a1a] mt-1">${product.price}</p>
      </div>
    </Link>
  );
}
