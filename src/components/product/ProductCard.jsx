import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { StrkImage } from "@/components/ui/StrkMedia";
import Stars from "@/components/ui/Stars";

// Reusable product card with a hover second-image reveal and a quick
// "Add to Bag" action. Used by the homepage bestsellers, related products,
// and the shop grid.
export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const nameId = `pc-${product.id}-name`;
  const catId = `pc-${product.id}-cat`;

  return (
    <article className="group reveal" style={{ transitionDelay: `${index * 60}ms` }}>
      <div className="relative overflow-hidden rounded-sm bg-sand">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          {/* Primary image */}
          <StrkImage
            imgId={product.imgId}
            query={`[${nameId}] [${catId}] ${product.query}`}
            ratio="3x4"
            width={700}
            alt={product.name}
            className="aspect-[3/4] w-full transition-opacity duration-700 group-hover:opacity-0"
          />
          {/* Hover image */}
          <StrkImage
            imgId={product.hoverImgId}
            query={`[${nameId}] ${product.hoverQuery}`}
            ratio="3x4"
            width={700}
            alt={`${product.name} worn`}
            className="absolute inset-0 aspect-[3/4] w-full opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>

        {product.tag && (
          <span className="absolute left-3 top-3 bg-cream/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-luxe text-ink backdrop-blur-sm">
            {product.tag}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={() => addItem(product.id, "Gold", 1)}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-ink/90 py-3.5 font-sans text-xs font-semibold uppercase tracking-luxe text-cream backdrop-blur-sm transition-transform duration-300 ease-out hover:bg-gold group-hover:translate-y-0"
        >
          <Plus size={15} /> Add to Bag
        </button>
      </div>

      <div className="pt-4 text-center">
        <p id={catId} className="text-[10px] font-semibold uppercase tracking-overline text-gold">
          {product.category}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-semibold uppercase tracking-luxe text-ink">
          <Link to={`/product/${product.id}`} className="transition-colors hover:text-gold">
            <span id={nameId}>{product.name}</span>
          </Link>
        </h3>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <Stars value={product.rating} size={12} />
          <span className="text-[11px] text-inkSoft">({product.reviews})</span>
        </div>
        <p className="mt-1.5 font-sans text-sm font-semibold text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
