import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
          {/* Main Image */}
          <img
            src={product.images[0].url}
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              isHovered ? "scale-105 opacity-0" : "scale-100 opacity-100"
            )}
            data-strk-img-id={`prod-main-${product.id}`}
            data-strk-img={`[prod-title-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          />
          {/* Hover Image */}
          <img
            src={product.images[1]?.url || product.images[0].url}
            alt={product.name}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
              isHovered ? "scale-100 opacity-100" : "scale-105 opacity-0"
            )}
            data-strk-img-id={`prod-hover-${product.id}`}
            data-strk-img={`[prod-title-${product.id}] jewelry worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          />
          
          {/* Quick Add Button */}
          <div 
            className={cn(
              "absolute inset-x-0 bottom-4 px-4 transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hidden md:block"
            )}
          >
            <button 
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="w-full bg-white/90 backdrop-blur-sm text-black py-3 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3 h-3" />
              Quick Add
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <h3 
            id={`prod-title-${product.id}`}
            className="product-name"
          >
            {product.name}
          </h3>
          <p className="text-sm font-light text-muted-foreground italic">
            {product.category}
          </p>
          <p className="text-sm mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};
