import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import ProductImage from "./ProductImage";
import StarRating from "./StarRating";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

export default function ProductCard({ product, eager = false }) {
  const cardRef = useRef(null);
  const { add } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    add({
      id: product.id,
      color: product.colors[0],
      size: product.sizes[0],
      qty: 1,
    });
    setTimeout(() => setAdding(false), 900);
  };

  return (
    <article
      ref={cardRef}
      className="group relative"
    >
      <Link
        to={`/product/${product.id}`}
        className="block"
        aria-label={`${product.name}, ${formatPrice(product.price)}`}
      >
        <div className="relative overflow-hidden">
          <ProductImage
            imgId={product.imgId}
            query={product.imgQuery}
            alt={product.name}
            name={product.name}
            ratio="4x5"
            width={800}
            parentRef={cardRef}
            priority={eager}
          />
          {/* Hover-reveal second image (alternate angle) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-editorial pointer-events-none">
            <ProductImage
              imgId={product.imgIdAlt}
              query={product.imgQueryAlt}
              alt={`${product.name} alternate view`}
              name={product.name}
              ratio="4x5"
              width={800}
            />
          </div>

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory bg-espresso/85 backdrop-blur-sm">
              {product.badge}
            </span>
          )}

          {/* Quick add — slides up on hover */}
          <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-editorial">
            <button
              type="button"
              onClick={handleAdd}
              className={cn(
                "w-full py-3 text-[11px] uppercase tracking-[0.25em] font-medium",
                "bg-ivory/95 backdrop-blur-sm text-espresso border border-espresso/10",
                "transition-colors duration-300 ease-editorial hover:bg-espresso hover:text-ivory"
              )}
            >
              {adding ? "Added" : "Quick Add"}
            </button>
          </div>
        </div>

        <div className="pt-4 pb-2 px-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="product-name truncate">{product.name}</h3>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.15em] text-muted">
                {product.subcategory}
              </p>
            </div>
            <p className="product-price whitespace-nowrap pt-0.5">
              {formatPrice(product.price)}
            </p>
          </div>
          <div className="mt-2.5">
            <StarRating value={product.rating} count={product.reviews} size={12} />
          </div>
        </div>
      </Link>
    </article>
  );
}
