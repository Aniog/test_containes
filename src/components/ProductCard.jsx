import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-cream-200 overflow-hidden rounded-sm">
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-gold-500 text-white text-[10px] font-sans tracking-widest uppercase px-2 py-1">
            New
          </span>
        )}

        <div
          className={`absolute inset-0 bg-black/10 flex items-end justify-center pb-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 bg-white text-ink text-xs font-sans font-medium uppercase tracking-wider px-5 py-2.5 shadow-lg hover:bg-cream-100 transition-all duration-200 ${
              added ? 'bg-gold-500 text-white hover:bg-gold-600' : ''
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h3 id={product.titleId} className="product-name text-ink">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
          <span className="text-xs text-taupe-500 font-sans">{product.rating}</span>
          <span className="text-xs text-taupe-400 font-sans">({product.reviews})</span>
        </div>
        <p className="text-sm font-sans font-medium text-ink">${product.price}</p>
      </div>
    </Link>
  );
}