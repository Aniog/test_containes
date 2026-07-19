import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

export default function ProductCard({ product, sectionTitleId }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const defaultVariant = product.variants[0];

  const query = `[${product.descId}] [${product.titleId}]${
    sectionTitleId ? ` [${sectionTitleId}]` : ""
  }`;

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/products/${product.slug}`}
        className="relative aspect-[3/4] overflow-hidden bg-velmora-champagne"
      >
        <img
          data-strk-img-id={product.imageIds.primary}
          data-strk-img={query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          data-strk-img-id={product.imageIds.hover}
          data-strk-img={`[${product.titleId}] worn jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product, defaultVariant, 1);
          }}
          className="absolute bottom-4 left-4 right-4 translate-y-full bg-velmora-espresso py-3 text-center text-xs uppercase tracking-widest text-white opacity-0 transition-all duration-300 hover:bg-velmora-gold group-hover:translate-y-0 group-hover:opacity-100"
        >
          <span className="inline-flex items-center gap-2">
            <ShoppingBag size={14} /> Add to Cart
          </span>
        </button>
      </Link>

      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="text-xs font-medium uppercase tracking-widest text-velmora-espresso"
        >
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p
          id={product.descId}
          className="mx-auto mt-1 hidden max-w-[220px] text-xs text-velmora-taupe md:block"
        >
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-velmora-taupe">
            ({product.reviewCount})
          </span>
        </div>
        <p className="mt-2 text-sm font-medium text-velmora-espresso">
          ${product.price}
        </p>
      </div>
    </article>
  );
}
