import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { ILLUSTRATIONS } from "@/components/illustrations/JewelryArt";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

/**
 * Editorial product card.
 * - Default: shows primary illustration on warm dark bg.
 * - Hover:  shows second illustration (alt pose) + Add-to-cart overlay.
 * - The two illustrations are derived from the same art component but
 *   use distinct viewBoxes / transforms to feel like a "second look."
 */
const ProductCard = ({ product, priority = false }) => {
  const Illustration = ILLUSTRATIONS[product.illustration];
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { variant: product.variants[0], quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image stage */}
      <div className="relative aspect-[4/5] bg-mocha overflow-hidden">
        {Illustration ? (
          <>
            <div
              className={cn(
                "absolute inset-0 product-image-swap",
                hovered ? "opacity-0" : "opacity-100"
              )}
            >
              <Illustration />
            </div>
            <div
              className={cn(
                "absolute inset-0 product-image-swap",
                hovered ? "opacity-100 scale-[1.02]" : "opacity-0 scale-100"
              )}
            >
              {/* Second look: same illustration with subtle scale + warm tint */}
              <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" aria-hidden="true" />
              <div className="absolute inset-0 scale-110">
                <Illustration />
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-mocha" />
        )}

        {/* Add to cart — slides up on hover */}
        <div
          className={cn(
            "absolute inset-x-4 bottom-4 transition-all duration-500 ease-out",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
          )}
        >
          <button
            type="button"
            onClick={handleAdd}
            className="w-full h-11 bg-ivory text-ink font-sans text-[11px] uppercase tracking-button flex items-center justify-center gap-2 hover:bg-ink hover:text-ivory transition-colors duration-300"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="pt-4 pb-2">
        <p className="text-[10px] uppercase tracking-eyebrow text-taupe mb-1.5">
          {product.eyebrow}
        </p>
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-lg leading-tight text-ink truncate">
            {product.name}
          </h3>
          <span className="font-sans text-sm tabular-nums text-ink shrink-0">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
