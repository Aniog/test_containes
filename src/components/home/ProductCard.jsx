import React from "react";
import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function ProductCard({ product, priority = false }) {
  const { addToCart } = useCart();
  const primaryImg = product.imgTitles?.[0] || product.name;
  const secondaryImg = product.imgTitles?.[1] || primaryImg;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.tone, 1);
    toast.success(`${product.name} added to bag.`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`${product.name}, $${product.price}`}
    >
      <div className="relative aspect-square bg-ivory-soft overflow-hidden img-zoom-on-hover">
        {/* Primary image */}
        <img
          alt={product.imgTitles?.[0] || product.name}
          data-strk-img-id={`${product.imgIds?.[0]}-card-a`}
          data-strk-img={`[${primaryImg}] [product-card-name-${product.id}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="700"
          className="absolute inset-0 w-full h-full object-cover"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {/* Secondary image (fades in on hover) */}
        {product.imgIds?.[1] && (
          <img
            alt={product.imgTitles?.[1] || product.name}
            data-strk-img-id={`${product.imgIds[1]}-card-b`}
            data-strk-img={`[${secondaryImg}] [product-card-name-${product.id}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="700"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out-soft"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        )}

        {/* Quick add — appears on hover (desktop) or always-visible on mobile via tap target */}
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Quick add ${product.name} to bag`}
          className="absolute bottom-0 left-0 right-0 bg-espresso/95 text-ivory py-3 text-[11px] uppercase tracking-wider-2 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out-soft flex items-center justify-center gap-2"
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
          Quick Add
        </button>

        {product.tags?.includes("new") && (
          <span className="absolute top-3 left-3 bg-ivory/95 text-espresso text-[10px] uppercase tracking-widest-2 px-2.5 py-1 font-medium">
            New
          </span>
        )}
        {product.tags?.includes("gift") && (
          <span className="absolute top-3 right-3 bg-gold text-espresso text-[10px] uppercase tracking-widest-2 px-2.5 py-1 font-medium">
            Gift
          </span>
        )}
      </div>
      <div className="pt-4">
        <h3
          id={`product-card-name-${product.id}`}
          className="product-name text-[13px]"
        >
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-ink font-light tabular-nums">
            ${product.price}
          </span>
          <span className="text-[11px] uppercase tracking-wider-2 text-ink-muted">
            {product.subcategory}
          </span>
        </div>
      </div>
    </Link>
  );
}
