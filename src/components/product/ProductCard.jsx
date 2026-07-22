import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <article className="group flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="media-swap relative block aspect-[4/5] overflow-hidden bg-cream"
        aria-label={`View ${product.name}`}
      >
        <StrkImage
          query={product.imageQuery}
          ratio="4x5"
          width={700}
          alt={product.name}
          className="absolute inset-0 h-full w-full"
          imgClassName="media-swap__primary h-full w-full object-cover"
        />
        <StrkImage
          query={product.imageQueryAlt || product.imageQuery}
          ratio="4x5"
          width={700}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          imgClassName="media-swap__secondary h-full w-full object-cover"
        />

        {/* Badge */}
        {product.badge ? (
          <span className="absolute left-3 top-3 z-10 bg-ivory/95 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest2 text-espresso">
            {product.badge}
          </span>
        ) : null}

        {/* Quick add — slides up on hover */}
        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 transition-all duration-500 ease-editorial group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product.id, "default", 1);
            }}
            className="flex w-full items-center justify-center gap-2 bg-espresso/95 py-3 text-[11px] font-medium uppercase tracking-widest2 text-ivory backdrop-blur transition-colors hover:bg-espresso"
          >
            <Plus size={14} strokeWidth={1.6} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="mt-4 flex flex-col gap-1.5 px-1">
        <Link
          to={`/product/${product.id}`}
          className={cn(
            "block font-sans text-[12px] font-medium uppercase tracking-editorial text-espresso",
            "transition-colors hover:text-gold-deep"
          )}
        >
          {product.name}
        </Link>
        <div className="flex items-baseline justify-between">
          <span className="font-sans text-[14px] font-medium tabular text-espresso">
            {formatPrice(product.price)}
          </span>
          <span className="font-sans text-[11px] uppercase tracking-wide text-muted">
            {product.category}
          </span>
        </div>
      </div>
    </article>
  );
}
