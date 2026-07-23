import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col">
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4]">
        <div className="product-img-wrap absolute inset-0">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={product.name}
            className="img-primary w-full h-full object-cover"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={`${product.name} worn`}
            className="img-hover w-full h-full object-cover"
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velvet text-champagne font-sans text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add — appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-velvet/90 hover:bg-velvet text-champagne font-sans text-xs tracking-widest uppercase py-3 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2 flex flex-col gap-1">
        {/* Hidden text for image context */}
        <span id={product.titleId} className="font-serif text-sm tracking-widest2 uppercase text-velvet leading-snug">
          {product.name}
        </span>
        <span id={product.descId} className="sr-only">{product.shortDesc}</span>

        <div className="flex items-center gap-1 mt-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-champagne"}
              strokeWidth={1}
            />
          ))}
          <span className="font-sans text-[10px] text-driftwood ml-1">({product.reviewCount})</span>
        </div>

        <p className="font-sans text-sm font-medium text-velvet mt-1">${product.price}</p>
      </div>
    </article>
  );
}
