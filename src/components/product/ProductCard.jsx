import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import StockImage, { productImageQuery } from "@/components/StockImage";
import Stars from "@/components/Stars";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();

  return (
    <article className="group">
      {/* Hidden text nodes: feed the stock-image query system */}
      <span id={`prod-${product.id}-name`} className="sr-only">
        {product.name} — {product.category}
      </span>
      <span id={`prod-${product.id}-desc`} className="sr-only">
        {product.short}
      </span>

      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <StockImage
            imgId={product.imgIds.primary}
            query={productImageQuery(product, "primary")}
            ratio="3x4"
            width={700}
            alt={product.name}
            loading={eager ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
          />
          <StockImage
            imgId={product.imgIds.hover}
            query={productImageQuery(product, "hover")}
            ratio="3x4"
            width={700}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.22em] uppercase text-espresso">
            {product.badge}
          </span>
        )}

        <button
          onClick={() => addItem(product.id)}
          className="absolute inset-x-0 bottom-0 translate-y-full bg-espresso/90 py-3.5 text-[11px] tracking-[0.28em] uppercase text-ivory backdrop-blur-sm transition-all duration-400 ease-out hover:bg-gold group-hover:translate-y-0"
        >
          Add to Cart — {formatPrice(product.price)}
        </button>
      </div>

      <div className="pt-5 text-center">
        <Link
          to={`/product/${product.id}`}
          className="font-serif text-lg uppercase tracking-[0.14em] text-espresso transition-colors duration-300 hover:text-gold"
        >
          {product.name}
        </Link>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] tracking-wide text-taupe">
            ({product.reviews})
          </span>
        </div>
        <p className="mt-1.5 text-sm font-medium tracking-wide text-cocoa">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
