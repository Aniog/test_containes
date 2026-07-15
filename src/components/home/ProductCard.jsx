import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand/30 overflow-hidden mb-4">
        <img
          data-strk-img-id={`bestseller-${product.imgId}-${index}`}
          data-strk-img={`[product-name-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Quick add overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className={`flex-1 py-2.5 text-[10px] tracking-widest uppercase font-sans font-medium transition-all duration-300 ${
                added
                  ? 'bg-gold text-softblack'
                  : 'bg-softblack/80 text-cream hover:bg-softblack'
              }`}
            >
              {added ? 'Added!' : 'Add to Cart'}
            </button>
            <button
              onClick={handleBuyNow}
              className="p-2.5 bg-cream/90 text-deepbrown hover:bg-cream transition-colors"
              aria-label="Quick buy"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div>
        <p id={`product-name-${product.id}`} className="product-name text-xs md:text-sm mb-1.5">
          {product.name}
        </p>
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-[11px] text-taupe font-sans">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-sans font-medium text-deepbrown">${product.price}</p>
      </div>
    </Link>
  );
}
