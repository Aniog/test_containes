import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { StrkImage } from "@/components/ui/StrkImage";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const [imgIndex, setImgIndex] = useState(0);

  const onQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, product.tone, 1);
  };

  return (
    <article className="group relative">
      <Link
        to={`/product/${product.id}`}
        className="block"
        onMouseEnter={() => setImgIndex(1)}
        onMouseLeave={() => setImgIndex(0)}
        onFocus={() => setImgIndex(1)}
        onBlur={() => setImgIndex(0)}
        aria-label={`${product.name}, ${formatPrice(product.price)}`}
      >
        <div className="relative aspect-[4/5] bg-warm-radial overflow-hidden">
          {/* Primary image */}
          <StrkImage
            imgId={product.images[0].id}
            query={product.images[0].query}
            ratio="4x5"
            width={800}
            priority={priority}
            alt={product.images[0].alt}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              imgIndex === 0 ? "opacity-100" : "opacity-0"
            )}
          />
          {/* Hover image */}
          {product.images[1] && (
            <StrkImage
              imgId={product.images[1].id}
              query={product.images[1].query}
              ratio="4x5"
              width={800}
              alt={product.images[1].alt}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                imgIndex === 1 ? "opacity-100" : "opacity-0"
              )}
            />
          )}

          {product.badge && (
            <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-bone/95 text-ink text-[10px] uppercase tracking-editorial font-sans font-medium">
              {product.badge}
            </span>
          )}

          {/* Quick add */}
          <button
            type="button"
            onClick={onQuickAdd}
            className="quick-add z-10"
            aria-label={`Quick add ${product.name} to bag`}
          >
            <span className="inline-flex items-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
              Quick Add
            </span>
          </button>
        </div>

        <div className="pt-4 pb-2 text-center">
          <h3 className="product-name" id={product.titleId}>
            {product.name}
          </h3>
          <p
            id={product.descId}
            className="mt-1 font-sans text-[11px] text-muted-light tracking-wide"
          >
            {product.subtitle}
          </p>
          <p className="mt-2 product-price">{formatPrice(product.price)}</p>
          <div className="mt-1 inline-flex items-center gap-1 text-[10px] text-muted-light font-sans">
            <Star className="w-3 h-3 fill-gold text-gold" strokeWidth={0} />
            <span>
              {product.rating.toFixed(1)} ({product.reviewCount})
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
