import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { useState } from "react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { PRODUCT_IMAGES } from "@/data/realImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

/**
 * Velmora product card.
 * - Crossfades to a "second angle" image on hover (desktop).
 * - On hover (desktop), reveals a quick "Add to cart" pill that respects the card's own Link.
 * - Mobile: tap the card to navigate; the add button is always visible on small screens.
 */
export default function ProductCard({ product, className }) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);

  const imgs = PRODUCT_IMAGES[product.id] || {
    primary: PLACEHOLDER,
    secondary: PLACEHOLDER,
  };

  const categoryLabel = product.category
    ? product.category[0].toUpperCase() + product.category.slice(1)
    : "Jewelry";

  return (
    <article
      className={cn("group relative flex flex-col", className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="block focus:outline-none"
        aria-label={`${product.name}, ${formatPrice(product.price)}`}
      >
        <div className="product-img-wrap relative overflow-hidden bg-cream aspect-[4/5]">
          <img
            alt={product.name}
            src={imgs.primary}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-velvet",
              hover ? "opacity-0" : "opacity-100",
            )}
            loading="lazy"
          />
          <img
            alt=""
            aria-hidden="true"
            src={imgs.secondary}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-velvet",
              hover ? "opacity-100" : "opacity-0",
            )}
            loading="lazy"
          />

          {/* Subtle dark-to-transparent gradient on the image to keep caption readable if needed */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

          {/* Quick add — appears on hover (desktop) or always on mobile (via :active) */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product.id, product.variants[0] || "Gold", 1);
            }}
            className={cn(
              "absolute right-3 bottom-3 inline-flex items-center justify-center gap-2 h-10 px-4 bg-ink text-bone text-[10px] uppercase tracking-[0.18em] font-medium transition-all duration-300 ease-velvet",
              "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
              "max-sm:opacity-100 max-sm:translate-y-0",
            )}
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Add</span>
          </button>
        </div>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="eyebrow">{categoryLabel}</p>
          <h3 className="mt-1.5">
            <Link
              to={`/product/${product.id}`}
              className="product-name text-ink hover:text-gold-deep transition-colors duration-300"
            >
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-taupe">{product.eyebrow}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-sm font-medium text-ink">
            {formatPrice(product.price)}
          </p>
          <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-taupe">
            <Star className="w-3 h-3 fill-gold text-gold" strokeWidth={0} />
            {product.rating.toFixed(1)}
          </p>
        </div>
      </div>
    </article>
  );
}
