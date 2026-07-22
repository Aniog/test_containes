import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Plus, Star } from "lucide-react"
import { toast } from "sonner"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { SVG_PLACEHOLDER } from "@/components/StrkImage"
import { cn } from "@/lib/utils"

export function ProductCard({ product, compact = false }) {
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const titleId = `card-${product.id}-title`
  const descId = `card-${product.id}-desc`
  const query = `[${descId}] [${titleId}] gold jewelry product still life, warm editorial light`

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const handleAdd = (e) => {
    e.preventDefault()
    addItem(product.id, "Gold", 1)
    toast.success(`${product.name} added to your bag`)
  }

  return (
    <div ref={containerRef} className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cream">
          <img
            data-strk-img-id={`card-${product.id}-main-x7k2`}
            data-strk-img={query}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src={SVG_PLACEHOLDER}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
          />
          <img
            data-strk-img-id={`card-${product.id}-alt-m4p9`}
            data-strk-img={`[${titleId}] ${product.name} worn by a model, close-up, warm light`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src={SVG_PLACEHOLDER}
            alt={`${product.name} worn`}
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-out group-hover:opacity-100"
          />

          {product.badge && (
            <span className="absolute left-3 top-3 rounded-sm bg-ivory/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
              {product.badge}
            </span>
          )}

          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to bag`}
            className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-ivory text-ink shadow-sm transition-all duration-300 hover:bg-bronze hover:text-ivory md:hidden"
          >
            <Plus className="size-4" />
          </button>

          <button
            type="button"
            onClick={handleAdd}
            className="absolute inset-x-0 bottom-0 hidden translate-y-full bg-ink/85 py-3.5 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory backdrop-blur-sm transition-all duration-400 ease-out hover:bg-bronze group-hover:translate-y-0 md:block"
          >
            Add to Bag
          </button>
        </div>

        <div className={cn("pt-4", compact && "pt-3")}>
          <p id={descId} className="sr-only">
            {product.short}
          </p>
          <h3
            id={titleId}
            className={cn(
              "font-serif font-medium uppercase leading-snug tracking-[0.14em] text-ink transition-colors group-hover:text-bronze",
              compact ? "text-sm" : "text-base md:text-lg"
            )}
          >
            {product.name}
          </h3>
          <div className="mt-1.5 flex items-center justify-between">
            <p className="text-sm font-medium text-ink">${product.price}</p>
            <span className="flex items-center gap-1 text-[11px] text-ink-soft">
              <Star className="size-3 fill-bronze text-bronze" />
              {product.rating}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
