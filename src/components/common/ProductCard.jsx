import React, { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { Link } from "react-router-dom"
import { ShoppingBag, Star } from "lucide-react"
import Button from "@/components/ui/Button"
import { formatPrice } from "@/data/products"
import { getStrkImageUrl } from "@/lib/strkImage"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductCard({ product, onAddToCart }) {
  const cardRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [product.id])

  return (
    <article ref={cardRef} className="group relative overflow-hidden rounded-[1.75rem] border border-velmora-espresso/10 bg-velmora-porcelain text-velmora-espresso shadow-soft transition duration-500 hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-pearl">
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.imageId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageUrl(product.imageId)}
          />
          <img
            alt={`${product.name} worn close-up`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.hoverImageId}
            data-strk-img={`[${product.titleId}] [${product.descId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageUrl(product.hoverImageId)}
          />
          <div className="absolute left-4 top-4 rounded-full bg-velmora-ivory/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-velmora-espresso">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="p-5 md:p-6">
        <div className="mb-3 flex items-center justify-between gap-4 text-xs text-velmora-taupe">
          <span className="flex items-center gap-1 text-velmora-espresso">
            <Star className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne" />
            {product.rating}
          </span>
          <span>{product.material}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="font-serif text-xl font-semibold uppercase tracking-[0.18em] text-velmora-espresso transition group-hover:text-velmora-clay">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-velmora-taupe">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="font-serif text-2xl font-semibold text-velmora-espresso">
            {formatPrice(product.price)}
          </p>
          <Button
            type="button"
            variant="outline"
            className="translate-y-1 px-4 py-2 text-[0.65rem] opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingBag className="mr-2 h-3.5 w-3.5" />
            Add
          </Button>
        </div>
      </div>
    </article>
  )
}
