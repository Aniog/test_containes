import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const data = product.data || {};
  
  // Instructions: hover reveals second image + quick "Add to Cart"
  // Since we only have one image usually in seed, we use a placeholder or the same image with a zoom for effect.
  const imageUrl = data.images?.[0] || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

  return (
    <div className="group flex flex-col gap-4">
      <div className="relative aspect-[3/4] bg-[#F5EFE6] overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={imageUrl} 
            alt={data.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            data-strk-img-id={`prod-img-${product.id}`}
            data-strk-img={`[prod-title-${product.id}] [prod-cat-${product.id}] luxury gold jewelry editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          />
        </Link>
        
        {/* Quick Add To Cart */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-[#1A1A1A] text-white py-3 text-[10px] tracking-[0.2em] font-medium uppercase flex items-center justify-center gap-2 hover:bg-[#D4AF37] transition-colors"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-1">
        <p id={`prod-cat-${product.id}`} className="text-[10px] tracking-[0.2em] text-[#6B6B6B] uppercase">{data.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 id={`prod-title-${product.id}`} className="text-sm font-serif tracking-[0.15em] uppercase font-medium">{data.name}</h3>
        </Link>
        <p className="text-sm font-light mt-1">{formatPrice(data.price)}</p>
      </div>
    </div>
  );
}
