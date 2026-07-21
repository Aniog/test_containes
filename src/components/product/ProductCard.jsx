import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { PLACEHOLDER_SRC } from "@/components/ui/StrkImg";
import Stars from "@/components/ui/Stars";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

/**
 * Product card with hover second-image reveal and quick add-to-cart.
 * `idPrefix` scopes the text ids for the stock-image query system
 * (e.g. "shop", "related", "bestseller").
 */
export default function ProductCard({ product, idPrefix = "shop", index = 0 }) {
  const { addToCart } = useCart();
  const nameId = `${idPrefix}-${product.id}-name`;
  const descId = `${idPrefix}-${product.id}-desc`;

  return (
    <article className="group relative flex flex-col bg-cream border border-line transition-shadow duration-500 hover:shadow-[0_20px_50px_-24px_rgba(30,25,19,0.35)]">
      {product.badge && (
        <span className="absolute left-4 top-4 z-10 bg-ivory/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep border border-line">
          {product.badge}
        </span>
      )}

      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-[3/4] overflow-hidden bg-sand"
      >
        <img
          data-strk-img-id={`card-a-${idPrefix}-${product.id}`}
          data-strk-img={`[${nameId}] [${descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="700"
          src={PLACEHOLDER_SRC}
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
          loading="lazy"
        />
        <img
          data-strk-img-id={`card-b-${idPrefix}-${product.id}`}
          data-strk-img={`[${descId}] [${nameId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="700"
          src={PLACEHOLDER_SRC}
          alt={`${product.name} worn`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
          loading="lazy"
        />
      </Link>

      {/* Quick add */}
      <button
        onClick={() => addToCart(product)}
        className="absolute inset-x-0 top-[calc(75%-44px)] z-10 mx-4 hidden items-center justify-center gap-2 bg-ink/90 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-ivory opacity-0 backdrop-blur transition-all duration-300 hover:bg-gold group-hover:opacity-100 md:flex"
        aria-label={`Add ${product.name} to cart`}
      >
        <Plus size={13} /> Add to Cart
      </button>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <Link to={`/product/${product.id}`}>
          <h3
            id={nameId}
            className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-ink transition-colors group-hover:text-gold-deep"
          >
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-bronze">
          {product.short}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">
            {formatPrice(product.price)}
          </p>
          <Stars rating={product.rating} size={12} />
        </div>
        {/* Mobile quick add */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 flex items-center justify-center gap-2 border border-ink py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink transition-colors hover:bg-ink hover:text-ivory md:hidden"
        >
          <Plus size={13} /> Add to Cart
        </button>
      </div>
    </article>
  );
}
