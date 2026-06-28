import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] bg-[#EFE7DA] overflow-hidden">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[card-desc-${product.id}] [card-name-${product.id}] ${product.query}`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:opacity-0 group-hover:scale-105"
        />
        {/* Secondary (hover) image */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[card-desc-${product.id}] [card-name-${product.id}] on model warm light editorial`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-[1200ms] ease-out group-hover:opacity-100 scale-105 group-hover:scale-100"
        />
        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-[#1A1410]/95 backdrop-blur-sm text-[#F7F2EA] uppercase tracking-[0.22em] text-[10px] py-3 hover:bg-[#B8924A] transition-colors"
          >
            Quick Add — ${product.price}
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-3">
        <p
          id={`card-name-${product.id}`}
          className="font-serif uppercase tracking-[0.18em] text-sm md:text-[15px] text-[#1A1410]"
        >
          {product.name}
        </p>
        <p className="text-sm tracking-wide text-[#1A1410]">${product.price}</p>
      </div>
      <p
        id={`card-desc-${product.id}`}
        className="mt-1 text-xs text-[#8B7D6B] leading-snug"
      >
        {product.categoryLabel} · {product.material.split("·")[0].trim()}
      </p>
    </Link>
  );
}
