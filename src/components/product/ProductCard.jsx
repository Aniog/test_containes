import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";

export default function ProductCard({ product, eager = false, onAdded }) {
  const { addToCart } = useCart();
  const [hovering, setHovering] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, { tone: product.tone || "gold", quantity: 1 });
    setAdded(true);
    if (onAdded) onAdded(product);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="block"
        aria-label={`View ${product.name} — ${formatPrice(product.price)}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-ivory-200">
          {/* Primary image */}
          <img
            alt={product.name}
            data-strk-img-id={`${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            loading={eager ? "eager" : "lazy"}
            className={
              "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-elegant " +
              (hovering ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100")
            }
          />
          {/* Hover image */}
          {product.imgId2 && (
            <img
              alt=""
              aria-hidden="true"
              data-strk-img-id={`${product.imgId2}`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              loading="lazy"
              className={
                "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-elegant " +
                (hovering ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]")
              }
            />
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 bg-ivory-50/95 backdrop-blur-sm text-[10px] uppercase tracking-[0.22em] text-espresso-900">
              {product.badge}
            </span>
          )}

          {/* Quick add — appears on hover (desktop) and on tap (mobile) */}
          <div
            className={
              "absolute inset-x-3 bottom-3 transition-all duration-500 ease-elegant " +
              (hovering
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none md:pointer-events-auto")
            }
          >
            <button
              type="button"
              onClick={handleQuickAdd}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-ivory-50/95 backdrop-blur-sm text-[11px] uppercase tracking-[0.22em] text-espresso-900 border border-espresso-900/0 hover:border-espresso-900 hover:bg-espresso-900 hover:text-ivory-50 transition-colors"
              aria-label={`Quick add ${product.name} to bag`}
            >
              {added ? (
                <span>Added ✓</span>
              ) : (
                <>
                  <Plus size={13} strokeWidth={1.5} />
                  Quick add
                </>
              )}
            </button>
          </div>
        </div>

        <div className="pt-4 pb-1">
          <div className="flex items-start justify-between gap-3">
            <h3
              id={product.titleId}
              className="product-name text-[11px] sm:text-[12px]"
            >
              {product.name}
            </h3>
            <p className="text-[13px] tabular-nums text-espresso-900 whitespace-nowrap mt-0.5">
              {formatPrice(product.price)}
            </p>
          </div>
          <p
            id={product.descId}
            className="mt-1.5 text-[12px] text-espresso-500 line-clamp-1"
          >
            {product.short}
          </p>
          <div className="mt-2">
            <StarRating value={product.rating} count={product.reviews} showValue={false} size={12} />
          </div>
        </div>
      </Link>
    </article>
  );
}
