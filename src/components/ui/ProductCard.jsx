import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <article
      className="group relative bg-cream"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="font-sans text-[9px] uppercase tracking-widest bg-gold text-espresso px-2 py-1">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-espresso/90 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} className="text-gold" />
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="font-sans text-[10px] uppercase tracking-widest text-ivory hover:text-gold transition-colors duration-200"
          >
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-3 pb-4 px-1">
        <span id={product.titleId} className="font-serif text-sm uppercase tracking-[0.12em] text-espresso block mb-1">
          {product.name}
        </span>
        <span id={product.descId} className="font-sans text-xs text-warm-gray block mb-2">
          {product.subtitle}
        </span>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-espresso font-medium">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-sans text-[10px] text-warm-gray">{product.rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
