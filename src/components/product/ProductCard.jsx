import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import Stars from "@/components/ui/Stars";
import { cn } from "@/lib/utils";

/**
 * Product card. `product` must carry static image wiring:
 * { mainImgId, hoverImgId, mainQuery, hoverQuery, nameId, taglineId }
 */
export default function ProductCard({ product, className, eager = false }) {
  const { addItem } = useCart();

  return (
    <article
      className={cn(
        "group relative flex flex-col bg-cream transition-all duration-300 ease-out hover:-translate-y-1",
        className
      )}
    >
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden rounded-sm bg-sand aspect-[4/5] shadow-[0_18px_40px_-28px_rgba(33,26,18,0.45)]"
        aria-label={`View ${product.name}`}
      >
        <img
          alt={product.name}
          data-strk-img-id={product.mainImgId}
          data-strk-img={product.mainQuery}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          loading={eager ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-0"
        />
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.hoverImgId}
          data-strk-img={product.hoverQuery}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-[1.06] object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/90 px-3 py-1 text-[10px] font-medium uppercase tracking-widest2 text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}
      </Link>

      <button
        type="button"
        onClick={() => addItem(product, "gold", 1)}
        className="absolute bottom-[104px] right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-ink text-cream opacity-0 shadow-lg transition-all duration-300 ease-out hover:bg-gold-deep group-hover:translate-y-0 group-hover:opacity-100 max-lg:translate-y-0 max-lg:opacity-100"
        aria-label={`Add ${product.name} to cart`}
      >
        <Plus size={16} strokeWidth={1.5} />
      </button>

      <div className="flex flex-1 flex-col items-start gap-1 pt-4">
        <Link to={`/product/${product.id}`} className="transition-colors hover:text-gold-deep">
          <h3
            id={product.nameId}
            className="font-serif text-base font-medium uppercase leading-snug tracking-product text-ink"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.taglineId} className="text-xs leading-relaxed text-taupe">
          {product.tagline}
        </p>
        <div className="mt-1 flex w-full items-center justify-between">
          <span className="font-serif text-lg font-medium text-ink">
            {formatPrice(product.price)}
          </span>
          <Stars rating={product.rating} size={12} />
        </div>
      </div>
    </article>
  );
}
