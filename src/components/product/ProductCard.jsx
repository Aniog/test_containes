import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import ImageFrame from "@/components/ui/ImageFrame";
import StarRating from "@/components/ui/StarRating";

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const nameId = `card-${product.id}-name`;
  const taglineId = `card-${product.id}-tagline`;
  const imgId = `card-${product.id}-img`;
  const imgAltId = `card-${product.id}-img-alt`;

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.slug}`} className="block">
          <ImageFrame
            id={imgId}
            query={`[${taglineId}] [${nameId}]`}
            ratio="3x4"
            width={800}
            alt={product.name}
            className="transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
          />
          {/* Hover image (second product shot) */}
          {product.imageHover && (
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                hovered ? "opacity-100" : "opacity-0"
              )}
              aria-hidden="true"
            >
              <ImageFrame
                id={imgAltId}
                query={`[${taglineId}] [${nameId}]`}
                ratio="3x4"
                width={800}
                alt={product.name}
                className="!bg-espresso"
              />
            </div>
          )}
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 inline-flex items-center bg-ivory/95 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-product text-charcoal">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-ivory/90 text-charcoal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <Heart size={15} strokeWidth={1.5} />
        </button>

        <div
          className={cn(
            "absolute inset-x-3 bottom-3 transition-all duration-300",
            hovered
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          )}
        >
          <button
            type="button"
            onClick={() => addItem(product)}
            className="flex w-full items-center justify-center gap-2 bg-charcoal/95 px-4 py-3 font-sans text-[11px] font-medium uppercase tracking-product text-ivory backdrop-blur transition-colors hover:bg-charcoal"
          >
            <Plus size={13} strokeWidth={1.6} />
            Add to bag
          </button>
        </div>
      </div>

      <Link
        to={`/product/${product.slug}`}
        className="mt-5 flex flex-col items-start"
      >
        <div className="flex w-full items-start justify-between gap-3">
          <h3 id={nameId} className="product-name">
            {product.name}
          </h3>
          <p className="font-sans text-[14px] text-charcoal">
            {formatPrice(product.price)}
          </p>
        </div>
        <p
          id={taglineId}
          className="mt-1 font-sans text-[12px] text-mocha"
        >
          {product.tagline}
        </p>
        <div className="mt-2">
          <StarRating value={product.rating} size={12} showValue reviewCount={product.reviews} />
        </div>
      </Link>
    </article>
  );
}
