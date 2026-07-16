import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { placeholderSvg } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/components/cart/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="group text-velmora-espresso">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-velmora-parchment shadow-sm transition duration-500 ease-velmora group-hover:-translate-y-1 group-hover:shadow-soft">
        <Link to={`/products/${product.id}`} aria-label={`View ${product.name}`}>
          <img
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition duration-700 ease-velmora group-hover:opacity-0 group-hover:scale-105"
            data-strk-img-id={product.imgId}
            data-strk-img={`${product.queryRefs} [bestsellers-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholderSvg}
          />
          <img
            alt={`${product.name} worn detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 ease-velmora group-hover:opacity-100 group-hover:scale-105"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={product.queryRefs}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholderSvg}
          />
        </Link>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-4 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-4 py-3 text-xs font-bold uppercase tracking-nav text-velmora-ivory opacity-0 shadow-jewel transition duration-500 ease-velmora hover:bg-velmora-bronze group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <Link to={`/products/${product.id}`}>
            <h3 id={product.titleId} className="font-serifDisplay text-xl uppercase tracking-product text-velmora-espresso transition hover:text-velmora-bronze">
              {product.name}
            </h3>
          </Link>
          <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-cocoa">
            {product.description}
          </p>
        </div>
        <p className="pt-1 text-sm font-bold text-velmora-espresso">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
