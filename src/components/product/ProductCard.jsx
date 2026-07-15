import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState({ primary: false, secondary: false });

  const onAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: product.id, qty: 1, variant: "default" });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-ivory-200 aspect-[3/4]">
        {/* primary image */}
        {!imgError.primary && product.image ? (
          <img
            alt={product.name}
            loading={eager ? "eager" : "lazy"}
            src={product.image}
            onError={() => setImgError((s) => ({ ...s, primary: true }))}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              hovered ? "opacity-0" : "opacity-100"
            )}
          />
        ) : null}

        {/* secondary image on hover */}
        {!imgError.secondary && product.imageAlt ? (
          <img
            alt=""
            aria-hidden="true"
            src={product.imageAlt}
            onError={() => setImgError((s) => ({ ...s, secondary: true }))}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
        ) : null}

        {/* Badges */}
        {product.badges?.length > 0 && (
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
            {product.badges.map((b) => (
              <span
                key={b}
                className="px-2.5 py-1 bg-ivory/95 text-sable text-[9px] tracking-widest2 uppercase font-sans font-medium"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Quick add */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 z-10 transition-all duration-500 ease-out",
            hovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          )}
        >
          <button
            type="button"
            onClick={onAdd}
            className="w-full bg-ivory/95 backdrop-blur-sm text-sable font-sans text-[11px] tracking-widest2 uppercase font-medium py-3.5 flex items-center justify-center gap-2 hover:bg-sable hover:text-ivory transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4 pb-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3
            id={`card-${product.id}-name`}
            className="product-name truncate group-hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
          <p className="text-[11px] text-taupe mt-1 tracking-wide">
            {product.material}
          </p>
        </div>
        <span className="text-sm font-sans text-sable whitespace-nowrap mt-0.5">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
