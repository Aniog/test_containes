import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Plus, Check } from "lucide-react"
import ProductImage from "@/components/ui/ProductImage"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"

export default function ProductCard({ product, eagerFirstImage = false }) {
  const { addToCart } = useCart()
  const [adding, setAdding] = useState(false)
  const [added, setAdded] = useState(false)
  const primary = product.images[0]
  const secondary = product.images[1] || product.images[0]

  const onAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAdding(true)
    setAdded(true)
    addToCart({ slug: product.slug, tone: product.tone, quantity: 1 })
    window.setTimeout(() => {
      setAdding(false)
      setAdded(false)
    }, 900)
  }

  return (
    <div className="group">
      <Link
        to={`/product/${product.slug}`}
        className="block"
        aria-label={`${product.name}, ${formatPrice(product.price)}`}
      >
        <div className="relative overflow-hidden bg-cream-deep aspect-product">
          {/* Primary image */}
          <div className="absolute inset-0">
            <ProductImage
              imgId={primary.imgId}
              ratio="1x1"
              width={900}
              query={primary.query}
              alt={product.name}
              className="h-full w-full object-cover transition-opacity duration-700 ease-editorial group-hover:opacity-0"
              priority={eagerFirstImage}
            />
          </div>
          {/* Secondary image on hover */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-editorial group-hover:opacity-100">
            <ProductImage
              imgId={secondary.imgId}
              ratio="1x1"
              width={900}
              query={secondary.query}
              alt={`${product.name} alternate view`}
              className="h-full w-full object-cover"
            />
          </div>

          {product.badge && (
            <span className="absolute top-4 left-4 inline-flex items-center bg-cream/95 text-espresso px-2.5 py-1 font-sans text-[10px] tracking-[0.24em] uppercase">
              {product.badge}
            </span>
          )}

          {/* Quick add — appears on hover (desktop) */}
          <div className="absolute bottom-0 inset-x-0 hidden md:flex justify-center pb-4 opacity-0 translate-y-2 transition-all duration-500 ease-editorial group-hover:opacity-100 group-hover:translate-y-0">
            <button
              type="button"
              onClick={onAdd}
              disabled={adding}
              className="inline-flex items-center gap-2 bg-espresso text-bone px-6 py-3 font-sans text-[11px] tracking-[0.24em] uppercase hover:bg-noir-soft transition-colors"
            >
              {added ? (
                <>
                  <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Added
                </>
              ) : (
                <>
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Add to Bag
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              id={product.titleId}
              className="product-name text-[11px] truncate"
            >
              {product.name}
            </h3>
            <p
              id={product.taglineId}
              className="mt-1 font-serif text-[15px] text-mink truncate"
            >
              {product.tagline}
            </p>
          </div>
          <p className="font-serif text-[17px] text-espresso flex-shrink-0">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>

      {/* Mobile quick add */}
      <button
        type="button"
        onClick={onAdd}
        disabled={adding}
        className={cn(
          "mt-3 w-full md:hidden inline-flex items-center justify-center gap-2 border border-espresso text-espresso px-4 py-2.5 font-sans text-[11px] tracking-[0.24em] uppercase",
          added && "bg-espresso text-bone",
        )}
      >
        {added ? (
          <>
            <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
            Added
          </>
        ) : (
          <>
            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
            Add to Bag
          </>
        )}
      </button>
    </div>
  )
}
