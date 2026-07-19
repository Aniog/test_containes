import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import ProductImage from "./ProductImage";

/**
 * Bestseller / product card with:
 *  - First image by default
 *  - Second image revealed on hover
 *  - Quick "Add to Cart" button on hover
 *  - Soft lift and shadow on hover
 */
export default function ProductCard({ product }) {
  const { addToCart, openCart } = useCart();
  const [hover, setHover] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[3/4]">
        {/* Primary image */}
        <ProductImage
          imgId={product.imgId}
          query={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
          ratio="3x4"
          width={700}
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            hover && product.img2Id ? "opacity-0" : "opacity-100"
          )}
        />

        {/* Secondary image on hover */}
        {product.img2Id && (
          <ProductImage
            imgId={product.img2Id}
            query={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
            ratio="3x4"
            width={700}
            alt={`${product.name} alternate`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              hover ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 font-sans text-[10px] uppercase tracking-widest2 bg-ivory/95 text-espresso px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={cn(
            "absolute inset-x-3 bottom-3 transition-all duration-500",
            hover
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          )}
        >
          <button
            type="button"
            onClick={handleAdd}
            className={cn(
              "w-full inline-flex items-center justify-center gap-2 font-sans text-[10px] uppercase tracking-widest2 font-medium py-3 transition-colors duration-300",
              added
                ? "bg-espresso text-ivory"
                : "bg-ivory/95 text-espresso hover:bg-espresso hover:text-ivory"
            )}
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
            {added ? "Added to Bag" : "Quick Add"}
          </button>
        </div>
      </div>

      <div className="pt-4 pb-2">
        <div className="flex items-center justify-between gap-3">
          <h3
            id={product.titleId}
            className="font-serif uppercase tracking-widest2 text-sm md:text-[15px] text-espresso truncate"
          >
            {product.name}
          </h3>
          <p className="font-serif text-sm md:text-base text-espresso tabular-nums shrink-0">
            {formatPrice(product.price)}
          </p>
        </div>
        <p
          id={product.descId}
          className="mt-1 text-xs text-taupe leading-relaxed line-clamp-1"
        >
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-3 h-3",
                i < Math.round(product.rating)
                  ? "fill-gold text-gold"
                  : "text-hairline"
              )}
              strokeWidth={0}
            />
          ))}
          <span className="text-[11px] text-taupe ml-1">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
}
