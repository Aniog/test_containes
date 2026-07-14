import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { StockImage } from "@/components/ui/StockImage"

export function ProductCard({ product, eager = false, compact = false }) {
  const [hover, setHover] = useState(false)
  const { addItem } = useCart()
  const primary = product.images?.[0]
  const secondary = product.images?.[1]

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product.id, { tone: product.tone, quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`relative w-full overflow-hidden bg-ivory-200 ${
          compact ? "aspect-[4/5]" : "aspect-[4/5]"
        }`}
      >
        {primary ? (
          <StockImage
            imgId={`${product.id}-img-1`}
            query={`prod-${product.slug}-title`}
            ratio={primary.ratio}
            width={primary.width}
            alt={product.name}
            eager={eager}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-elegant ${
              hover && secondary ? "opacity-0" : "opacity-100"
            }`}
          />
        ) : null}
        {secondary ? (
          <StockImage
            imgId={`${product.id}-img-2`}
            query={`prod-${product.slug}-title`}
            ratio={secondary.ratio}
            width={secondary.width}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-elegant ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null}

        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${product.name} to bag`}
          className={`absolute bottom-3 right-3 flex h-10 items-center gap-2 bg-ivory-50 px-3 text-ink-500 shadow-soft transition-all duration-500 ease-elegant hover:bg-ink-500 hover:text-ivory-50 md:bottom-4 md:right-4 ${
            hover ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <Plus size={14} strokeWidth={1.5} />
          <span className="hidden text-[11px] font-semibold uppercase tracking-wider2 md:inline">
            Add to Bag
          </span>
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="product-name">{product.name}</h3>
        <span className="font-sans text-[14px] font-medium tabular-nums text-ink-500">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  )
}
