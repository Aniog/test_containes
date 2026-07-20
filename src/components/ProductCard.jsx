import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
        {/* Primary Image */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          data-strk-img-id={product.imgId1}
          data-strk-img={`[prod-title-${product.id}] jewelry on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
        />
        {/* Secondary Image (Hover) */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[prod-title-${product.id}] close up jewelry`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
        />
        
        {/* Quick Add Button */}
        <div className={`absolute bottom-0 left-0 w-full p-4 transform transition-transform duration-300 z-20 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1, product.variants[0]);
            }}
            className="w-full bg-white/90 backdrop-blur text-velmora-dark py-3 text-xs uppercase tracking-widest hover:bg-velmora-dark hover:text-white transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col items-center text-center">
        <Link to={`/product/${product.id}`} id={`prod-title-${product.id}`} className="font-serif uppercase tracking-widest text-sm hover:text-velmora-gold transition-colors mb-2">
          {product.name}
        </Link>
        <span className="text-velmora-muted text-sm">${product.price}</span>
      </div>
    </div>
  );
}
