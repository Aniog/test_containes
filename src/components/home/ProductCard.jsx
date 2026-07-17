import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, eager = false }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 1, product.tone, product.imgIds.primary);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block"
    >
      <div className="relative overflow-hidden bg-cream-200 aspect-[4/5]">
        <img
          alt={product.name}
          data-strk-img-id={eager ? `${product.imgIds.primary}-eager` : product.imgIds.primary}
          data-strk-img={`[${product.textIds.short}] [${product.textIds.name}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          loading={eager ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            hovered ? "opacity-0" : "opacity-100",
          )}
        />
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgIds.hover}
          data-strk-img={`[${product.textIds.short}] [${product.textIds.name}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          loading="lazy"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            hovered ? "opacity-100" : "opacity-0",
          )}
        />
        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            "absolute left-3 right-3 bottom-3 z-10 bg-ink/90 backdrop-blur-sm text-cream-100 py-3 text-[11px] tracking-[0.28em] uppercase font-medium transition-all duration-500",
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none",
          )}
        >
          <span className="inline-flex items-center gap-2 justify-center w-full">
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            Quick Add
          </span>
        </button>
      </div>
      <div className="pt-4 flex items-start justify-between gap-3">
        <h3 className="product-name leading-relaxed">{product.name}</h3>
        <span className="price text-[18px] mt-0.5">
          {formatPrice(product.price)}
        </span>
      </div>
      <p className="mt-1 text-[12px] text-muted capitalize">
        {product.category} · 18K gold plated
      </p>
    </Link>
  );
}
