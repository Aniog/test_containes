import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, PLACEHOLDER_IMG } from "@/data/products"
import { RatingStars } from "@/components/ui"

export default function ProductCard({ product, imageWidth = "600" }) {
  const { addItem } = useCart()
  const query = `[${product.taglineId}] [${product.titleId}]`

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-cream">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <div className="relative aspect-[3/4]">
            <img
              data-strk-img-id={product.cardImgIds[0]}
              data-strk-img={query}
              data-strk-img-ratio="3x4"
              data-strk-img-width={imageWidth}
              src={PLACEHOLDER_IMG}
              alt={product.name}
              loading="lazy"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-0"
            />
            <img
              data-strk-img-id={product.cardImgIds[1]}
              data-strk-img={`${query} lifestyle worn`}
              data-strk-img-ratio="3x4"
              data-strk-img-width={imageWidth}
              src={PLACEHOLDER_IMG}
              alt={`${product.name} worn`}
              loading="lazy"
              draggable={false}
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-100"
            />
          </div>
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-ivory/90 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-noir backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        <button
          onClick={() => addItem(product)}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-noir/90 py-3.5 text-[10px] font-medium uppercase tracking-[0.22em] text-ivory backdrop-blur-sm transition-all duration-500 ease-luxe hover:bg-gold hover:text-noir group-hover:translate-y-0"
        >
          <Plus className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>

      <div className="pt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1.5 font-serif text-[15px] font-medium uppercase tracking-[0.12em] text-noir transition-colors hover:text-gold-deep">
            {product.name}
          </h3>
        </Link>
        <RatingStars rating={product.rating} className="mt-2 justify-center" starClass="h-3 w-3" />
        <p className="mt-2 text-sm font-medium tracking-wide text-noir">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
