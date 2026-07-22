import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { ProductImage } from "./ProductImage";
import { StarRating } from "./StarRating";
import { Price } from "./Price";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <article
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-velmora-sand aspect-[4/5] mb-3">
          <ProductImage
            product={product}
            index={0}
            className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
            ratio="4x5"
            width={600}
          />

          {product.images[1] && (
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-lux ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <ProductImage
                product={product}
                index={1}
                className="w-full h-full object-cover"
                ratio="4x5"
                width={600}
              />
            </div>
          )}

          {product.originalPrice && (
            <span className="absolute top-3 left-3 bg-velmora-base text-white text-[10px] uppercase tracking-widest px-2 py-1">
              Sale
            </span>
          )}

          {showQuickAdd && (
            <button
              onClick={handleQuickAdd}
              className={`absolute left-0 right-0 bottom-0 bg-velmora-base text-white text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-transform duration-300 ease-lux ${
                isHovered ? "translate-y-0" : "translate-y-full"
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag size={14} />
              Quick Add
            </button>
          )}
        </div>
      </Link>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3
            id={product.titleId}
            className="font-serif text-xs md:text-sm uppercase tracking-widest-custom text-velmora-base"
          >
            <Link to={`/products/${product.slug}`} className="hover:text-velmora-gold transition-colors">
              {product.name}
            </Link>
          </h3>
          <div className="hidden sm:flex items-center gap-1">
            <StarRating rating={product.rating} size={12} />
            <span className="text-[10px] text-velmora-taupe">({product.reviewCount})</span>
          </div>
        </div>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <Price price={product.price} originalPrice={product.originalPrice} />
      </div>
    </article>
  );
}
