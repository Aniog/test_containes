import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { IMG_PLACEHOLDER } from "@/lib/placeholder";

/**
 * ProductCard — keeps img/strk-img attributes literal-ish inside this file so
 * the build-time strk-img plugin can resolve them when this component is
 * inlined into a same-file `.map()` call.
 *
 * For consistent results, prefer rendering this card alongside a same-file map
 * (see Bestsellers, Shop, ProductDetail "you may also like").
 */
export default function ProductCard({ product, idPrefix = "card" }) {
  const { addItem } = useCart();
  const titleId = `${idPrefix}-${product.id}-title`;
  const descId = `${idPrefix}-${product.id}-desc`;

  return (
    <article className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-sand">
          <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
            <img
              alt={product.name}
              data-strk-img-id={`product-card-primary-${product.id}-v2`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src={IMG_PLACEHOLDER}
              className="w-full h-full object-cover bg-sand group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </div>
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <img
              alt={`${product.name} alternate view`}
              data-strk-img-id={`product-card-hover-${product.id}-v2`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src={IMG_PLACEHOLDER}
              className="w-full h-full object-cover bg-sand scale-[1.02]"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, { quantity: 1 });
            }}
            className="absolute bottom-3 left-3 right-3 bg-ivory/95 text-ink py-3 text-[10px] uppercase tracking-[0.22em] font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-ink hover:text-ivory flex items-center justify-center gap-2"
            aria-label={`Quick add ${product.name}`}
          >
            <Plus size={12} strokeWidth={2} />
            Add to Cart
          </button>
        </div>

        <div className="mt-4 text-center">
          <h3
            id={titleId}
            className="text-[11px] uppercase tracking-[0.22em] font-medium text-ink"
          >
            {product.name}
          </h3>
          <p id={descId} className="sr-only">
            {product.blurb}
          </p>
          <p className="mt-1.5 text-sm font-serif text-ink/90">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}
