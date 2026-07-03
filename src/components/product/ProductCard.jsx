import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { tone: product.tones[0], quantity: 1 });
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`${product.imgId}-main`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-luxury group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={`${product.name} worn`}
          data-strk-img-id={`${product.imgId}-alt`}
          data-strk-img={`[${product.titleId}] worn styling ${product.subtitle}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-luxury group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 font-sans text-[10px] uppercase tracking-widest2 text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 ease-luxury group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 px-4 py-3 font-sans text-[11px] uppercase tracking-widest2 text-cream backdrop-blur-sm transition-colors hover:bg-gold"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base uppercase tracking-widest2 text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.subtitle}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={11} />
          <span className="font-sans text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 font-sans text-sm text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
