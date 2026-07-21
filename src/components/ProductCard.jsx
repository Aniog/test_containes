import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";
import ProductImage from "./ProductImage";

export default function ProductCard({ product, className }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        <Link
          to={`/product/${product.slug}`}
          className="absolute inset-0 z-0"
          aria-label={product.name}
        >
          <ProductImage
            product={product}
            index={0}
            ratio="3x4"
            width={600}
            imgId={`card-${product.id}-main`}
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {product.images > 1 && (
            <ProductImage
              product={product}
              index={1}
              ratio="3x4"
              width={600}
              imgId={`card-${product.id}-alt`}
              alt=""
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          )}
        </Link>
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-charcoal text-parchment text-[10px] uppercase tracking-widest px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 z-20 bg-bronze text-white text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>
      <div className="pt-4 text-center">
        <StarRating rating={product.rating} size={12} className="justify-center mb-2" />
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-sm uppercase tracking-widest-xl text-charcoal mb-1 hover:text-bronze transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-sm text-warm-gray">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
