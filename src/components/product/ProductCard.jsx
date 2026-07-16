import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden bg-warmgray-100">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 'gold');
            }}
            className="w-full py-2.5 bg-noir text-cream text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-warmgray-800 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xs md:text-sm tracking-wider uppercase text-noir leading-snug">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-warmgray-600 mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}