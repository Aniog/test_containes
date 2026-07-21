import { useRef } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";
import { useCart } from "../../context/CartContext";
import { formatPrice, cn } from "../../lib/utils";

/**
 * ProductCard
 * - Renders a single editorial product card.
 * - Hover (desktop) reveals a secondary image and a quick "Add to Cart" button.
 * - On mobile, the secondary image swap is not used (battery / data cost) —
 *   the quick-add stays visible underneath the price.
 */
export default function ProductCard({ product, eager = false }) {
  const cardRef = useRef(null);
  const primaryId = `${product.id}-primary`;
  const secondaryId = `${product.id}-secondary`;
  const titleId = product.nameId;
  const descId = product.descId;

  useEffect(() => { return ImageHelper.loadImages(strkImgConfig, cardRef.current); }, [product.id]);;

  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants[0];
    addItem({ productId: product.id, variantId: defaultVariant.id, qty: 1 });
  };

  return (
    <article ref={cardRef} className="group relative">
      <Link
        to={`/product/${product.id}`}
        className="block focus:outline-none"
        aria-labelledby={titleId}
      >
        {/* Image area: 4:5 portrait */}
        <div className="relative aspect-[4/5] overflow-hidden bg-champagne">
          {/* Primary image */}
          <img
            alt={product.name}
            data-strk-img-id={primaryId}
            data-strk-img={`[${descId}] [${titleId}] [best-sellers-title]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading={eager ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-soft group-hover:opacity-0"
          />
          {/* Secondary image revealed on hover (desktop only) */}
          <img
            alt=""
            aria-hidden="true"
            data-strk-img-id={secondaryId}
            data-strk-img={`[${descId}] [${titleId}] editorial close-up [best-sellers-title]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out-soft group-hover:opacity-100"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 font-sans text-[10px] uppercase tracking-widest2 text-ivory bg-espresso/85 px-2.5 py-1">
              {product.badge}
            </span>
          )}

          {/* Quick add (desktop hover) */}
          <div className="absolute inset-x-3 bottom-3 z-10 hidden md:flex justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out-soft">
            <button
              type="button"
              onClick={handleQuickAdd}
              className="w-full bg-ivory/95 backdrop-blur text-espresso font-sans text-[11px] uppercase tracking-widest2 py-3 hover:bg-espresso hover:text-ivory transition-colors duration-300 inline-flex items-center justify-center gap-2"
            >
              <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
              Quick add
            </button>
          </div>
        </div>

        {/* Text area */}
        <div className="pt-4 md:pt-5 flex items-start justify-between gap-3">
          <div>
            <h3
              id={titleId}
              className="product-name group-hover:text-gold-deep transition-colors duration-300"
            >
              {product.name}
            </h3>
            <p
              id={descId}
              className="mt-1 font-sans text-xs text-ink-soft line-clamp-1"
            >
              {product.description.split(".")[0]}.
            </p>
          </div>
          <span className="font-sans text-sm text-espresso mt-1 whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
      </Link>

      {/* Mobile quick add */}
      <button
        type="button"
        onClick={handleQuickAdd}
        className="md:hidden mt-3 w-full border border-espresso text-espresso font-sans text-[11px] uppercase tracking-widest2 py-3 hover:bg-espresso hover:text-ivory transition-colors duration-300 inline-flex items-center justify-center gap-2"
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
        Add to bag
      </button>
    </article>
  );
}
