import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Stars } from "@/components/ui/primitives";
import { getStrkImageUrl } from "@/hooks/useStrkImages";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();

  // Load this card's images through the stock-image runtime once mounted.
  const cardRef = React.useRef(null);
  React.useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, cardRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id]);

  const primaryId = `card-${product.id}-a1`;
  const hoverId = `card-${product.id}-b2`;

  return (
    <article ref={cardRef} className="group animate-fade-up" style={{ animationDelay: `${index * 90}ms` }}>
      <div className="relative overflow-hidden bg-sand">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          {/* Primary image */}
          <img
            data-strk-img-id={primaryId}
            data-strk-img={`[card-name-${product.id}] [card-tag-${product.id}] gold jewelry product photography warm neutral background`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={getStrkImageUrl(primaryId)}
            alt={product.name}
            className="aspect-[3/4] w-full object-cover transition-opacity duration-700 ease-luxe group-hover:opacity-0"
          />
          {/* Hover (lifestyle) image */}
          <img
            data-strk-img-id={hoverId}
            data-strk-img={`[card-tag-${product.id}] [card-name-${product.id}] worn on model close-up warm light`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={getStrkImageUrl(hoverId)}
            alt={`${product.name} worn`}
            className="absolute inset-0 aspect-[3/4] w-full object-cover opacity-0 scale-105 transition-all duration-700 ease-luxe group-hover:opacity-100 group-hover:scale-100"
          />
        </Link>

        {product.isNew && (
          <span className="absolute left-4 top-4 bg-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
            New
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={() => addItem(product, "Gold", 1)}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-ink/90 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream transition-transform duration-500 ease-luxe hover:bg-gold group-hover:translate-y-0"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={14} /> Add to Cart
        </button>
      </div>

      <div className="pt-5 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`card-name-${product.id}`}
            className="font-serif text-[15px] md:text-base font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:text-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`card-tag-${product.id}`} className="mt-1 text-[13px] text-taupe">
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-2 font-serif text-lg font-medium text-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
