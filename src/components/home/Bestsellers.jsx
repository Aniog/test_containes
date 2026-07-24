import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/data/products"
import { useCart } from "@/context/CartContext"

function ProductCard({ product, titleId }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
          <img
            data-strk-img-id={`${product.id}-best-img-1`}
            data-strk-img={`[${titleId}] [bestsellers-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          <img
            data-strk-img-id={`${product.id}-best-img-2`}
            data-strk-img={`[${titleId}] [bestsellers-title] worn on model`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product, 1, "gold")
        }}
        className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 hover:bg-accent hover:text-white"
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag className="h-4 w-4" />
      </button>

      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-1.5">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <Link to={`/products/${product.slug}`}>
          <h3
            id={titleId}
            className="font-serif text-sm uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm font-medium text-primary">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  )
}

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller)

  return (
    <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
              Most Loved
            </p>
            <h2
              id="bestsellers-title"
              className="font-serif text-4xl md:text-5xl font-light text-primary"
            >
              Bestsellers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
            {bestsellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                titleId={`best-title-${product.id}`}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 text-sm uppercase tracking-[0.15em]"
            >
              <Link to="/shop">Shop All</Link>
            </Button>
          </div>
        </div>
      </section>
  )
}
