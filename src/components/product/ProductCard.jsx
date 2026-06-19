import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { StarRating } from "@/components/ui/StarRating";

/**
 * Editorial product card.
 * - 4:5 portrait image, soft hover scale + lift
 * - On hover: secondary image (alternate angle) + Quick Add button slides up
 * - UPPERCASE serif name with wide tracking
 */
export function ProductCard({ product, eager = false }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  if (!product) return null;

  const titleId = `product-${product.slug}-title`;
  const descId = `product-${product.slug}-desc`;
  const primaryImgId = `product-${product.slug}-img-primary`;
  const secondaryImgId = `product-${product.slug}-img-secondary`;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, {
      variantId: product.variants?.[0]?.id,
      quantity: 1,
    });
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block focus:outline-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-labelledby={titleId}
    >
      {/* Image container — 4:5 portrait */}
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          id={primaryImgId}
          alt={product.imageAlt || product.name}
          loading={eager ? "eager" : "lazy"}
          src={product.image}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-elegant",
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100",
          )}
        />
        {/* Secondary image (alternate angle) */}
        {product.image2 && (
          <img
            id={secondaryImgId}
            alt={`${product.name} alternate angle`}
            loading="lazy"
            src={product.image2}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-elegant",
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-105",
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 eyebrow-sm bg-ivory/95 text-ink px-2.5 py-1.5 backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick Add */}
        <div
          className={cn(
            "absolute left-3 right-3 bottom-3 transition-all duration-500 ease-elegant",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-espresso/95 text-ivory backdrop-blur-sm py-3 eyebrow-sm hover:bg-espresso transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Quick Add</span>
          </button>
        </div>
      </div>

      {/* Text block */}
      <div className="pt-4 md:pt-5 pb-1">
        <div className="flex items-start justify-between gap-3">
          <h3
            id={titleId}
            className="font-serif text-[0.95rem] md:text-[1rem] uppercase tracking-[0.18em] text-ink leading-[1.35] font-medium"
          >
            {product.name}
          </h3>
        </div>
        <p id={descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="font-sans text-sm text-ink/85 font-medium">
            {formatCurrency(product.price)}
          </span>
          <StarRating value={product.rating} count={product.reviewCount} size="sm" />
        </div>
      </div>
    </Link>
  );
}