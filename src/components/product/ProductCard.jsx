import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import StarRating from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductCard({ product, className, eager = false }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className={cn("group", className)}>
      <div className="relative overflow-hidden bg-cream">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <div className="relative aspect-[3/4]">
            <img
              data-strk-img-id={`pcimg-a-${product.id}`}
              data-strk-img={`[pc-tag-${product.id}] [pc-name-${product.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src={PLACEHOLDER_SRC}
              alt={product.name}
              loading={eager ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
            />
            <img
              data-strk-img-id={`pcimg-b-${product.id}`}
              data-strk-img={`[pc-life-${product.id}] [pc-name-${product.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src={PLACEHOLDER_SRC}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
            />
          </div>
        </Link>
        <span id={`pc-life-${product.id}`} className="sr-only" aria-hidden="true">
          worn by a model in warm editorial light, gold jewelry close-up
        </span>

        {product.isNew && (
          <span className="absolute left-3 top-3 bg-ivory/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-noir">
            New
          </span>
        )}

        <button
          type="button"
          onClick={() => addItem(product.id)}
          className="absolute inset-x-0 bottom-0 flex translate-y-0 items-center justify-center gap-2 bg-noir/90 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory backdrop-blur-sm transition-all duration-500 hover:bg-gold md:translate-y-full md:group-hover:translate-y-0"
        >
          <Plus size={13} strokeWidth={1.5} /> Add to Cart
        </button>
      </div>

      <div className="pt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`pc-name-${product.id}`}
            className="font-serif text-base font-semibold uppercase tracking-[0.14em] text-noir transition-colors hover:text-gold md:text-lg"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`pc-tag-${product.id}`} className="mt-1 text-xs text-taupe">
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium tracking-wide text-noir">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
}
