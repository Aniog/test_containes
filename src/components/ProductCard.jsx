import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { ProductImage } from "./ProductImage";
import { Button } from "./ui/Button";
import { StarRating } from "./ui/StarRating";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const primaryTone = product.tone[0];

  return (
    <article
      className={cn("group flex flex-col", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-100">
        <Link
          to={`/products/${product.id}`}
          aria-label={product.name}
          className="absolute inset-0 z-20"
        />
        <ProductImage
          product={product}
          index={0}
          ratio="3x4"
          width={600}
          className="relative z-10"
        />
        {product.images > 1 && (
          <ProductImage
            product={product}
            index={1}
            ratio="3x4"
            width={600}
            hover
            className="absolute inset-0 z-10"
          />
        )}

        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 z-30 translate-y-full px-4 pb-4 transition-transform duration-300 group-hover:translate-y-0",
            isHovered && "translate-y-0"
          )}
        >
          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={() => addItem(product, { tone: primaryTone, quantity: 1 })}
          >
            <ShoppingBag size={16} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <Link to={`/products/${product.id}`}>
          <h3
            id={`${product.id}-name`}
            className="font-serif text-xs font-medium uppercase tracking-widest text-base-800 transition-colors hover:text-gold-dark"
          >
            {product.name}
          </h3>
        </Link>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-muted">({product.reviewCount})</span>
        </div>
        <p className="mt-2 text-sm font-medium text-base-800">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
