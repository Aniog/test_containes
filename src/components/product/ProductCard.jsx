import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext.jsx";
import { formatPrice } from "@/lib/utils.js";
import StarRating from "@/components/ui/StarRating.jsx";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: product.id, qty: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block focus:outline-none focus-visible:ring-1 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-pearl">
        {/* Primary illustration (always shown) */}
        <div className="relative w-full aspect-[4/5]">
          <div className="absolute inset-0 transition-opacity duration-500">
            {product.illustrations.primary}
          </div>
          {/* Alt illustration appears on hover */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!hovered}
          >
            {product.illustrations.alt}
          </div>
        </div>

        {/* Quick add — visible on hover (desktop), focus-within (keyboard), and always on touch devices */}
        <button
          type="button"
          onClick={handleQuickAdd}
          aria-label={`Quick add ${product.name} to bag`}
          className={`absolute left-3 right-3 bottom-3 z-10 inline-flex items-center justify-center gap-2 bg-cream text-ink border border-ink/15 font-sans uppercase tracking-wider2 text-[0.7rem] py-3 transition-all duration-300 hover:bg-ink hover:text-cream focus:outline-none focus-visible:ring-1 focus-visible:ring-ink/40 focus-visible:ring-offset-1 focus-visible:ring-offset-cream ${
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          } [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:pointer-events-auto`}
        >
          <Plus size={14} /> Quick add
        </button>
      </div>

      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="product-name text-[0.82rem]">{product.name}</h3>
          <p className="font-sans text-[0.92rem] text-ink whitespace-nowrap">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="mt-2">
          <StarRating value={product.rating} count={product.reviews} size={12} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
