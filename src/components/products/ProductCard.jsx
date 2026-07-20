import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency, placeholderSrc } from "../../data/storefront.js";

const ProductCard = ({ product, onAddToCart, idPrefix = "product-card", priority = false }) => {
  const titleId = `${idPrefix}-${product.slug}-title`;
  const descId = `${idPrefix}-${product.slug}-desc`;
  const hoverId = `${idPrefix}-${product.slug}-hover`;

  return (
    <article className="group rounded-[2rem] border border-stone-200 bg-stone-50 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link className="block" to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden rounded-[1.5rem] bg-stone-100">
          <span className="absolute left-4 top-4 z-20 rounded-full bg-stone-50/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-700">
            {product.badge}
          </span>
          <button
            type="button"
            aria-label={`Save ${product.name}`}
            className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-stone-50/90 text-stone-700 transition hover:text-amber-700"
          >
            <Heart className="h-4 w-4" />
          </button>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt={product.gallery[0].alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0"
              data-strk-img-id={`${idPrefix}-${product.slug}-primary`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              fetchPriority={priority ? "high" : "auto"}
              src={placeholderSrc}
            />
            <img
              alt={product.gallery[1]?.alt || product.gallery[0].alt}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              data-strk-img-id={`${idPrefix}-${product.slug}-secondary`}
              data-strk-img={`[${hoverId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={placeholderSrc}
            />
          </div>
          <div className="absolute inset-x-4 bottom-4 z-20 md:translate-y-3 md:opacity-0 md:transition md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <button
              type="button"
              className="button-primary w-full"
              onClick={(event) => {
                event.preventDefault();
                onAddToCart(product, product.variants[0], 1);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-3 px-2 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p id={titleId} className="product-name text-sm sm:text-base">
              {product.name}
            </p>
            <p className="mt-2 text-sm text-stone-500">{product.category}</p>
          </div>
          <p className="text-base font-semibold text-stone-950">
            {formatCurrency(product.price)}
          </p>
        </div>
        <p id={descId} className="text-sm leading-6 text-stone-600">
          {product.shortDescription}
        </p>
        <p id={hoverId} className="hidden">
          {product.hoverDescription}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
