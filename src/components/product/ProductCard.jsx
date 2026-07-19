import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, compact = false }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.tone?.[0] || "gold");
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-sand overflow-hidden mb-3">
        {/* Primary image placeholder */}
        <img
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            hovered ? "opacity-0" : "opacity-100"
          )}
          data-strk-img-id={`card-${product.id}-primary`}
          data-strk-img={product.featuredImg}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />

        {/* Secondary image on hover */}
        <img
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            hovered ? "opacity-100" : "opacity-0"
          )}
          data-strk-img-id={`card-${product.id}-secondary`}
          data-strk-img={product.images?.[1] || product.featuredImg}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            "absolute bottom-3 left-3 right-3 bg-ink/90 backdrop-blur-sm text-parchment text-xs font-medium uppercase tracking-wider py-2.5 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-ink",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div className={compact ? "px-1" : ""}>
        <h3 className="font-serif text-sm md:text-base tracking-product text-ink uppercase leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <p className="font-serif text-base md:text-lg text-ink font-medium">
            ${product.price}
          </p>
          {product.rating && (
            <div className="flex items-center gap-0.5">
              <Star size={12} className="fill-gold text-gold" />
              <span className="text-xs text-warm-gray">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
