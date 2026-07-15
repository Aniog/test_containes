import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

export default function ProductCard({ product, showAdd = true }) {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const variant = product.variants[0];

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-warm-gray">
          <img
            src={`https://placehold.co/600x800/${product.variants[0].tone === "silver" ? "e5e7eb/9ca3af" : "d4a96a/2a2420"}?text=${encodeURIComponent(product.name)}`}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.bestseller && (
            <span className="absolute left-3 top-3 bg-velmora-dark px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white">
              Bestseller
            </span>
          )}
        </div>
      </Link>

      {showAdd && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product, variant.id);
          }}
          className={`absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:bg-velmora-dark hover:text-white ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          aria-label="Add to cart"
        >
          <ShoppingBag size={16} />
        </button>
      )}

      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm font-medium uppercase tracking-widest text-velmora-dark transition-colors hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-muted">
            ({product.reviews})
          </span>
        </div>
        <p className="mt-1 font-sans text-sm font-medium text-velmora-dark">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
