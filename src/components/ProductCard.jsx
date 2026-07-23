import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../lib/CartContext";
import { cn } from "../lib/utils";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col gap-4">
      <div className="aspect-[3/4] overflow-hidden bg-gray-50 relative group">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          {/* Main Image */}
          <img
            data-strk-img-id={`prod-card-${product.id}-1`}
            data-strk-img={`[prod-name-${product.id}] [prod-cat-${product.id}] luxury gold jewelry editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <img
              data-strk-img-id={`prod-card-${product.id}-2`}
              data-strk-img={`[prod-name-${product.id}] [prod-cat-${product.id}] detail view macro jewelry gold`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} alternate`}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-brand-linen/90 backdrop-blur-sm">
          <button
            onClick={() => addToCart(product, product.variants[0])}
            className="w-full bg-brand-ebony text-white py-3 flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-brand-gold transition-colors"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
        
        {/* Label (e.g. Bestseller) */}
        {product.isBestseller && (
          <div className="absolute top-4 left-4 bg-brand-gold text-white px-3 py-1 text-[9px] uppercase tracking-widest font-medium">
            Bestseller
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1 text-center">
        <h3 id={`prod-name-${product.id}`} className="font-serif text-sm tracking-[0.2em] uppercase text-brand-ebony">
          <Link to={`/product/${product.id}`} className="hover-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={`prod-cat-${product.id}`} className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {product.category}
        </p>
        <p className="text-sm font-medium mt-1 underline decoration-brand-gold/20 underline-offset-4">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
