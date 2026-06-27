import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const primary = product.images?.[0];
  const secondary = product.images?.[1] || primary;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0]?.id || "gold", 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-bone">
        {/* primary image */}
        <img
          alt={product.name}
          data-strk-img-id={primary?.imgId}
          data-strk-img={`[card-name-${product.id}] [card-tagline-${product.id}]`}
          data-strk-img-ratio={primary?.ratio || "4x5"}
          data-strk-img-width={primary?.width || 900}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {/* secondary image */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={secondary?.imgId}
          data-strk-img={`[card-name-${product.id}] [card-tagline-${product.id}] detail close up`}
          data-strk-img-ratio={secondary?.ratio || "4x5"}
          data-strk-img-width={secondary?.width || 900}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 scale-105"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {/* Quick add */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute left-4 right-4 bottom-4 bg-cream/95 text-ink text-[11px] tracking-[0.25em] uppercase py-3 flex items-center justify-center gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-ink hover:text-cream"
        >
          <Plus size={14} strokeWidth={1.5} /> Quick Add
        </button>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p
            id={`card-name-${product.id}`}
            className="text-[11px] tracking-[0.22em] uppercase font-medium text-ink"
          >
            {product.name}
          </p>
          <p
            id={`card-tagline-${product.id}`}
            className="text-xs text-ink/55 mt-1.5 truncate"
          >
            {product.tagline}
          </p>
        </div>
        <p className="text-sm font-medium tabular-nums text-ink shrink-0">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
