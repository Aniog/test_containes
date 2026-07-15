import { ShoppingBag } from "lucide-react";
import { StrkImage } from "@/components/ui/StrkImage";
import { StarRating } from "./StarRating";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export function ProductCard({ product, contextId = "" }) {
  const { addItem } = useCart();

  const query = `[product-${product.id}-name]${
    contextId ? ` [${contextId}]` : ""
  }`.trim();

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand/40">
        <Link
          to={`/products/${product.id}`}
          className="block h-full w-full"
        >
          <StrkImage
            id={`product-${product.id}-main`}
            query={query}
            ratio="4x3"
            width={600}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        <div className="pointer-events-none absolute inset-0 bg-velmora-ink/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product, product.variants[0], 1);
          }}
          className="absolute bottom-4 left-4 right-4 z-10 flex translate-y-0 items-center justify-center gap-2 bg-white/95 py-3 text-xs font-medium uppercase tracking-widest text-velmora-ink opacity-100 shadow-sm transition-all duration-300 hover:bg-velmora-ink hover:text-white focus-visible:translate-y-0 focus-visible:opacity-100 md:translate-y-3 md:opacity-0 group-hover:md:translate-y-0 group-hover:md:opacity-100"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      <div className="pt-4 text-center">
        <StarRating rating={product.rating} count={product.reviewCount} />
        <h3 className="mt-2 font-serif text-base uppercase tracking-widest text-velmora-ink">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p id={`product-${product.id}-name`} className="sr-only">
          {product.name} {product.category} gold jewelry
        </p>
        <p className="mt-1 text-sm font-medium text-velmora-charcoal/80">
          ${product.price}
        </p>
      </div>
    </article>
  );
}
