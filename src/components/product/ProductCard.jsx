import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, eager = false }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    addItem(product, { variant: "gold", quantity: 1 });
    setTimeout(() => setAdding(false), 900);
  };

  const baseImgId = `pcard-${product.id}-a-${product.id.slice(0, 3)}`;
  const hoverImgId = `pcard-${product.id}-b-${product.id.slice(0, 3)}`;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={containerRef}
        className="relative aspect-[3/4] bg-surface overflow-hidden mb-5"
      >
        <img
          alt={product.name}
          data-strk-img-id={baseImgId}
          data-strk-img={`[${product.textIds.tagline}] [${product.textIds.title}] ${product.imageQuery}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            hovered ? "opacity-0" : "opacity-100",
          )}
          loading={eager ? "eager" : "lazy"}
        />
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={hoverImgId}
          data-strk-img={`[${product.textIds.desc}] [${product.textIds.title}] ${product.imageQuery} on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            hovered ? "opacity-100" : "opacity-0",
          )}
          loading="lazy"
        />

        {/* Quick add overlay */}
        <div
          className={cn(
            "absolute left-0 right-0 bottom-0 flex justify-center pb-4 transition-all duration-500",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
          )}
        >
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-2 bg-ivory/95 text-background px-5 py-2.5 text-[11px] font-sans uppercase tracking-button font-medium hover:bg-gold transition-colors"
            aria-label={`Quick add ${product.name} to bag`}
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>{adding ? "Added" : "Quick Add"}</span>
          </button>
        </div>
      </div>

      <div className="px-1">
        <h3
          id={product.textIds.title}
          className="product-name text-[12px] sm:text-[13px] group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </h3>
        <p
          id={product.textIds.tagline}
          className="mt-1 text-[11px] font-sans uppercase tracking-button text-ivory-muted"
        >
          {product.tagline}
        </p>
        <p
          id={product.textIds.desc}
          className="sr-only"
        >
          {product.description}
        </p>
        <p className="mt-2 text-sm text-ivory tabular-nums">${product.price}</p>
      </div>
    </Link>
  );
}
