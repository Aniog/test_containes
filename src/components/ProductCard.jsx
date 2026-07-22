import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext.jsx";
import { formatPrice } from "@/data/products.js";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const titleId = `product-${product.id}-title`;
  const taglineId = `product-${product.id}-tagline`;

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id]);

  return (
    <article ref={containerRef} className="group animate-fade-up" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="relative overflow-hidden bg-cream">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <img
            alt={product.name}
            data-strk-img-id={`card-${product.id}-a`}
            data-strk-img={`[${taglineId}] [${titleId}] gold jewelry product photography warm light`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={SVG_PLACEHOLDER}
            className="aspect-[3/4] w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />
          <img
            alt=""
            aria-hidden="true"
            data-strk-img-id={`card-${product.id}-b`}
            data-strk-img={`[${taglineId}] [${titleId}] gold jewelry worn on model close up editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={SVG_PLACEHOLDER}
            className="absolute inset-0 aspect-[3/4] w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>

        {product.isBestseller && (
          <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso">
            Bestseller
          </span>
        )}

        <button
          onClick={() => addItem(product)}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-ink/90 py-3.5 text-[11px] font-semibold uppercase tracking-luxe text-ivory backdrop-blur transition-transform duration-500 ease-luxe hover:bg-gold group-hover:translate-y-0"
        >
          <Plus className="h-4 w-4" strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      <div className="pt-5 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={titleId}
            className="font-serif text-lg font-semibold uppercase tracking-wide2 text-ink transition-colors hover:text-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p id={taglineId} className="mt-1 text-sm text-taupe">
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="flex items-center gap-1 text-gold">
            <Star className="h-3.5 w-3.5 fill-gold" strokeWidth={0} />
            <span className="text-xs font-medium text-espresso">{product.rating}</span>
          </span>
          <span className="text-xs text-taupe">({product.reviews})</span>
          <span className="text-xs text-sand">·</span>
          <span className="text-sm font-semibold tracking-wide text-espresso">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </article>
  );
}
