import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, className }) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn("group block", className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative bg-bone overflow-hidden aspect-[3/4]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out",
            hover ? "opacity-0" : "opacity-100",
          )}
        />
        {/* Secondary (hover) image */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.titleId}] gold jewelry model wearing close up warm light`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out",
            hover ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Quick add */}
        <div
          className={cn(
            "absolute left-4 right-4 bottom-4 transition-all duration-500 ease-out",
            hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
          )}
        >
          <button
            type="button"
            onClick={handleAdd}
            className="w-full bg-ivory/95 backdrop-blur text-onyx hover:bg-onyx hover:text-ivory transition-colors duration-300 font-sans text-[11px] uppercase tracking-[0.22em] py-3 flex items-center justify-center gap-2"
          >
            <Plus size={14} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-5 px-1 pb-1">
        <h3
          id={product.titleId}
          className="font-serif uppercase tracking-[0.18em] text-sm text-onyx group-hover:text-gold transition-colors"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="hidden"
        >
          {product.short}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-sans text-sm text-espresso tabular-nums">
            {formatPrice(product.price)}
          </span>
          <span className="font-sans text-xs text-taupe uppercase tracking-[0.18em]">
            {product.variants.length} tones
          </span>
        </div>
      </div>
    </Link>
  );
}
