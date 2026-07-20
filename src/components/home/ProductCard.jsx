import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col h-full">
      <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-slate-100">
        <Link to={`/product/${product.id}`}>
          {/* Main Image */}
          <img
            data-strk-img-id={`product-${product.id}`}
            data-strk-img={`[product-name-${product.id}] luxury gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={product.name}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          {/* Second Image on Hover (if simulated) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/5" />
        </Link>
        
        {/* Quick Add Button */}
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 py-4 flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest font-bold hover:bg-white active:bg-slate-100"
        >
          <ShoppingBag size={14} />
          <span>Quick Add</span>
        </button>
      </div>

      <div className="flex flex-col flex-grow text-center">
        <h3 id={`product-name-${product.id}`} className="text-xs font-bold uppercase tracking-[0.2em] mb-2 group-hover:text-accent transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <span className="text-sm font-medium text-muted-foreground mt-auto">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
