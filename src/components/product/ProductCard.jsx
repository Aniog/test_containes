import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import StrkImg from "@/components/ui/ImagePlaceholder";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.colors[0].id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const [imgQuery, altQuery] = product.images;
  const titleId = `card-title-${product.id}`;
  const tagId = `card-tag-${product.id}`;

  return (
    <Link
      to={`/product/${product.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col gap-4"
    >
      {/* Image stack */}
      <div className="relative w-full overflow-hidden bg-espresso/95">
        <div className="relative aspect-[3/4] product-image-stack">
          <StrkImg
            imgId={`${product.id}-img-1`}
            query={imgQuery}
            ratio="3x4"
            width={700}
            alt={product.name}
            className="absolute inset-0 h-full w-full"
            imgClassName={cn(
              "transition-opacity duration-500 ease-out-soft",
              hovered ? "opacity-0" : "opacity-100"
            )}
          />
          <StrkImg
            imgId={`${product.id}-img-2`}
            query={altQuery}
            ratio="3x4"
            width={700}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full"
            imgClassName={cn(
              "transition-opacity duration-500 ease-out-soft",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
        </div>

        {product.badge && (
          <span className="absolute top-3 left-3 bg-ivory text-espresso label text-[9px] px-2.5 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            "absolute bottom-3 left-3 right-3 py-3 bg-ivory text-espresso",
            "label text-[10px] flex items-center justify-center gap-2",
            "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
            "transition-all duration-300 ease-out-soft hover:bg-espresso hover:text-ivory"
          )}
          aria-label={`Quick add ${product.name} to bag`}
        >
          {added ? (
            <>
              <Check size={12} strokeWidth={1.5} /> Added
            </>
          ) : (
            <>
              <Plus size={12} strokeWidth={1.5} /> Quick Add
            </>
          )}
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 px-1">
        <div className="flex items-start justify-between gap-2">
          <h3 id={titleId} className="label text-espresso truncate">
            {product.name}
          </h3>
          <span className="label text-espresso whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
        <p id={tagId} className="text-xs text-taupe font-light">
          {product.tagline}
        </p>
        <div className="flex items-center gap-1.5 text-[11px] text-taupe mt-1">
          <span className="text-brass">★</span>
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-hairline">·</span>
          <span>{product.reviews} reviews</span>
        </div>
      </div>
    </Link>
  );
}
