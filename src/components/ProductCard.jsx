import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import StrkImage from "@/components/StrkImage";
import StarRating from "@/components/StarRating";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, className }) {
  const { addItem } = useCart();

  const titleId = `card-${product.id}-title`;
  const taglineId = `card-${product.id}-tagline`;

  const handleAdd = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addItem(product, "Gold", 1);
    toast.success(`${product.name} added to your cart`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("group block", className)}
      aria-label={`View ${product.name}`}
    >
      <div className="relative overflow-hidden rounded-sm border border-noir-line bg-noir-soft">
        <div className="aspect-[4/5] w-full">
          <StrkImage
            imgId={product.imgIds.main}
            query={`[${taglineId}] [${titleId}] warm gold jewelry product photography on dark neutral background, elegant editorial`}
            ratio="4x5"
            width={700}
            alt={product.name}
            imgClassName="transition-opacity duration-700 group-hover:opacity-0"
          />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <StrkImage
              imgId={product.imgIds.hover}
              query={`close-up of a model wearing [${taglineId}] [${titleId}] warm gold jewelry editorial photography`}
              ratio="4x5"
              width={700}
              alt={`${product.name} worn`}
              imgClassName="scale-105"
            />
          </div>
        </div>

        {product.bestseller && (
          <span className="absolute left-3 top-3 bg-cream/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-luxe text-noir">
            Bestseller
          </span>
        )}

        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-gold text-noir opacity-0 shadow-lg transition-all duration-300 hover:bg-gold-deep group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3
            id={titleId}
            className="font-serif text-base font-medium uppercase tracking-[0.14em] text-cream"
          >
            {product.name}
          </h3>
          <p id={taglineId} className="mt-1 text-xs text-sand">
            {product.tagline}
          </p>
          <StarRating rating={product.rating} className="mt-2" size="w-3 h-3" />
        </div>
        <p className="pt-0.5 text-sm font-semibold tracking-wide text-gold">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
