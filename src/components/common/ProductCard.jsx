import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, className = '' }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className={`product-card group relative ${className}`}>
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-stone-100 aspect-product">
          {/* Primary image */}
          <img
            className="product-img-primary absolute inset-0 w-full h-full object-cover transition-all duration-500"
            src={product.imgUrl}
            alt={product.name}
          />
          {/* Secondary image (hover) */}
          <img
            className="product-img-secondary absolute inset-0 w-full h-full object-cover transition-all duration-500"
            src={product.imgUrl2}
            alt={`${product.name} detail`}
          />

          {/* Tags */}
          {product.tags?.includes('bestseller') && (
            <span className="absolute top-3 left-3 font-manrope text-[10px] tracking-wider uppercase bg-champagne text-obsidian px-2.5 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && !product.tags?.includes('bestseller') && (
            <span className="absolute top-3 left-3 font-manrope text-[10px] tracking-wider uppercase bg-obsidian text-ivory px-2.5 py-1">
              New
            </span>
          )}

          {/* Quick add button */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 font-manrope text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors duration-200 ${
                added
                  ? 'bg-stone-700 text-ivory'
                  : 'bg-obsidian text-ivory hover:bg-champagne hover:text-obsidian'
              }`}
            >
              <ShoppingBag size={13} strokeWidth={1.5} />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="pt-4 pb-2">
          <h3 className="font-cormorant text-base uppercase tracking-product text-obsidian font-medium leading-tight">
            {product.name}
          </h3>
          <p className="font-manrope text-xs text-stone-500 mt-1">{product.shortDesc}</p>

          <div className="flex items-center justify-between mt-2">
            <span className="font-manrope text-sm font-medium text-obsidian">${product.price}</span>
            <div className="flex items-center gap-1">
              <Star size={11} fill="#C9A96E" stroke="none" />
              <span className="font-manrope text-xs text-stone-500">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
