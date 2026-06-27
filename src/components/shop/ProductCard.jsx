import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="relative aspect-[3/4] overflow-hidden bg-velmora-stone"
      >
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product, "gold", 1);
        }}
        className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-velmora-cream/90 text-velmora-dark opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-dark group-hover:opacity-100"
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag className="h-4 w-4" />
      </button>

      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-sm font-medium">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center gap-1 text-velmora-gold">
          <Star className="h-3 w-3 fill-current" />
          <span className="text-xs text-velmora-muted">
            {product.rating}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
