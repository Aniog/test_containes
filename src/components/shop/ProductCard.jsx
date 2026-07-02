import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { StrkImage } from "@/components/ui/StrkImage";

export function ProductCard({ product, className }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const defaultVariant = product.tone?.[0] || "gold";

  const titleId = `product-title-${product.id}`;
  const categoryId = `product-category-${product.id}`;

  return (
    <article
      className={cn("group relative flex flex-col", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/products/${product.id}`}
        className="relative aspect-[4/5] overflow-hidden bg-velmora-cream"
      >
        <StrkImage
          id={product.imageIds.primary}
          query={`[${titleId}] [${categoryId}] gold jewelry`}
          ratio="4x5"
          width={600}
          alt={product.name}
          className={cn(
            "absolute inset-0 transition-transform duration-700 ease-out",
            hovered && "scale-105"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            hovered ? "opacity-100" : "opacity-0"
          )}
        >
          <StrkImage
            id={product.imageIds.hover}
            query={`[${titleId}] [${categoryId}] gold jewelry detail`}
            ratio="4x5"
            width={600}
            alt={`${product.name} alternate`}
            className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
          />
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addItem(product, defaultVariant);
          }}
          className={cn(
            "absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-velmora-fg py-3 text-xs font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-velmora-accent",
            hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Quick Add
        </button>
      </Link>

      <div className="mt-4 flex flex-col items-start gap-1">
        <p id={categoryId} className="text-[10px] uppercase tracking-widest text-velmora-muted">
          {product.category}
        </p>
        <h3 id={titleId} className="product-name">
          <Link to={`/products/${product.id}`} className="hover:text-velmora-accent transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm font-medium text-velmora-fg">${product.price}</p>
      </div>
    </article>
  );
}
