import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/ui/ProductImage";

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);

  const onQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <ProductImage
          product={product}
          ratio="4x5"
          width={priority ? 600 : 480}
          imgIdSuffix="primary"
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            hover ? "opacity-0" : "opacity-100"
          )}
        />
        <ProductImage
          product={product}
          ratio="4x5"
          width={priority ? 600 : 480}
          imgIdSuffix="hover"
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            hover ? "opacity-100" : "opacity-0"
          )}
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-ivory/95 text-espresso text-[10px] tracking-widest2 uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={onQuickAdd}
          aria-label={`Quick add ${product.name} to bag`}
          className={cn(
            "absolute left-3 right-3 bottom-3 flex items-center justify-center gap-2 bg-espresso text-ivory py-3 text-[11px] tracking-widest2 uppercase transition-all duration-500 ease-editorial",
            hover
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          )}
        >
          <Plus size={14} strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={product.nameId}
          className="product-name text-[12px] sm:text-[13px]"
        >
          {product.name}
        </h3>
        <p className="mt-1.5 text-[13px] text-ash tabular-nums">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
