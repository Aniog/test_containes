import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Plus, Heart } from "lucide-react"
import JewelryArt from "@/components/ui/JewelryArt"
import StarRating from "@/components/ui/StarRating"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

const ProductCard = ({ product, eager = false }) => {
  const [hover, setHover] = useState(false)
  const { addItem } = useCart()

  return (
    <article
      className="group flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        to={`/product/${product.slug}`}
        className="relative block overflow-hidden bg-ink"
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[4/5]">
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              hover ? "opacity-0" : "opacity-100"
            }`}
          >
            <JewelryArt
              art={product.art}
              palette={product.palette}
              ratio="4/5"
              className="h-full w-full"
            />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          >
            <JewelryArt
              art={product.art}
              palette={product.palette}
              variant={1}
              ratio="4/5"
              className="h-full w-full"
            />
          </div>

          {/* Top-right wishlist (decorative) */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/85 text-ink/80 backdrop-blur-sm transition-all duration-300 hover:bg-ivory hover:text-gold-deep"
            aria-label="Add to wishlist"
          >
            <Heart size={15} strokeWidth={1.5} />
          </button>

          {/* Quick add — appears on hover */}
          <div
            className={`absolute inset-x-3 bottom-3 transition-all duration-500 ${
              hover ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
            }`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product.id, 1)
              }}
              className="flex w-full items-center justify-center gap-2 bg-ivory/95 text-ink py-3 px-4 font-sans uppercase tracking-[0.18em] text-[11px] backdrop-blur-sm transition-colors duration-300 hover:bg-ivory"
            >
              <Plus size={13} strokeWidth={1.5} />
              Quick add
            </button>
          </div>
        </div>
      </Link>

      <div className="pt-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="product-name truncate">
              <Link to={`/product/${product.slug}`} className="hover:text-gold-deep transition-colors duration-300">
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-[12px] font-sans text-muted">{product.material}</p>
          </div>
          <span className="product-name shrink-0">{formatPrice(product.price)}</span>
        </div>
        <StarRating value={product.rating} showCount count={product.reviews} />
      </div>
    </article>
  )
}

export default ProductCard
