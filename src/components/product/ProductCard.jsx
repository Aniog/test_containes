import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

function Stars({ value = 0, size = 12 }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < full ? "#A07A4A" : "none"}
          stroke={i < full ? "#A07A4A" : "#DCCFB8"}
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product, eager = false }) {
  const [hovered, setHovered] = useState(false);
  const [colorId, setColorId] = useState(
    product.colors?.[0]?.id || "gold"
  );
  const { addToCart } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, [hovered, product.id]);

  const primary = product.images?.[0];
  const secondary = product.images?.[1] || primary;
  const showSecondary = hovered && secondary && secondary !== primary;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ product, colorId, quantity: 1 });
  };

  return (
    <article
      ref={cardRef}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative w-full overflow-hidden bg-cream aspect-[4/5]">
          {/* Primary image (always present) */}
          {primary && (
            <StrkImage
              imgId={`${product.id}-1`}
              query={`[${product.id}-name] [${product.id}-desc] ${product.name} gold jewelry editorial`}
              ratio="4x5"
              width={900}
              alt={primary.alt || product.name}
              eager={eager}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                showSecondary ? "opacity-0" : "opacity-100"
              )}
            />
          )}
          {/* Secondary image (revealed on hover) */}
          {secondary && secondary !== primary && (
            <StrkImage
              imgId={`${product.id}-2`}
              query={`[${product.id}-name] [${product.id}-desc] ${product.name} detail dark background`}
              ratio="4x5"
              width={900}
              alt={secondary.alt || product.name}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                showSecondary ? "opacity-100" : "opacity-0"
              )}
            />
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 label-cap bg-bg/90 text-ink px-2.5 py-1">
              {product.badge}
            </span>
          )}

          {/* Quick add (hover on desktop, always visible on mobile) */}
          <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 max-md:opacity-100 max-md:translate-y-0">
            <button
              type="button"
              onClick={handleQuickAdd}
              className="w-full inline-flex items-center justify-center gap-2 bg-ink/90 text-bg label-cap py-3 hover:bg-ink transition-colors backdrop-blur-sm"
            >
              <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Hidden IDs for image query references */}
      <span id={`${product.id}-name`} className="sr-only">
        {product.name}
      </span>
      <span id={`${product.id}-desc`} className="sr-only">
        {product.shortDescription}
      </span>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="product-name truncate">{product.name}</h3>
          </Link>
          <div className="mt-1.5 flex items-center gap-2">
            <Stars value={product.rating} />
            <span className="text-[11px] text-muted">
              ({product.reviewCount})
            </span>
          </div>
          {product.colors && product.colors.length > 1 && (
            <div className="mt-2 flex items-center gap-1.5">
              {product.colors.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setColorId(c.id)}
                  aria-label={`Select ${c.label}`}
                  className={cn(
                    "w-3.5 h-3.5 rounded-full border transition-all",
                    colorId === c.id
                      ? "border-ink scale-110"
                      : "border-hairline hover:border-muted"
                  )}
                  style={{ backgroundColor: c.swatch }}
                />
              ))}
            </div>
          )}
        </div>
        <p className="text-[14px] text-ink whitespace-nowrap mt-0.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
