import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import StrkImg from "@/components/ui/StrkImg";
import Stars from "@/components/ui/Stars";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, product.tone, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col text-left"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="relative overflow-hidden bg-sand">
        <div className="aspect-[4/5] w-full">
          <StrkImg
            imgId={`card-${product.id}`}
            query={product.imageQuery}
            ratio="4x5"
            width={700}
            alt={product.name}
            className="transition-opacity duration-700 ease-luxe group-hover:opacity-0"
          />
          <StrkImg
            imgId={`card-${product.id}-hover`}
            query={product.hoverQuery}
            ratio="4x5"
            width={700}
            alt={`${product.name} worn`}
            className="absolute inset-0 opacity-0 transition-all duration-700 ease-luxe group-hover:scale-[1.03] group-hover:opacity-100"
          />
        </div>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-ivory/90 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-widest2 text-espresso backdrop-blur">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${product.name} to cart`}
          className={cn(
            "absolute bottom-3 right-3 flex items-center gap-1.5 px-3.5 py-2.5 font-body text-[11px] font-semibold uppercase tracking-widest2 shadow-card backdrop-blur transition-all duration-300 ease-luxe",
            "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100",
            added
              ? "bg-espresso text-ivory"
              : "bg-ivory/95 text-espresso hover:bg-espresso hover:text-ivory"
          )}
        >
          {added ? <Check size={14} /> : <Plus size={14} />}
          {added ? "Added" : "Add"}
        </button>
      </div>

      <div className="flex flex-col gap-1.5 pt-4">
        <div className="flex items-center justify-between gap-3">
          <span className="font-body text-[10px] font-semibold uppercase tracking-widest2 text-gold-deep">
            {product.category}
          </span>
          <Stars value={product.rating} size={12} />
        </div>
        <h3 className="font-display text-lg leading-snug tracking-widest2 text-espresso uppercase">
          {product.name}
        </h3>
        <p className="font-body text-sm font-semibold text-cocoa">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
