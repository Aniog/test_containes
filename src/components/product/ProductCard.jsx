import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"


export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef(null)
  const primary = product.images[0]
  const secondary = product.images[1] || product.images[0]

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <article
      ref={containerRef}
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-sand">
        <img
          alt={product.name}
          data-strk-img-id={primary.imgId}
          data-strk-img={`[${primary.descId}] [${primary.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="aspect-[4/5] w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          alt={product.name}
          data-strk-img-id={secondary.imgId}
          data-strk-img={`[${secondary.descId}] [${secondary.titleId}] worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <span className="text-[10px] uppercase tracking-[0.25em] text-stone">
          {product.type}
        </span>
        <h3
          id={primary.titleId}
          className="mt-1.5 font-serif text-sm uppercase tracking-[0.18em] text-ink md:text-[15px]"
        >
          <Link to={`/product/${product.id}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={primary.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-serif text-lg text-ink">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => addItem(product, { variant: "Gold", quantity: 1 })}
            className="border border-ink/25 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-cream"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
