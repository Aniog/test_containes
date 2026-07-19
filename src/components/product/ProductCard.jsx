import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import StrkImage from "@/components/ui/StrkImage"
import { useCart } from "@/context/CartContext"
import { cn, formatPrice } from "@/lib/utils"

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart()
  const { id, name, eyebrow, price, imgId, hoverImgId, titleId, descId } =
    product

  const query = `[${descId}] [${titleId}]`
  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <Link
      to={`/product/${id}`}
      className="group block"
      aria-label={`View ${name}`}
    >
      <div className="relative overflow-hidden bg-paper-warm">
        <StrkImage
          imgId={imgId}
          query={query}
          ratio="3x4"
          width={700}
          alt={name}
          className="w-full"
          style={{ aspectRatio: "3 / 4" }}
          imgClassName="duration-700 group-hover:scale-[1.03]"
        />
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500 ease-editorial",
            "opacity-0 group-hover:opacity-100",
          )}
          aria-hidden="true"
        >
          <StrkImage
            imgId={hoverImgId}
            query={query}
            ratio="3x4"
            width={700}
            alt=""
            className="h-full w-full"
            style={{ aspectRatio: "3 / 4" }}
            imgClassName="duration-700 group-hover:scale-[1.03]"
          />
        </div>

        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            "absolute inset-x-4 bottom-4 inline-flex items-center justify-center gap-2",
            "px-5 py-3 bg-paper text-ink uppercase tracking-eyebrow text-[10px] font-medium",
            "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
            "transition-all duration-300 ease-editorial",
            "hover:bg-ink hover:text-paper",
          )}
          aria-label={`Add ${name} to cart`}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      <div className="pt-5 pb-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="eyebrow mb-1.5 truncate">{eyebrow}</p>
          <h3
            id={titleId}
            className="product-name text-sm md:text-[15px] truncate"
          >
            {name}
          </h3>
          <p
            id={descId}
            className="mt-1.5 text-xs text-taupe leading-relaxed truncate"
          >
            {product.shortDescription}
          </p>
        </div>
        <p className="font-serif text-base md:text-lg text-ink whitespace-nowrap mt-1">
          {formatPrice(price)}
        </p>
      </div>
    </Link>
  )
}
