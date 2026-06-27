import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export function Stars({ value = 5, size = 12, className = "" }) {
  return (
    <div className={cn("inline-flex items-center gap-0.5 text-[var(--color-gold)]", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          className={i < Math.round(value) ? "fill-current" : "opacity-30"}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product, priority = false }) {
  const { addById } = useCart();
  const primary = product.images?.[0];
  const secondary = product.images?.[1] ?? primary;
  const variant = product.variants?.[0];

  return (
    <article className="group relative flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden bg-[var(--color-cream)] aspect-[4/5]"
        aria-label={product.name}
      >
        <img
          src={primary}
          alt={product.name}
          loading={priority ? "eager" : "lazy"}
          className="fade-img fade-img-primary absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={secondary}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="fade-img fade-img-secondary absolute inset-0 w-full h-full object-cover opacity-0"
        />

        {/* Quick add — desktop hover */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addById(product.id, variant?.id, 1);
          }}
          className={cn(
            "absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4",
            "hidden sm:flex items-center justify-center gap-2",
            "h-11 bg-[var(--color-bone)]/95 backdrop-blur-sm",
            "text-[var(--color-ink)] text-[0.7rem] uppercase tracking-eyebrow font-medium",
            "border border-[var(--color-ink)]/10",
            "translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
            "transition-all duration-500 ease-out",
            "hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)]"
          )}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          <span>Add to Cart</span>
        </button>
      </Link>

      <div className="pt-4 flex flex-col gap-1.5">
        <Link
          to={`/product/${product.id}`}
          className="font-sans uppercase tracking-eyebrow text-[0.72rem] text-[var(--color-ink)] font-medium hover:text-[var(--color-gold-deep)] transition-colors"
        >
          {product.name}
        </Link>
        <p className="font-serif italic text-[var(--color-stone)] text-sm leading-snug">
          {product.tagline}
        </p>
        <div className="flex items-center justify-between mt-1">
          <span className="font-sans text-[0.9rem] text-[var(--color-ink)]">
            {formatPrice(product.price)}
          </span>
          <Stars value={product.rating} />
        </div>
      </div>
    </article>
  );
}