import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].name);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            hovered && product.hoverImage ? "opacity-0" : "opacity-100"
          )}
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt=""
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-espresso text-[10px] uppercase tracking-widest px-2.5 py-1">
            {product.badge}
          </span>
        )}
        {showQuickAdd && (
          <button
            type="button"
            onClick={handleQuickAdd}
            className={cn(
              "absolute bottom-0 left-0 right-0 bg-espresso text-cream text-xs uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 transition-transform duration-300",
              hovered ? "translate-y-0" : "translate-y-full"
            )}
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        )}
      </div>
      <h3 className="product-name mb-1">{product.name}</h3>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{formatPrice(product.price)}</span>
        <span className="text-xs text-warmgray">{product.rating} ★</span>
      </div>
    </Link>
  );
}
