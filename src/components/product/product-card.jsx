import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "@/context/cart-context"
import { StrkImg } from "@/components/strk-img"
import { cn } from "@/lib/utils"

export const ProductCard = ({ product, className }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const titleId = `product-title-${product.id}`

  return (
    <article
      className={cn("group relative flex flex-col", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-surface">
        <StrkImg
          imgId={product.images[0].id}
          query={`[${titleId}]`}
          ratio={product.images[0].ratio}
          width={product.images[0].width}
          alt={product.name}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        <StrkImg
          imgId={product.images[1].id}
          query={`[${titleId}]`}
          ratio={product.images[1].ratio}
          width={product.images[1].width}
          alt={`${product.name} alternate view`}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={(e) => {
            e.preventDefault()
            addToCart(product, { variant: "gold", quantity: 1 })
          }}
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-gold px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-white transition-transform duration-300",
            isHovered ? "translate-y-0" : "translate-y-full"
          )}
        >
          Quick Add
        </button>
      </Link>

      <div className="mt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-base uppercase tracking-[0.18em] text-ink md:text-lg"
        >
          <Link to={`/products/${product.id}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm font-medium text-muted">${product.price}</p>
      </div>
    </article>
  )
}
