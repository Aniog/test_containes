import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import Stars from "@/components/product/Stars";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, imgIdPrefix, compact = false }) {
  const { addItem, openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, "Gold", 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div className="relative overflow-hidden bg-ivory">
        <div className={cn(compact ? "aspect-[3/4]" : "aspect-[4/5]", "relative")}>
          <img
            data-strk-img-id={`${imgIdPrefix}-${product.id}-primary`}
            data-strk-img={`[${imgIdPrefix}-${product.id}-name] [${imgIdPrefix}-${product.id}-tag] warm elegant editorial product photography`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
            loading="lazy"
          />
          <img
            data-strk-img-id={`${imgIdPrefix}-${product.id}-hover`}
            data-strk-img={`[${imgIdPrefix}-${product.id}-tag] [${imgIdPrefix}-${product.id}-name] worn on model close-up lifestyle editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className="absolute inset-0 h-full w-full scale-[1.04] object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
            loading="lazy"
          />
        </div>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-espresso backdrop-blur">
            {product.badge}
          </span>
        )}
        {product.isNew && (
          <span className="absolute left-3 top-3 bg-gold px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white">
            New
          </span>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          aria-label={`Quick add ${product.name} to cart`}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-ink/90 py-3.5 text-[10px] uppercase tracking-[0.22em] text-cream backdrop-blur transition-transform duration-500 hover:bg-gold group-hover:translate-y-0"
        >
          <Plus className="h-3.5 w-3.5" /> Quick Add
        </button>
      </div>

      <div className="pt-4 text-center">
        <p
          id={`${imgIdPrefix}-${product.id}-name`}
          className="font-serif text-base uppercase leading-snug tracking-[0.14em] text-ink transition-colors group-hover:text-gold md:text-lg"
        >
          {product.name}
        </p>
        <p
          id={`${imgIdPrefix}-${product.id}-tag`}
          className="mt-1 text-xs text-taupe"
        >
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size="h-3 w-3" />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium tracking-wide text-espresso">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
