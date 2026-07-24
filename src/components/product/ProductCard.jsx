import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, onAdd }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    onAdd && onAdd(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card group block"
    >
      <div className="relative aspect-[4/5] bg-cream-warm overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 label-eyebrow text-[0.62rem] px-2.5 py-1 bg-cream/95 text-ink">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image primary absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <img
          src={product.imageAlt}
          alt=""
          aria-hidden="true"
          className="product-card-image alt absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-cream/95 text-ink px-4 py-3 label-product hover:bg-ink hover:text-cream flex items-center justify-center gap-2"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Quick add
        </button>
      </div>

      <div className="pt-4 pb-2 text-center">
        <p className="label-product text-ink">{product.name}</p>
        <p className="mt-1.5 text-sm text-muted">
          {product.accent} · ${product.price}
        </p>
      </div>
    </Link>
  );
}
