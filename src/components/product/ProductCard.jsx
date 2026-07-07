import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.tone || null, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`${product.name} — ${formatPrice(product.price)}`}
    >
      <div className="relative aspect-[4/5] bg-sand overflow-hidden">
        <img
          src={product.image}
          alt={product.imageAlt || product.name}
          loading={eager ? "eager" : "lazy"}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-editorial bg-ivory/90 text-ink px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add reveal */}
        <div className="absolute bottom-0 inset-x-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <button
            onClick={handleAdd}
            className="w-full inline-flex items-center justify-center gap-2 bg-ink/95 text-ivory text-[11px] uppercase tracking-editorial py-3 hover:bg-champagne transition-colors backdrop-blur-sm"
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4 pb-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="product-name text-[12px] md:text-[13px] truncate">
            {product.name}
          </h3>
          <span className="text-sm font-medium text-ink shrink-0">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="mt-1.5 text-[12px] text-muted truncate">
          {product.tagline}
        </p>
        {product.rating && (
          <div className="mt-1.5 flex items-center gap-1.5">
            <Star
              className="w-3 h-3 fill-champagne text-champagne"
              strokeWidth={0}
            />
            <span className="text-[11px] text-muted">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
