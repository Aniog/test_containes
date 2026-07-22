import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { cn, formatPrice } from "@/lib/utils";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const titleId = `card-${product.id}-title`;
  const subtitleId = `card-${product.id}-subtitle`;

  return (
    <article className="group">
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden bg-ivory border border-line/70 aspect-[4/5]"
        aria-label={`View ${product.name}`}
      >
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgPrimaryId}
          data-strk-img={`[${subtitleId}] [${titleId}] [bestsellers-title] gold jewelry editorial warm`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="700"
          src={product.imgPrimaryUrl}
          loading={eager ? "eager" : "lazy"}
          className="fade-img primary"
        />
        {/* Secondary image on hover */}
        {product.images[1] && (
          <img
            alt=""
            aria-hidden="true"
            data-strk-img-id={product.imgAltId}
            data-strk-img={`[${subtitleId}] [${titleId}] gold jewelry alternate angle warm`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="700"
            src={product.imgAltUrl}
            loading="lazy"
            className="fade-img alt"
          />
        )}

        {product.badge && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider-3 font-sans font-medium bg-cream/95 text-ink px-2.5 py-1 rounded-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add — slides up on hover (desktop) */}
        <div className="absolute left-3 right-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out hidden md:block">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem({ ...product }, product.tone?.[0], 1);
            }}
            className="w-full bg-cream/95 backdrop-blur-sm text-ink border border-ink/10 rounded-full py-2.5 text-[10px] uppercase tracking-wider-3 font-sans font-medium flex items-center justify-center gap-2 hover:bg-ink hover:text-cream transition-colors"
          >
            <Plus strokeWidth={1.5} className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3
            id={titleId}
            className="font-sans text-[11px] uppercase tracking-wider-2 text-ink font-medium truncate"
          >
            {product.name}
          </h3>
          <p
            id={subtitleId}
            className="text-xs text-muted font-sans font-light mt-1 truncate"
          >
            {product.subtitle}
          </p>
          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-muted font-sans font-light">
            <Star
              strokeWidth={0}
              fill="currentColor"
              className="w-3 h-3 text-gold"
            />
            <span className="text-ink/80">{product.rating}</span>
            <span className="text-muted/70">({product.reviews})</span>
          </div>
        </div>
        <span
          className={cn(
            "font-serif text-[17px] text-ink leading-none mt-0.5"
          )}
        >
          {formatPrice(product.price)}
        </span>
      </div>
    </article>
  );
}
