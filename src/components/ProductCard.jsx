import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import Stars from "@/components/ui/Stars";

function formatPrice(n) {
  return `$${n.toFixed(0)}`;
}

export default function ProductCard({ product, eager = false }) {
  const [hover, setHover] = useState(false);
  const [variant, setVariant] = useState(product.variants[0]);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, variant, 1);
    toast.success(`${product.name} added to bag`);
  };

  const onPickVariant = (v, e) => {
    e.preventDefault();
    e.stopPropagation();
    setVariant(v);
  };

  return (
    <article className="group">
      <Link
        to={`/product/${product.slug}`}
        className="block"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-bone">
          {/* Primary image */}
          <img
            alt={product.name}
            data-strk-img-id={`${product.id}-img-1`}
            data-strk-img={product.images[0].query}
            data-strk-img-ratio={product.images[0].ratio}
            data-strk-img-width={800}
            loading={eager ? "eager" : "lazy"}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              hover ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Hover (second) image */}
          <img
            alt=""
            aria-hidden="true"
            data-strk-img-id={`${product.id}-img-2`}
            data-strk-img={product.images[1]?.query || product.images[0].query}
            data-strk-img-ratio={product.images[1]?.ratio || product.images[0].ratio}
            data-strk-img-width={800}
            loading="lazy"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          />

          {product.badge && (
            <span className="absolute left-3 top-3 inline-flex items-center bg-ivory/90 px-2.5 py-1 font-sans text-[10px] uppercase tracking-wider-2 text-espresso backdrop-blur-sm">
              {product.badge}
            </span>
          )}

          {/* Quick add — appears on hover */}
          <div
            className={`absolute inset-x-3 bottom-3 transition-all duration-500 ${
              hover ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex w-full items-center justify-center gap-2 bg-espresso/95 px-4 py-3 font-sans text-[11px] uppercase tracking-wider-2 text-ivory backdrop-blur-sm transition-colors hover:bg-espresso"
            >
              <Plus size={14} strokeWidth={1.5} /> Quick Add
            </button>
          </div>
        </div>
      </Link>

      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              to={`/product/${product.slug}`}
              className="font-sans text-[11px] sm:text-[12px] uppercase tracking-wider-2 text-espresso hover:text-gold-deep"
            >
              {product.name}
            </Link>
            <div className="mt-1.5 flex items-center gap-2 text-stone">
              <Stars value={product.rating} size={12} className="text-gold" />
              <span className="font-sans text-[11px]">
                {product.rating.toFixed(1)} ({product.reviewCount})
              </span>
            </div>
          </div>
          <p className="font-sans text-sm text-espresso">{formatPrice(product.price)}</p>
        </div>

        {product.variants.length > 1 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={(e) => onPickVariant(v, e)}
                aria-label={`Select ${v.label}`}
                className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-sans text-[10px] uppercase tracking-wider-2 transition-colors ${
                  variant.id === v.id
                    ? "border-espresso bg-espresso text-ivory"
                    : "border-line text-stone hover:border-espresso hover:text-espresso"
                }`}
              >
                <span
                  className={`inline-block h-2 w-2 rounded-full ${
                    v.tone === "gold" ? "bg-gold" : "bg-stone"
                  }`}
                />
                {v.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
