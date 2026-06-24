import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PLACEHOLDER_SRC, formatPrice } from "@/lib/utils";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const primary = product.images[0];
  const secondary = product.images[1] || product.images[0];

  return (
    <article className="group relative">
      <Link to={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#F2EDE5]">
          <img
            alt={product.name}
            width="600"
            height="750"
            loading={eager ? "eager" : "lazy"}
            data-strk-img-id={`pcard-primary-${primary.id}`}
            data-strk-img={primary.q}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER_SRC}
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            alt=""
            aria-hidden="true"
            width="600"
            height="750"
            loading="lazy"
            data-strk-img-id={`pcard-secondary-${secondary.id}`}
            data-strk-img={secondary.q}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER_SRC}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Quick add */}
          <div className="absolute inset-x-0 bottom-0 p-3 lg:p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, product.variants[0], 1);
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-[#13100E] text-[11px] uppercase tracking-[0.22em] font-medium py-3 hover:bg-[#13100E] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
              aria-label={`Quick add ${product.name} to bag`}
            >
              <Plus size={13} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      <Link to={`/shop/${product.slug}`} className="block mt-4 lg:mt-5">
        <h3 className="product-name text-[12px] text-[#13100E] leading-snug">
          {product.name}
        </h3>
        <p className="text-xs text-[#8A7A66] mt-1.5 font-sans">{product.tagline}</p>
        <p className="mt-2 text-sm text-[#2A211B] tabular-nums font-medium">
          {formatPrice(product.price)}
        </p>
      </Link>
    </article>
  );
}
