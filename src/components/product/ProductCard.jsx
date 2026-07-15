import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import Stars from "@/components/ui/Stars";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const { id, name, price, query, alt, gallery, rating, reviews, tone } = product;

  return (
    <article className="group relative">
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden bg-cocoa-soft aspect-square">
          {/* Primary image */}
          <StrkImage
            imgId={`${id}-primary`}
            query={query}
            ratio="1x1"
            width={800}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Hover image */}
          {gallery?.[1] && (
            <StrkImage
              imgId={`${id}-hover`}
              query={gallery[1]}
              ratio="1x1"
              width={800}
              alt={alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}

          {/* Quick add */}
          <button
            type="button"
            aria-label={`Quick add ${name} to cart`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, 1);
            }}
            className="absolute left-3 right-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-ivory text-ink text-[11px] uppercase tracking-[0.22em] py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-cocoa"
          >
            <Plus size={14} strokeWidth={1.5} />
            <span>Quick Add</span>
          </button>
        </div>
      </Link>

      <div className="pt-4 flex flex-col gap-1.5">
        <Link to={`/product/${id}`} className="product-name hover:text-gold-deep transition-colors">
          {name}
        </Link>
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg text-ink leading-none">
            {formatPrice(price)}
          </span>
          <span className="text-xs text-muted">{tone}</span>
        </div>
        <div className="flex items-center gap-2 pt-0.5">
          <Stars value={rating} size={12} />
          <span className="text-[11px] text-muted">({reviews})</span>
        </div>
      </div>
    </article>
  );
}
