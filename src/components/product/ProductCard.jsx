import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { Stars } from "@/components/ui/Stars";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const ref = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <article ref={ref} className="group flex flex-col">
      <div className="relative overflow-hidden bg-cream border border-sand">
        <Link to={`/product/${product.id}`} className="block aspect-[4/5]">
          <img
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] ${product.name} worn on model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </Link>

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <button
            type="button"
            onClick={() => addItem(product, { tone: product.tones[0], quantity: 1 })}
            className="w-full py-3 bg-ivory/95 backdrop-blur text-ink uppercase tracking-[0.18em] text-[11px] hover:bg-gold hover:text-ivory transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-lg uppercase tracking-[0.12em] text-ink hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.blurb}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
