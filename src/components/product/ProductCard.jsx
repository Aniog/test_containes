import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { PLACEHOLDER_IMG, formatPrice } from "@/data/products";
import StarRating from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, index = 0, className }) {
  const { addItem, openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addItem(product.id, "Gold", 1);
    openCart();
  };

  return (
    <article className={cn("group relative", className)}>
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <img
            src={PLACEHOLDER_IMG}
            alt={product.name}
            loading="lazy"
            data-strk-img-id={`card-${product.id}-main`}
            data-strk-img={`[card-${product.id}-tagline] [card-${product.id}-name] warm gold jewelry product photography on neutral background`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-0"
          />
          <img
            src={PLACEHOLDER_IMG}
            alt=""
            aria-hidden="true"
            loading="lazy"
            data-strk-img-id={`card-${product.id}-alt`}
            data-strk-img={`[card-${product.id}-tagline] gold jewelry worn on model close-up warm light`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
          />

          {product.badge && (
            <span className="absolute left-3 top-3 bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-espresso backdrop-blur-sm">
              {product.badge}
            </span>
          )}

          <button
            type="button"
            onClick={handleQuickAdd}
            className="absolute inset-x-0 bottom-0 translate-y-full bg-espresso/90 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cream backdrop-blur-sm transition-transform duration-400 ease-out hover:bg-espresso group-hover:translate-y-0"
          >
            Add to Cart
          </button>
        </div>

        <div className="pt-4 text-center">
          <p
            id={`card-${product.id}-tagline`}
            className="text-[10px] uppercase tracking-[0.24em] text-taupe"
          >
            {product.tagline}
          </p>
          <h3
            id={`card-${product.id}-name`}
            className="mt-1.5 font-display text-lg font-medium uppercase tracking-[0.14em] text-espresso"
          >
            {product.name}
          </h3>
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <StarRating rating={product.rating} size={11} />
            <span className="text-[11px] text-taupe">({product.reviews})</span>
          </div>
          <p className="mt-1.5 text-sm font-medium tracking-wide text-espresso">
            {product.compareAt && (
              <span className="mr-2 text-taupe line-through">
                {formatPrice(product.compareAt)}
              </span>
            )}
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}
