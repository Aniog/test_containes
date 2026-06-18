import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const primary = product.images[0];
  const secondary = product.images[1] || product.images[0];

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-bone aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={`card-primary-${primary.id}`}
          data-strk-img={`[${product.id}-card-tagline] [${product.id}-card-name] gold jewelry editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width={priority ? 900 : 600}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {/* Secondary (hover) image */}
        <img
          data-strk-img-id={`card-secondary-${secondary.id}`}
          data-strk-img={`[${product.id}-card-tagline] [${product.id}-card-name] gold jewelry on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width={priority ? 900 : 600}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
            hovered ? "opacity-100 scale-[1.03]" : "opacity-0 scale-100"
          }`}
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {/* Quick add */}
        <button
          type="button"
          onClick={handleAdd}
          className={`absolute left-1/2 -translate-x-1/2 bottom-4 bg-ivory text-ink text-[10px] uppercase tracking-editorial px-5 py-2.5 inline-flex items-center gap-2 transition-all duration-300 ${
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          } hover:bg-ink hover:text-ivory`}
          aria-label={`Quick add ${product.name}`}
        >
          <Plus size={12} strokeWidth={1.6} />
          Add to Cart
        </button>

        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-ivory/90 text-ink text-[10px] tracking-editorial uppercase px-2.5 py-1">
            Bestseller
          </span>
        )}
      </div>

      <div className="pt-4 pb-2 text-center">
        <h3
          id={`${product.id}-card-name`}
          className="font-serif text-[13px] uppercase tracking-editorial text-ink"
        >
          {product.name}
        </h3>
        <p
          id={`${product.id}-card-tagline`}
          className="sr-only"
        >
          {product.tagline}
        </p>
        <p className="mt-1 text-sm text-espresso">${product.price}</p>
      </div>
    </Link>
  );
}
