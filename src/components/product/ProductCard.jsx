import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { useStrkImages } from "@/lib/useStrkImages";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);
  // Eager-loading cards (e.g., above-the-fold bestsellers) don't need ImageHelper help;
  // but we still wire it so any deferred list re-renders stay populated.
  useStrkImages(containerRef, [product.slug]);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.slug, product.variants?.[0]?.id || "gold", 1);
  };

  return (
    <article ref={containerRef} className="group">
      <Link
        to={`/product/${product.slug}`}
        className="block"
        aria-label={`View ${product.name}`}
      >
        <div className="relative overflow-hidden bg-ivory-100 aspect-square">
          <img
            alt={product.images[0].alt}
            data-strk-img-id={product.images[0].imgId}
            data-strk-img={product.images[0].query}
            data-strk-img-ratio="1x1"
            data-strk-img-width="800"
            loading={eager ? "eager" : "lazy"}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-luxe group-hover:scale-[1.04] group-hover:opacity-0"
          />
          <img
            alt={product.images[1].alt}
            data-strk-img-id={product.images[1].imgId}
            data-strk-img={product.images[1].query}
            data-strk-img-ratio="1x1"
            data-strk-img-width="800"
            loading="lazy"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-luxe group-hover:opacity-100 group-hover:scale-[1.04]"
          />

          {/* Quick add overlay */}
          <button
            type="button"
            onClick={handleQuickAdd}
            className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100 bg-ivory-50/95 text-ink-800 font-sans uppercase tracking-widest2 text-[10px] py-3 hover:bg-ink-800 hover:text-ivory-50"
            aria-label={`Add ${product.name} to cart`}
          >
            <span className="inline-flex items-center gap-2">
              <Plus className="h-3.5 w-3.5" /> Quick add
            </span>
          </button>
        </div>

        <div className="mt-4 flex flex-col items-start gap-1">
          <h3 className="product-name">{product.name}</h3>
          <div className="flex items-center gap-2 text-[12px] text-ink-500">
            <span className="inline-flex items-center gap-0.5 text-gold-500">
              <Star className="h-3 w-3 fill-current" />
              <Star className="h-3 w-3 fill-current" />
              <Star className="h-3 w-3 fill-current" />
              <Star className="h-3 w-3 fill-current" />
              <Star className="h-3 w-3 fill-current" />
            </span>
            <span className="font-sans">{product.rating.toFixed(1)} ({product.reviews})</span>
          </div>
          <p className="mt-1 font-sans text-[14px] text-ink-800">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}
