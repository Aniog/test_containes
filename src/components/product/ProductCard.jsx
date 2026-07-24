import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { ProductArt } from "@/components/decor/JewelryArt";
import { useCart } from "@/context/CartContext";
import { formatCurrency, cn } from "@/lib/utils";

export default function ProductCard({ product, eager = false, className }) {
  const { addItem } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    addItem(product.id, { quantity: 1, tone: product.tone?.[0] || "gold" });
    setTimeout(() => setAdding(false), 700);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("group block", className)}
      aria-label={`View ${product.name}`}
    >
      <div className="product-media relative aspect-[4/5] bg-cream-dark overflow-hidden">
        <div className="media-default">
          <ProductArt imageKey={product.imageKey} />
        </div>
        <div className="media-hover">
          <ProductArt imageKey={product.imageKeyHover || product.imageKey} />
        </div>

        {/* Bestseller tag */}
        {product.isBestseller && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-bone/95 text-ink text-[9px] uppercase tracking-wide-3 font-medium">
            Bestseller
          </span>
        )}

        {/* Quick add — reveals on hover (desktop), always on mobile */}
        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            "absolute left-3 right-3 bottom-3 py-3 bg-ink text-bone text-[10px] uppercase tracking-wide-3 font-medium flex items-center justify-center gap-2 transition-all duration-500 ease-elegant",
            "md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0",
            adding && "bg-gold"
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className={cn("w-3.5 h-3.5 transition-transform", adding && "rotate-45")} strokeWidth={1.6} />
          {adding ? "Added" : "Add to Cart"}
        </button>
      </div>

      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-[15px] uppercase tracking-wide-2 text-ink leading-tight group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <p className="font-serif text-[15px] text-ink whitespace-nowrap">
            {formatCurrency(product.price)}
          </p>
        </div>
        <p className="mt-1.5 text-[11px] uppercase tracking-wide-2 text-cocoa line-clamp-1">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
}
