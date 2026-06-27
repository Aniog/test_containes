import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatCurrency, cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const [imgLoaded, setImgLoaded] = useState(false);
  const variantId = product.variants[0]?.id ?? "default";

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, variantId, 1);
  };

  return (
    <article className="group flex flex-col">
      <Link
        to={`/product/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="block relative overflow-hidden bg-taupe aspect-[4/5]"
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <Badge tone="espresso">{product.badge}</Badge>
          </div>
        )}

        {/* Images — first loads, second swaps on hover */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setImgLoaded(true)}
          className={cn(
            "product-image absolute inset-0 w-full h-full object-cover",
            imgLoaded ? "opacity-100" : "opacity-0"
          )}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="product-image product-image-hover absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Quick add — appears on hover (desktop only) */}
        <div className="absolute inset-x-4 bottom-4 z-10 hidden md:block opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full inline-flex items-center justify-center gap-2 bg-bone/95 backdrop-blur-sm text-espresso border border-line py-3 text-label hover:bg-champagne hover:border-champagne transition-colors"
          >
            <ShoppingBag strokeWidth={1.25} className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-5 pb-2">
        <Link
          to={`/product/${product.slug}`}
          className="block"
        >
          <h3 className="font-serif text-sm md:text-base uppercase tracking-[0.18em] text-espresso group-hover:text-espresso-soft transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="text-sm text-espresso tabular-nums">
            {formatCurrency(product.price)}
          </span>
          <span className="text-[11px] uppercase tracking-label text-muted truncate">
            {product.accent}
          </span>
        </div>
      </div>
    </article>
  );
}