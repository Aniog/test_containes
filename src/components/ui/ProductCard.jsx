import React from "react";
import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { cn, formatPrice } from "@/lib/cn";
import StockImage from "./StockImage";

export default function ProductCard({ product, eager = false, onQuickAdd }) {
  const [hover, setHover] = React.useState(false);
  const first = product.images?.[0];
  const second = product.images?.[1] || first;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-cream-200 aspect-[4/5] vm-img-zoom">
          {first && (
            <StockImage
              imgId={`card-${product.id}-1`}
              query={first.query}
              ratio="4x5"
              width="900"
              alt={product.name}
              eager={eager}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial",
                hover && second ? "opacity-0" : "opacity-100"
              )}
            />
          )}
          {second && second !== first && (
            <StockImage
              imgId={`card-${product.id}-2`}
              query={second.query}
              ratio="4x5"
              width="900"
              alt={`${product.name} alternate view`}
              eager={eager}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial",
                hover ? "opacity-100" : "opacity-0"
              )}
            />
          )}
          {product.bestseller && (
            <span className="absolute top-3 left-3 vm-eyebrow text-ink bg-cream/95 px-2.5 py-1">
              Bestseller
            </span>
          )}
        </div>
      </Link>

      {/* Quick add (visible on hover) */}
      {onQuickAdd && (
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onQuickAdd(product); }}
          aria-label={`Quick add ${product.name} to bag`}
          className={cn(
            "absolute left-3 right-3 bottom-[120px] z-10 vm-btn vm-btn--primary text-[10px] tracking-[0.22em] py-3",
            "opacity-0 translate-y-2 pointer-events-none transition-all duration-500 ease-editorial",
            "group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
            "md:block hidden"
          )}
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={2} /> Quick Add
        </button>
      )}

      <div className="mt-4 px-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="vm-product-name text-ink truncate">
            <Link to={`/product/${product.id}`} className="hover:text-gold-dark transition-colors">
              {product.name}
            </Link>
          </h3>
          <p className="text-sm text-ink whitespace-nowrap tabular-nums">{formatPrice(product.price)}</p>
        </div>
        <div className="mt-1.5 flex items-center justify-between gap-3">
          <p className="text-xs text-ink-muted truncate">{product.tagline}</p>
          <p className="flex items-center gap-1 text-[11px] text-ink-muted whitespace-nowrap">
            <Star className="w-3 h-3 fill-gold text-gold" strokeWidth={0} />
            <span className="text-ink-soft">{product.rating.toFixed(1)}</span>
            <span>({product.reviews})</span>
          </p>
        </div>
      </div>
    </article>
  );
}
