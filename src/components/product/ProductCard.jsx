import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div className="relative overflow-hidden bg-sand/50 aspect-[4/5]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[product-${product.id}-name] [product-${product.id}-tagline] jewelry`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          alt={product.name}
          loading={eager ? "eager" : "lazy"}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {/* Hover image */}
        {product.images[1] && (
          <img
            data-strk-img-id={product.images[1].id}
            data-strk-img={`[product-${product.id}-name] [product-${product.id}-tagline] worn on model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            alt={`${product.name} alternate view`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-100 group-hover:scale-[1.04]"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        )}

        {product.badge && (
          <span className="absolute top-3 left-3 bg-ivory/90 text-espresso text-[0.62rem] uppercase tracking-[0.22em] px-2.5 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 sm:bottom-3 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-400 bg-ivory text-espresso text-[0.7rem] uppercase tracking-[0.22em] py-3 px-4 inline-flex items-center justify-center gap-2 hover:bg-espresso hover:text-ivory"
          aria-label={`Quick add ${product.name} to bag`}
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />
          <span className="hidden sm:inline">Add to Bag</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      <div className="pt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3
            id={`product-${product.id}-name`}
            className="product-name text-[0.82rem] truncate"
          >
            {product.name}
          </h3>
          <p
            id={`product-${product.id}-tagline`}
            className="text-xs text-espresso/55 mt-1 truncate"
          >
            {product.tagline}
          </p>
        </div>
        <p className="text-sm font-medium whitespace-nowrap mt-0.5">
          {formatPrice(product.price)}
        </p>
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-espresso/60">
        <Star className="w-3 h-3 fill-brass text-brass" strokeWidth={0} />
        <span className="text-xs">
          {product.rating.toFixed(1)} <span className="text-espresso/40">({product.reviews})</span>
        </span>
      </div>
    </Link>
  );
}
