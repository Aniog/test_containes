import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import JewelImage from "@/components/ui/JewelImage";
import { useCart } from "@/context/CartContext";

const SHAPES = {
  "vivid-aura-jewels": "cuff",
  "majestic-flora-nectar": "pendant",
  "golden-sphere-huggies": "huggie",
  "amber-lace-earrings": "drop",
  "royal-heirloom-set": "set",
};

const BGS = {
  "vivid-aura-jewels": "velvet",
  "majestic-flora-nectar": "dusk",
  "golden-sphere-huggies": "warm",
  "amber-lace-earrings": "glow",
  "royal-heirloom-set": "cream",
};

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const imgRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!imgRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, imgRef.current);
  }, []);

  const shape = SHAPES[product.id] || "cuff";
  const bg = BGS[product.id] || "warm";
  const titleId = `product-${product.id}-title`;
  const taglineId = `product-${product.id}-tagline`;

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div
          ref={imgRef}
          className="relative aspect-[3/4] overflow-hidden bg-cream-warm"
        >
          {/* Primary fallback silhouette (always present) */}
          <JewelImage
            shape={shape}
            bg={bg}
            alt={product.alt}
            className="absolute inset-0 transition-opacity duration-700 ease-velvet"
            style={{ opacity: hovered && product.hoverImgId ? 0 : 1 }}
          />
          {/* Hover swap (different bg tone) */}
          {product.hoverImgId && (
            <JewelImage
              shape={shape}
              bg={bg === "warm" ? "velvet" : "warm"}
              alt={product.alt}
              className="absolute inset-0 transition-opacity duration-700 ease-velvet"
              style={{ opacity: hovered ? 1 : 0 }}
            />
          )}
          {/* Stock image overlay (loads on top, fades in).
              Each product gets its own hard-coded strk-img attribute so the
              build-time plugin can resolve the [id] references statically. */}
          {product.id === "vivid-aura-jewels" && (
            <img
              data-strk-img-id="vivid-aura-jewels-card-a"
              data-strk-img="[product-vivid-aura-jewels-tagline] [product-vivid-aura-jewels-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-velvet"
              style={{ opacity: 0 }}
              onLoad={(e) => { e.currentTarget.style.opacity = 1; }}
            />
          )}
          {product.id === "majestic-flora-nectar" && (
            <img
              data-strk-img-id="majestic-flora-nectar-card-a"
              data-strk-img="[product-majestic-flora-nectar-tagline] [product-majestic-flora-nectar-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-velvet"
              style={{ opacity: 0 }}
              onLoad={(e) => { e.currentTarget.style.opacity = 1; }}
            />
          )}
          {product.id === "golden-sphere-huggies" && (
            <img
              data-strk-img-id="golden-sphere-huggies-card-a"
              data-strk-img="[product-golden-sphere-huggies-tagline] [product-golden-sphere-huggies-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-velvet"
              style={{ opacity: 0 }}
              onLoad={(e) => { e.currentTarget.style.opacity = 1; }}
            />
          )}
          {product.id === "amber-lace-earrings" && (
            <img
              data-strk-img-id="amber-lace-earrings-card-a"
              data-strk-img="[product-amber-lace-earrings-tagline] [product-amber-lace-earrings-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-velvet"
              style={{ opacity: 0 }}
              onLoad={(e) => { e.currentTarget.style.opacity = 1; }}
            />
          )}
          {product.id === "royal-heirloom-set" && (
            <img
              data-strk-img-id="royal-heirloom-set-card-a"
              data-strk-img="[product-royal-heirloom-set-tagline] [product-royal-heirloom-set-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-velvet"
              style={{ opacity: 0 }}
              onLoad={(e) => { e.currentTarget.style.opacity = 1; }}
            />
          )}

          {product.badges?.[0] && (
            <span className="absolute top-3 left-3 z-10 eyebrow text-[0.62rem] bg-cream/90 text-ink px-2.5 py-1 rounded-full backdrop-blur-sm">
              {product.badges[0]}
            </span>
          )}

          {/* Quick add on hover */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants?.[0]?.id, 1);
            }}
            className={`absolute bottom-3 left-3 right-3 z-10 btn-base bg-ink/95 text-cream border-ink/95 backdrop-blur-sm ${
              hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            } transition-all duration-500 ease-velvet hover:bg-ink-soft`}
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 px-1 flex flex-col gap-1.5">
        <Link to={`/product/${product.id}`}>
          <h3
            id={titleId}
            className="eyebrow text-ink group-hover:text-champagne-dark transition-colors duration-300"
          >
            {product.name}
          </h3>
        </Link>
        <p id={taglineId} className="text-xs text-muted leading-relaxed line-clamp-2">
          {product.tagline}
        </p>
        <p className="mt-1 text-sm text-ink font-medium">${product.price}</p>
      </div>
    </article>
  );
}
