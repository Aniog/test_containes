import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import StockImage from "@/components/ui/StockImage";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, className = "", showQuickAdd = true }) {
  const { addItem } = useCart();

  return (
    <article className={cn("product-card group relative", className)}>
      <Link
        to={`/product/${product.id}`}
        className="block"
        aria-label={`View ${product.name}`}
      >
        <div className="relative">
          <StockImage
            query={product.img1}
            ratio="3x4"
            width={800}
            imgId={`${product.id}-img-1`}
            className="w-full product-img-1"
            alt={product.name}
          />
          <StockImage
            query={product.img2}
            ratio="3x4"
            width={800}
            imgId={`${product.id}-img-2`}
            className="w-full product-img-2 absolute inset-0"
            alt={`${product.name} alternate view`}
          />

          {product.badge && (
            <span className="absolute top-3 left-3 chip bg-cream-100/95 backdrop-blur-sm text-[10px] py-1">
              {product.badge}
            </span>
          )}

          {showQuickAdd && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, { tone: product.tones?.[0] });
              }}
              className="quick-add absolute left-3 right-3 bottom-3 btn-primary !py-2.5 !text-[10px] !tracking-widest-2 bg-onyx-800/95 backdrop-blur-sm hover:bg-onyx-900"
              aria-label={`Quick add ${product.name} to cart`}
            >
              <Plus size={14} strokeWidth={1.5} /> Quick add
            </button>
          )}
        </div>
      </Link>

      <div className="pt-4 px-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="product-name font-medium">
            {product.name}
          </h3>
          <span className="text-[13px] tracking-wider text-onyx-800 tabular-nums pt-px">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="font-display italic text-[15px] text-mocha-500 mt-1.5 leading-snug">
          {product.tagline}
        </p>
      </div>
    </article>
  );
}
