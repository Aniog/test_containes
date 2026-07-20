import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import Price from "./Price";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const ProductCardImage = ({ productId, alt, titleId, descId }) => {
  const common = {
    alt,
    "data-strk-img-ratio": "3x4",
    "data-strk-img-width": "600",
    "data-strk-img": `[${descId}] [${titleId}] velmora fine jewelry`,
    src: PLACEHOLDER,
    className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
  };

  switch (productId) {
    case "vivid-aura-jewels":
      return <img data-strk-img-id="product-card-vivid-aura-jewels" {...common} />;
    case "majestic-flora-nectar":
      return <img data-strk-img-id="product-card-majestic-flora-nectar" {...common} />;
    case "golden-sphere-huggies":
      return <img data-strk-img-id="product-card-golden-sphere-huggies" {...common} />;
    case "amber-lace-earrings":
      return <img data-strk-img-id="product-card-amber-lace-earrings" {...common} />;
    case "royal-heirloom-set":
      return <img data-strk-img-id="product-card-royal-heirloom-set" {...common} />;
    default:
      return <img data-strk-img-id={`product-card-${productId}`} {...common} />;
  }
};

const ProductCard = ({ product, className = "" }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const titleId = `product-title-${product.id}`;
  const descId = `product-desc-${product.id}`;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "gold", 1);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn("group block", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <ProductCardImage productId={product.id} alt={product.name} titleId={titleId} descId={descId} />
        <button
          type="button"
          onClick={handleQuickAdd}
          className={
            "absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-white/95 py-3 text-xs font-medium uppercase tracking-widest text-stone-900 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-amber-700 hover:text-white " +
            (hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")
          }
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      <div className="pt-4 text-center">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size={12} />
        <h3
          id={titleId}
          className="mt-2 font-serif text-sm font-medium uppercase tracking-[0.22em] text-stone-900"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.category} {product.material.join(" ")} demi-fine jewelry
        </p>
        <Price price={product.price} className="mt-1 inline-block" />
      </div>
    </Link>
  );
};

export default ProductCard;
