import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { StarRating } from "./StarRating";
import { cn } from "@/lib/utils";

export function ProductCard({ product, image, showQuickAdd = true }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "gold", 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-sand mb-4">
        {image}
        {showQuickAdd && (
          <button
            type="button"
            onClick={handleAdd}
            className={cn(
              "absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-3 px-4",
              "bg-espresso text-cream text-xs uppercase tracking-widest transition-all duration-300",
              "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
              "hover:bg-gold focus-visible:translate-y-0 focus-visible:opacity-100"
            )}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </>
            )}
          </button>
        )}
      </div>

      <div className="space-y-1 text-center md:text-left">
        <h3 className="font-serif text-sm md:text-base uppercase tracking-widest-xl text-espresso">
          {product.name}
        </h3>
        <div className="flex items-center justify-center md:justify-start gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-stone">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-espresso">${product.price}</p>
      </div>
    </Link>
  );
}
