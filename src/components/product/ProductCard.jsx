import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductImages from "./ProductImages";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-parchment overflow-hidden mb-4">
        <ProductImages productId={product.id} hovered={hovered} name={product.name} />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 font-sans text-[10px] tracking-widest uppercase bg-espresso text-cream px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-0 left-0 right-0 bg-espresso text-cream font-sans text-[11px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <ShoppingBag size={13} strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div>
        <p
          id={product.titleId}
          className="font-serif text-sm tracking-widest uppercase text-espresso mb-1 group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="font-sans text-xs text-stone mb-2 line-clamp-1"
        >
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm font-medium text-espresso">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-border fill-border"}
                />
              ))}
            </div>
            <span className="font-sans text-[10px] text-stone">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
