import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-ivory mb-4">
          {/* Primary image */}
          <div
            data-strk-img-id={`shop-${product.id}`}
            data-strk-img={`[${product.id}-name] [product-type] gold jewelry product photo dark background elegant premium`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="absolute inset-0 w-full h-full bg-brand-ivory transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/20 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="btn-gold py-3 px-6 text-xs transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              <ShoppingBag size={14} className="mr-2" />
              Add to Cart
            </button>
          </div>

          {/* Bestseller badge */}
          {product.bestseller && (
            <span className="absolute top-3 left-3 font-sans text-[10px] tracking-widest uppercase bg-brand-gold text-white px-3 py-1">
              Bestseller
            </span>
          )}
        </div>

        <div className="text-center">
          <p className="product-name">{product.name}</p>
          <p className="font-sans text-xs text-brand-warm-gray mt-1">{product.subtitle}</p>
          <p className="font-sans text-sm font-medium text-brand-charcoal mt-2">${product.price}</p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i < Math.round(product.rating) ? '#C8A96E' : 'none'} stroke="#C8A96E" strokeWidth="0.8">
                  <path d="M6 1l1.5 3.1L11 4.6 8.5 7l.6 3.5L6 8.8 2.9 10.5l.6-3.5L1 4.6l3.5-.5L6 1z" />
                </svg>
              ))}
            </div>
            <span className="font-sans text-[10px] text-brand-warm-gray">({product.reviewCount})</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
