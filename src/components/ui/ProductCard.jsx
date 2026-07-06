import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductImage } from "./ProductImage";
import { StarRating } from "./StarRating";
import { formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "gold", 1);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn("group block", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-linen">
        <ProductImage
          product={product}
          ratio={product.imageRatio}
          width={600}
          suffix="card-main"
          className="absolute inset-0 transition-opacity duration-700 ease-out"
        />
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out",
            hovered ? "opacity-100" : "opacity-0"
          )}
        >
          <ProductImage
            product={product}
            ratio={product.hoverRatio}
            width={600}
            hover
            suffix="card-hover"
            className="h-full w-full"
          />
        </div>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/90 px-2.5 py-1 text-[10px] uppercase tracking-widest text-espresso">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            "absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-espresso py-3 text-xs uppercase tracking-widest text-cream transition-all duration-300 hover:bg-gold hover:text-espresso",
            hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>

      <div className="pt-4 text-center">
        <StarRating rating={product.rating} size={12} className="mb-2 justify-center" />
        <h3 className="font-serif text-sm uppercase tracking-widest text-espresso transition-colors group-hover:text-gold">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-warm-gray">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
