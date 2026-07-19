import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <article ref={ref} className="group">
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden bg-cream aspect-[3/4]"
        aria-label={`View ${product.name}`}
      >
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`${product.id}-primary`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-soft group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={`${product.id}-hover`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out-soft group-hover:opacity-100"
        />
        {/* Quick add overlay */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 transition-all duration-300 ease-out-soft group-hover:opacity-100 group-hover:translate-y-0">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="w-full bg-ivory/95 backdrop-blur text-espresso py-3 text-[11px] uppercase tracking-wider-2 font-medium hover:bg-espresso hover:text-ivory transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 id={product.titleId} className="product-name truncate">
            {product.name}
          </h3>
          <p
            id={product.descId}
            className="text-[12px] text-mocha mt-1 truncate"
          >
            {product.short}
          </p>
        </div>
        <span className={cn("font-serif text-lg whitespace-nowrap")}>
          ${product.price}
        </span>
      </div>
    </article>
  );
}
