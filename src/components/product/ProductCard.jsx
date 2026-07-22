import { Link } from "react-router-dom";
import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const onQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants?.[0];
    addItem(product, variant, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <img
          alt={product.name}
          data-strk-img-id={`card-${product.id}-a`}
          data-strk-img={`[card-${product.id}-name] [card-${product.id}-subtitle] [bestsellers-title]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
          }`}
        />
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={`card-${product.id}-b`}
          data-strk-img={`[card-${product.id}-name] detail`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
          }`}
        />

        {/* Quick add */}
        <button
          type="button"
          onClick={onQuickAdd}
          className={`absolute z-10 left-3 right-3 bottom-3 inline-flex items-center justify-center gap-2
                      bg-ivory/95 backdrop-blur-sm text-ink py-3
                      text-[10px] uppercase tracking-widest-2 font-medium
                      transition-all duration-300 ease-out
                      hover:bg-ink hover:text-cream
                      ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
          aria-label={`Quick add ${product.name} to bag`}
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />
          Quick Add
        </button>

        {/* Bestseller chip */}
        {product.isBestseller && (
          <span className="absolute z-10 top-3 left-3 text-[10px] uppercase tracking-widest-2 text-ink bg-ivory/90 px-2.5 py-1">
            Bestseller
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="pt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 id={`card-${product.id}-name`} className="product-name truncate">
            {product.name}
          </h3>
          <p id={`card-${product.id}-subtitle`} className="mt-1 text-[12px] text-ink-muted truncate font-serif italic">
            {product.subtitle}
          </p>
        </div>
        <span className="font-sans text-[13px] text-ink font-medium shrink-0 tabular-nums">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
