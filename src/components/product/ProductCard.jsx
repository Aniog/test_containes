import React from "react";
import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { strkSrc } from "@/lib/strkSrc";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [mainImg, hoverImg] = product.images;

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-sand">
        <Link
          to={`/product/${product.id}`}
          aria-label={`View ${product.name}`}
          className="block aspect-[4/5]"
        >
          <img
            data-strk-img-id={`card-${mainImg.imgId}`}
            data-strk-img={`[${mainImg.descId}] [${mainImg.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={strkSrc(`card-${mainImg.imgId}`)}
            alt={mainImg.alt}
            loading={eager ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-0"
          />
          <img
            data-strk-img-id={`card-${hoverImg.imgId}`}
            data-strk-img={`[${hoverImg.descId}] [${hoverImg.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={strkSrc(`card-${hoverImg.imgId}`)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
          />
        </Link>

        {product.isNew && (
          <span className="absolute left-4 top-4 bg-ivory px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso">
            New
          </span>
        )}
        {product.compareAtPrice && (
          <span className="absolute left-4 top-4 bg-bronze px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory">
            Gift Set
          </span>
        )}

        <button
          type="button"
          onClick={() => addItem(product.id, "gold", 1)}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-espresso/95 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory backdrop-blur transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-bronze group-hover:translate-y-0"
        >
          <Plus className="h-4 w-4" strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      <div className="pt-5 text-center">
        <div
          className="flex items-center justify-center gap-1"
          aria-label={`Rated ${product.rating} out of 5`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.round(product.rating)
                  ? "fill-bronze text-bronze"
                  : "text-line"
              }`}
              strokeWidth={1.5}
            />
          ))}
          <span className="ml-1 text-[11px] tracking-wide text-cocoa">
            ({product.reviews})
          </span>
        </div>
        <h3 className="mt-2.5 font-serif text-lg font-semibold uppercase tracking-[0.14em] text-espresso">
          <Link
            to={`/product/${product.id}`}
            className="transition-colors duration-300 hover:text-bronze"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm tracking-wide text-cocoa">
          {product.compareAtPrice && (
            <span className="mr-2 text-cocoa/70 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
