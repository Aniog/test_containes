import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext.jsx";
import { formatPrice } from "@/lib/format.js";

/**
 * Renders a single product tile.
 *
 * - The first image is always visible.
 * - On hover (or always-visible if the device does not support hover), the
 *   second image is layered on top and fades in. A "Quick add" button slides
 *   up from the bottom of the image.
 * - Click on the card body navigates to the product page.
 * - The "Quick add" button stops propagation so it adds to the cart instead.
 */
export default function ProductCard({ product, eager = false }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const primary = product.images[0];
  const secondary = product.images[1] || primary;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const variantId = product.variants[0]?.id || "gold";
    addToCart(product.id, variantId, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-warm">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={primary.id}
          data-strk-img={primary.query}
          data-strk-img-ratio={primary.ratio}
          data-strk-img-width={primary.width}
          loading={eager ? "eager" : "lazy"}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
        />
        {/* Secondary image (hover swap) */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={secondary.id}
          data-strk-img={secondary.query}
          data-strk-img-ratio={secondary.ratio}
          data-strk-img-width={secondary.width}
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
        />

        {/* Quick add button */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute inset-x-4 bottom-4 inline-flex items-center justify-center gap-2 bg-cream/95 backdrop-blur-sm text-ink py-3 text-xs uppercase tracking-[0.18em] font-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out hover:bg-ink hover:text-cream"
          aria-label={`Add ${product.name} to bag`}
        >
          <ShoppingBag strokeWidth={1.5} className="w-4 h-4" />
          {added ? "Added" : "Quick add"}
        </button>
      </div>

      <div className="pt-4 pb-2 flex flex-col items-start gap-1">
        <h3
          id={product.refs.titleId}
          className="product-name text-ink group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </h3>
        <p
          id={product.refs.catId}
          className="font-sans text-xs text-ink-muted tracking-wider uppercase"
        >
          {product.category}
        </p>
        <p className="price pt-1">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
