import { Link } from "react-router-dom";
import { products } from "@/data/products";
import StarRating from "@/components/ui/StarRating";
import AddToCartButton from "@/components/ui/AddToCartButton";
import { useCart, formatPrice } from "@/store/cart";
import { cn } from "@/lib/cn";

export default function ProductCard({ product, eager = false, compact = false, showQuickAdd = true }) {
  const { addItem } = useCart();
  if (!product) return null;
  const tone = product.tone?.[0] || "gold";

  return (
    <article className="product-card group">
      <Link
        to={`/product/${product.id}`}
        className="block"
        aria-label={`View ${product.name}`}
      >
        <div className="product-card-media relative aspect-[4/5] overflow-hidden bg-ivory-200">
          <img
            src={product.images[0]}
            alt={product.name}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="img-primary"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="img-secondary"
            />
          )}

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-ivory-50/90 text-espresso-200 text-[9px] tracking-widest2 uppercase font-sans">
              {product.badge}
            </div>
          )}

          {/* Quick add (appears on hover for desktop) */}
          {showQuickAdd && !compact && (
            <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-editorial hidden sm:block">
              <AddToCartButton
                size="sm"
                full
                onClick={() => addItem(product.id, tone, 1)}
                label="Quick add"
              />
            </div>
          )}
        </div>
      </Link>

      <div className={cn("pt-4 pb-2", compact ? "px-0" : "px-1")}>
        <div className="flex items-baseline justify-between gap-3">
          <Link to={`/product/${product.id}`} className="min-w-0">
            <h3 className="font-sans text-[11px] sm:text-[12px] tracking-wider2 uppercase text-espresso-200 truncate group-hover:text-gold-400 transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="font-serif text-lg text-espresso-200 whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
        {!compact && (
          <div className="mt-2 flex items-center gap-2 text-[11px] text-muted">
            <StarRating value={product.rating} size={10} />
            <span className="opacity-70">({product.reviewCount})</span>
          </div>
        )}
      </div>
    </article>
  );
}

export function ProductGrid({ items, className }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10",
        className,
      )}
    >
      {items.map((p, i) => (
        <ProductCard key={p.id} product={p} eager={i < 4} />
      ))}
    </div>
  );
}

export function BestsellerRow({ limit = 5 }) {
  return <ProductGrid items={products.slice(0, limit)} />;
}
