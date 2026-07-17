import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import { useCart } from "@/context/CartContext";
import { formatPrice, slugify } from "@/lib/utils";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const slug = slugify(product.name);

  return (
    <article className="product-card group relative">
      <Link
        to={`/shop/${slug}`}
        className="block relative overflow-hidden bg-cream-soft"
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <StrkImage
            imgId={product.imgIds.primary}
            query={`[card-desc-${product.id}] [card-name-${product.id}] [bestsellers-title]`}
            ratio="4x5"
            width={800}
            alt={product.name}
            eager={eager}
            className="product-card-img product-card-img-primary"
          />
          <StrkImage
            imgId={product.imgIds.secondary}
            query={`[card-desc-${product.id}] [card-name-${product.id}]`}
            ratio="4x5"
            width={800}
            alt=""
            aria-hidden="true"
            className="product-card-img product-card-img-secondary absolute inset-0 opacity-0"
          />
          {product.badge && (
            <span className="absolute left-3 top-3 bg-cream-soft/95 px-2.5 py-1 text-[10px] tracking-eyebrow uppercase text-ink">
              {product.badge}
            </span>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="quick-add absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-ink text-ivory px-3.5 py-2.5 text-[10px] tracking-eyebrow uppercase opacity-0 translate-y-2 transition-all duration-500 shadow-chip"
            aria-label={`Quick add ${product.name} to cart`}
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 pb-1">
        <div className="flex items-start justify-between gap-3">
          <h3 id={`card-name-${product.id}`} className="product-name text-[12px]">
            {product.name}
          </h3>
          <p className="font-display text-lg leading-none">{formatPrice(product.price)}</p>
        </div>
        <p
          id={`card-desc-${product.id}`}
          className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft line-clamp-1"
        >
          {product.short}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-ink-soft">
          <span className="inline-flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="star"
                style={{
                  fill: i < Math.round(product.rating) ? "currentColor" : "transparent",
                  color: i < Math.round(product.rating) ? "var(--gold)" : "var(--line)",
                }}
              />
            ))}
          </span>
          <span className="text-[11px] text-ink-soft">
            {product.rating.toFixed(1)} · {product.reviews}
          </span>
        </div>
      </div>
    </article>
  );
}
