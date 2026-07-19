import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import { useCart } from "@/context/CartContext";

function Stars({ rating = 5 }) {
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 12 12"
          className={`h-2.5 w-2.5 ${i < Math.round(rating) ? "text-gold-400" : "text-hairline"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6 .8l1.6 3.4 3.7.4-2.8 2.5.8 3.6L6 8.9 2.7 10.7l.8-3.6L.7 4.6l3.7-.4L6 .8z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const onQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-200">
        <div className="absolute inset-0 transition-opacity duration-700 ease-smooth opacity-100 group-hover:opacity-0">
          <StockImage
            imgId={`${product.id}-1`}
            query={`[${product.descId}] [${product.titleId}] [home-bestsellers-title]`}
            refTitle={product.titleId}
            refDesc={product.descId}
            refSection="home-bestsellers-title"
            ratio="3x4"
            width="700"
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 transition-opacity duration-700 ease-smooth opacity-0 group-hover:opacity-100">
          <StockImage
            imgId={`${product.id}-2`}
            query={`[${product.descId}] [${product.titleId}] [home-bestsellers-title] model wearing`}
            refTitle={product.titleId}
            refDesc={product.descId}
            refSection="home-bestsellers-title"
            ratio="3x4"
            width="700"
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream-50/95 text-espresso-300 font-sans text-[10px] uppercase tracking-widest2 px-2.5 py-1">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={onQuickAdd}
          aria-label={`Quick add ${product.name} to bag`}
          className="absolute bottom-3 left-3 right-3 inline-flex items-center justify-center gap-2 bg-cream-50/95 text-espresso-300 font-sans text-[11px] uppercase tracking-widest2 py-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-smooth hover:bg-espresso-300 hover:text-cream-50"
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="product-name"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="sr-only"
          aria-hidden="true"
        >
          {product.desc}
        </p>
        <p className="mt-1.5 font-sans text-[13px] text-muted">
          ${product.price}
        </p>
        <div className="mt-2 flex items-center justify-center gap-1.5">
          <Stars rating={product.rating} />
          <span className="text-[10px] uppercase tracking-widest2 text-muted-soft">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
}
