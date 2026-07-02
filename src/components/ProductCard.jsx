import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className={cn("group flex flex-col", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="relative aspect-[3/4] overflow-hidden bg-parchment"
      >
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <img
          src={product.hoverImage}
          alt=""
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex translate-y-full justify-center pb-4 transition-transform duration-500 group-hover:translate-y-0",
            "sm:bottom-0"
          )}
        >
          <Button
            size="sm"
            className="mx-4 w-full max-w-[200px] shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, { quantity: 1, tone: product.tone?.[0] });
            }}
          >
            <ShoppingBag className="mr-2 h-4 w-4" /> Quick Add
          </Button>
        </div>
        {product.isBestseller && (
          <span className="absolute left-3 top-3 bg-cream/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-espresso backdrop-blur-sm">
            Bestseller
          </span>
        )}
      </Link>

      <div className="mt-4 flex flex-col items-start gap-1">
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-gold text-gold" />
          <span className="text-xs text-mocha">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <Link
          to={`/product/${product.id}`}
          className="font-serif text-sm font-medium uppercase tracking-[0.12em] transition-colors hover:text-gold"
        >
          {product.name}
        </Link>
        <span className="text-sm font-medium text-mocha">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
