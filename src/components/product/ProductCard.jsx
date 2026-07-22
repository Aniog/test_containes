import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

/**
 * Editorial product card. Renders a primary image; on hover the secondary
 * image cross-fades in. A "Quick Add" pill appears on hover (desktop) and
 * always visible on touch.
 */
export default function ProductCard({ product, eager = false }) {
  const [hover, setHover] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { push } = useToast();

  const onQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.tone || "gold", 1);
    push(`Added ${product.name}`);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group block"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-bone">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`p-${product.id}-1`}
          data-strk-img={`[${product.eyebrow}] [${product.name}] fine gold jewelry on warm neutral background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading={eager ? "eager" : "lazy"}
          className={[
            "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-editorial",
            hover ? "scale-105 opacity-0" : "scale-100 opacity-100",
          ].join(" ")}
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={`p-${product.id}-2`}
          data-strk-img={`[${product.eyebrow}] [${product.name}] closeup detail texture macro`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading="lazy"
          className={[
            "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-editorial",
            hover ? "scale-100 opacity-100" : "scale-105 opacity-0",
          ].join(" ")}
        />

        {/* Quick add pill */}
        <button
          type="button"
          onClick={onQuickAdd}
          aria-label={`Quick add ${product.name} to bag`}
          className={[
            "absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-cream/95 px-4 py-2.5 font-sans text-[10px] tracking-[0.28em] uppercase text-ink shadow-soft-sm backdrop-blur transition-all duration-500 ease-editorial",
            "opacity-100 translate-y-0 md:opacity-0 md:translate-y-2",
            hover && "md:opacity-100 md:translate-y-0",
          ].join(" ")}
        >
          {added ? (
            <>
              <Check className="h-3 w-3 text-gold" strokeWidth={1.5} />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus className="h-3 w-3" strokeWidth={1.5} />
              <span>Quick Add</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-4 flex flex-col items-start gap-1 text-left">
        <p className="product-title">{product.name}</p>
        <p className="font-sans text-[12px] tracking-[0.18em] uppercase text-taupe">
          {product.eyebrow}
        </p>
        <p className="mt-1 font-sans text-[13px] text-ink">${product.price}</p>
      </div>
    </Link>
  );
}
