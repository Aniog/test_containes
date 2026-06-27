import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();
  const data = product.data || product;

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${data.slug}`} className="block relative overflow-hidden bg-cream-dark rounded-sm aspect-[3/4]">
        <img
          src={data.image_url}
          alt={data.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
          loading="lazy"
        />
        {data.hover_image_url && (
          <img
            src={data.hover_image_url}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
            loading="lazy"
          />
        )}
        {data.bestseller && (
          <span className="absolute top-3 left-3 bg-cream/90 text-charcoal text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
            Bestseller
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1);
          }}
          className={`absolute bottom-3 left-3 right-3 bg-cream/95 text-charcoal text-xs font-medium uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </Link>
      <div className="mt-3 space-y-1">
        <div className="flex items-center gap-1.5">
          <StarRating rating={data.rating || 0} size={12} />
          <span className="text-[11px] text-warm-gray">({data.review_count || 0})</span>
        </div>
        <Link to={`/product/${data.slug}`}>
          <h3 className="serif text-sm font-medium uppercase tracking-[0.15em] group-hover:text-accent transition-colors">
            {data.name}
          </h3>
        </Link>
        <p className="text-sm font-medium">${data.price}</p>
      </div>
    </div>
  );
}
