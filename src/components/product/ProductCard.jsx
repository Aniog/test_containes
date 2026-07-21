import React from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { StockImage } from "@/components/StockImage"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/product/StarRating"

export default function ProductCard({ product, context = "grid", eager = false }) {
  const { addItem } = useCart()

  return (
    <article className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-surface">
          <div className="absolute inset-0 transition-opacity duration-700 ease-luxe group-hover:opacity-0">
            <StockImage
              imgId={`product-${context}-${product.id}-a`}
              query={`${product.tagline} ${product.name} fine gold jewelry product photography on warm ivory silk background`}
              ratio="4x5"
              width={640}
              alt={product.name}
              eager={eager}
              className="transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
            />
          </div>
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-luxe group-hover:opacity-100">
            <StockImage
              imgId={`product-${context}-${product.id}-b`}
              query={`${product.tagline} ${product.name} gold jewelry worn on model ear neck close up warm light`}
              ratio="4x5"
              width={640}
              alt={`${product.name} worn`}
            />
          </div>

          {product.badge && (
            <span className="absolute left-3 top-3 bg-accent px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-accent-foreground">
              {product.badge}
            </span>
          )}
          {product.isNew && !product.badge && (
            <span className="absolute left-3 top-3 border border-foreground/20 bg-background/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-foreground">
              New
            </span>
          )}
        </div>
      </Link>

      <button
        type="button"
        onClick={() => addItem(product.id)}
        className="mt-3 hidden w-full items-center justify-center gap-2 border border-foreground/20 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground opacity-0 transition-all duration-500 ease-luxe hover:border-foreground hover:bg-foreground hover:text-background group-hover:opacity-100 md:flex"
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
        Quick Add
      </button>

      <div className="mt-3 text-center md:mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-[15px] font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:text-accent-deep md:text-base">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-muted-foreground">({product.reviews})</span>
        </div>
        <p className="mt-1.5 text-sm tracking-wide text-foreground/90">
          {formatPrice(product.price)}
          {product.compareAt && (
            <span className="ml-2 text-xs text-muted-foreground line-through">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </p>
        <button
          type="button"
          onClick={() => addItem(product.id)}
          className="mt-2.5 w-full border border-foreground/20 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:border-foreground md:hidden"
        >
          Add to Bag
        </button>
      </div>
    </article>
  )
}
