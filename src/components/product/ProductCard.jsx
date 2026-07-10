import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import StarRating from "@/components/ui/StarRating";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-sand-100">
        {/* Primary image */}
        <div
          className="absolute inset-0 editorial-transition"
          style={{ opacity: hover ? 0 : 1 }}
          aria-hidden={hover}
        >
          <StrkImage
            imgId={product.imgId1}
            query={`[${product.descId}] [${product.titleId}] gold jewelry on dark background`}
            ratio="4x5"
            width={800}
            alt={product.name}
          />
        </div>
        {/* Hover image */}
        <div
          className="absolute inset-0 editorial-transition"
          style={{ opacity: hover ? 1 : 0 }}
          aria-hidden={!hover}
        >
          <StrkImage
            imgId={product.imgId2}
            query={`[${product.titleId}] detail closeup of demi-fine gold ${product.category}`}
            ratio="4x5"
            width={800}
            alt={`${product.name} alternate view`}
          />
        </div>

        {/* Quick add */}
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Quick add ${product.name} to bag`}
          className="absolute left-0 right-0 bottom-0 mx-3 mb-3 inline-flex items-center justify-center gap-2 bg-ink-950/95 text-textondark py-3 text-[11px] font-sans uppercase tracking-widest2 font-medium editorial-transition translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-ink-900"
        >
          <Plus size={12} strokeWidth={1.6} />
          Quick Add
        </button>
      </div>

      <div className="pt-5 text-center">
        <h3
          id={product.titleId}
          className="font-sans text-[12px] uppercase tracking-wider1 text-ink-950 group-hover:text-champagne-600 editorial-transition"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="mt-1 text-[12px] text-textmute"
        >
          {product.material}
        </p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="font-sans text-sm text-ink-950">{formatPrice(product.price)}</span>
          <span className="text-sand-300">·</span>
          <StarRating value={product.rating} size={11} />
        </div>
      </div>
    </Link>
  );
}
