import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import ProductImage from "./ui/ProductImage";
import StarRating from "./ui/StarRating";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const titleId = `product-${product.id}-title`;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "Gold", 1);
  };

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#EDEAE4] aspect-[4/5]">
        <Link
          to={`/products/${product.id}`}
          className="block w-full h-full"
        >
          <ProductImage
            query={`[${titleId}] ${hovered ? product.images.secondary : product.images.primary}`.trim()}
            alt={product.name}
            ratio="4x5"
            width={600}
            imgId={`product-card-${product.id}-${index}`}
            className="transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-4 left-4 right-4 z-10 bg-background/95 text-foreground py-3 text-xs tracking-widest uppercase font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          aria-label={`Add ${product.name} to cart`}
        >
          <span className="inline-flex items-center gap-2 justify-center">
            <ShoppingBag size={14} />
            Quick Add
          </span>
        </button>
      </div>

      <div className="pt-4 text-center">
        <StarRating rating={product.rating} size={12} />
        <h3
          id={titleId}
          className="mt-2 font-serif text-base tracking-widest uppercase text-foreground"
        >
          <Link to={`/products/${product.id}`} className="hover:text-accent transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-muted">${product.price}</p>
      </div>
    </article>
  );
}
