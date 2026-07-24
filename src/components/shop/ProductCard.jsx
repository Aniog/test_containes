import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import StrkImage from "@/components/ui/StrkImage";
import Stars from "@/components/ui/Stars";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product.id, "Gold", 1);
    toast.success(`${product.name} added to your bag`);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-sand">
        <div className="aspect-[3/4]">
          <StrkImage
            imgId={`card-${product.imgId}`}
            query={`[${product.tagId}] [${product.titleId}]`}
            ratio="3x4"
            width="700"
            alt={product.name}
            className="transition-opacity duration-700 ease-luxe group-hover:opacity-0"
          />
          <StrkImage
            imgId={`card-${product.hoverImgId}`}
            query={`close-up worn ${`[${product.tagId}] [${product.titleId}]`}`}
            ratio="3x4"
            width="700"
            alt={`${product.name} worn`}
            className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-luxe group-hover:opacity-100"
          />
        </div>
        {product.badge && (
          <span className="absolute left-3 top-3 bg-ink/85 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-gold-soft backdrop-blur-sm">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAdd}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-ink/90 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory backdrop-blur-sm transition-all duration-400 ease-luxe hover:bg-gold hover:text-ink group-hover:translate-y-0"
        >
          <Plus className="h-3.5 w-3.5" />
          Add to Bag
        </button>
      </div>
      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-[15px] font-medium uppercase tracking-product text-ink transition-colors duration-300 group-hover:text-gold-deep"
        >
          {product.name}
        </h3>
        <p id={product.tagId} className="mt-1 text-xs text-muted">
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size="h-3 w-3" />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <p className="mt-1.5 text-sm font-medium tracking-wide text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
