import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i <= Math.round(rating) ? "fill-gold text-gold" : "text-stone-light"}`}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative flex flex-col">
      <Link
        to={`/product/${product.slug}`}
        className="block relative overflow-hidden bg-ivory-dark aspect-[3/4]"
      >
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full bg-espresso/90 text-ivory font-inter text-xs uppercase tracking-[0.15em] py-3.5 flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        {product.tags.includes("bestseller") && (
          <div className="absolute top-3 left-3 bg-gold text-espresso font-inter text-[10px] uppercase tracking-[0.1em] px-2.5 py-1">
            Bestseller
          </div>
        )}
      </Link>

      <div className="pt-4 pb-2 flex flex-col gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/product/${product.slug}`}>
            <h3
              id={product.titleId}
              className="font-cormorant text-base uppercase tracking-[0.12em] text-espresso hover:text-gold transition-colors leading-tight"
            >
              {product.name}
            </h3>
          </Link>
          <span className="font-inter text-sm font-medium text-espresso whitespace-nowrap">
            ${product.price}
          </span>
        </div>
        <p id={product.descId} className="font-inter text-xs text-stone leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
        <StarRating rating={product.rating} />
      </div>
    </div>
  );
}
