import { useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext.jsx";
import { formatPrice } from "@/lib/utils.js";
import useStrkImages from "@/hooks/useStrkImages.js";
import StarRating from "@/components/StarRating.jsx";

export default function ProductCard({ product, showQuickAdd = true }) {
  const { addItem } = useCart();
  const cardRef = useRef(null);
  useStrkImages(cardRef);

  return (
    <article ref={cardRef} className="group relative">
      <div className="relative overflow-hidden bg-cream-dark">
        <Link to={`/products/${product.id}`} className="block">
          <div className="aspect-[4/5] overflow-hidden relative">
            <img
              data-strk-img-id={product.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width={600}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
            />
            <img
              data-strk-img-id={product.hoverImgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width={600}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} alternate view`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
            />
          </div>
        </Link>

        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-cream-light/90 text-ink text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {showQuickAdd && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product, { tone: product.tone[0], quantity: 1 });
            }}
            className="absolute bottom-4 left-4 right-4 z-10 bg-cream-light text-ink py-3 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gold md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            <ShoppingBag size={14} /> Quick Add
          </button>
        )}
      </div>

      <div className="mt-4 text-center">
        <StarRating rating={product.rating} size={12} className="justify-center mb-2" />
        <Link to={`/products/${product.id}`}>
          <h3 className="font-serif text-base md:text-lg tracking-widest-xl uppercase hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm font-medium text-ink-muted">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
