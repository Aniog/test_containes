import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StockImage from "@/components/ui/StockImage";
import StarRating from "@/components/ui/StarRating";
import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [hover, setHover] = useState(false);
  const [added, setAdded] = useState(false);

  function handleAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, { tone: product.tones?.[0] || "gold", quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-wash">
        {/* Default image */}
        <StockImage
          id={`product-${product.id}-1`}
          query={product.imageQuery}
          ratio={product.imageRatio || "4x5"}
          width={800}
          alt={product.name}
          className="transition-opacity duration-700 ease-out"
          imgClassName={
            hover
              ? "opacity-0 scale-[1.03]"
              : "opacity-100 scale-100"
          }
        />
        {/* Hover image */}
        {product.altImageQuery && (
          <StockImage
            id={`product-${product.id}-2`}
            query={product.altImageQuery}
            ratio={product.imageRatio || "4x5"}
            width={800}
            alt={product.name}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            imgClassName={
              hover
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[1.02]"
            }
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-ivory/95 text-ink text-[10px] tracking-eyebrow uppercase">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          type="button"
          onClick={handleAdd}
          className={`absolute left-3 right-3 bottom-3 inline-flex items-center justify-center gap-2
            bg-ink/95 text-ivory py-3 text-[11px] tracking-eyebrow uppercase
            transition-all duration-400 ease-out
            ${
              hover
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }
            hover:bg-ink`}
          aria-label={`Add ${product.name} to bag`}
        >
          <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
          {added ? "Added" : "Quick Add"}
        </button>
      </div>

      <div className="pt-4">
        <h3 className="product-name text-[12px] font-medium">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-between">
          <p className="text-sm text-ink">{formatPrice(product.price)}</p>
          <StarRating value={product.rating} size={11} />
        </div>
      </div>
    </Link>
  );
}
