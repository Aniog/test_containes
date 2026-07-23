import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useState } from "react";
import ProductImage from "@/components/ui/ProductImage";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);

  const onQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ productId: product.id, tone: product.tone, size: "One Size", quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      id={`product-card-${product.id}`}
    >
      <div className="relative overflow-hidden bg-ivory-200">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 inline-flex items-center h-6 px-3 bg-ivory text-espresso text-[10px] uppercase tracking-widest font-medium">
            {product.badge}
          </span>
        )}

        {/* Primary image */}
        <div
          className={cn(
            "transition-opacity duration-700 ease-smooth",
            hover ? "opacity-0" : "opacity-100"
          )}
        >
          <ProductImage
            imgId={`${product.id}-primary`}
            query={product.imageQueries[0]}
            ratio="4x5"
            width={800}
            alt={product.name}
            eager={eager}
          />
        </div>
        {/* Hover image */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-smooth",
            hover ? "opacity-100" : "opacity-0"
          )}
        >
          <ProductImage
            imgId={`${product.id}-hover`}
            query={product.imageQueries[1] || product.imageQueries[0]}
            ratio="4x5"
            width={800}
            alt={`${product.name} alternate view`}
          />
        </div>

        {/* Quick add */}
        <button
          type="button"
          onClick={onQuickAdd}
          className={cn(
            "absolute inset-x-3 bottom-3 z-10 inline-flex items-center justify-center gap-2 h-10 bg-espresso text-ivory text-[11px] uppercase tracking-widest font-medium transition-all duration-500 ease-smooth",
            hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          )}
          aria-label={`Quick add ${product.name} to bag`}
        >
          <Plus size={14} strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={`product-name-${product.id}`}
          className="font-sans text-[12px] uppercase tracking-widest font-medium text-espresso"
        >
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-serif italic text-taupe">
          {formatPrice(product.price)}
          {product.compareAt && (
            <span className="ml-2 not-italic text-[11px] line-through text-taupe/70 font-sans">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}
